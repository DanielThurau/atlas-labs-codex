"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./RefreshButton.module.css";

interface RefreshButtonProps {
  onRefresh: () => Promise<void>;
  onForceCheck?: () => Promise<void>;
  disabled?: boolean;
}

type IntervalOption = {
  label: string;
  value: number | null; // null means manual only
};

const INTERVAL_OPTIONS: IntervalOption[] = [
  { label: "Manual", value: null },
  { label: "10s", value: 10000 },
  { label: "30s", value: 30000 },
  { label: "1m", value: 60000 },
  { label: "5m", value: 300000 },
];

export function RefreshButton({ onRefresh, onForceCheck, disabled }: RefreshButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [selectedInterval, setSelectedInterval] = useState<IntervalOption>(INTERVAL_OPTIONS[0]);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const onRefreshRef = useRef(onRefresh);
  const onForceCheckRef = useRef(onForceCheck);
  
  // Keep refs updated
  useEffect(() => {
    onRefreshRef.current = onRefresh;
    onForceCheckRef.current = onForceCheck;
  }, [onRefresh, onForceCheck]);

  // Handle manual refresh
  const handleRefresh = useCallback(async () => {
    if (isRefreshing || disabled) return;
    
    setIsRefreshing(true);
    setProgress(0);
    
    try {
      await onRefreshRef.current();
    } finally {
      setIsRefreshing(false);
      // Reset progress timer if auto-refresh is active
      if (selectedInterval.value) {
        setProgress(0);
        setTimeLeft(selectedInterval.value);
      }
    }
  }, [isRefreshing, disabled, selectedInterval.value]);

  // Handle interval selection
  const handleSelectInterval = (option: IntervalOption) => {
    setSelectedInterval(option);
    setIsOpen(false);
    setProgress(0);
    setTimeLeft(option.value);
  };

  // Handle force check (runs actual health checks)
  const handleForceCheck = useCallback(async () => {
    if (isChecking || disabled || !onForceCheckRef.current) return;
    
    setIsChecking(true);
    setIsOpen(false);
    
    try {
      await onForceCheckRef.current();
    } finally {
      setIsChecking(false);
    }
  }, [isChecking, disabled]);

  // Auto-refresh logic
  useEffect(() => {
    // Clear existing intervals
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    if (!selectedInterval.value) {
      setProgress(0);
      setTimeLeft(null);
      return;
    }

    const intervalMs = selectedInterval.value;
    setProgress(0);
    setTimeLeft(intervalMs);

    // Progress update every 100ms
    const progressStep = 100 / (intervalMs / 100);
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + progressStep;
        return next >= 100 ? 0 : next; // Reset to 0 when reaching 100
      });
      setTimeLeft((prev) => {
        if (prev === null) return intervalMs;
        const next = prev - 100;
        return next <= 0 ? intervalMs : next; // Reset to full when reaching 0
      });
    }, 100);

    // Trigger refresh at interval
    intervalRef.current = setInterval(async () => {
      setIsRefreshing(true);
      try {
        await onRefreshRef.current();
      } finally {
        setIsRefreshing(false);
      }
    }, intervalMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [selectedInterval.value]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isAutoRefresh = selectedInterval.value !== null;

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.buttonGroup} data-has-progress={isAutoRefresh}>
        <div className={styles.buttons}>
          {/* Main refresh button */}
          <button
            className={styles.refreshButton}
            onClick={handleRefresh}
            disabled={isRefreshing || disabled}
            title="Refresh now"
          >
            <span className={`${styles.icon} ${isRefreshing ? styles.spinning : ""}`}>
              ↻
            </span>
            {isRefreshing ? "Refreshing..." : "Refresh"}
          </button>

          {/* Dropdown trigger */}
          <button
            className={styles.dropdownTrigger}
            onClick={() => setIsOpen(!isOpen)}
            disabled={disabled}
            title="Set auto-refresh interval"
          >
            <span className={styles.intervalLabel}>
              {selectedInterval.label}
            </span>
            <span className={styles.chevron}>{isOpen ? "▲" : "▼"}</span>
          </button>
        </div>

        {/* Progress bar - only shows when auto-refresh is active */}
        {isAutoRefresh && (
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className={styles.dropdown}>
          {INTERVAL_OPTIONS.map((option) => (
            <button
              key={option.label}
              className={`${styles.dropdownItem} ${
                selectedInterval.label === option.label ? styles.selected : ""
              }`}
              onClick={() => handleSelectInterval(option)}
            >
              {option.label}
              {selectedInterval.label === option.label && (
                <span className={styles.checkmark}>✓</span>
              )}
            </button>
          ))}
          {onForceCheck && (
            <>
              <div className={styles.dropdownDivider} />
              <button
                className={`${styles.dropdownItem} ${styles.checkNow}`}
                onClick={handleForceCheck}
                disabled={isChecking}
              >
                {isChecking ? "Checking..." : "Check Now"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

