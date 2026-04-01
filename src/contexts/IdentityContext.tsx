'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useWallet } from './WalletContext';
import { IdentityProfile } from '../types/identity';

interface IdentityContextType {
    profile: IdentityProfile | null;
    isLoading: boolean;
    refreshProfile: () => Promise<void>;
    registerProfile: (username: string) => Promise<boolean>;
}

const IdentityContext = createContext<IdentityContextType | undefined>(undefined);

export function IdentityProvider({ children }: { children: ReactNode }) {
    const { publicKey, isConnected } = useWallet();
    const [profile, setProfile] = useState<IdentityProfile | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchProfile = async (address: string) => {
        setIsLoading(true);
        try {
            // TODO: Implement actual resolve call to Soroban contract
            // Mocking for now
            const mockProfile: IdentityProfile = {
                address,
                username: 'user' + address.slice(0, 4),
                trustScore: 450,
                verificationStatus: 'unverified',
                createdAt: Date.now(),
            };
            setProfile(mockProfile);
        } catch (err) {
            console.error('Failed to fetch profile:', err);
            setProfile(null);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isConnected && publicKey) {
            fetchProfile(publicKey);
        } else {
            setProfile(null);
            setIsLoading(false);
        }
    }, [isConnected, publicKey]);

    const refreshProfile = async () => {
        if (publicKey) await fetchProfile(publicKey);
    };

    const registerProfile = async (username: string): Promise<boolean> => {
        if (!publicKey) return false;
        try {
            // TODO: Implement actual registration call to Soroban contract
            console.log(`Registering profile: ${username} for ${publicKey}`);
            // Simulate success
            await fetchProfile(publicKey);
            return true;
        } catch (err) {
            console.error('Registration failed:', err);
            return false;
        }
    };

    return (
        <IdentityContext.Provider value={{ profile, isLoading, refreshProfile, registerProfile }}>
            {children}
        </IdentityContext.Provider>
    );
}

export function useIdentity() {
    const context = useContext(IdentityContext);
    if (context === undefined) {
        throw new Error('useIdentity must be used within an IdentityProvider');
    }
    return context;
}
