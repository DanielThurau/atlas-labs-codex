# Table Patterns

Guidelines for displaying data in tables.

---

## When to Use Tables

✓ **Use tables for:**
- Structured data with consistent attributes
- Data that benefits from sorting/filtering
- Comparisons across multiple items
- Lists with many attributes per item

✗ **Avoid tables for:**
- Simple lists (use a list component)
- Card-like content (use cards)
- Mobile-first interfaces (tables struggle)
- Sparse data with many empty cells

---

## Table Anatomy

```
┌─────────────────────────────────────────────────────────┐
│ Name ▲        │ Status     │ Created    │ Actions      │  ← Header
├───────────────┼────────────┼────────────┼──────────────┤
│ Project A     │ ● Active   │ Jan 1      │ ••• │        │  ← Row
├───────────────┼────────────┼────────────┼──────────────┤
│ Project B     │ ○ Draft    │ Jan 15     │ ••• │        │
├───────────────┼────────────┼────────────┼──────────────┤
│ Project C     │ ● Active   │ Feb 2      │ ••• │        │
└───────────────┴────────────┴────────────┴──────────────┘
```

---

## Column Guidelines

### Alignment

| Content Type | Alignment |
|--------------|-----------|
| Text | Left |
| Numbers | Right |
| Dates | Left or Right (be consistent) |
| Status badges | Left |
| Actions | Right |

### Width

- Let text columns flex
- Constrain status and action columns
- Set min-widths to prevent awkward wrapping

### Priority

Order columns by importance. Users scan left-to-right:

1. Identifier (name, title)
2. Key attributes
3. Status
4. Metadata (dates)
5. Actions (rightmost)

---

## Density Variants

| Density | Row Height | Use Case |
|---------|------------|----------|
| Compact | 36px | Data-heavy views, power users |
| Default | 44px | Standard use |
| Relaxed | 56px | Touch interfaces, readability |

---

## Interactive Features

### Sorting

- Click header to sort
- Show sort direction indicator (▲ ▼)
- Single column sort is sufficient
- Default sort should be sensible

### Selection

```
┌─────────────────────────────────────────────────────────┐
│ □  │ Name          │ Status     │ Created    │         │
├────┼───────────────┼────────────┼────────────┼─────────┤
│ ■  │ Project A     │ ● Active   │ Jan 1      │         │
├────┼───────────────┼────────────┼────────────┼─────────┤
│ □  │ Project B     │ ○ Draft    │ Jan 15     │         │
└────┴───────────────┴────────────┴────────────┴─────────┘

[3 selected]  [Delete]  [Export]
```

### Row Actions

Options for row-level actions:

1. **Action column** — Always visible, limited space
2. **Hover actions** — Clean but discoverable issues
3. **Dropdown menu** — Good for 3+ actions
4. **Click to navigate** — When row represents detail page

---

## States

### Loading

Show skeleton rows matching expected content:

```
┌─────────────────────────────────────────────────────────┐
│ Name          │ Status     │ Created    │ Actions      │
├───────────────┼────────────┼────────────┼──────────────┤
│ ████████████  │ ████       │ ██████     │ ███          │
├───────────────┼────────────┼────────────┼──────────────┤
│ ██████████    │ ████       │ ██████     │ ███          │
├───────────────┼────────────┼────────────┼──────────────┤
│ ████████████  │ ████       │ ██████     │ ███          │
└───────────────┴────────────┴────────────┴──────────────┘
```

### Empty

```
┌─────────────────────────────────────────────────────────┐
│ Name          │ Status     │ Created    │ Actions      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                    📁                                   │
│                                                         │
│              No projects yet                            │
│                                                         │
│              [Create Project]                           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Error

```
┌─────────────────────────────────────────────────────────┐
│ Name          │ Status     │ Created    │ Actions      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              ⚠️ Failed to load data                     │
│                                                         │
│              [Retry]                                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Responsive Behavior

Tables don't adapt well to mobile. Strategies:

1. **Horizontal scroll** — Acceptable for data apps
2. **Priority columns** — Hide less important columns
3. **Card transformation** — Convert rows to cards
4. **Different view** — Offer list view on mobile

---

## Styling

```css
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th {
  text-align: left;
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border-default);
}

.table td {
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border-subtle);
}

.table tr:hover {
  background-color: var(--color-bg-subtle);
}
```

---

## Accessibility Checklist

- [ ] Use semantic `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`
- [ ] Header cells have `scope="col"`
- [ ] Sortable columns announce sort state
- [ ] Selection checkboxes have labels
- [ ] Actions are keyboard accessible

---

## Anti-Patterns

- ❌ Tables for layout (it's not 1999)
- ❌ Too many columns (causes horizontal scroll)
- ❌ Inconsistent row heights
- ❌ Zebra striping (outdated, adds noise)
- ❌ Actions only visible on hover
- ❌ Nested tables

