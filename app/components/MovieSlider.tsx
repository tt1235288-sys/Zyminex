'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { CONSTANTS } from '@/lib/seo';
import { Film, Tv2, Trophy } from 'lucide-react';

interface SliderItem {
  id: string;
  imagePath: string;
  altText: string;
}

// 12 Items for each row
const movies: SliderItem[] = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `movie-${i + 1}`,
    imagePath: `/img/sliders/movies/Zyminex-movies-${number}.webp`,
    altText: `${CONSTANTS.BRAND_NAME} 4K on-demand blockbuster movie title ${i + 1}`,
  };
});

const series: SliderItem[] = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `series-${i + 1}`,
    imagePath: `/img/sliders/series/Zyminex-serie-${number}.webp`,
    altText: `${CONSTANTS.BRAND_NAME} popular television series episode release ${i + 1}`,
  };
});

const sports: SliderItem[] = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `sport-${i + 1}`,
    imagePath: `/img/sliders/sports/Zyminex-sports-${number}.webp`,
    altText: `${CONSTANTS.BRAND_NAME} live championship sports stream ${i + 1}`,
  };
});

const scrollToPricing = () => {
  if (typeof document !== 'undefined') {
    const pricingSection = document.getElementById('pricing-section') || document.querySelector('section[id*="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/pricing';
    }
  }
};

const InfiniteSlider = ({ 
  items, 
  direction = 'left', 
  speed = 35, 
  category 
}: { 
  items: SliderItem[], 
  direction?: 'left' | 'right', 
  speed?: number,
  category: string 
}) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const infiniteList = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-3">
      {/* Side Vignette Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#fff1d0] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#fff1d0] to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        className="flex gap-4 w-max"
        initial={{ x: direction === 'left' ? 0 : '-33.33%' }}
        animate={{ x: direction === 'left' ? '-33.33%' : 0 }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "loop", 
          duration: speed, 
          ease: "linear" 
        }}
      >
        {infiniteList.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            onClick={scrollToPricing}
            className="flex-shrink-0 w-32 sm:w-40 md:w-48 aspect-[2/3] block cursor-pointer group"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#003554] border-2 border-[#3CAFFF] shadow-md group-hover:border-[#003554] group-hover:shadow-2xl transition-all duration-300">
              {!failedImages[`${item.id}-${idx}`] ? (
                <>
                  <Image
                    src={item.imagePath}
                    alt={item.altText}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={() => setFailedImages(prev => ({ ...prev, [`${item.id}-${idx}`]: true }))}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003554]/95 via-[#003554]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-3 text-center">
                    <span className="text-[#3CAFFF] text-[10px] font-black uppercase tracking-wider mb-1">Ultra 4K Stream</span>
                    <p className="text-[#fff1d0] text-xs font-black uppercase tracking-widest">Get Access</p>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#003554] p-3 text-center">
                  <Film className="w-8 h-8 text-[#3CAFFF] mb-2" />
                  <span className="text-[#fff1d0] text-xs font-black uppercase tracking-wide">{category}</span>
                  <span className="text-[#fdc500] text-[10px] font-bold mt-1">4K UHD</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function MovieSlider() {
  return (
    <section className="w-full py-16 bg-[#fff1d0]">
      {/* Category 1: Blockbuster Movies */}
      <div className="mb-12">
        <div className="w-[85%] md:w-[80%] mx-auto px-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-7 bg-[#3CAFFF] rounded-full" />
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-[#003554]" />
              <h3 className="text-2xl lg:text-3xl font-black text-[#003554] uppercase tracking-tight">
                Latest 4K Movies
              </h3>
            </div>
          </div>
          <p className="text-[#003554]/80 text-sm mt-2 font-bold hidden md:block">
            Stream worldwide cinema premieres and blockbuster titles updated on daily release cycles.
          </p>
        </div>
        <InfiniteSlider items={movies} direction="left" speed={30} category="Movie" />
      </div>

      {/* Category 2: Popular Television Series */}
      <div className="mb-12">
        <div className="w-[85%] md:w-[80%] mx-auto px-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-7 bg-[#3CAFFF] rounded-full" />
            <div className="flex items-center gap-2">
              <Tv2 className="w-5 h-5 text-[#003554]" />
              <h3 className="text-2xl lg:text-3xl font-black text-[#003554] uppercase tracking-tight">
                Trending TV Series & Box Sets
              </h3>
            </div>
          </div>
          <p className="text-[#003554]/80 text-sm mt-2 font-bold hidden md:block">
            Binge-watch complete seasons with multi-language subtitle tracks and full episode archives.
          </p>
        </div>
        <InfiniteSlider items={series} direction="right" speed={30} category="Series" />
      </div>

      {/* Category 3: Live Sports & PPV */}
      <div>
        <div className="w-[85%] md:w-[80%] mx-auto px-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-7 bg-[#003554] rounded-full" />
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#003554]" />
              <h3 className="text-2xl lg:text-3xl font-black text-[#003554] uppercase tracking-tight">
                Live Sports & Pay-Per-View Events
              </h3>
            </div>
          </div>
          <p className="text-[#003554]/80 text-sm mt-2 font-bold hidden md:block">
            Catch every football league derby, boxing match, and motorsport circuit in progressive 60 FPS.
          </p>
        </div>
        <InfiniteSlider items={sports} direction="left" speed={35} category="Sports" />
      </div>
    </section>
  );
}