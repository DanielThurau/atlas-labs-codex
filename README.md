# Personal Design Codex

A private repository that acts as a single source of truth for all design-related decisions. This codex centralizes typography rules, color palettes, spacing systems, and UI components in one place.

## Philosophy

This is a **personal craftsman repository**—a tidy workshop where design decisions are explicit, documented, and reusable by your future self.

## Prerequisites

**Node.js 18+** is required. Check your version:

```bash
node --version  # Should be v18.x or higher
```

If you need to upgrade, use [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install 20
nvm use 20
```

## Quick Start

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
├── tokens/             # Design tokens
│   └── tokens.json     # Source of truth
├── themes/             # Generated theme files
│   └── css/            # CSS custom properties
├── components/         # React components
│   └── react/          # Component library
├── playground/         # Next.js development app
└── scripts/            # Build utilities
```

## Design Tokens

All visual values are defined as tokens in `tokens/tokens.json`. These tokens are transformed into CSS custom properties for use across the codebase.

### Token Layers

1. **Primitive tokens** — Raw values (colors, spacing units)
2. **Semantic tokens** — Meaningful mappings (`color.text.primary`)
3. **Component tokens** — Optional component-specific overrides

## Themes

The codex supports light and dark themes via CSS custom properties. Theme switching uses:

```html
<html data-theme="light">
<!-- or -->
<html data-theme="dark">
```

## Components

All components:
- Use tokens exclusively (no hardcoded values)
- Are built on Radix UI primitives for accessibility
- Encode taste, not flexibility

## License

Private repository. Personal use only.

