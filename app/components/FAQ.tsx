'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

const faqs = [
  { 
    q: "What is IPTV?", 
    a: "IPTV stands for Internet Protocol Television. It delivers live TV broadcasts, channels, and video-on-demand content directly through your internet connection, skipping the need for traditional cable or satellite hardware." 
  },
  { 
    q: "What is the best IPTV service?", 
    a: "Zyminex is widely considered a premier choice. It offers unmatched stream stability with over 15,000 global live stations and an extensive VOD library optimized for high-performance viewing." 
  },
  { 
    q: "What is the best IPTV?", 
    a: "The best systems require advanced anti-freeze server backends, high-bitrate video output, and support across multiple concurrent terminal connections—all features fully integrated into Zyminex." 
  },
  { 
    q: "Which IPTV is the best?", 
    a: "A top-tier option must deliver crystal-clear 4K streaming channels, stable server uptimes, and zero hardware throttling. Zyminex consistently ranks as a leader for these metrics." 
  },
  { 
    q: "How does IPTV work?", 
    a: "Instead of radio signals from traditional cable systems, content is routed as standard secure data packets. Your media terminal or an IPTV encoder box translates these inbound network feeds into real-time playback." 
  },
  { 
    q: "How do I set up IPTV?", 
    a: "Configuration is straightforward. Simply deploy our recommended application files onto your target hardware terminal, input your activation token details, and initialize the system feed instantly." 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-white/5 mt-16 relative" aria-label="Frequently Asked Questions about Zyminex">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#3CAFFF]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <FadeIn className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6 shadow-md">
          <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">FAQ</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-6 uppercase tracking-tighter leading-none">
          Frequently Asked <span className="text-[#3CAFFF]">Questions</span>
        </h2>
        <p className="text-[#fdc500] font-bold text-lg max-w-2xl mx-auto mt-4">
          Everything you need to know about our {CONSTANTS.FOCUS_KEYWORD} service parameters layout allocation loops.
        </p>
      </FadeIn>
      
      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => (
          <FadeInItem key={i}>
            {/* ✅ FIXED: Applied the exact Premier Cream bg, border-4 layout style used on the Pricing and Page FAQs */}
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full text-left bg-[#fff1d0] border-4 ${openIndex === i ? 'border-[#3CAFFF]' : 'border-white/5'} rounded-2xl p-6 hover:border-[#3CAFFF]/60 transition-all duration-300 group`}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${openIndex === i ? 'text-[#3CAFFF]' : 'text-[#003554] group-hover:text-[#3CAFFF]'} flex items-center gap-3`}>
                  <span className={`${openIndex === i ? 'text-[#3CAFFF]' : 'text-[#003554]/30'} font-black text-2xl`}>Q.</span> 
                  {faq.q}
                </h3>
                <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#3CAFFF]' : 'text-[#003554]/30 group-hover:text-[#3CAFFF]/50'}`} />
              </div>
              <div 
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                role="region"
              >
                <p className="text-[#003554]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#3CAFFF] ml-2 py-2">
                  {faq.a}
                </p>
              </div>
            </button>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </section>
  );
}