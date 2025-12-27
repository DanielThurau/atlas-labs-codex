/**
 * Design Codex Utilities
 * Shared utility functions for projects using the design system
 */

/**
 * Format a date as a relative time string (e.g., "2m ago", "1h ago")
 */
export function formatRelativeTime(date: Date | string | null): string {
  if (!date) return "Never";
  
  const now = new Date();
  const then = typeof date === "string" ? new Date(date) : date;
  const diffMs = now.getTime() - then.getTime();
  
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (seconds < 10) return "Just now";
  if (seconds < 60) return `${seconds}s ago`;
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  
  return then.toLocaleDateString();
}

// Re-export clsx for convenience
export { clsx } from "clsx";

