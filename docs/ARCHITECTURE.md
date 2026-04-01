# Creda Pay Architecture

This document provides a detailed overview of the technical architecture of the Creda Pay frontend.

## 🏗️ High-Level Architecture

Creda Pay is a decentralized application (dApp) built on the Stellar network using Soroban smart contracts. The frontend is built with Next.js 15, focusing on providing a premium user experience while interacting with complex on-chain logic.

### Layered Structure

We follow a clean, layered architecture to separate concerns and improve maintainability:

1.  **UI Layer (src/app, src/components)**:
    -   Next.js App Router for routing.
    -   Small, reusable components in `src/components`.
    -   Tailwind CSS for modern, premium styling.

2.  **Context/State Layer (src/contexts)**:
    -   `WalletContext`: Manages Freighter wallet connection and account state.
    -   `IdentityContext`: Manages user profile, reputation, and identity registration.

3.  **Hooks Layer (src/hooks)**:
    -   `useWallet`: Provides simple interface for wallet actions.
    -   `useIdentity`: Interacts with the Identity Context.
    -   `useSoroban`: Generic helper for calling Soroban contracts.

4.  **Services Layer (src/services)**:
    -   `stellarService`: Low-level Stellar SDK wrapper for network-level operations.
    -   `identityService`: High-level service specific to the Identity Registry contract.
    -   `trustService`: High-level service for interacting with the Trust Engine.

5.  **Lib Layer (src/lib)**:
    -   `stellar/`: Pure utility functions for XDR processing, address formatting, etc.
    -   `constants.ts`: Global configuration and contract IDs.

## 🔗 Stellar Integration

Creda Pay interacts with the Stellar network through:
-   **Horizon API**: For standard Stellar operations (payments, account history).
-   **Soroban RPC**: For interacting with smart contracts (Identity, Trust).
-   **Freighter Wallet**: For secure transaction signing.

## 📊 Identity Registry

The Identity Registry is a Soroban contract that maps human-readable names to public keys. The frontend resolves these names through the `identityService`.

## ✅ Trust Engine

Trust scores are computed on-chain based on activity metrics. The frontend displays these scores and the underlying data points that contribute to the reputation.

## 🚀 Performance & UX

-   **Optimistic UI**: We update the UI immediately upon transaction submission.
-   **SSR/CSR Balance**: Static content is SSR, while all wallet/contract interaction is CSR within the providers.
-   **Micro-animations**: Used to guide the user during waiting periods (signing, ledger inclusion).
