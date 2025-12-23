# Modal Patterns

Guidelines for when and how to use modals effectively.

---

## When to Use Modals

✓ **Use modals for:**
- Confirmations requiring explicit user decision
- Focused tasks that shouldn't lose context
- Critical warnings that must be acknowledged
- Quick creation flows (new item, quick edit)

✗ **Avoid modals for:**
- Information that could be inline
- Complex multi-step flows (use a page instead)
- Non-critical notifications (use toasts)
- Content users need to reference while working

---

## Modal Anatomy

```
┌─────────────────────────────────────┐
│ ╳                                   │  ← Close button
├─────────────────────────────────────┤
│ Title                               │  ← Required
│                                     │
│ Description or form content goes    │  ← Body
│ here. Keep it focused.              │
│                                     │
├─────────────────────────────────────┤
│  [Cancel]              [Confirm]    │  ← Actions
└─────────────────────────────────────┘
```

---

## Size Guidelines

| Size | Width | Use Case |
|------|-------|----------|
| `sm` | 400px | Confirmations, alerts |
| `md` | 500px | Forms, simple tasks |
| `lg` | 640px | Complex forms, previews |
| `xl` | 800px | Rich content (rare) |

Default to `sm` or `md`. If you need `xl`, consider a page instead.

---

## Behavior

### Opening
- Focus moves to the first focusable element
- Background content is inert (not focusable)
- Overlay darkens background

### Closing
- Escape key closes the modal
- Clicking overlay closes the modal (unless destructive)
- Focus returns to the trigger element

### Animation
```css
.modal-overlay {
  animation: fadeIn 150ms ease-out;
}

.modal-content {
  animation: slideUp 150ms ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
  to { 
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

---

## Confirmation Dialogs

For destructive actions, use a confirmation dialog:

```
┌─────────────────────────────────────┐
│ Delete project?                     │
│                                     │
│ This will permanently delete        │
│ "My Project" and all its contents.  │
│ This action cannot be undone.       │
│                                     │
│  [Cancel]              [Delete]     │
│                         (danger)    │
└─────────────────────────────────────┘
```

### Rules for Confirmations

1. **State the action clearly** in the title
2. **Explain consequences** in the body
3. **Match button label to action** ("Delete" not "Confirm")
4. **Use danger styling** for destructive primary action
5. **Don't close on overlay click** for destructive actions

---

## Form Modals

For modals containing forms:

```
┌─────────────────────────────────────┐
│ Add team member                     │
├─────────────────────────────────────┤
│ Email address                       │
│ [________________________]          │
│                                     │
│ Role                                │
│ [Admin              ▾]              │
│                                     │
├─────────────────────────────────────┤
│  [Cancel]            [Add Member]   │
└─────────────────────────────────────┘
```

### Rules for Form Modals

1. **Keep fields minimal** — Complex forms deserve a page
2. **Validate before close** — Don't lose user input
3. **Show loading state** on submit
4. **Close on success** — Don't make user click again

---

## Accessibility Checklist

- [ ] Modal has `role="dialog"` and `aria-modal="true"`
- [ ] Modal has an accessible name (`aria-labelledby` or `aria-label`)
- [ ] Focus is trapped within the modal
- [ ] Escape key closes the modal
- [ ] Focus returns to trigger on close
- [ ] Background content is inert

---

## Anti-Patterns

- ❌ Modals within modals (modal inception)
- ❌ Scrolling modals with lots of content
- ❌ Modals without close affordance
- ❌ Modals that open without user action
- ❌ Important information only in modal titles
- ❌ "Are you sure?" without context

