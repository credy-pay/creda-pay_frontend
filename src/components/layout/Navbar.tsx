'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WalletConnect } from '../wallet/WalletConnect';
import { useIdentity } from '@/contexts/IdentityContext';

export function Navbar() {
    const { profile, isLoading } = useIdentity();

    return (
        <nav className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 fixed top-0 w-full z-50">
            <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2 group transition active:scale-95 hover:opacity-80">
                    <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all rotate-3 group-hover:rotate-0">
                        <span className="text-white text-xl font-bold tracking-tighter italic">C</span>
                    </div>
                    <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition">Credy Pay</span>
                </Link>

                <div className="hidden md:flex items-center gap-1 font-medium text-slate-600">
                    <Link href="/explore" className="px-4 py-2 rounded-lg hover:bg-slate-50 transition hover:text-slate-900">Explore</Link>
                    <Link href="/about" className="px-4 py-2 rounded-lg hover:bg-slate-50 transition hover:text-slate-900">How it Works</Link>
                </div>
            </div>

            <div className="flex items-center gap-6">
                {profile && !isLoading && (
                    <Link href="/dashboard" className="flex items-center gap-3 group text-slate-400 hover:text-slate-900 transition">
                        <div className="flex flex-col items-end mr-3">
                            <span className="text-sm font-bold text-slate-900 tracking-tight">{profile.username}</span>
                            <span className="text-[10px] uppercase tracking-widest font-black text-blue-600">Trust: {profile.trustScore}</span>
                        </div>
                        <div className="w-11 h-11 bg-slate-100 rounded-full border-2 border-white ring-2 ring-slate-100 group-hover:ring-blue-100 transition relative overflow-hidden bg-gradient-to-b from-blue-50 to-indigo-100 flex items-center justify-center font-black text-blue-300">
                            {profile.avatarUrl ? (
                                <Image src={profile.avatarUrl} alt={profile.username} fill className="object-cover" />
                            ) : (
                                profile.username[0].toUpperCase()
                            )}
                        </div>
                    </Link>
                )}
                <WalletConnect />
            </div>
        </nav>
    );
}
