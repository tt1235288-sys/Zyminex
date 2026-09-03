'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CheckCircle2, Zap, Crown, MonitorPlay, Gift, Sparkles, ShieldCheck } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  const pricing = {
    1: {
      3: { total: 35, mo: (35 / 3).toFixed(2), save: 'Save 25%' },
      6: { total: 45, mo: (45 / 6).toFixed(2), save: 'Save 40%' },
      12: { total: 75, mo: (75 / 12).toFixed(2), save: 'Save 60%' },
    },
    2: {
      3: { total: 60, mo: (60 / 3).toFixed(2), save: 'Save 30%' },
      6: { total: 80, mo: (80 / 6).toFixed(2), save: 'Save 45%' },
      12: { total: 110, mo: (110 / 12).toFixed(2), save: 'Save 65%' },
    },
    3: {
      3: { total: 75, mo: (75 / 3).toFixed(2), save: 'Save 35%' },
      6: { total: 105, mo: (105 / 6).toFixed(2), save: 'Save 50%' },
      12: { total: 150, mo: (150 / 12).toFixed(2), save: 'Save 70%' },
    },
  };

  const currentPricing = pricing[devices] || pricing[1];
  const WHATSAPP_NUMBER = '+447549589503';

  const handleWhatsAppRedirect = (months: number) => {
    const message = `Hello, I want to order the ${CONSTANTS.BRAND_NAME} ${months}-month subscription plan for ${devices} device(s).`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFreeTrialRedirect = () => {
    const message = `Hello, I would like to request a 24h free trial token to test ${CONSTANTS.BRAND_NAME} IPTV channels and server stability.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="pricing-section" 
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 scroll-mt-20 bg-[#003554] overflow-hidden"
      aria-label={`${CONSTANTS.BRAND_NAME} PRICING & Subscription Plans`}
    >
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none md:bg-[size:48px_48px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#fdc500]/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />

      <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#fdc500] text-[#003554] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-[0_0_20px_rgba(253,197,0,0.3)]">
          <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
          <span className="font-black text-[10px] sm:text-xs uppercase tracking-widest">Limited-Time Special Pricing</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#fff1d0] mb-4 sm:mb-6 uppercase tracking-tight leading-tight sm:leading-none">
          {`${CONSTANTS.BRAND_NAME.toUpperCase()} PRICING &`} <br className="sm:hidden" />
          <span className="text-[#fdc500]">SUBSCRIPTION PLANS</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[#fff1d0]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-medium px-2">
          {`Choose your multi-month access plan. Save up to 60% with extended subscriptions and stream live 4K channels across multiple rooms with ${CONSTANTS.BRAND_NAME} IPTV.`}
        </p>

        {/* Responsive Device Switcher */}
        <div className="flex flex-col items-center justify-center mb-6 sm:mb-10 w-full max-w-sm sm:max-w-md mx-auto">
          <div className="inline-flex items-center gap-2 mb-3 bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
            <Zap className="w-3.5 h-3.5 text-[#fdc500]" />
            <span className="text-[10px] sm:text-xs text-[#fff1d0] font-black uppercase tracking-widest">Select Devices</span>
          </div>

          <div className="w-full grid grid-cols-3 bg-[#00263d] border-2 border-[#3CAFFF] rounded-full p-1 sm:p-1.5 shadow-xl">
            {[1, 2, 3].map((d) => (
              <button 
                key={d}
                onClick={() => setDevices(d as 1 | 2 | 3)}
                aria-label={`Select ${d} device option`}
                className={`py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-200 text-center ${
                  devices === d 
                    ? 'bg-[#fdc500] text-[#003554] shadow-[0_0_15px_rgba(253,197,0,0.4)] scale-[1.02]' 
                    : 'text-[#fff1d0]/60 hover:text-[#fff1d0]'
                }`}
              >
                {d} Device{d > 1 ? 's' : ''}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Pricing Cards Grid */}
      <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto relative">
        
        {/* 3 Months Plan */}
        <FadeInItem className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 sm:p-8 flex flex-col group relative overflow-hidden shadow-xl transition-all duration-300">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-black text-[#003554] bg-[#3CAFFF]/20 border border-[#3CAFFF]/40 px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                Starter Pass
              </span>
              <MonitorPlay className="w-5 h-5 text-[#3CAFFF]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#003554] mb-1 tracking-tighter uppercase">3 Months Access</h3>
            
            <div className="flex items-baseline gap-2 mb-2 mt-3">
              <span className="text-4xl sm:text-5xl font-black text-[#003554] tracking-tighter">
                ${currentPricing[3]?.total || 0}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#003554]/60 uppercase">/ one-time</span>
            </div>

            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <div className="text-[11px] sm:text-xs font-black text-[#fff1d0] uppercase tracking-widest px-3 py-1 rounded-full bg-[#003554]">
                ${currentPricing[3]?.mo || 0} / mo
              </div>
              <div className="text-[11px] sm:text-xs font-black text-[#003554] bg-[#fdc500] px-2 py-0.5 rounded-full uppercase">
                {currentPricing[3]?.save}
              </div>
            </div>
            
            <ul className="w-full space-y-2.5 sm:space-y-3 flex-grow relative mb-6">
              {[
                `${CONSTANTS.BRAND_NAME} subscription (${devices} Device${devices > 1 ? 's' : ''})`,
                'Native Ultra HD & 4K 60FPS Feeds',
                '15,000+ Premium Live Channels',
                '60,000+ VOD Movies & Shows',
                'Live Sports & PPV Fight Cards',
                'EPG Synchronization & Catch-Up',
                'Anti-Freeze Dedicated Pipelines',
                'Instant Account Activation',
                '24/7 Priority Live Support'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-[#003554] text-xs sm:text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#3CAFFF] shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => handleWhatsAppRedirect(3)}
              aria-label={`Get ${CONSTANTS.BRAND_NAME} 3 Months Plan for ${devices} device`}
              className="w-full text-center py-3.5 sm:py-4 px-4 rounded-full bg-[#003554] text-[#fff1d0] hover:bg-[#3CAFFF] font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 active:scale-95 shadow-md"
            >
              Select 3 Months
            </button>
          </div>
        </FadeInItem>

        {/* 12 Months Plan (Featured) */}
        <FadeInItem className="relative bg-[#fff1d0] border-4 border-[#fdc500] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col lg:-translate-y-4 shadow-[0_0_40px_rgba(253,197,0,0.3)] z-20 group overflow-hidden transition-all duration-300">
          <div className="absolute top-0 right-0 left-0 bg-[#fdc500] text-[#003554] text-center text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] py-1.5 flex items-center justify-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            Most Popular • Best Value
          </div>

          <div className="relative z-10 flex flex-col h-full mt-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-black text-[#003554] bg-[#fdc500] px-3 py-0.5 rounded-full uppercase tracking-widest shadow-sm">
                Ultimate Experience
              </span>
              <Crown className="w-5 h-5 text-[#fdc500] fill-current" />
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#003554] mb-1 tracking-tighter uppercase">12 Months Access</h3>
            
            <div className="flex items-baseline gap-2 mb-2 mt-3">
              <span className="text-5xl sm:text-6xl font-black text-[#003554] tracking-tighter">
                ${currentPricing[12]?.total || 0}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#003554]/60 uppercase">/ full year</span>
            </div>

            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <div className="text-[11px] sm:text-xs font-black text-[#fff1d0] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#003554] shadow-sm">
                ${currentPricing[12]?.mo || 0} / mo
              </div>
              <div className="text-[11px] sm:text-xs font-black text-[#003554] bg-[#fdc500] px-2.5 py-0.5 rounded-full uppercase shadow-sm">
                {currentPricing[12]?.save}
              </div>
            </div>

            <ul className="w-full space-y-2.5 sm:space-y-3 flex-grow relative mb-6">
              {[
                `${CONSTANTS.BRAND_NAME} subscription (${devices} Device${devices > 1 ? 's' : ''})`,
                'Native Ultra HD & 4K 60FPS Feeds',
                '15,000+ Premium Live Channels',
                '60,000+ VOD Movies & Shows (Daily Update)',
                'All VIP Sports, Leagues & PPV Included',
                '7-Day Electronic Program Guide',
                'Anti-Freeze Dedicated Pipelines',
                'Instant M3U & Xtream Codes Activation',
                '24/7 Priority VIP WhatsApp Support'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-[#003554] font-black text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#fdc500] fill-[#003554] shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => handleWhatsAppRedirect(12)}
              aria-label={`Get ${CONSTANTS.BRAND_NAME} 12 Months Plan for ${devices} device`}
              className="w-full text-center py-4 px-4 rounded-full bg-[#fdc500] hover:bg-amber-400 text-[#003554] font-black text-xs sm:text-base uppercase tracking-widest transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(253,197,0,0.4)] cursor-pointer"
            >
              Get 12 Months Access
            </button>
          </div>
        </FadeInItem>

        {/* 6 Months Plan */}
        <FadeInItem className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 sm:p-8 flex flex-col group relative overflow-hidden shadow-xl transition-all duration-300">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-black text-[#003554] bg-[#3CAFFF]/20 border border-[#3CAFFF]/40 px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                Standard Value
              </span>
              <MonitorPlay className="w-5 h-5 text-[#3CAFFF]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#003554] mb-1 tracking-tighter uppercase">6 Months Access</h3>
            
            <div className="flex items-baseline gap-2 mb-2 mt-3">
              <span className="text-4xl sm:text-5xl font-black text-[#003554] tracking-tighter">
                ${currentPricing[6]?.total || 0}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#003554]/60 uppercase">/ one-time</span>
            </div>

            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <div className="text-[11px] sm:text-xs font-black text-[#fff1d0] uppercase tracking-widest px-3 py-1 rounded-full bg-[#003554]">
                ${currentPricing[6]?.mo || 0} / mo
              </div>
              <div className="text-[11px] sm:text-xs font-black text-[#003554] bg-[#fdc500] px-2 py-0.5 rounded-full uppercase">
                {currentPricing[6]?.save}
              </div>
            </div>
            
            <ul className="w-full space-y-2.5 sm:space-y-3 flex-grow relative mb-6">
              {[
                `${CONSTANTS.BRAND_NAME} subscription (${devices} Device${devices > 1 ? 's' : ''})`,
                'Native Ultra HD & 4K 60FPS Feeds',
                '15,000+ Premium Live Channels',
                '60,000+ VOD Movies & Shows',
                'Live Sports & PPV Fight Cards',
                'EPG Synchronization & Catch-Up',
                'Anti-Freeze Dedicated Pipelines',
                'Instant Account Activation',
                '24/7 Priority Live Support'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-[#003554] text-xs sm:text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#3CAFFF] shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => handleWhatsAppRedirect(6)}
              aria-label={`Get ${CONSTANTS.BRAND_NAME} 6 Months Plan for ${devices} device`}
              className="w-full text-center py-3.5 sm:py-4 px-4 rounded-full bg-[#003554] text-[#fff1d0] hover:bg-[#3CAFFF] font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 active:scale-95 shadow-md"
            >
              Select 6 Months
            </button>
          </div>
        </FadeInItem>
      </FadeInStagger>

      {/* Free Trial Banner */}
      <FadeIn className="max-w-2xl mx-auto mt-10 sm:mt-14 relative z-30">
        <div className="bg-[#fff1d0] border-4 border-[#fdc500] rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-[0_0_30px_rgba(253,197,0,0.15)] text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="bg-[#fdc500] p-2.5 sm:p-3 rounded-2xl text-[#003554] shrink-0 shadow-md">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#003554] uppercase tracking-tight flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                Test 24h Free Trial First
                <span className="bg-[#003554] text-[#fdc500] text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-black tracking-wider">NO CARD NEEDED</span>
              </h3>
              <p className="text-xs font-bold text-[#003554]/75 mt-0.5">
                Test 4K sports feeds and channel zapping stability before ordering your subscription.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            <button 
              onClick={handleFreeTrialRedirect}
              aria-label={`Claim ${CONSTANTS.BRAND_NAME} 24h Free Trial Access`}
              className="w-full sm:w-auto text-center py-3 px-6 rounded-full bg-[#003554] hover:bg-[#3CAFFF] text-[#fff1d0] font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
            >
              Get Free Test
            </button>
          </div>
        </div>
      </FadeIn>

      {/* Trust Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center mt-8 text-[11px] sm:text-xs font-bold text-[#fff1d0]/70 uppercase tracking-wider px-2">
        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#fdc500]" /> 7-Day Money-Back Guarantee</span>
        <span className="hidden sm:inline">•</span>
        <span>256-Bit SSL Encrypted Checkout</span>
        <span className="hidden sm:inline">•</span>
        <span>Instant Activation</span>
      </div>
    </section>
  );
}