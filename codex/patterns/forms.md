# Form Patterns

Guidelines for building consistent, accessible forms.

---

## Layout Rules

### Vertical Stacking

Forms stack vertically by default. Each field occupies its own row.

```
┌─────────────────────────────┐
│ Label                       │
│ ┌─────────────────────────┐ │
│ │ Input                   │ │
│ └─────────────────────────┘ │
│ Helper text                 │
└─────────────────────────────┘
         ↓ space-4
┌─────────────────────────────┐
│ Label                       │
│ ┌─────────────────────────┐ │
│ │ Input                   │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

### Spacing

| Element | Spacing |
|---------|---------|
| Label → Input | `space-2` (8px) |
| Input → Helper | `space-1` (4px) |
| Field → Field | `space-4` (16px) |
| Section → Section | `space-8` (32px) |
| Form → Actions | `space-6` (24px) |

---

## Field Anatomy

Every field consists of:

1. **Label** (required) — Describes the input
2. **Input** — The interactive element
3. **Helper text** (optional) — Additional guidance
4. **Error message** (conditional) — Validation feedback

```tsx
<div className="field">
  <label htmlFor="email">Email address</label>
  <input type="email" id="email" />
  <span className="helper">We'll never share your email.</span>
</div>
```

---

## Validation

### Display Strategy

- Show errors after the user leaves the field (on blur)
- Show errors on submit for untouched fields
- Clear errors as the user corrects them

### Error States

```css
.field-error input {
  border-color: var(--color-intent-danger);
}

.field-error .error-message {
  color: var(--color-intent-danger);
  font-size: var(--text-sm);
  margin-top: var(--space-1);
}
```

### Messages

Write error messages that:
- Say what went wrong
- Suggest how to fix it
- Use sentence case

| ✓ Good | ✗ Avoid |
|--------|---------|
| "Email address is required" | "Required field" |
| "Password must be at least 8 characters" | "Invalid password" |
| "Please enter a valid phone number" | "Error" |

---

## Action Buttons

### Placement

Primary action on the right. Secondary actions on the left.

```
┌─────────────────────────────────────┐
│  [Cancel]              [Save User]  │
└─────────────────────────────────────┘
```

### Hierarchy

- **Primary button** for the main action
- **Secondary/ghost button** for cancel, back, etc.
- **Text link** for tertiary actions (reset, skip)

### Loading State

Disable the form and show loading indicator on submit:

```tsx
<Button disabled={isSubmitting}>
  {isSubmitting ? "Saving..." : "Save"}
</Button>
```

---

## Accessibility Checklist

- [ ] Every input has an associated label
- [ ] Required fields are marked (and announced)
- [ ] Error messages are linked to inputs via `aria-describedby`
- [ ] Form can be submitted with Enter key
- [ ] Focus moves to first error on validation failure
- [ ] Disabled inputs have sufficient contrast

---

## Common Patterns

### Login Form

```
┌─────────────────────────────┐
│ Email                       │
│ [________________________]  │
│                             │
│ Password                    │
│ [________________________]  │
│                             │
│ □ Remember me    [Forgot?]  │
│                             │
│         [Sign In]           │
└─────────────────────────────┘
```

### Settings Form

```
┌─────────────────────────────┐
│ PROFILE                     │
├─────────────────────────────┤
│ Name                        │
│ [________________________]  │
│                             │
│ Email                       │
│ [________________________]  │
│                             │
├─────────────────────────────┤
│ [Cancel]           [Save]   │
└─────────────────────────────┘
```

---

## Anti-Patterns

- ❌ Inline labels (inside input placeholders)
- ❌ Validation on every keystroke
- ❌ Error messages without context
- ❌ Required fields without indication
- ❌ Submit button before all fields

