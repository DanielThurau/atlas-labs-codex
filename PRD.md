# Personal Design Codex – Product Requirements Document (PRD)

## 1. Objective

The **Personal Design Codex** is a private repository that acts as a single source of truth for all design-related decisions. Instead of scattering typography rules, color palettes, spacing systems, and UI components across projects, this codex centralizes everything in one place.

This is a **personal craftsman repository**. There is no requirement to publish packages, maintain backwards compatibility, or ship to production. The goal is to create a tidy workshop: a place where design decisions are explicit, documented, and reusable by your future self.

---

## 2. Goals

The codex should:

- Document foundational design principles (typography, spacing, radius, elevation).
- Define design tokens and themes as named values rather than hard-coded literals.
- Prefer semantic color tokens (primary, success, danger, etc.) over raw palette usage.
- Collect reusable React components you routinely build.
- Serve as a long-lived reference library for patterns, notes, and inspiration.

---

## 3. Design Principles

### One source of truth
All visual values live in tokens. Components and styles reference tokens, never raw values.

### Semantic naming
Names should communicate intent, not appearance.  
Example: `color.text.primary` instead of `#111111`.

### Low cognitive load
Scales are small, opinionated, and easy to memorize. Fewer options beat perfect options.

### Accessibility by default
Color pairs and interactive components should be designed to pass contrast and keyboard-navigation expectations without extra effort.

### Documentation-first
Every rule exists to be read later. If it isn’t written down, it doesn’t exist.

---

## 4. Repository Structure

The repository is organized like a workshop: documentation, tokens, themes, components, and references all have explicit homes.

Repository layout:

design-codex/
- README.md
- codex/
  - principles.md
  - typography.md
  - color.md
  - spacing.md
  - components.md
  - patterns/
    - forms.md
    - tables.md
    - modals.md
- tokens/
  - tokens.json
  - build/
- themes/
  - css/
    - base.css
    - theme-light.css
    - theme-dark.css
  - tailwind/
- components/
  - react/
    - Button/
    - Input/
    - Card/
    - index.ts
- playground/
  - nextjs/
- references/
  - screenshots/
  - inspiration/
  - notes.md
- scripts/
  - build-tokens.ts

---

## 5. Token Strategy

Design tokens are named variables representing visual values such as color, spacing, typography, and elevation. Tokens allow design decisions to scale, evolve, and remain consistent.

### Token layers

Primitive tokens  
Raw values that define your palette and scales.

Examples:
- `gray.100`
- `blue.600`
- `spacing.4`
- `radius.12`

Semantic tokens  
Map primitives to meaning.

Examples:
- `color.bg.default`
- `color.text.primary`
- `color.intent.danger`
- `border.subtle`

Component tokens  
Optional overrides scoped to a component.

Examples:
- `button.bg`
- `card.radius`

### Naming rules

- Short
- Meaningful
- Consistent
- Dot-separated namespaces

Avoid encoding appearance in names.

---

## 6. Themes

At minimum, support:

- Light theme
- Dark theme

Themes work by remapping semantic tokens to different primitive values.

Theme switching uses a root attribute:

- `data-theme="light"`
- `data-theme="dark"`

All components respond automatically via CSS variables.

---

## 7. Color & Accessibility Strategy

Color is always applied semantically.

Steps:

1. Define a neutral palette and one primary accent palette.
2. Create semantic mappings for:
   - background
   - text
   - border
   - primary / secondary
   - success / warning / danger
3. Predefine foreground/background pairs that meet contrast expectations.
4. Document contrast assumptions in `codex/color.md`.

Accessibility is handled at the token level so components inherit correctness by default.

---

## 8. Core Components

Initial component set:

- Button (primary, secondary, danger)
- Input (label, helper text, error state)
- Card
- Badge / Label
- Dropdown / Popover
- Modal / Dialog
- Table skeleton
- Toast / Notification
- Tabs

Components should:

- Use tokens exclusively
- Be thin wrappers over accessible primitives where possible
- Encode taste, not flexibility

---

## 9. Patterns & Recipes

Patterns describe how components combine to solve recurring UI problems.

Examples:

- Form layout rules
- Button hierarchy
- Empty states
- Error states
- Table density rules
- Modal usage guidelines

Each pattern lives in its own markdown file under `codex/patterns/`.

---

## 10. Implementation Plan

Phase 1 – Foundation  
- Create README and principles document  
- Define spacing, radius, typography, and color tokens  

Phase 2 – Styling  
- Base CSS reset  
- Typography defaults  
- Light/dark theme variables  

Phase 3 – Playground  
- Minimal Next.js app that renders:
  - Typography
  - Color swatches
  - Spacing examples  

Phase 4 – Components  
- Implement core components
- Document usage and states  

Phase 5 – Patterns  
- Write pattern docs as they naturally emerge  

Iteration is expected and encouraged.

---

## 11. Tooling

Suggested (not mandatory):

- TypeScript + React
- CSS variables
- Radix UI primitives
- Tailwind (optional, token-driven only)
- Next.js for playground
- Storybook

Choose tools that reduce friction, not ones that demand ceremony.

---

## 12. Risks

Over-engineering  
Mitigation: build only what you actually reuse.

Token sprawl  
Mitigation: enforce semantic naming and delete unused tokens.

Documentation rot  
Mitigation: treat docs as part of the build, not an afterthought.

---

## 13. Future Extensions

- Motion tokens (animation, duration, easing)
- Responsive breakpoint tokens
- Figma ↔ token sync
- Automated token builds (Style Dictionary)

---

This codex is not a framework.  
It is a **record of taste**, refined over time.