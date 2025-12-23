# Components

This document outlines the philosophy and guidelines for building components in the codex.

---

## Component Philosophy

Components in this codex:

1. **Use tokens exclusively** — No hardcoded colors, spacing, or typography
2. **Are thin wrappers** — Built on Radix UI primitives for accessibility
3. **Encode taste** — Opinionated defaults, limited variants
4. **Are composable** — Small, focused, combinable

---

## Anatomy of a Component

Each component folder contains:

```
Button/
├── Button.tsx       # Component implementation
├── Button.css       # Styles (CSS modules or vanilla)
├── Button.stories.tsx  # Storybook stories
└── index.ts         # Barrel export
```

---

## Core Components

### Button

The primary interactive element.

**Variants:**
- `primary` — Main actions (submit, save)
- `secondary` — Secondary actions (cancel, back)
- `ghost` — Tertiary actions, navigation
- `danger` — Destructive actions (delete)

**Sizes:**
- `sm` — Compact contexts
- `md` — Default
- `lg` — Hero actions

**States:**
- Default, hover, active, focus, disabled, loading

---

### Input

Text input with integrated label and validation.

**Features:**
- Label (required for accessibility)
- Helper text
- Error state with message
- Disabled state

**Variants:**
- Default text input
- Password (with toggle)
- Textarea

---

### Card

Container for related content.

**Features:**
- Optional header
- Content area
- Optional footer
- Subtle elevation

---

### Badge

Inline status indicators.

**Variants:**
- `neutral` — Default state
- `primary` — Highlighted
- `success` — Positive
- `warning` — Attention
- `danger` — Negative

---

### Modal / Dialog

Overlay for focused interactions.

**Features:**
- Accessible focus trap
- Keyboard dismissal (Escape)
- Click-outside to close
- Animated entrance/exit

---

### Dropdown / Popover

Contextual content triggered by an anchor.

**Features:**
- Positioning (top, bottom, left, right)
- Auto-flip when constrained
- Keyboard navigation

---

### Toast / Notification

Transient feedback messages.

**Variants:**
- `info` — Neutral information
- `success` — Positive confirmation
- `warning` — Attention needed
- `error` — Something went wrong

**Features:**
- Auto-dismiss with configurable duration
- Manual dismiss
- Action button (optional)

---

### Tabs

Content organization through tabbed navigation.

**Features:**
- Keyboard navigation
- Accessible ARIA structure
- Controlled or uncontrolled

---

### Table

Data display in rows and columns.

**Features:**
- Sortable columns
- Fixed header on scroll
- Loading skeleton
- Empty state

---

## Building Guidelines

### Use Radix Primitives

All interactive components should be built on Radix UI:

```tsx
import * as Dialog from "@radix-ui/react-dialog";

export function Modal({ children, open, onOpenChange }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className="modal-content">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

### Style with Tokens

```css
.button-primary {
  background-color: var(--color-intent-primary);
  color: var(--color-text-inverse);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
}

.button-primary:hover {
  background-color: var(--color-intent-primary-hover);
}
```

### Compose, Don't Configure

Prefer composition over configuration:

```tsx
// ✓ Good: Compose components
<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Body</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// ✗ Avoid: Mega-props
<Card
  title="Title"
  content="Body"
  footerAction={{ label: "Action", onClick: fn }}
/>
```

---

## Anti-Patterns

- ❌ Hardcoding colors or spacing values
- ❌ Building accessibility from scratch
- ❌ Too many variants (if you need 10 button types, question the design)
- ❌ Prop drilling for styling (use CSS)
- ❌ Components that do too much

