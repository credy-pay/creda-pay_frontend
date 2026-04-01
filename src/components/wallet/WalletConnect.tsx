'use client';

import React from 'react';
import { useWallet } from '@/contexts/WalletContext';

export function WalletConnect() {
    const { publicKey, isConnected, isConnecting, connect, disconnect, error } = useWallet();

    const truncateAddress = (address: string) => {
        return `${address.slice(0, 4)}...${address.slice(-4)}`;
    };

    if (isConnected && publicKey) {
        return (
            <div className="flex items-center gap-4">
                <div className="flex flex-col text-right">
                    <span className="text-sm font-medium text-slate-900 border border-slate-200 px-3 py-1 rounded-full bg-slate-50">
                        {truncateAddress(publicKey)}
                    </span>
                </div>
                <button
                    onClick={disconnect}
                    className="text-sm font-semibold text-red-600 hover:text-red-700 transition"
                >
                    Disconnect
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-end gap-2">
            <button
                onClick={connect}
                disabled={isConnecting}
                className={`px-6 py-2 rounded-full font-bold transition flex items-center gap-2 
          ${isConnecting ? 'bg-slate-300 cursor-not-allowed shadow-none' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl active:scale-95'}`}
            >
                {isConnecting ? (
                    <>
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Connecting...
                    </>
                ) : (
                    'Connect Wallet'
                )}
            </button>
            {error && <span className="text-xs text-red-600 font-medium">{error}</span>}
        </div>
    );
}
