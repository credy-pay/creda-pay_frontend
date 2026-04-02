# Stellar & Soroban Integration Guide

This guide describes how to work with the Stellar network and Soroban smart contracts within the Credy Pay repository.

## 🛠️ Tools Used
-   `@stellar/stellar-sdk`: Primary library for building transactions and interacting with the network.
-   `@stellar/freighter-api`: Browser wallet extension API for signing transactions.

## 🌐 Network Configuration

We support **Testnet** by default for development.

| Network | Passphrase | RPC / Horizon URL |
|---|---|---|
| Testnet | `Test SDF Network ; September 2015` | `https://soroban-testnet.stellar.org` |
| Mainnet | `Public Global Stellar Network ; September 2015` | `https://soroban.stellar.org` |

## 🧪 Calling Soroban Contracts

### 1. Initialize Server
```typescript
import { SorobanRpc } from '@stellar/stellar-sdk';
const server = new SorobanRpc.Server('https://soroban-testnet.stellar.org');
```

### 2. Method Invocation (Read-only)
Read-only calls use `getLedgerEntries` or specific simulation.

### 3. Transactions (Write)
1. Build transaction.
2. Sign with Freighter using `signTransaction`.
3. Submit to RPC server.
4. Wait for transaction result.

## 🔌 Wallet Connect
We use a standard `WalletConnect` component that detects `window.freighter`. Users must have the extension installed for development.

## 🗝️ Environment Variables
Check `.env.example` for all required contract IDs and network URLs.
