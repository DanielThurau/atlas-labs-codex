# Color

Color communicates meaning and hierarchy. This system enforces semantic usage and guarantees accessibility.

---

## Semantic Color Tokens

Never use raw palette values directly. Always use semantic tokens.

### Backgrounds

| Token | Use Case |
|-------|----------|
| `color.bg.default` | Page background |
| `color.bg.surface` | Cards, panels |
| `color.bg.elevated` | Modals, popovers |
| `color.bg.subtle` | Secondary sections |
| `color.bg.muted` | Disabled states |

### Text

| Token | Use Case |
|-------|----------|
| `color.text.primary` | Main content |
| `color.text.secondary` | Supporting text |
| `color.text.muted` | Placeholder, disabled |
| `color.text.inverse` | Text on dark backgrounds |

### Borders

| Token | Use Case |
|-------|----------|
| `color.border.default` | Standard borders |
| `color.border.subtle` | Dividers, separators |
| `color.border.strong` | Emphasis, focus |

### Intent Colors

| Token | Use Case |
|-------|----------|
| `color.intent.primary` | Primary actions |
| `color.intent.primary-hover` | Primary hover state |
| `color.intent.success` | Positive feedback |
| `color.intent.warning` | Caution, alerts |
| `color.intent.danger` | Destructive actions, errors |

---

## Palette Structure

### Neutral Scale (Stone)

A warm gray that feels more human than pure gray.

```
stone.50   #fafaf9
stone.100  #f5f5f4
stone.200  #e7e5e4
stone.300  #d6d3d1
stone.400  #a8a29e
stone.500  #78716c
stone.600  #57534e
stone.700  #44403c
stone.800  #292524
stone.900  #1c1917
stone.950  #0c0a09
```

### Primary (Indigo)

A versatile indigo that works for both light and dark themes.

```
indigo.50   #eef2ff
indigo.100  #e0e7ff
indigo.200  #c7d2fe
indigo.300  #a5b4fc
indigo.400  #818cf8
indigo.500  #6366f1
indigo.600  #4f46e5
indigo.700  #4338ca
indigo.800  #3730a3
indigo.900  #312e81
indigo.950  #1e1b4b
```

### Semantic Palette

```
success    emerald.500  #10b981
warning    amber.500    #f59e0b
danger     rose.500     #f43f5e
```

---

## Accessibility Guarantees

All foreground/background pairs meet WCAG AA (4.5:1 for text, 3:1 for large text).

### Pre-validated Pairs

| Background | Foreground | Ratio |
|------------|------------|-------|
| `bg.default` (light) | `text.primary` | 15.8:1 ✓ |
| `bg.surface` (light) | `text.secondary` | 7.2:1 ✓ |
| `intent.primary` | white | 4.9:1 ✓ |
| `intent.danger` | white | 4.5:1 ✓ |
| `bg.default` (dark) | `text.primary` | 14.7:1 ✓ |

If you're using semantic tokens correctly, contrast is automatic.

---

## Theme Mapping

### Light Theme

```css
[data-theme="light"] {
  --color-bg-default: var(--stone-50);
  --color-bg-surface: white;
  --color-text-primary: var(--stone-900);
  --color-text-secondary: var(--stone-600);
  --color-border-default: var(--stone-200);
  --color-intent-primary: var(--indigo-600);
}
```

### Dark Theme

```css
[data-theme="dark"] {
  --color-bg-default: var(--stone-950);
  --color-bg-surface: var(--stone-900);
  --color-text-primary: var(--stone-50);
  --color-text-secondary: var(--stone-400);
  --color-border-default: var(--stone-800);
  --color-intent-primary: var(--indigo-400);
}
```

---

## Usage Rules

1. **No hex codes in components.** Always use tokens.
2. **Intent colors are for intent.** Don't use `danger` for decorative red.
3. **Test both themes.** Every screen must work in light and dark.
4. **When in doubt, use neutral.** Color should be purposeful, not decorative.

---

## Anti-Patterns

- ❌ Using palette values directly (`indigo.500` instead of `intent.primary`)
- ❌ Inventing new colors outside the palette
- ❌ Low-contrast text for "aesthetic" reasons
- ❌ Different semantic colors for the same concept across screens

