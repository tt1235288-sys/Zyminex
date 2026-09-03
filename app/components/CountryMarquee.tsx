'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Country {
  name: string;
  code: string;
  flagUrl: string;
  channelCount?: string;
}

// Default country list for the marquee/filter
const DEFAULT_COUNTRIES: Country[] = [
  { name: 'United States', code: 'us', flagUrl: 'https://flagcdn.com/w80/us.png', channelCount: '4,500+' },
  { name: 'United Kingdom', code: 'gb', flagUrl: 'https://flagcdn.com/w80/gb.png', channelCount: '3,200+' },
  { name: 'Canada', code: 'ca', flagUrl: 'https://flagcdn.com/w80/ca.png', channelCount: '2,100+' },
  { name: 'Italy', code: 'it', flagUrl: 'https://flagcdn.com/w80/it.png', channelCount: '2,800+' },
  { name: 'Germany', code: 'de', flagUrl: 'https://flagcdn.com/w80/de.png', channelCount: '2,400+' },
  { name: 'France', code: 'fr', flagUrl: 'https://flagcdn.com/w80/fr.png', channelCount: '2,200+' },
  { name: 'Spain', code: 'es', flagUrl: 'https://flagcdn.com/w80/es.png', channelCount: '1,900+' },
  { name: 'Brazil', code: 'br', flagUrl: 'https://flagcdn.com/w80/br.png', channelCount: '1,500+' },
  { name: 'Arab World', code: 'sa', flagUrl: 'https://flagcdn.com/w80/sa.png', channelCount: '3,800+' },
  { name: 'Latin America', code: 'mx', flagUrl: 'https://flagcdn.com/w80/mx.png', channelCount: '2,500+' },
];

interface CountryMarqueeProps {
  countries?: Country[];
  selectedCountry?: string | null;
  onSelectCountry?: (countryName: string | null) => void;
  isInteractiveFilter?: boolean;
}

export default function CountryMarquee({
  countries = DEFAULT_COUNTRIES,
  selectedCountry = null,
  onSelectCountry,
  isInteractiveFilter = false,
}: CountryMarqueeProps) {
  // Internal state if used standalone
  const [activeCountry, setActiveCountry] = useState<string | null>(selectedCountry);

  const handleCountryClick = (countryName: string) => {
    const newValue = activeCountry === countryName ? null : countryName;
    setActiveCountry(newValue);
    if (onSelectCountry) {
      onSelectCountry(newValue);
    }
  };

  return (
    <div className="w-full py-8 overflow-hidden bg-[#003554]/60 backdrop-blur-md border-y border-white/5 relative">
      
      {/* Optional Header for Channels page filter mode */}
      {isInteractiveFilter && (
        <div className="max-w-7xl mx-auto px-4 mb-6 flex items-center justify-between">
          <h3 className="text-sm font-black uppercase tracking-widest text-[#fff1d0]">
            Filter by Country Feed
          </h3>
          {activeCountry && (
            <button 
              onClick={() => { setActiveCountry(null); if(onSelectCountry) onSelectCountry(null); }}
              className="text-xs font-bold text-[#3CAFFF] hover:underline uppercase"
            >
              Reset Filter ✕
            </button>
          )}
        </div>
      )}

      {/* Marquee Slider Track / Grid */}
      <div className="flex w-full overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 gap-4 justify-start lg:justify-center items-center">
        {countries.map((country) => {
          const isSelected = activeCountry === country.name;

          return (
            <div
              key={country.code}
              onClick={() => handleCountryClick(country.name)}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2 transition-all duration-300 shrink-0 cursor-pointer ${
                isSelected 
                  ? 'bg-[#3CAFFF] border-[#fff1d0] text-[#003554] shadow-lg scale-105' 
                  : 'bg-white/[0.03] border-white/10 hover:border-[#3CAFFF]/50 hover:bg-white/[0.06] text-[#fff1d0]'
              }`}
            >
              <div className="relative w-7 h-5 rounded overflow-hidden shadow-sm shrink-0 border border-black/20">
                <Image
                  src={country.flagUrl}
                  alt={`${country.name} streaming channels`}
                  fill
                  className="object-cover"
                  sizes="28px"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wide leading-none">
                  {country.name}
                </span>
                {country.channelCount && (
                  <span className={`text-[10px] font-bold mt-1 ${isSelected ? 'text-[#003554]/80' : 'text-[#fdc500]'}`}>
                    {country.channelCount} Feeds
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}