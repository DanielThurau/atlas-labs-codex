import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { clsx } from "clsx";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  elevated?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, padding = "md", elevated = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          styles.card,
          styles[`padding-${padding}`],
          elevated && styles.elevated,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.header, className)} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.content, className)} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.footer, className)} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";
