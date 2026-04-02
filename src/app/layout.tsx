import type { Metadata } from 'next';
import { Inter, Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import { WalletProvider } from '@/contexts/WalletContext';
import { IdentityProvider } from '@/contexts/IdentityContext';
import { Navbar } from '@/components/layout/Navbar';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Credy Pay | Open Trust Layer for Digital Payments',
  description: 'Transform your wallet into a portable financial reputation. Built on Stellar network.',
  keywords: 'Stellar, Soroban, Blockchain, Payments, Trust, Decentralized Identity, Credibility',
  authors: [{ name: 'Credy Pay Contributors' }],
  openGraph: {
    title: 'Credy Pay | Open Trust Layer',
    description: 'Transform your wallet into a portable financial reputation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} antialiased min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900`}>
        <WalletProvider>
          <IdentityProvider>
            <Navbar />
            <main className="pt-20 min-h-screen container mx-auto px-4 lg:px-8 max-w-[1440px]">
              {children}
            </main>
            <footer className="py-20 bg-slate-900 text-white mt-40">
              <div className="container mx-auto px-8 max-w-[1440px]">
                <div className="flex flex-col md:flex-row justify-between gap-20">
                  <div className="max-w-md">
                    <div className="flex items-center gap-3 mb-8 group cursor-default">
                      <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
                        <span className="text-white text-2xl font-black italic tracking-tighter">C</span>
                      </div>
                      <span className="text-3xl font-black tracking-tightest">Credy Pay</span>
                    </div>
                    <p className="text-slate-400 text-lg leading-relaxed mb-10">
                      The open trust layer for digital finance. Building portable reputation from participation, not permission.
                    </p>
                    <div className="flex gap-4">
                      {['Twitter', 'GitHub', 'Discord'].map((social) => (
                        <button key={social} className="px-5 py-2.5 bg-slate-800 rounded-xl font-bold hover:bg-slate-700 transition active:scale-95 text-slate-300 hover:text-white">
                          {social}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-widest text-blue-500 mb-8">Protocol</h4>
                      <ul className="space-y-4 font-bold text-slate-400">
                        <li className="hover:text-white transition cursor-pointer">Identity Layer</li>
                        <li className="hover:text-white transition cursor-pointer">Trust Engine</li>
                        <li className="hover:text-white transition cursor-pointer">Verification</li>
                        <li className="hover:text-white transition cursor-pointer">Architecture</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-widest text-blue-500 mb-8">Ecosystem</h4>
                      <ul className="space-y-4 font-bold text-slate-400">
                        <li className="hover:text-white transition cursor-pointer">Integrations</li>
                        <li className="hover:text-white transition cursor-pointer">Governance</li>
                        <li className="hover:text-white transition cursor-pointer">Contributors</li>
                        <li className="hover:text-white transition cursor-pointer">Docs</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                  <p className="text-slate-500 font-bold text-sm">© 2025 Credy Pay. MIT Licensed.</p>
                  <div className="flex gap-8 text-sm font-bold text-slate-500">
                    <span className="hover:text-slate-300 transition cursor-pointer">Terms</span>
                    <span className="hover:text-slate-300 transition cursor-pointer">Privacy</span>
                  </div>
                </div>
              </div>
            </footer>
          </IdentityProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
