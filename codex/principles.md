# Design Principles

These principles guide every decision in the codex.

---

## One Source of Truth

All visual values live in tokens. Components and styles reference tokens, never raw values.

**Do this:**

```css
.card {
  background: var(--color-bg-surface);
  border-radius: var(--radius-md);
}
```

**Not this:**

```css
.card {
  background: #ffffff;
  border-radius: 8px;
}
```

---

## Semantic Naming

Names communicate intent, not appearance.

| ✓ Good                | ✗ Avoid      |
| --------------------- | ------------ |
| `color.text.primary`  | `gray-900`   |
| `color.intent.danger` | `red-500`    |
| `spacing.content`     | `spacing-16` |

---

## Low Cognitive Load

Scales are small, opinionated, and easy to memorize. Fewer options beat perfect options.

- **Spacing:** 6 values, not 12
- **Font sizes:** 6 sizes, not 10
- **Radii:** 4 options, not 8

When in doubt, remove options.

---

## Accessibility by Default

Accessibility is not an afterthought. It's baked into the tokens.

- Color pairs are pre-validated for WCAG AA contrast
- Interactive components are keyboard-navigable
- Focus states are visible and consistent
- Motion respects `prefers-reduced-motion`

If a component exists, it's accessible.

---

## Documentation-First

Every rule exists to be read later. If it isn't written down, it doesn't exist.

- Tokens are self-documenting via naming
- Components have usage examples
- Patterns explain the "why," not just the "how"

---

## Constraints Breed Creativity

The codex is intentionally opinionated. Constraints:

- Force consistency
- Speed up decisions
- Create visual coherence
- Make the codebase predictable

The goal is not to cover every edge case. The goal is to make 90% of decisions automatic.
