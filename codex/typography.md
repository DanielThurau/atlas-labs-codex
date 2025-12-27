# Typography

Typography is the foundation of interface design. This system prioritizes readability, hierarchy, and restraint.

---

## Type Scale

A deliberately small scale. If you need more sizes, question the design.

| Token       | Size | Line Height | Use Case               |
| ----------- | ---- | ----------- | ---------------------- |
| `text.xs`   | 12px | 16px        | Captions, badges       |
| `text.sm`   | 14px | 20px        | Secondary text, labels |
| `text.base` | 16px | 24px        | Body text (default)    |
| `text.lg`   | 18px | 28px        | Lead paragraphs        |
| `text.xl`   | 24px | 32px        | Section headings       |
| `text.2xl`  | 32px | 40px        | Page titles            |

---

## Font Stack

### Primary (Martian Mono)

```css
--font-primary: "Martian Mono", "JetBrains Mono", "Fira Code", Consolas, monospace;
```

[Martian Mono](https://github.com/evilmartians/mono) is the primary typeface for all UI. It's a distinctive monospace font with excellent readability, variable font support, and a wide character set. The consistent character widths create natural alignment in data-heavy interfaces.

**Why monospace as primary?**

- Creates a distinctive, technical aesthetic
- Natural alignment in tables, forms, and data displays
- Consistent rhythm across all text
- Works beautifully for developer tools and dashboards

### Sans (Inter) — Secondary

```css
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

Inter is available as a fallback for contexts where proportional text is preferred (long-form content, marketing pages). Use sparingly.

### Mono (Alias)

```css
--font-mono: var(--font-primary);
```

Alias for `--font-primary`. Code blocks and `<code>` elements use this token.

---

## Font Weights

| Token           | Weight | Use Case               |
| --------------- | ------ | ---------------------- |
| `font.regular`  | 400    | Body text              |
| `font.medium`   | 500    | Emphasis, labels       |
| `font.semibold` | 600    | Headings, buttons      |
| `font.bold`     | 700    | Strong emphasis (rare) |

**Rule:** Prefer `medium` over `bold` for emphasis. Bold is loud.

---

## Line Height

Line height tokens are paired with font sizes:

| Context | Ratio | Example           |
| ------- | ----- | ----------------- |
| Tight   | 1.25  | Headings          |
| Normal  | 1.5   | Body text         |
| Relaxed | 1.75  | Long-form reading |

---

## Letter Spacing

| Token             | Value    | Use Case                 |
| ----------------- | -------- | ------------------------ |
| `tracking.tight`  | -0.025em | Large headings           |
| `tracking.normal` | 0        | Body text                |
| `tracking.wide`   | 0.05em   | Uppercase labels, badges |

---

## Hierarchy Rules

1. **One heading per section.** Don't stack h2 + h3 without content between.
2. **Two levels max.** If you need h4, simplify the structure.
3. **Contrast through weight, not size.** Semibold at the same size often works better than jumping sizes.

---

## Practical Defaults

```css
body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--color-text-primary);
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3 {
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
}

code,
pre {
  font-family: var(--font-mono);
  font-size: 0.875em;
}
```

---

## Anti-Patterns

- ❌ More than 3 font sizes on one screen
- ❌ Mixing font families within body text
- ❌ Light gray text on white (contrast fail)
- ❌ Justified text (causes rivers)
- ❌ Lines longer than 75 characters
