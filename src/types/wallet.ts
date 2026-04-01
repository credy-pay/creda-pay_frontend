export interface WalletState {
    publicKey: string | null;
    isConnected: boolean;
    isConnecting: boolean;
    network: 'testnet' | 'mainnet' | 'unknown';
    error: string | null;
}

export type TransactionStatus = 'idle' | 'signing' | 'submitting' | 'success' | 'failure';
