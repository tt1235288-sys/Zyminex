'use client';

import { useState } from 'react';
import Image from 'next/image';
import PricingSection from '../components/PricingSection';
import { 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  CreditCard, 
  Award, 
  Globe, 
  Server, 
  Trophy, 
  Tv, 
  Film, 
  MonitorPlay, 
  Wifi, 
  Calendar, 
  Lock, 
  ThumbsUp, 
  Sparkles, 
  Headphones, 
  ExternalLink,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';

// Synchronized FAQ Component with matching Schema text and semantic H3 trigger
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="w-full bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl overflow-hidden shadow-md transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex justify-between items-center gap-4 group focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-[#003554] group-hover:text-[#3CAFFF] transition-colors flex items-center gap-3">
          <span className="text-[#3CAFFF] font-black text-xl md:text-2xl">Q.</span> 
          {question}
        </h3>
        <ChevronDown 
          className={`w-6 h-6 flex-shrink-0 text-[#003554]/50 group-hover:text-[#3CAFFF] transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#3CAFFF]' : ''
          }`} 
        />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 px-6 pb-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <p className="text-[#003554]/85 text-sm md:text-base font-bold leading-relaxed pl-4 border-l-4 border-[#3CAFFF]">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#003554] text-[#fff1d0] flex flex-col">
      
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt={`${CONSTANTS.BRAND_NAME} 4K streaming entertainment infrastructure`}
            fill
            priority
            className="object-cover brightness-[0.18]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#003554]/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003554]/20 via-transparent to-[#003554]" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3CAFFF]/15 blur-[140px] rounded-full pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <FadeInStagger className="flex flex-col items-center justify-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#fdc500] text-[#003554] px-4 py-1.5 rounded-full mb-6 shadow-lg">
                <Sparkles className="w-4 h-4 fill-current" />
                <span className="font-black text-xs uppercase tracking-widest">Official Pricing &amp; Plans</span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#fff1d0] tracking-tighter uppercase mb-6 leading-none">
                {`${CONSTANTS.BRAND_NAME.toUpperCase()} IPTV SERVICE &`} <br className="hidden sm:block" />
                <span className="text-[#fdc500]">SUBSCRIPTION PLANS</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-base sm:text-lg md:text-xl text-[#fff1d0]/80 font-bold max-w-3xl mx-auto leading-relaxed px-2">
                {`Choose your multi-month access plan. Stream over 15,000 live channels, 60,000+ on-demand movies, and major pay-per-view sports events with high-bitrate anti-freeze servers across all your devices.`}
              </p>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-[#fff1d0]/60 text-xs sm:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[#fdc500]" /> No Long-Term Contracts</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#fdc500]" /> Instant Setup</span>
                <span className="flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-[#fdc500]" /> 7-Day Money-Back</span>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Main Interactive Pricing Section Component */}
      <div className="w-full relative z-20" id="pricing-section">
        <PricingSection />
      </div>

      {/* Included Features Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-label="Included Plan Features">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#fff1d0] mb-4 uppercase tracking-tight">
            EVERY PLAN INCLUDES <span className="text-[#3CAFFF]">FULL ACCESS</span>
          </h2>
          <p className="text-[#fff1d0]/75 text-base sm:text-lg font-bold max-w-2xl mx-auto">
            {`No tier compromises—every ${CONSTANTS.BRAND_NAME} subscription plan unlocks our complete global network.`}
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Tv, title: "15,000+ Live Channels", desc: "Live sports, news, and entertainment networks from over 100 countries in high-bitrate video feeds." },
            { icon: Film, title: "60,000+ VOD Releases", desc: "Extensive movie vault and complete television series updated on daily automated release schedules." },
            { icon: MonitorPlay, title: "Native Ultra 4K Streams", desc: "Uncompressed 60 FPS sports coverage and crystal-clear picture resolution on all compatible displays." },
            { icon: Wifi, title: "Anti-Freeze Server Protocol", desc: "Dedicated load-balanced streaming clusters eliminate playback stutter, lag, and buffering." },
            { icon: Calendar, title: "Synchronized EPG Guide", desc: "Interactive 7-day electronic program guide with real-time schedule updates and catch-up availability." },
            { icon: Trophy, title: "VIP Sports & PPV Pass", desc: "Direct access to championship boxing matches, UFC fight cards, and global football derbies at no extra fee." },
            { icon: Globe, title: "High-Throughput Global CDN", desc: "Distributed edge servers across North America, Europe, and Asia for sub-second channel switching." },
            { icon: Server, title: "99.9% Verified Uptime", desc: "Enterprise infrastructure built with redundant server failovers for reliable viewing during peak hours." },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <FadeInItem 
                key={idx} 
                className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3CAFFF]/15 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#3CAFFF]" />
                </div>
                <h3 className="font-black text-[#003554] uppercase tracking-wide text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#003554]/75 text-sm font-bold leading-relaxed">
                  {feature.desc}
                </p>
              </FadeInItem>
            );
          })}
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-[#00263d]/80 border-y border-white/5 w-full" aria-label="Subscription Comparison">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-[#fff1d0] mb-4 uppercase tracking-tight">
              COMPARE <span className="text-[#fdc500]">SUBSCRIPTION PLANS</span>
            </h2>
            <p className="text-[#fff1d0]/70 text-sm sm:text-base font-bold uppercase tracking-widest">
              Choose the ideal duration and multi-connection capacity for your household
            </p>
          </FadeIn>

          <div className="overflow-x-auto bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-4 md:p-6 shadow-2xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#003554]/10">
                  <th className="text-left p-4 text-[#003554] font-black uppercase tracking-wider text-base md:text-lg">Streaming Feature</th>
                  <th className="text-center p-4 text-[#3CAFFF] font-black uppercase tracking-wider text-base md:text-lg">3 Months</th>
                  <th className="text-center p-4 text-[#fdc500] font-black uppercase tracking-wider text-base md:text-lg bg-[#003554] rounded-t-xl">12 Months (Best Value)</th>
                  <th className="text-center p-4 text-[#3CAFFF] font-black uppercase tracking-wider text-base md:text-lg">6 Months</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#003554]/10">
                {[
                  { feature: "Live Channels", basic: "15,000+ Worldwide", pro: "15,000+ Worldwide", premium: "15,000+ Worldwide" },
                  { feature: "VOD Movies & Series", basic: "60,000+ Titles", pro: "60,000+ Titles", premium: "60,000+ Titles" },
                  { feature: "Ultra 4K & 60 FPS", basic: "Included", pro: "Included", premium: "Included" },
                  { feature: "Live Sports & PPV Pass", basic: "All Included", pro: "All Included", premium: "All Included" },
                  { feature: "7-Day EPG Guide", basic: "Included", pro: "Included", premium: "Included" },
                  { feature: "Anti-Freeze Protocol", basic: "Standard Dedicated", pro: "VIP High-Bitrate", premium: "Standard Dedicated" },
                  { feature: "Device Connections", basic: "1 to 3 Devices", pro: "1 to 3 Devices", premium: "1 to 3 Devices" },
                  { feature: "Monthly Effective Rate", basic: "$11.66 / mo", pro: "$6.25 / mo (Save 60%)", premium: "$7.50 / mo" },
                  { feature: "Customer Support", basic: "24/7 Live Support", pro: "24/7 VIP Priority Support", premium: "24/7 Priority Support" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#003554]/5 transition-colors">
                    <td className="p-4 text-[#003554] font-black uppercase text-xs sm:text-sm">{row.feature}</td>
                    <td className="p-4 text-center text-[#003554]/75 font-bold text-xs sm:text-sm">{row.basic}</td>
                    <td className="p-4 text-center text-[#fdc500] font-black text-xs sm:text-sm bg-[#003554]">{row.pro}</td>
                    <td className="p-4 text-center text-[#003554]/75 font-bold text-xs sm:text-sm">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-label="Service Guarantees">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#fff1d0] mb-4 uppercase tracking-tight">
            WHY VIEWERS TRUST <span className="text-[#3CAFFF]">{CONSTANTS.BRAND_NAME}</span>
          </h2>
          <p className="text-[#fff1d0]/75 text-base sm:text-lg font-bold max-w-2xl mx-auto">
            Transparent subscription protocols backed by verified security standards.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#3CAFFF]/15 flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-[#3CAFFF]" />
            </div>
            <h3 className="text-lg font-black text-[#003554] mb-2 uppercase tracking-wide">Secure Payments</h3>
            <p className="text-[#003554]/75 text-sm font-bold leading-relaxed">
              256-bit SSL encrypted checkout gateways safeguard all payment card and cryptocurrency transactions.
            </p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#3CAFFF]/15 flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-[#3CAFFF]" />
            </div>
            <h3 className="text-lg font-black text-[#003554] mb-2 uppercase tracking-wide">Instant Setup</h3>
            <p className="text-[#003554]/75 text-sm font-bold leading-relaxed">
              M3U playlists and Xtream Codes API credentials are dispatched to your email immediately upon ordering.
            </p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#3CAFFF]/15 flex items-center justify-center mb-4">
              <Headphones className="w-8 h-8 text-[#3CAFFF]" />
            </div>
            <h3 className="text-lg font-black text-[#003554] mb-2 uppercase tracking-wide">24/7 Live Support</h3>
            <p className="text-[#003554]/75 text-sm font-bold leading-relaxed">
              Dedicated technical assistance team ready on live chat and WhatsApp to assist with hardware installations.
            </p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#3CAFFF]/15 flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-[#3CAFFF]" />
            </div>
            <h3 className="text-lg font-black text-[#003554] mb-2 uppercase tracking-wide">7-Day Guarantee</h3>
            <p className="text-[#003554]/75 text-sm font-bold leading-relaxed">
              Risk-free satisfaction guarantee. If our technical team cannot solve an issue, you receive a full refund.
            </p>
          </FadeInItem>
        </div>
      </section>

      {/* Speed & Guarantee Banner */}
      <section className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-label="Connection Guidance">
        <div className="bg-[#fff1d0] border-4 border-[#fdc500] rounded-3xl p-6 sm:p-8 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-[#003554] text-[#fdc500] px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <Award className="w-4 h-4 fill-current" />
            <span className="font-black text-xs uppercase tracking-widest">Recommended Connectivity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#003554] uppercase tracking-tight mb-3">
            7-Day Money-Back Guarantee
          </h2>
          <p className="text-[#003554]/80 max-w-2xl mx-auto text-sm sm:text-base font-bold leading-relaxed">
            {`Try ${CONSTANTS.BRAND_NAME} risk-free. Verify your connection via `}
            <a 
              href="https://www.speedtest.net/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#3CAFFF] underline hover:text-[#003554] inline-flex items-center gap-1 font-black"
            >
              Speedtest <ExternalLink className="w-3.5 h-3.5" />
            </a>
            {` to ensure at least 25+ Mbps for uninterrupted Ultra 4K sports streaming.`}
          </p>
        </div>
      </section>

      {/* Synchronized FAQ Section matching Schema */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative" aria-label="Subscription FAQ">
        <FadeIn className="text-center mb-14 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-[#fff1d0] mb-4 uppercase tracking-tight">
            FREQUENTLY ASKED <span className="text-[#3CAFFF]">QUESTIONS</span>
          </h2>
          <p className="text-[#fdc500] font-bold text-base sm:text-lg">
            Answers to common questions regarding subscriptions, device activations, and payments.
          </p>
        </FadeIn>
        
        <FadeInStagger className="space-y-4 relative z-10">
          <FAQItem 
            question={`What payment methods does ${CONSTANTS.BRAND_NAME} accept?`} 
            answer={`${CONSTANTS.BRAND_NAME} accepts major credit cards (Visa, Mastercard), PayPal, and cryptocurrencies (Bitcoin, USDT) with 256-bit SSL encrypted checkout protocols.`}
          />
          <FAQItem 
            question={`Can I upgrade or downgrade my ${CONSTANTS.BRAND_NAME} plan?`} 
            answer={`Yes, you can upgrade connections or extend your subscription period at any time by connecting with 24/7 technical live assistance.`}
          />
          <FAQItem 
            question={`Is there a long-term contract with ${CONSTANTS.BRAND_NAME}?`} 
            answer={`No, all ${CONSTANTS.BRAND_NAME} plans operate on a prepaid, pay-as-you-go basis without lock-in contracts or hidden termination fees.`}
          />
          <FAQItem 
            question={`Does ${CONSTANTS.BRAND_NAME} offer a refund policy?`} 
            answer={`Yes, ${CONSTANTS.BRAND_NAME} provides a 7-day money-back satisfaction guarantee on all multi-device subscription plans.`}
          />
          <FAQItem 
            question={`Can I stream ${CONSTANTS.BRAND_NAME} on multiple devices simultaneously?`} 
            answer={`Yes, multi-room packages support concurrent viewing on 2 or 3 separate terminals across Smart TVs, Firestick, Android, and iOS.`}
          />
          <FAQItem 
            question={`What is included with ${CONSTANTS.BRAND_NAME} subscription plans?`} 
            answer={`Every plan includes uncompressed 4K 60FPS feeds, 15,000+ international channels, 60,000+ daily VOD releases, and full EPG synchronization.`}
          />
        </FadeInStagger>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-[#00263d] border-t border-white/5 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-black text-[#fff1d0] mb-4 uppercase tracking-tight">
              Ready to Upgrade Your Streaming?
            </h2>
            <p className="text-[#fdc500] font-bold text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of cord-cutters enjoying crystal-clear 4K entertainment with zero buffering today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="#pricing-section"
                aria-label={`Select your ${CONSTANTS.BRAND_NAME} pricing subscription plan`}
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#fdc500] hover:bg-amber-400 text-[#003554] font-black uppercase tracking-widest text-sm transition-all hover:scale-105 shadow-lg"
              >
                Choose Your Plan
              </Link>
              <Link
                href="/setup"
                aria-label="View installation guides for streaming devices"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#003554] hover:bg-[#3CAFFF] text-[#fff1d0] font-black uppercase tracking-widest text-sm transition-all hover:scale-105 border-2 border-[#3CAFFF]"
              >
                Setup Guide
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-[#fff1d0]/50 text-xs font-black uppercase tracking-widest">
              <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-[#3CAFFF]" /> Instant Activation</span>
              <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-[#3CAFFF]" /> Secure Checkout</span>
              <span className="flex items-center gap-2"><CreditCard className="w-3.5 h-3.5 text-[#3CAFFF]" /> Major Cards &amp; Crypto</span>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}