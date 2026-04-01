<p align="center">
  <img src="public/creda-logo.svg" alt="Creda Pay" width="80" height="80" />
</p>

<h1 align="center">Creda Pay</h1>

<p align="center">
  <strong>Open Trust Layer for Digital Payments on Stellar</strong>
</p>

<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Stellar-Soroban-blue?logo=stellar" alt="Stellar" />
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen" alt="PRs Welcome" />
</p>

---

## 🌍 Overview

Creda Pay is an open protocol that introduces **identity, credibility, and trust** into digital payments on the [Stellar](https://stellar.org) network.

Today, digital transactions are fast and borderless — but fundamentally blind. Participants interact through anonymous wallet addresses with no native way to understand who they are paying, whether the counterparty is reliable, or whether agreements have been honored.

**Creda Pay transforms payment identities into trust-bearing financial profiles**, enabling individuals, businesses, and communities to build portable financial reputation based on real activity — not institutional permission.

### Key Features

- 🔗 **Identity Registry** — Map human-readable names to Stellar wallets
- 📊 **Trust Engine** — Activity-based reputation scoring
- ✅ **Verification System** — Optional identity validation (email, org, community)
- 🌐 **Financial Graph** — Relationship network across identities
- 👤 **Public Profiles** — Trust signals, activity history, endorsements & badges
- 🔌 **Wallet Integration** — Freighter wallet connect with Soroban support

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Freighter Wallet** browser extension ([install](https://freighter.app))
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/creda-pay/creda-pay_frontend.git
cd creda-pay_frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

Create a `.env.local` file from `.env.example`:

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_STELLAR_NETWORK` | Stellar network (`testnet` or `mainnet`) | `testnet` |
| `NEXT_PUBLIC_SOROBAN_RPC_URL` | Soroban RPC endpoint | `https://soroban-testnet.stellar.org` |
| `NEXT_PUBLIC_HORIZON_URL` | Horizon API endpoint | `https://horizon-testnet.stellar.org` |
| `NEXT_PUBLIC_IDENTITY_CONTRACT_ID` | Identity Registry contract address | — |
| `NEXT_PUBLIC_TRUST_CONTRACT_ID` | Trust Engine contract address | — |
| `NEXT_PUBLIC_NETWORK_PASSPHRASE` | Stellar network passphrase | `Test SDF Network ; September 2015` |

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run type-check` | Run TypeScript compiler checks |
| `npm run test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

---

## 🏗️ Architecture

Creda Pay frontend follows a **layered architecture** that cleanly separates concerns:

```
┌─────────────────────────────────────────────┐
│                   UI Layer                   │
│         (Pages, Components, Layouts)         │
├─────────────────────────────────────────────┤
│                 Hooks Layer                  │
│    (useWallet, useTrust, useIdentity, etc)   │
├─────────────────────────────────────────────┤
│               Context Layer                  │
│     (WalletContext, IdentityContext, etc)     │
├─────────────────────────────────────────────┤
│              Services Layer                  │
│   (Stellar SDK, Contract calls, API calls)   │
├─────────────────────────────────────────────┤
│                 Lib Layer                    │
│   (Stellar helpers, utils, type definitions) │
└─────────────────────────────────────────────┘
```

### Core Layers

| Layer | Purpose |
|---|---|
| **UI** | Next.js App Router pages, reusable components, layouts |
| **Hooks** | Custom React hooks for wallet, identity, trust interactions |
| **Contexts** | React contexts for global state (wallet connection, identity) |
| **Services** | Business logic — Stellar SDK calls, Soroban contract interactions, API |
| **Lib** | Pure utility functions, Stellar helpers, constants, type definitions |

---

## 📁 Project Structure

```
creda-pay_frontend/
├── .github/                    # GitHub configuration
│   ├── ISSUE_TEMPLATE/         # Issue templates (bug, feature, task)
│   ├── workflows/              # CI/CD GitHub Actions
│   └── PULL_REQUEST_TEMPLATE.md
│
├── public/                     # Static assets
│   ├── creda-logo.svg          # App logo
│   └── icons/                  # App icons & favicons
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Landing / home page
│   │   ├── globals.css         # Global styles & design tokens
│   │   ├── (auth)/             # Auth-gated route group
│   │   │   ├── dashboard/      # User dashboard
│   │   │   ├── profile/        # Identity profile management
│   │   │   └── settings/       # Account settings
│   │   ├── explore/            # Public identity explorer
│   │   └── identity/
│   │       └── [username]/     # Public profile page
│   │
│   ├── components/             # Reusable UI components
│   │   ├── common/             # Buttons, inputs, modals, cards
│   │   ├── layout/             # Navbar, footer, sidebar
│   │   ├── wallet/             # Wallet connect button & status
│   │   ├── identity/           # Identity cards, registration forms
│   │   ├── trust/              # Trust score display, badges
│   │   └── charts/             # Activity graphs, trust visualizations
│   │
│   ├── contexts/               # React Context providers
│   │   ├── WalletContext.tsx    # Stellar wallet state
│   │   └── IdentityContext.tsx  # User identity state
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useWallet.ts        # Wallet connection & transactions
│   │   ├── useIdentity.ts      # Identity registry interactions
│   │   ├── useTrust.ts         # Trust score queries
│   │   └── useSoroban.ts       # Generic Soroban contract calls
│   │
│   ├── services/               # Business logic & API calls
│   │   ├── stellar.ts          # Stellar SDK wrapper
│   │   ├── soroban.ts          # Soroban contract interactions
│   │   ├── identity.ts         # Identity registry service
│   │   ├── trust.ts            # Trust engine service
│   │   └── api.ts              # Backend API client
│   │
│   ├── lib/                    # Utilities & helpers
│   │   ├── stellar/            # Stellar-specific utilities
│   │   │   ├── client.ts       # SorobanClient setup
│   │   │   ├── network.ts      # Network configuration
│   │   │   └── utils.ts        # Address formatting, XDR helpers
│   │   ├── constants.ts        # App-wide constants
│   │   └── utils.ts            # General utility functions
│   │
│   └── types/                  # TypeScript type definitions
│       ├── identity.ts         # Identity & profile types
│       ├── trust.ts            # Trust score & badge types
│       ├── wallet.ts           # Wallet & transaction types
│       └── index.ts            # Re-exports
│
├── docs/                       # Project documentation
│   ├── ARCHITECTURE.md         # Detailed architecture guide
│   ├── STELLAR_INTEGRATION.md  # Stellar & Soroban integration guide
│   └── COMPONENTS.md           # Component documentation
│
├── .env.example                # Environment variable template
├── .prettierrc                 # Prettier configuration
├── .prettierignore             # Prettier ignore rules
├── CONTRIBUTING.md             # Contribution guidelines
├── CODE_OF_CONDUCT.md          # Community code of conduct
├── CHANGELOG.md                # Version changelog
├── LICENSE                     # MIT License
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies & scripts
```

---

## 🔗 Stellar Integration

Creda Pay is built on the **Stellar network** using **Soroban smart contracts**.

### Wallet Connection

We use [Freighter](https://freighter.app) for wallet connectivity:

```typescript
import { useWallet } from '@/hooks/useWallet';

function MyComponent() {
  const { connect, disconnect, publicKey, isConnected } = useWallet();
  // ...
}
```

### Contract Interaction

Soroban contracts are called through the services layer:

```typescript
import { identityService } from '@/services/identity';

// Register a new identity
await identityService.register(username, publicKey);

// Look up an identity
const profile = await identityService.resolve(username);
```

### Supported Networks

| Network | RPC URL | Purpose |
|---|---|---|
| **Testnet** | `https://soroban-testnet.stellar.org` | Development & testing |
| **Mainnet** | `https://soroban.stellar.org` | Production |

---

## 🤝 Contributing

We love contributions! Creda Pay is an open-source project and we welcome contributors of all experience levels.

### Quick Start for Contributors

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create a branch** for your feature (`git checkout -b feat/my-feature`)
4. **Make changes** and write tests
5. **Commit** with conventional commits (`feat:`, `fix:`, `docs:`, etc.)
6. **Push** and open a **Pull Request**

Please read our full [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

### Areas We Need Help

| Area | Description |
|---|---|
| 🎨 **Frontend UX** | Components, animations, responsive design |
| 🔗 **Stellar Integration** | Soroban contracts, SDK utilities |
| 🧪 **Testing** | Unit tests, integration tests, E2E |
| 📖 **Documentation** | Guides, tutorials, API docs |
| 🌍 **Internationalization** | Translations & locale support |
| ♿ **Accessibility** | WCAG compliance, screen reader support |

---

## 📄 License

Creda Pay is open source under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ on <a href="https://stellar.org">Stellar</a>
</p>
