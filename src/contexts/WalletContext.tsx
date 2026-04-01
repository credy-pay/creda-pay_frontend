'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { isConnected, getPublicKey, signTransaction, getNetwork } from '@stellar/freighter-api';
import { WalletState } from '../types/wallet';

interface WalletContextType extends WalletState {
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    sign: (xdr: string) => Promise<string | null>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<WalletState>({
        publicKey: null,
        isConnected: false,
        isConnecting: false,
        network: 'unknown',
        error: null,
    });

    const checkConnection = async () => {
        try {
            const connected = await isConnected();
            if (connected) {
                const key = await getPublicKey();
                const network = (await getNetwork()) as 'testnet' | 'mainnet' | 'unknown';
                setState((prev) => ({
                    ...prev,
                    publicKey: key,
                    isConnected: true,
                    network,
                }));
            }
        } catch (err) {
            console.error('Freighter connection check failed:', err);
        }
    };

    useEffect(() => {
        checkConnection();
    }, []);

    const connect = async () => {
        setState((prev) => ({ ...prev, isConnecting: true, error: null }));
        try {
            const connected = await isConnected();
            if (!connected) {
                throw new Error('Freighter wallet not found. Please install it.');
            }
            const key = await getPublicKey();
            const network = (await getNetwork()) as 'testnet' | 'mainnet' | 'unknown';

            setState({
                publicKey: key,
                isConnected: true,
                isConnecting: false,
                network,
                error: null,
            });
        } catch (err: any) {
            setState((prev) => ({
                ...prev,
                isConnecting: false,
                error: err.message || 'Failed to connect to wallet.',
            }));
        }
    };

    const disconnect = async () => {
        // Freighter doesn't have a direct disconnect, but we can clear local state
        setState({
            publicKey: null,
            isConnected: false,
            isConnecting: false,
            network: 'unknown',
            error: null,
        });
    };

    const sign = async (xdr: string): Promise<string | null> => {
        try {
            const signedXdr = await signTransaction(xdr, {
                network: state.network === 'mainnet' ? 'PUBLIC' : 'TESTNET',
            });
            return signedXdr;
        } catch (err) {
            console.error('Signing failed:', err);
            return null;
        }
    };

    return (
        <WalletContext.Provider value={{ ...state, connect, disconnect, sign }}>
            {children}
        </WalletContext.Provider>
    );
}

export function useWallet() {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
}
