'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

const faqs = [
  { 
    q: `What is ${CONSTANTS.BRAND_NAME} and how does the service work?`, 
    a: `${CONSTANTS.BRAND_NAME} is a high-speed streaming platform that delivers live sports, PPV events, 15,000+ international TV channels, and 60,000+ movies directly over your internet connection without requiring satellite dishes or cable box hardware.` 
  },
  { 
    q: `Is ${CONSTANTS.BRAND_NAME} legit and safe to use?`, 
    a: `Yes, ${CONSTANTS.BRAND_NAME} is fully verified and trusted by thousands of active subscribers. We safeguard checkouts with 256-bit SSL encryption protocols, operate redundant anti-freeze servers with 99.9% verified uptime, and provide 24/7 dedicated customer assistance.` 
  },
  { 
    q: `How do I receive my ${CONSTANTS.BRAND_NAME} login and activation details?`, 
    a: `Immediately after choosing your subscription package, your official ${CONSTANTS.BRAND_NAME} login credentials—including M3U URLs and Xtream Codes API connection parameters—are dispatched to your email inbox for instant multi-device setup.` 
  },
  { 
    q: `What should I do if ${CONSTANTS.BRAND_NAME} is not working or buffering?`, 
    a: `If you experience buffering or playback latency, verify that your internet speed exceeds 25 Mbps, clear your media player cache, or toggle your player's hardware video decoder. If an issue persists, our technical team is available 24/7 via live chat and WhatsApp.` 
  },
  { 
    q: `What is the ${CONSTANTS.BRAND_NAME} cost across different devices?`, 
    a: `The ${CONSTANTS.BRAND_NAME} cost starts at an affordable $11.60 per month with flexible 3, 6, and 12-month payment options. We offer single-connection access as well as discounted multi-room packages supporting Smart TVs, Firestick, Android, and iOS hardware.` 
  },
  { 
    q: `Where can I read ${CONSTANTS.BRAND_NAME} review reddit threads and user feedback?`, 
    a: `Unfiltered community feedback and reviews can be found across independent streaming forums and Reddit discussion boards, where cord-cutters frequently highlight our zero-buffering 60 FPS sports coverage and rapid zapping speeds.` 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section 
      className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-white/5 mt-16 relative" 
      aria-label={`Frequently Asked Questions about ${CONSTANTS.BRAND_NAME}`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#3CAFFF]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <FadeIn className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6 shadow-md">
          <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">FAQ</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-6 uppercase tracking-tighter leading-none">
          Frequently Asked <span className="text-[#3CAFFF]">Questions</span>
        </h2>
        <p className="text-[#fdc500] font-bold text-lg max-w-2xl mx-auto mt-4">
          Everything you need to know about {CONSTANTS.BRAND_NAME} IPTV subscriptions, server performance, and setup.
        </p>
      </FadeIn>
      
      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => (
          <FadeInItem key={i}>
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