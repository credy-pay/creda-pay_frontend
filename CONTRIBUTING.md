# Contributing to Credy Pay

First off, thank you for considering contributing to Credy Pay!

Credy Pay is an open-source protocol building a trust layer for digital payments on Stellar. Every contribution — whether it's code, documentation, design, or bug reports — helps us move closer to a more trustworthy digital payment ecosystem.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Convention](#commit-convention)
- [Design System](#design-system)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Stellar-Specific Guidelines](#stellar-specific-guidelines)
- [Getting Help](#getting-help)

---

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [conduct@credypay.org](mailto:conduct@credypay.org).

---

## How Can I Contribute?

### 🐛 Report Bugs

Found a bug? Please [open an issue](../../issues/new?template=bug_report.md) with:

- A clear, descriptive title
- Steps to reproduce the behavior
- Expected vs. actual behavior
- Screenshots or screen recordings if applicable
- Your environment details (OS, browser, Node.js version)

### 💡 Suggest Features

Have an idea? [Open a feature request](../../issues/new?template=feature_request.md) with:

- A clear description of the problem you're trying to solve
- Your proposed solution
- Any alternative approaches you've considered
- Mockups or diagrams if applicable

### 🔧 Submit Code

Ready to code? Here's how to get started:

1. Browse [open issues](../../issues) — look for `good first issue` or `help wanted` labels
2. Comment on the issue to let others know you're working on it
3. Fork the repo and create your branch
4. Write your code with tests
5. Submit a pull request

### 📖 Improve Documentation

Documentation is just as important as code! You can:

- Fix typos or unclear explanations
- Add usage examples
- Write tutorials
- Improve inline code comments
- Translate documentation

### 🎨 Design & UX

We welcome design contributions:

- UI/UX improvements
- Accessibility enhancements
- Visual design assets
- User flow improvements

---

## Development Setup

### Prerequisites

| Tool | Version | Purpose |
|---|---|---|
| Node.js | >= 18.0.0 | Runtime environment |
| npm | >= 9.0.0 | Package manager |
| Git | Latest | Version control |
| Freighter | Latest | Stellar wallet (browser extension) |

### Quick Start

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/<your-username>/credy-pay_frontend.git
cd credy-pay_frontend

# 3. Add upstream remote
git remote add upstream https://github.com/credy-pay/credy-pay_frontend.git

# 4. Install dependencies
npm install

# 5. Copy environment variables
cp .env.example .env.local

# 6. Start development server
npm run dev
```

### Verifying Your Setup

After running `npm run dev`, you should see:

```
▲ Next.js 15.x.x
- Local: http://localhost:3000
✓ Ready
```

Visit [http://localhost:3000](http://localhost:3000) to confirm the app is running.

---

## Project Structure

```
src/
├── app/              # Next.js App Router (pages & layouts)
├── components/       # Reusable UI components
│   ├── common/       # Generic components (Button, Input, Modal)
│   ├── layout/       # Layout components (Navbar, Footer)
│   ├── wallet/       # Wallet-related components
│   ├── identity/     # Identity & profile components
│   ├── trust/        # Trust score & badge components
│   └── charts/       # Data visualization components
├── contexts/         # React Context providers
├── hooks/            # Custom React hooks
├── services/         # Business logic & API integration
├── lib/              # Utility functions & Stellar helpers
└── types/            # TypeScript type definitions
```

### Key Conventions

- **Components** go in `src/components/<category>/` — each component gets its own file
- **Hooks** go in `src/hooks/` — prefix with `use` (e.g., `useWallet.ts`)
- **Services** go in `src/services/` — one service per domain
- **Types** go in `src/types/` — one file per domain, re-exported from `index.ts`
- **Pages** use Next.js App Router conventions in `src/app/`

---

## Development Workflow

### Branch Naming

Use descriptive branch names with a type prefix:

```
feat/identity-registration      # New feature
fix/wallet-disconnect-error     # Bug fix
docs/stellar-integration-guide  # Documentation
refactor/trust-score-calc       # Code refactoring
test/identity-service-tests     # Adding tests
chore/update-dependencies       # Maintenance
```

### Making Changes

```bash
# 1. Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main

# 2. Create your branch
git checkout -b feat/my-feature

# 3. Make changes with frequent commits
git add .
git commit -m "feat: add identity registration form"

# 4. Push to your fork
git push origin feat/my-feature

# 5. Open a Pull Request on GitHub
```

### Running Checks Before Submitting

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Formatting
npm run format:check

# Tests
npm run test

# Build (ensure production build works)
npm run build
```

---

## Coding Standards

### TypeScript

- **Strict mode** is enabled — no `any` types unless absolutely necessary
- Use **interfaces** for object shapes, **types** for unions/intersections
- Export types from the `src/types/` directory
- Use **explicit return types** for exported functions

```typescript
// ✅ Good
export function formatAddress(address: string): string {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

// ❌ Bad
export function formatAddress(address: any) {
  return address.slice(0, 4) + '...' + address.slice(-4);
}
```

### React Components

- Use **functional components** with TypeScript interfaces for props
- Use **named exports** (not default exports) for components
- Keep components focused — one responsibility per component
- Co-locate component-specific styles

```typescript
// ✅ Good
interface TrustBadgeProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export function TrustBadge({ score, size = 'md' }: TrustBadgeProps) {
  return <div className={`trust-badge trust-badge--${size}`}>...</div>;
}
```

### Design System

To maintain a consistent premium look, please refer to our [Design System](docs/DESIGN_SYSTEM.md) before building new UI components. 

- Use **CSS Custom Properties** (variables) for colors.
- Follow the typography hierarchy (Outfit for headings, Inter for body).
- Utilize existing utility classes (`.card`, `.glass`, `.btn-primary`).

### File Naming

| Type | Convention | Example |
|---|---|---|
| Components | PascalCase | `TrustBadge.tsx` |
| Hooks | camelCase with `use` prefix | `useWallet.ts` |
| Services | camelCase | `identity.ts` |
| Types | camelCase | `identity.ts` |
| Utilities | camelCase | `utils.ts` |
| CSS Modules | PascalCase + .module | `TrustBadge.module.css` |

---

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type | Description |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation change |
| `style` | Code style (formatting, no logic change) |
| `refactor` | Code refactoring |
| `test` | Adding or updating tests |
| `chore` | Build process, dependencies, tooling |
| `perf` | Performance improvement |
| `ci` | CI/CD changes |

### Examples

```
feat(identity): add username registration form
fix(wallet): resolve disconnect on network switch
docs(readme): update installation instructions
test(trust): add trust score calculation tests
chore(deps): update @stellar/stellar-sdk to 12.x
```

---

## Pull Request Process

### Before Submitting

- [ ] Code compiles without errors (`npm run type-check`)
- [ ] All tests pass (`npm run test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Code is formatted (`npm run format:check`)
- [ ] New features include tests
- [ ] Documentation is updated if needed

### PR Template

When you open a PR, please fill out the template with:

1. **Description** — What does this PR do?
2. **Related Issue** — Link to the issue being addressed
3. **Type of Change** — Feature, fix, docs, etc.
4. **Testing** — How was this tested?
5. **Screenshots** — If there are UI changes

### Review Process

1. A maintainer will review your PR within **3 business days**
2. Address any requested changes
3. Once approved, a maintainer will merge your PR
4. Your contribution will be credited in the changelog

---

## Issue Guidelines

### Good Issue Titles

```
✅ "Identity registration fails when username contains special characters"
✅ "Add trust score history chart to profile page"
❌ "It's broken"
❌ "Need help"
```

### Labels

| Label | Description |
|---|---|
| `good first issue` | Great for newcomers |
| `help wanted` | Extra attention needed |
| `bug` | Something isn't working |
| `enhancement` | New feature request |
| `documentation` | Documentation improvement |
| `stellar` | Stellar/Soroban specific |
| `priority: high` | Urgent issue |

---

## Stellar-Specific Guidelines

### Working with Soroban Contracts

- Contract interactions go through the `src/services/` layer
- Always handle transaction failures gracefully
- Test against **testnet** before submitting PRs
- Use the Stellar Laboratory for debugging: https://laboratory.stellar.org

### Wallet Integration

- All wallet interactions should go through `useWallet` hook
- Never store private keys — Freighter handles signing
- Always check network before submitting transactions
- Handle wallet not installed, locked, and rejected states

### Testing Against Testnet

```bash
# Get testnet lumens from Friendbot
curl "https://friendbot.stellar.org?addr=YOUR_TESTNET_ADDRESS"
```

---

## Getting Help

- 💬 **Discussions** — Use [GitHub Discussions](../../discussions) for questions
- 🐛 **Issues** — Use [GitHub Issues](../../issues) for bugs and features
- 📖 **Docs** — Check the `docs/` folder for guides
- 🌐 **Stellar Docs** — [Stellar Developer Docs](https://developers.stellar.org)

---

## Recognition

All contributors are recognized in our [CHANGELOG](CHANGELOG.md). We believe every contribution matters, no matter how small.

Thank you for helping build the trust layer for digital payments! 🚀
