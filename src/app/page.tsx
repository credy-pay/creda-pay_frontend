import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center pb-40 overflow-hidden">
      {/* Hero Section */}
      <section className="mt-20 md:mt-32 max-w-7xl mx-auto flex flex-col items-center text-center relative px-6 w-full">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full -z-10 animate-pulse-soft"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full -z-10 rotate-12"></div>

        <div className="flex items-center gap-2 mb-10 px-5 py-2.5 bg-blue-50/50 backdrop-blur-sm border border-blue-100 rounded-full animate-float shadow-sm hover:bg-blue-50 transition cursor-default">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm font-black text-blue-600 tracking-widest uppercase">Live on Stellar Testnet</span>
        </div>

        <h1 className="text-7xl md:text-[120px] font-black tracking-tightest leading-[0.85] text-slate-900 group mb-12">
          Identity <br />
          <span className="text-gradient drop-shadow-sm inline-block transform -rotate-1 group-hover:rotate-0 transition-transform duration-700">Is Credibility.</span>
        </h1>

        <p className="max-w-3xl text-xl md:text-3xl font-bold text-slate-500 leading-relaxed md:leading-snug mb-16 px-4 md:px-0">
          Credy Pay is the open trust layer for digital payments. Transform your Stellar wallet into a portable financial identity that grows with every interaction.
        </p>

        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto px-6 md:px-0">
          <Link href="/register" className="btn-primary text-xl px-12 py-6">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
          <Link href="/explore" className="px-12 py-5.5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-black text-xl hover:bg-slate-50 hover:border-slate-200 transition active:scale-95 text-center flex items-center justify-center">
            Explore Profiles
          </Link>
        </div>

        {/* Visual Element: Card Mockup */}
        <div className="mt-32 w-full max-w-5xl mx-auto px-4 relative group">
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-3xl -z-10 group-hover:bg-blue-600/10 transition duration-700"></div>
          <div className="card relative overflow-hidden flex flex-col md:flex-row gap-12 items-center text-left py-16 md:px-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Your Trust, <br />Everywhere.</h2>
                <p className="text-xl font-bold text-slate-500 max-w-sm leading-relaxed">Portable financial reputation that you own. No permissions required.</p>
              </div>
              <div className="pt-4 flex flex-col gap-5">
                {['Activity-based scoring', 'On-chain identity', 'Community endorsements'].map((feature) => (
                  <div key={feature} className="flex items-center gap-4 group/item">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:text-white transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <span className="font-black text-slate-700 text-lg group-hover/item:translate-x-1 transition-transform">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full md:w-auto relative aspect-[4/5] min-h-[400px]">
              {/* Mock profile card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-slate-900 rounded-[32px] p-8 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black italic">C</div>
                  <div className="text-right">
                    <div className="text-blue-400 text-[10px] uppercase tracking-widest font-black mb-1">Status</div>
                    <div className="text-white text-xs font-black uppercase tracking-widest border border-white/20 px-2.5 py-1 rounded-full bg-white/5">Verified</div>
                  </div>
                </div>
                <div className="space-y-1 mb-10">
                  <div className="text-slate-400 text-sm font-bold tracking-wide">Identity</div>
                  <div className="text-white text-3xl font-black tracking-tightest">alex_stellar.credy</div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase tracking-widest font-black mb-1">Trust Score</div>
                    <div className="text-white text-3xl font-black tabular-nums tracking-tighter">842</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase tracking-widest font-black mb-1">Endorsements</div>
                    <div className="text-white text-3xl font-black tabular-nums tracking-tighter">24</div>
                  </div>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-8">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[84%]" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">Reputation: ELITE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="mt-40 max-w-7xl mx-auto px-8 w-full">
        <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tightest leading-none">Built for the <br /><span className="text-gradient">Next Economy.</span></h2>
          <p className="text-xl font-bold text-slate-500">Credy Pay transforms anonymous Stellar addresses into trust-bearing financial profiles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Identity Registry',
              desc: 'Map human-readable names to your Stellar wallet. Build a brand around your financial activity.',
              icon: '🔗',
              color: 'blue'
            },
            {
              title: 'Activity Indexing',
              desc: 'Our engine tracks your on-chain behavior over time to compute real, earned credibility.',
              icon: '📊',
              color: 'indigo'
            },
            {
              title: 'Verification System',
              desc: 'Optional layers of trust. Link your organization, email, or community attestations.',
              icon: '✅',
              color: 'violet'
            }
          ].map((f) => (
            <div key={f.title} className="card group hover:bg-slate-900 group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-slate-800 transition duration-500 shadow-sm border border-slate-100 group-hover:border-slate-700">{f.icon}</div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-white transition tracking-tightest">{f.title}</h3>
              <p className="text-slate-500 font-bold leading-relaxed group-hover:text-slate-400 transition">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Quote / Social Proof */}
      <section className="mt-60 max-w-5xl mx-auto px-8 w-full text-center">
        <div className="space-y-12">
          <span className="text-9xl font-serif text-blue-100 -mb-20 block leading-none select-none italic tracking-tighter">“</span>
          <blockquote className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tightest leading-tight italic decoration-blue-500/20 underline-offset-8">
            Digital finance solved value transfer. <br />
            It did <span className="text-blue-600">not</span> solve trust.
          </blockquote>
          <p className="text-sm font-black text-blue-600 uppercase tracking-widest pt-8">— The Credy Pay Philosophy</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-80 w-full px-8">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[56px] p-12 md:p-24 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-500/20 transition duration-1000"></div>

          <div className="relative text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-20">
            <div className="max-w-2xl space-y-8">
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tightest leading-[0.9]">Ready to build <br /><span className="text-blue-500">History?</span></h2>
              <p className="text-slate-400 text-xl font-bold leading-relaxed max-w-lg">Join the open trust layer and start building your portable financial reputation today on Stellar.</p>
              <div className="flex flex-col md:flex-row gap-6 pt-4">
                <Link href="/register" className="btn-primary text-xl px-12 py-6">Register Now</Link>
                <Link href="/docs" className="px-12 py-5.5 bg-slate-800 text-white rounded-2xl font-black text-xl hover:bg-slate-700 transition active:scale-95 flex items-center justify-center">Read Docs</Link>
              </div>
            </div>

            <div className="flex flex-col gap-8 md:text-right">
              <div className="space-y-1">
                <div className="text-blue-500 text-4xl md:text-7xl font-black tracking-tightest">50k+</div>
                <div className="text-slate-500 text-sm md:text-base font-black uppercase tracking-widest">Active Identities</div>
              </div>
              <div className="space-y-1">
                <div className="text-blue-500 text-4xl md:text-7xl font-black tracking-tightest">$120M+</div>
                <div className="text-slate-500 text-sm md:text-base font-black uppercase tracking-widest">Trust-Backed Volume</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
