'use client';

import { useState, useMemo, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CHANNELS_DATA, Channel } from '@/lib/channels';
import { CONSTANTS } from '@/lib/seo';
import ReactCountryFlag from 'react-country-flag';
import CountryMarquee from '../../components/CountryMarquee';
import { 
  Tv, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Search, 
  Radio, 
  Layers, 
  Wifi, 
  Flame 
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ChannelsCategoryPage({ params }: PageProps) {
  const { slug } = use(params);
  const data = CHANNELS_DATA[slug];

  if (!data) {
    notFound();
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter channels dynamically
  const filteredChannels = useMemo(() => {
    return data.channels.filter((ch: Channel) => {
      const matchesSearch =
        ch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ch.countryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ch.countryCode.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCountry = selectedCountry ? ch.countryCode === selectedCountry : true;
      const matchesCat = selectedCategory === 'All' ? true : ch.category === selectedCategory;

      return matchesSearch && matchesCountry && matchesCat;
    });
  }, [data.channels, searchTerm, selectedCountry, selectedCategory]);

  const categories = ['All', 'Sports', 'Entertainment', 'Cinema', 'News', 'Documentary', 'Kids'];

  return (
    <main className="min-h-screen bg-[#003554] text-[#fff1d0] pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#3CAFFF]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-3/4 right-10 w-96 h-96 bg-[#fdc500]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <Link 
            href="/#channels" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#3CAFFF] hover:text-[#fdc500] transition-colors uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Lineup Overview
          </Link>
          <div className="flex items-center gap-2 text-xs font-bold text-[#fdc500] uppercase tracking-wider bg-[#00263d] px-4 py-2 rounded-full border border-white/10">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Edge CDN Live Feed Status: Optimal</span>
          </div>
        </div>

        {/* Hero Section */}
        <header className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#3CAFFF] text-[#003554] font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 shadow-lg">
            <Tv className="w-4 h-4 text-[#003554]" />
            <span>{data.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#fff1d0] mb-6 leading-tight">
            {data.title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#fff1d0]/80 font-medium max-w-3xl mx-auto leading-relaxed mb-6">
            {data.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-black uppercase tracking-widest text-[#fdc500]">
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#3CAFFF]" /> 15,000+ Total Live Channels</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-[#3CAFFF]" /> Anti-Freeze VIP Protocol</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#3CAFFF]" /> 99.9% Verified Uptime</span>
          </div>
        </header>

        {/* Infinite Country Flags Ticker */}
        <CountryMarquee 
          selectedCountry={selectedCountry}
          onSelectCountry={(code) => setSelectedCountry(code)}
        />

        {/* Live Filter Controls Bar */}
        <section className="bg-[#00263d]/90 border-2 border-white/10 rounded-3xl p-4 sm:p-6 mb-10 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-[#fff1d0]/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search channel or country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#003554] border border-white/10 rounded-full pl-12 pr-4 py-3 text-sm text-[#fff1d0] placeholder-[#fff1d0]/40 focus:outline-none focus:border-[#3CAFFF] transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#fff1d0]/50 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <Layers className="w-4 h-4 text-[#fdc500] shrink-0 hidden sm:block mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#3CAFFF] text-[#003554] shadow-[0_0_15px_rgba(60,175,255,0.4)]'
                      : 'bg-[#003554] text-[#fff1d0]/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter Counter */}
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#fff1d0]/60">
            <span>
              Showing <strong className="text-[#fdc500] font-black">{filteredChannels.length}</strong> of {data.channels.length} Featured Channels
              {selectedCountry && ` in [${selectedCountry}]`}
            </span>
            <span className="hidden sm:inline text-[#3CAFFF] font-black">
              24/7 EPG Synchronized
            </span>
          </div>
        </section>

        {/* Modern Channel Cards Grid */}
        <section aria-label={`${data.title} Listings`}>
          {filteredChannels.length === 0 ? (
            <div className="text-center py-20 bg-[#00263d]/50 rounded-3xl border border-white/10">
              <Tv className="w-12 h-12 text-[#3CAFFF]/40 mx-auto mb-4" />
              <h3 className="text-xl font-black text-[#fff1d0] uppercase">No channels match your criteria</h3>
              <p className="text-sm text-[#fff1d0]/60 mt-2 mb-6">Try searching for a different country or clearing filters.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCountry(null); setSelectedCategory('All'); }}
                className="px-6 py-2.5 rounded-full bg-[#fdc500] text-[#003554] font-black text-xs uppercase tracking-widest"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredChannels.map((channel, idx) => (
                <div
                  key={`${channel.name}-${idx}`}
                  className="group relative bg-[#00263d]/80 hover:bg-[#00263d] backdrop-blur-md border-2 border-white/5 hover:border-[#fdc500] rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(253,197,0,0.15)] flex flex-col justify-between overflow-hidden"
                >
                  {/* Neon Top Edge Line On Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fdc500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Card Header: Flag & Meta */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      
                      {/* Flag with Status Ping */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#3CAFFF] p-0.5 bg-[#003554] shadow-md group-hover:scale-105 group-hover:border-[#fdc500] transition-all flex items-center justify-center">
                          <ReactCountryFlag
                            countryCode={channel.countryCode}
                            svg
                            style={{
                              width: '2.5em',
                              height: '2.5em',
                              objectFit: 'cover',
                              borderRadius: '50%',
                            }}
                            title={channel.countryName}
                          />
                        </div>
                        {/* Live Online Ping */}
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#00263d] rounded-full" />
                      </div>

                      {/* Resolution & Bitrate Tags */}
                      <div className="flex flex-col items-end gap-1">
                        <span
                          className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border shadow-sm ${
                            channel.quality.includes('4K')
                              ? 'bg-[#fdc500] text-[#003554] border-[#fdc500]'
                              : 'bg-[#3CAFFF]/20 text-[#3CAFFF] border-[#3CAFFF]/40'
                          }`}
                        >
                          {channel.quality}
                        </span>
                        <span className="text-[9px] font-bold text-[#fff1d0]/50 uppercase tracking-widest">
                          {channel.bitrate}
                        </span>
                      </div>
                    </div>

                    {/* Channel Name */}
                    <h3 className="text-base sm:text-lg font-black text-[#fff1d0] group-hover:text-[#fdc500] transition-colors leading-snug tracking-tight mb-2">
                      {channel.name}
                    </h3>
                  </div>

                  {/* Card Footer Details */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold bg-white/5 px-2.5 py-1 rounded-md text-[#fff1d0]/80 uppercase">
                        {channel.category}
                      </span>
                      <span className="text-[10px] font-black text-[#3CAFFF] uppercase">
                        {channel.countryName}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[#fdc500] text-[10px] font-black uppercase">
                      <Wifi className="w-3 h-3 text-emerald-400" />
                      <span>Live Stream</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Global IPTV Coverage Banner */}
        <aside className="mt-20 max-w-5xl mx-auto text-center bg-gradient-to-r from-[#00263d] via-[#001f33] to-[#00263d] border-4 border-[#3CAFFF] rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#fdc500] text-[#003554] px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest mb-4">
              <Flame className="w-4 h-4 fill-current" />
              <span>Unrestricted Worldwide Access</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#fff1d0] mb-4">
              Stream All Worldwide Channels On {CONSTANTS.BRAND_NAME}
            </h2>
            <p className="text-sm sm:text-base text-[#fdc500] font-bold max-w-2xl mx-auto mb-8 leading-relaxed">
              Instant activation across Smart TVs, Firestick, Android, Apple TV, and MAG boxes with anti-freeze servers and 7-day catch-up.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#fdc500] text-[#003554] font-black text-sm uppercase tracking-widest hover:bg-amber-400 transition-all hover:scale-105 shadow-[0_0_35px_rgba(253,197,0,0.4)]"
              >
                Choose Subscription Plan
              </Link>
              <Link
                href="/setup"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-[#fff1d0] font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                Setup Installation Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}