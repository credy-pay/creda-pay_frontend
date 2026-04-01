import { useMemo } from 'react';
import { useWallet } from '@/contexts/WalletContext';

export function useSoroban() {
    const { publicKey, sign, network } = useWallet();

    const isTestnet = useMemo(() => network === 'testnet', [network]);

    const callContract = async (contractId: string, method: string, args: any[]) => {
        if (!publicKey) throw new Error('Wallet not connected');
        // Implement Soroban contract call logic using stellar-sdk
        console.log(`Calling ${method} on ${contractId} with args:`, args);
    };

    return { callContract, isTestnet };
}
