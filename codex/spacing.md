# Spacing

Consistent spacing creates visual rhythm and reduces cognitive load. This system uses a constrained scale with semantic naming.

---

## Spacing Scale

A deliberately small scale based on a 4px grid. When in doubt, use fewer values.

| Token      | Value   | Pixels | Use Case                 |
| ---------- | ------- | ------ | ------------------------ |
| `space.1`  | 0.25rem | 4px    | Tight gaps (icon + text) |
| `space.2`  | 0.5rem  | 8px    | Related elements         |
| `space.3`  | 0.75rem | 12px   | Form element padding     |
| `space.4`  | 1rem    | 16px   | Default spacing          |
| `space.6`  | 1.5rem  | 24px   | Section spacing          |
| `space.8`  | 2rem    | 32px   | Large gaps               |
| `space.12` | 3rem    | 48px   | Section separators       |
| `space.16` | 4rem    | 64px   | Page-level spacing       |

---

## Semantic Spacing

For common patterns, use semantic tokens instead of raw values:

| Token             | Maps To  | Use Case               |
| ----------------- | -------- | ---------------------- |
| `spacing.inline`  | space.2  | Inline element gaps    |
| `spacing.element` | space.3  | Between form elements  |
| `spacing.group`   | space.4  | Related content groups |
| `spacing.section` | space.8  | Between sections       |
| `spacing.page`    | space.16 | Page margins           |

---

## Border Radius

A small scale for rounded corners:

| Token         | Value  | Use Case                 |
| ------------- | ------ | ------------------------ |
| `radius.none` | 0      | No rounding              |
| `radius.sm`   | 4px    | Subtle rounding (inputs) |
| `radius.md`   | 8px    | Default (cards, buttons) |
| `radius.lg`   | 12px   | Prominent elements       |
| `radius.xl`   | 16px   | Modals, large cards      |
| `radius.full` | 9999px | Pills, avatars           |

---

## Elevation (Shadow)

Shadows indicate elevation in the z-axis:

| Token       | Use Case              |
| ----------- | --------------------- |
| `shadow.sm` | Subtle lift (buttons) |
| `shadow.md` | Cards, dropdowns      |
| `shadow.lg` | Modals, popovers      |
| `shadow.xl` | Command palettes      |

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

---

## Layout Rules

### Container Widths

| Token          | Width  | Use Case        |
| -------------- | ------ | --------------- |
| `container.sm` | 640px  | Focused content |
| `container.md` | 768px  | Forms, articles |
| `container.lg` | 1024px | Dashboards      |
| `container.xl` | 1280px | Full layouts    |

### Common Patterns

**Card Padding:**

```css
.card {
  padding: var(--space-4); /* 16px */
}
.card-compact {
  padding: var(--space-3); /* 12px */
}
```

**Stack Spacing:**

```css
.stack > * + * {
  margin-top: var(--space-4);
}
.stack-tight > * + * {
  margin-top: var(--space-2);
}
```

**Form Spacing:**

```css
.form-group + .form-group {
  margin-top: var(--space-4);
}
label + input {
  margin-top: var(--space-2);
}
```

---

## The 4px Grid

Everything aligns to a 4px grid:

- Heights: 32px, 36px, 40px, 44px
- Padding: 8px, 12px, 16px
- Gaps: 4px, 8px, 12px, 16px

This creates visual consistency even when elements vary in size.

---

## Anti-Patterns

- ❌ Using arbitrary values (`margin: 13px`)
- ❌ Mixing rem and px without purpose
- ❌ Tight spacing everywhere (needs breathing room)
- ❌ Inconsistent padding on similar elements
- ❌ More than 3 spacing values on one component
