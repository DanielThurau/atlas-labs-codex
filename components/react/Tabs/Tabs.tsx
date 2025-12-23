"use client";

import { forwardRef, type ReactNode } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { clsx } from "clsx";
import styles from "./Tabs.module.css";

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ tabs, defaultValue, value, onValueChange, className }, ref) => {
    const defaultTab = defaultValue || tabs[0]?.id;

    return (
      <TabsPrimitive.Root
        ref={ref}
        defaultValue={defaultTab}
        value={value}
        onValueChange={onValueChange}
        className={clsx(styles.root, className)}
      >
        <TabsPrimitive.List className={styles.list}>
          {tabs.map((tab) => (
            <TabsPrimitive.Trigger
              key={tab.id}
              value={tab.id}
              disabled={tab.disabled}
              className={styles.trigger}
            >
              {tab.label}
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
        {tabs.map((tab) => (
          <TabsPrimitive.Content
            key={tab.id}
            value={tab.id}
            className={styles.content}
          >
            {tab.content}
          </TabsPrimitive.Content>
        ))}
      </TabsPrimitive.Root>
    );
  }
);

Tabs.displayName = "Tabs";

