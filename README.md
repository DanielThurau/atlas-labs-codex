# Personal Design Codex

A private repository that acts as a single source of truth for all design-related decisions. This codex centralizes typography rules, color palettes, spacing systems, and UI components in one place.

## Philosophy

This is a **personal craftsman repository**—a tidy workshop where design decisions are explicit, documented, and reusable by your future self.

---

## Using in Other Projects

Install from npm:

```bash
npm install @atlas-labs/design-codex
```

Then import components, styles, and utilities:

```tsx
// Import components
import { Button, Card, Input, Badge, RefreshButton } from "@atlas-labs/design-codex";

// Import utilities
import { formatRelativeTime, clsx } from "@atlas-labs/design-codex/lib";

// Import CSS (in your layout.tsx or entry point)
import "@atlas-labs/design-codex/themes/css/base.css";
import "@atlas-labs/design-codex/themes/css/theme-light.css";
import "@atlas-labs/design-codex/themes/css/theme-dark.css";
```

### Font Setup

Copy the Martian Mono font to your project's public folder, or load it in your CSS:

```css
@font-face {
  font-family: "Martian Mono";
  src: url("/fonts/MartianMono-VariableFont_wdth,wght.ttf") format("truetype");
  font-weight: 100 800;
  font-display: swap;
}
```

---

## Development

### Prerequisites

**Node.js 18+** is required. Check your version:

```bash
node --version  # Should be v18.x or higher
```

If you need to upgrade, use [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install 20
nvm use 20
```

### Quick Start

```bash
# Install dependencies
npm install

# Run the playground
npm run dev

# Run Storybook
npm run storybook
```

## Structure

```
├── codex/              # Design documentation
│   ├── principles.md   # Core design principles
│   ├── typography.md   # Type system
│   ├── color.md        # Color strategy
│   ├── spacing.md      # Spacing scale
│   ├── components.md   # Component guidelines
│   └── patterns/       # UI pattern recipes
├── themes/css/         # CSS custom properties
│   ├── base.css        # Primitives & component tokens
│   ├── theme-light.css # Light mode
│   └── theme-dark.css  # Dark mode
├── components/react/   # React component library
│   ├── Button/
│   ├── Input/
│   ├── Card/
│   ├── Badge/
│   ├── Modal/
│   ├── Toast/
│   ├── Tabs/
│   └── RefreshButton/  # AWS-style auto-refresh button
├── lib/                # Shared utilities
│   ├── index.ts        # Exports all utilities
│   └── utils.ts        # formatRelativeTime, clsx
├── app/                # Next.js playground
├── public/fonts/       # Martian Mono font files
└── .storybook/         # Storybook configuration
```

## Design Tokens

All visual values are defined as CSS custom properties in `themes/css/`. The token architecture follows three layers:

1. **Primitive tokens** — Raw values (colors, spacing units)
2. **Semantic tokens** — Meaningful mappings (`--color-text-primary`)
3. **Component tokens** — Component-specific overrides (`--button-radius`)

## Themes

The codex supports light and dark themes via CSS custom properties. Theme switching uses:

```html
<html data-theme="light">
  <!-- or -->
  <html data-theme="dark"></html>
</html>
```

## Components

All components:

- Use tokens exclusively (no hardcoded values)
- Are built on Radix UI primitives for accessibility
- Encode taste, not flexibility

## License

Private repository. Personal use only.
