'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CheckCircle2, Zap, Crown, MonitorPlay, Gift } from 'lucide-react';
import Link from 'next/link';

export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  // Updated to match your multi-device tier structure exactly
  const pricing = {
    1: {
      3: { total: 35, mo: (35/3).toFixed(2) },
      6: { total: 45, mo: (45/6).toFixed(2) },
      12: { total: 75, mo: (75/12).toFixed(2) },
    },
    2: {
      3: { total: 60, mo: (60/3).toFixed(2) },
      6: { total: 80, mo: (80/6).toFixed(2) },
      12: { total: 110, mo: (110/12).toFixed(2) },
    },
    3: {
      3: { total: 75, mo: (75/3).toFixed(2) },
      6: { total: 105, mo: (105/6).toFixed(2) },
      12: { total: 150, mo: (150/12).toFixed(2) },
    },
  };

  const currentPricing = pricing[devices] || pricing[1];

  const WHATSAPP_NUMBER = '+447549589503';

  const handleWhatsAppRedirect = (months: number) => {
    const message = `Hello, I am interested in your service to get a subscription for ${months} months.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFreeTrialRedirect = () => {
    const message = `Hello, I would like to request a 24h free trial access token to test your streaming infrastructure channels.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="pricing-section" 
      className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 scroll-mt-20 bg-[#003554]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none md:bg-[size:48px_48px]"></div>
      
      <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6">
          <Crown className="w-4 h-4 text-[#fff1d0]" />
          <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">Best Value Plans</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-6 uppercase tracking-tight">
          CHOOSE YOUR <span className="text-[#3CAFFF]">PREFERRED PLAN</span>
        </h2>
        <p className="text-lg text-[#fff1d0]/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Select your subscription duration. Enjoy larger discounts on longer plans, and share the ultimate entertainment experience across multiple devices simultaneously with Zyminex.
        </p>

        <div className="flex flex-col items-center justify-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-[#3CAFFF]" />
            <span className="text-sm text-[#fff1d0] font-black uppercase tracking-widest">Select Number of Devices</span>
          </div>
          <div className="inline-flex bg-[#003554] border-2 border-[#3CAFFF] rounded-full p-2 relative">
            {[1, 2, 3].map((d) => (
              <button 
                key={d}
                onClick={() => setDevices(d as 1|2|3)}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-black tracking-wider uppercase transition-transform hover:scale-105 ${
                  devices === d 
                    ? 'bg-[#3CAFFF] text-[#fff1d0]' 
                    : 'text-[#fff1d0]/60 hover:text-[#fff1d0]'
                }`}
              >
                {d} Device{d > 1 ? 's' : ''}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mt-16 relative">
        
        {/* 3 Months Plan */}
        <FadeInItem className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 md:p-8 flex flex-col group relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-black text-[#3CAFFF] uppercase tracking-[0.2em]">Starter</p>
              <MonitorPlay className="w-5 h-5 text-[#3CAFFF]" />
            </div>
            <div className="text-3xl font-black text-[#003554] mb-2 tracking-tighter uppercase">3 Months</div>
            
            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-5xl font-black text-[#003554] tracking-tighter">
                ${currentPricing[3]?.total || 0}
              </span>
            </div>
            <div className="text-xs font-black text-[#fff1d0] mb-8 uppercase tracking-widest border-2 border-[#3CAFFF] self-start px-3 py-1.5 rounded-full inline-block bg-[#3CAFFF]">
              Just ${currentPricing[3]?.mo || 0} / month
            </div>
            
            <ul className="w-full space-y-3 flex-grow relative mb-8">
              {[
                `zyminex subscription for ${devices} Device${devices > 1 ? 's' : ''}`,
                'Uncompressed Ultra HD & 4K',
                '25,000+ Premium Channels',
                '100,000+ VODs (Daily Update)',
                'Premium Sports & PPV Pass',
                'Full EPG & 7-Day Catch-up',
                'Advanced Anti-Freeze VIP',
                'VPN Included Free',
                'Direct WhatsApp VIP Support'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#003554] text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#3CAFFF] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="w-full flex">
              <button 
                onClick={() => handleWhatsAppRedirect(3)}
                className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#3CAFFF] text-[#fff1d0] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shrink-0"
              >
                Select 3 Months
              </button>
            </div>
          </div>
        </FadeInItem>

        {/* 12 Months Plan (Most Popular) */}
        <FadeInItem className="relative bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 md:p-10 flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_rgba(60,175,255,0.3)] z-20 group overflow-hidden">
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <div className="bg-[#3CAFFF] text-[#fff1d0] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full flex items-center gap-1 border border-[#fff1d0]/25">
              Most Popular
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-black text-[#3CAFFF] uppercase tracking-[0.2em]">Ultimate</p>
            </div>
            <div className="text-3xl font-black text-[#003554] mb-2 tracking-tighter uppercase">12 Months</div>
            
            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-6xl font-black text-[#003554] tracking-tighter">
                ${currentPricing[12]?.total || 0}
              </span>
            </div>
            <div className="text-xs font-black text-[#fff1d0] mb-8 uppercase tracking-widest border-2 border-[#3CAFFF] self-start px-4 py-2 rounded-full inline-block bg-[#3CAFFF]">
              Just ${currentPricing[12]?.mo || 0} / month
            </div>

            <ul className="w-full space-y-3 flex-grow relative mb-8">
              {[
                `zyminex subscription for ${devices} Device${devices > 1 ? 's' : ''}`,
                'Uncompressed Ultra HD & 4K',
                '25,000+ Premium Channels',
                '100,000+ VODs (Daily Update)',
                'Premium Sports & PPV Pass',
                'Full EPG & 7-Day Catch-up',
                'Advanced Anti-Freeze VIP',
                'VPN Included Free',
                'Direct WhatsApp VIP Support'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#003554] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#3CAFFF] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="w-full flex">
              <button 
                onClick={() => handleWhatsAppRedirect(12)}
                className="w-full text-center whitespace-nowrap px-6 py-5 rounded-full bg-[#003554] text-[#fff1d0] font-black text-base uppercase tracking-widest transition-transform hover:scale-105 shrink-0"
              >
                Get 12 Months
              </button>
            </div>
          </div>
        </FadeInItem>

        {/* 6 Months Plan */}
        <FadeInItem className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 md:p-8 flex flex-col group relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-black text-[#3CAFFF] uppercase tracking-[0.2em]">Value</p>
              <MonitorPlay className="w-5 h-5 text-[#3CAFFF]" />
            </div>
            <div className="text-3xl font-black text-[#003554] mb-2 tracking-tighter uppercase">6 Months</div>
            
            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-5xl font-black text-[#003554] tracking-tighter">
                ${currentPricing[6]?.total || 0}
              </span>
            </div>
            <div className="text-xs font-black text-[#fff1d0] mb-8 uppercase tracking-widest border-2 border-[#3CAFFF] self-start px-3 py-1.5 rounded-full inline-block bg-[#3CAFFF]">
              Just ${currentPricing[6]?.mo || 0} / month
            </div>
            
            <ul className="w-full space-y-3 flex-grow relative mb-8">
              {[
                `zyminex subscription for ${devices} Device${devices > 1 ? 's' : ''}`,
                'Uncompressed Ultra HD & 4K',
                '25,000+ Premium Channels',
                '100,000+ VODs (Daily Update)',
                'Premium Sports & PPV Pass',
                'Full EPG & 7-Day Catch-up',
                'Advanced Anti-Freeze VIP',
                'VPN Included Free',
                'Direct WhatsApp VIP Support'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#003554]/70 text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#3CAFFF] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="w-full flex">
              <button 
                onClick={() => handleWhatsAppRedirect(6)}
                className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#3CAFFF] text-[#fff1d0] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shrink-0"
              >
                Select 6 Months
              </button>
            </div>
          </div>
        </FadeInItem>
      </FadeInStagger>

      {/* Standalone Horizontal Full-Width Card - Compact */}
      <FadeIn className="max-w-2xl mx-auto mt-12 relative z-30">
        <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-4xl p-2 md:p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          
          <div className="flex items-center gap-3 text-left">
            <div className="bg-[#3CAFFF] p-2 rounded-xl text-[#fff1d0] shrink-0 hidden sm:block">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-black text-[#003554] uppercase tracking-tight">Need Free Trial 24h?</h4>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <button 
              onClick={handleFreeTrialRedirect}
              className="w-full md:w-auto text-center whitespace-nowrap px-8 py-3 rounded-full bg-[#3CAFFF] text-[#fff1d0] font-black text-sm uppercase tracking-widest transition-transform hover:scale-[1.02]"
            >
              Try Now
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}