import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import styles from "./Badge.module.css";

const badgeVariants = cva(styles.badge, {
  variants: {
    variant: {
      default: styles.default,
      primary: styles.primary,
      success: styles.success,
      warning: styles.warning,
      danger: styles.danger,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  children: ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <span ref={ref} className={clsx(badgeVariants({ variant }), className)} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
