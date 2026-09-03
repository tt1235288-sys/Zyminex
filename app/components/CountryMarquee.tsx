'use client';

import { useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { WORLD_COUNTRIES, CountryMeta } from '@/lib/channels';
import { Globe } from 'lucide-react';

interface CountryMarqueeProps {
  selectedCountry?: string | null;
  onSelectCountry?: (code: string | null) => void;
}

export default function CountryMarquee({ selectedCountry = null, onSelectCountry }: CountryMarqueeProps) {
  // Prevent hydration mismatch during static prerendering
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Internal fallback state if used without parent props
  const [internalSelected, setInternalSelected] = useState<string | null>(null);

  const activeSelected = selectedCountry !== undefined ? selectedCountry : internalSelected;
  const handleSelect = (code: string | null) => {
    if (onSelectCountry) {
      onSelectCountry(code);
    } else {
      setInternalSelected(code);
    }
  };

  // Triple the list to create a seamless loop
  const infiniteList: CountryMeta[] = [...WORLD_COUNTRIES, ...WORLD_COUNTRIES, ...WORLD_COUNTRIES];

  if (!isMounted) {
    return <div className="w-full relative my-10 h-20 bg-[#00263d]/40 rounded-2xl animate-pulse" />;
  }

  return (
    <div className="w-full relative my-10">
      {/* Top Section Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#fdc500]">
          <Globe className="w-4 h-4 text-[#3CAFFF]" />
          <span>Browse By Country ({WORLD_COUNTRIES.length}+ Nations Available)</span>
        </div>
        {activeSelected && (
          <button
            onClick={() => handleSelect(null)}
            className="text-xs font-black uppercase tracking-wider text-[#3CAFFF] hover:text-[#fff1d0] bg-white/5 border border-white/10 px-3 py-1 rounded-full transition-colors cursor-pointer"
          >
            Clear Filter ✕
          </button>
        )}
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden py-3 bg-[#00263d]/60 border-y border-white/10 backdrop-blur-md">
        {/* Soft Left & Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#003554] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#003554] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
          {infiniteList.map((country, idx) => {
            const isSelected = activeSelected === country.code;
            return (
              <button
                key={`${country.code}-${idx}`}
                onClick={() => handleSelect(isSelected ? null : country.code)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-300 shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#fdc500] border-[#fdc500] text-[#003554] shadow-[0_0_20px_rgba(253,197,0,0.5)] scale-105'
                    : 'bg-[#003554]/80 border-white/10 text-[#fff1d0] hover:border-[#3CAFFF] hover:bg-[#3CAFFF]/20'
                }`}
                title={`Filter channels for ${country.name}`}
              >
                {/* Rounded Country Flag */}
                <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 flex items-center justify-center border border-white/20 shadow-inner">
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{
                      width: '1.6em',
                      height: '1.6em',
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                  />
                </div>
                <span className="text-xs font-black tracking-wider uppercase whitespace-nowrap">
                  {country.name}
                </span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                    isSelected ? 'bg-[#003554] text-[#fdc500]' : 'bg-white/10 text-[#fff1d0]/60'
                  }`}
                >
                  {country.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}