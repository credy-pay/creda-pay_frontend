# Creda Pay Design System

This document outlines the visual standards and design tokens for the Creda Pay project. All contributors should adhere to these guidelines to ensure a consistent, premium experience across the platform.

## 🎨 Color Palette

We use CSS custom properties for all colors. This allows for easy maintainability and native dark mode support.

### Core Colors

| Token | Light Value | Dark Value | Purpose |
|---|---|---|---|
| `--primary` | `#2563eb` | `#60a5fa` | Primary actions, branding, active states |
| `--secondary` | `#475569` | `#94a3b8` | Secondary text, subtle borders |
| `--accent` | `#6366f1` | `#818cf8` | Decorative elements, highlights |
| `--background` | `#f8fafc` | `#020617` | Main page background |
| `--surface` | `#ffffff` | `#0f172a` | Cards, modals, sidebars |

### Status Colors

Use these to communicate state and feedback.

| Type | Token | Color | Usage |
|---|---|---|---|
| **Success** | `--success` | Green | Completion, valid inputs, confirmed transactions |
| **Warning** | `--warning` | Amber | Pending states, caution, non-critical alerts |
| **Error** | `--error` | Red | Failures, invalid inputs, rejected transactions |
| **Info** | `--info` | Sky | Helpful hints, neutral notifications |

---

## ✍️ Typography

We use a three-font system to create clear hierarchy and character.

1.  **Display (`--font-display` / Outfit)**: Used for large headings and branding elements. Bold, modern, and high-impact.
2.  **Sans (`--font-sans` / Inter)**: Default font for UI elements, navigation, and body text. Focused on readability.
3.  **Serif (`--font-serif` / Playfair Display)**: Used sparingly for high-end quotes, philosophy sections, and editorial-style content.

### Hierarchy

-   **H1**: `text-7xl` or larger, `--font-display`, `font-black`, `tracking-tightest`
-   **H2**: `text-5xl`, `--font-display`, `font-black`
-   **Body**: `text-base`, `--font-sans`, `font-medium`
-   **Caption**: `text-xs`, `--font-sans`, `font-bold`, `uppercase`, `tracking-widest`

---

## 💠 Components & Patterns

### Cards
Cards should use the `.card` utility class.
-   **Border**: `1px solid var(--border)`
-   **Radius**: `var(--radius)` (1rem / 16px)
-   **Hover**: Subtle lift and increased shadow.

### Buttons
-   **Primary**: `.btn-primary` (Blue gradient, heavy shadow, 2xl radius)
-   **Secondary**: Outline button, `border-slate-100`, text-slate-900.

### Glassmorphism
Used for navigation bars and overlays. Use the `.glass` utility class.
-   `bg-white/80` (Light) or `bg-slate-900/80` (Dark)
-   `backdrop-blur-md`
-   Subtle `ring-1` for depth.

---

## 🌑 Dark Mode

Creda Pay supports native dark mode via the `[data-theme='dark']` attribute on the `html` element. 

-   Avoid using hardcoded hex values in components.
-   Always use CSS variables (e.g., `color: var(--foreground)`).
-   Tailwind classes like `bg-white dark:bg-slate-900` should be used sparingly in favor of tokens.

---

## ✨ Motion & Interaction

-   **Transitions**: Default to `duration-300` and `ease-out`.
-   **Hover Effects**: Use `hover:-translate-y-1` and `hover:shadow-lg` for interactive cards.
-   **Active State**: Use `active:scale-95` for immediate tactile feedback on buttons.
