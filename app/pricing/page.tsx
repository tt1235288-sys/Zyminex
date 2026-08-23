'use client';

import { useState } from 'react';
import Image from 'next/image';
import PricingSection from '../components/PricingSection';
import { ShieldCheck, Zap, ChevronDown, CreditCard, Award, Globe, Server, Trophy, Tv, Film, MonitorPlay, Wifi, Calendar, Lock, ThumbsUp, Users, LifeBuoy, Sparkles, Headphones, ShoppingCart } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';

// FAQ Item Component with Premier Cream background and border styles
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-[#fff1d0] border-4 ${isOpen ? 'border-[#3CAFFF]' : 'border-white/5'} rounded-2xl p-6 hover:border-[#3CAFFF]/60 transition-all duration-300 group`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${isOpen ? 'text-[#3CAFFF]' : 'text-[#003554] group-hover:text-[#3CAFFF]'} flex items-center gap-3`}>
          <span className={`${isOpen ? 'text-[#3CAFFF]' : 'text-[#003554]/30'} font-black text-2xl`}>Q.</span> 
          {question}
        </h3>
        <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#3CAFFF]' : 'text-[#003554]/30 group-hover:text-[#3CAFFF]/50'}`} />
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#003554]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#3CAFFF] ml-2 py-2">
          {answer}
        </p>
      </div>
    </button>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#003554] flex flex-col">
      
      {/* Hero Section - Fully Centered (Old Design Layout) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt="Zyminex premium IPTV service pricing plans - Best IPTV Providers Subscription Deals"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover brightness-[0.2]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#003554]/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003554] via-transparent to-[#003554]/0" />
        </div>
        
        {/* Square Pattern Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-5"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #3CAFFF 1px, transparent 1px),
              linear-gradient(to bottom, #3CAFFF 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Ambient Glow Effects Layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3CAFFF]/10 blur-[150px] rounded-full pointer-events-none z-0" />
        
        {/* Hero Content Perfectly Centered */}
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6 shadow-md">
                <Sparkles className="w-4 h-4 text-[#fff1d0]" />
                <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">Best Value Plans 2026</span>
              </div>
            </FadeInItem>
            <FadeInItem>
              <h1 className="text-5xl md:text-7xl font-black text-[#fff1d0] tracking-tighter uppercase mb-6 leading-none text-center">
                IPTV Service Pricing Plans <br />
                <span className="text-[#3CAFFF]">Best Deals</span>
              </h1>
            </FadeInItem>
            <FadeInItem>
              <p className="text-lg md:text-xl text-[#fff1d0]/80 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center">
                Enjoy live TV, movies, and sports from anywhere with a fast, reliable IPTV encoder system streaming experience via zyminex.stream.
              </p>
            </FadeInItem>
            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 mt-10 text-[#fff1d0]/50 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[#3CAFFF]" /> Cancel Anytime</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#3CAFFF]" /> Instant Activation</span>
                <span className="flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-[#3CAFFF]" /> 7-Day Money-Back</span>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Main Pricing Cards Component */}
      <div className="w-full relative z-20 bg-[#003554] py-12" id="pricing-section">
        <PricingSection />
      </div>

      {/* Features Section - Premier Cream Cards with border-4 on Layout background */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#003554] w-full">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-4 uppercase tracking-tighter leading-none">
            Everything Included In <span className="text-[#3CAFFF]">Every Plan</span>
          </h2>
          <p className="text-[#fff1d0]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
            All Zyminex subscriptions come with these premium features parameters.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Tv, title: "15,000+ Live Channels", desc: `Sports, news, entertainment, and international channels from 100+ countries including premium iptv italiane 4k streams.` },
            { icon: Film, title: "60,000+ VOD Library", desc: `Movies, TV series, and documentaries updated daily on your zyminex subscription.` },
            { icon: MonitorPlay, title: "4K Ultra HD Quality", desc: `Crystal clear streaming on compatible channels and devices processed through a top tier IPTV encoder.` },
            { icon: Wifi, title: "Anti-Freeze Technology", desc: `Buffer-free playback with advanced streaming optimization from Zyminex.` },
            { icon: Calendar, title: "Full EPG Guide", desc: `7-day electronic program guide for all channels with zyminex tv.` },
            { icon: Trophy, title: "PPV Events Included", desc: `All major sports PPV events at no extra cost with your IPTV Service.` },
            { icon: Globe, title: "Global Coverage", desc: `Servers in 100+ countries for low-latency IPTV Providers pipeline allocation.` },
            { icon: Server, title: "99.9% Uptime", desc: `Enterprise-grade infrastructure with redundant servers for maximum streaming continuity.` },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <FadeInItem key={idx} className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl p-6 hover:border-[#3CAFFF]/60 shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#3CAFFF]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#3CAFFF]" />
                </div>
                <h3 className="font-black text-[#003554] uppercase tracking-wide text-lg mb-2">{feature.title}</h3>
                <p className="text-[#003554]/70 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </FadeInItem>
            );
          })}
        </div>
      </section>

      {/* Comparison Table Section - Styled to match theme */}
      <section className="py-24 bg-[#003554] border-y border-white/5 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-4 uppercase tracking-tighter">
              Compare <span className="text-[#3CAFFF]">Zyminex Plans</span>
            </h2>
            <p className="text-[#fff1d0]/60 text-base font-bold uppercase tracking-widest mt-2">
              Find the perfect plan for your streaming needs
            </p>
          </FadeIn>

          <div className="overflow-x-auto bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-4 md:p-6 shadow-2xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-black/10">
                  <th className="text-left p-4 text-[#003554] font-black uppercase tracking-wider text-base md:text-lg">Feature</th>
                  <th className="text-center p-4 text-[#3CAFFF] font-black uppercase tracking-wider text-base md:text-lg">3 Months</th>
                  <th className="text-center p-4 text-[#fdc500] font-black uppercase tracking-wider text-base md:text-lg bg-[#003554] rounded-t-xl">12 Months</th>
                  <th className="text-center p-4 text-[#3CAFFF] font-black uppercase tracking-wider text-base md:text-lg">6 Months</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { feature: "Live Channels", basic: "15,000+", pro: "25,000+", premium: "18,000+" },
                  { feature: "VOD Library", basic: "60,000+", pro: "100,000+", premium: "80,000+" },
                  { feature: "4K Streaming", basic: "Yes", pro: "Yes", premium: "Yes" },
                  { feature: "Sports PPV", basic: "Basic", pro: "All Included", premium: "Premium" },
                  { feature: "EPG Guide", basic: "Standard", pro: "Full 7-Day", premium: "Full" },
                  { feature: "Anti-Freeze Tech", basic: "Standard", pro: "VIP Advanced", premium: "Pro" },
                  { feature: "VPN Included", basic: "No", pro: "Yes", premium: "No" },
                  { feature: "Multi-Screen", basic: "1 Device ($35)", pro: "3 Devices ($150)", premium: "2 Devices ($80)" },
                  { feature: "Support", basic: "Standard", pro: "VIP Priority", premium: "Priority" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-black/[0.02] transition-colors">
                    <td className="p-4 text-[#003554] font-black uppercase text-sm">{row.feature}</td>
                    <td className="p-4 text-center text-[#003554]/70 font-bold text-sm">{row.basic}</td>
                    <td className="p-4 text-center text-[#fdc500] font-black text-sm bg-[#003554]">{row.pro}</td>
                    <td className="p-4 text-center text-[#003554]/70 font-bold text-sm">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Badges - Premier Cream Cards with border-4 on Layout background */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#003554] w-full">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-4 uppercase tracking-tighter">
            Why Choose <span className="text-[#3CAFFF]">Zyminex</span>
          </h2>
          <p className="text-[#fff1d0]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
            Trusted by over 20,000 satisfied customers worldwide - Read our operational loops.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-[#3CAFFF]" />
            </div>
            <h4 className="text-xl font-black text-[#003554] mb-2 uppercase tracking-wide">Secure Payments</h4>
            <p className="text-[#003554]/70 text-sm font-medium">Encrypted transactions with top-tier gateways for safety loops.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-[#3CAFFF]" />
            </div>
            <h4 className="text-xl font-black text-[#003554] mb-2 uppercase tracking-wide">Instant Setup</h4>
            <p className="text-[#003554]/70 text-sm font-medium">Get credentials instantly routed after validation metrics confirmation.</p>
          </FadeInItem>
          
          <FadeInItem className="flex items-center gap-4 flex-col bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl p-6 text-center group">
            <div className="w-16 h-16 rounded-full bg-[#003554] flex items-center justify-center shrink-0 mx-auto mb-2">
              <Headphones className="w-8 h-8 text-[#fff1d0]" />
            </div>
            <h4 className="text-xl font-black text-[#003554] mb-2 uppercase tracking-wide">24/7 Support</h4>
            <p className="text-[#003554]/70 text-sm font-medium">Expert operational engineering dispatch crew available at all frames.</p>
          </FadeInItem>
          
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-[#3CAFFF]" />
            </div>
            <h4 className="text-xl font-black text-[#003554] mb-2 uppercase tracking-wide">Top Tier Level</h4>
            <p className="text-[#003554]/70 text-sm font-medium">Enjoy high-tech aesthetic premium layouts matching top infrastructure needs.</p>
          </FadeInItem>
        </div>
      </section>

      {/* Money Back Guarantee Banner - Premier Cream Cards with border-4 on Layout background */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#003554] w-full">
        <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-8 md:p-10 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-4 shadow-md">
            <Award className="w-4 h-4 text-[#fff1d0]" />
            <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">Risk-Free</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#003554] uppercase tracking-tight mb-3">7-Day Money-Back Guarantee</h3>
          <p className="text-[#003554]/80 max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed">
            Try Zyminex risk-free for 7 days. Not satisfied? Get a full refund parameters dispatch. Learn how to connect HDMI to IPTV or test our features with zero risks.
          </p>
        </div>
      </section>

      {/* FAQ Section - Premier Cream Items with border-4 on Layout background */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 bg-[#003554] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#3CAFFF]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <FadeIn className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-6 uppercase tracking-tighter">
            Frequently Asked <span className="text-[#3CAFFF]">Questions</span>
          </h2>
          <p className="text-[#fdc500] font-bold text-lg">Everything you need to know about pricing and plans parameters layout allocation loops.</p>
        </FadeIn>
        
        <FadeInStagger className="space-y-4 relative z-10">
          <FAQItem 
            question={`What payment methods does Zyminex accept?`} 
            answer={`Zyminex accepts all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept PayPal, cryptocurrencies (Bitcoin, Ethereum, USDT), and various regional payment methods. All payments are processed through secure, encrypted gateways with SSL technology.`}
          />
          <FAQItem 
            question={`Can I upgrade or downgrade my plan?`} 
            answer={`Yes, you can upgrade or downgrade your zyminex subscription plan at any time. If you upgrade, you'll only pay the price difference. If you downgrade, the credit will be applied to your next billing cycle. Simply contact our support team and they will assist you with the plan change immediately.`}
          />
          <FAQItem 
            question={`Is there a contract loop requirement?`} 
            answer={`No, there are no contracts or long-term commitments with our streaming networks. All plans are prepaid and you can cancel at any time without penalties or hidden fees. You only pay for the multi-device tier duration you choose.`}
          />
          <FAQItem 
            question={`What happens after my subscription expires?`} 
            answer={`Before your subscription expires, you'll receive email reminders. You can easily renew through your account dashboard or by contacting support. If you don't renew, your access will be suspended but your account data will be preserved for 30 days.`}
          />
          <FAQItem 
            question={`Does your platform offer refunds?`} 
            answer={`Yes, we offer an absolute 7-day money-back guarantee on all zyminex tv models. If you're not completely satisfied with our streaming quality, channel selection, or customer service, simply contact our support team within 7 days of your purchase for a full refund. No questions asked.`}
          />
          <FAQItem 
            question={`Can I use subscription services on multiple devices?`} 
            answer={`Yes, depending on your selected tier. The 1 Device plan supports 3 Months = $35 | 6 Months = $45 | 12 Months = $75. The 2 Devices plan supports 3 Months = $60 | 6 Months = $80 | 12 Months = $110, and the 3 Devices plan supports 3 Months = $75 | 6 Months = $105 | 12 Months = $150 simultaneously.`}
          />
          <FAQItem 
            question={`Are there long-term deployment discounts?`} 
            answer={`Yes, our 12-month tier options offer the absolute highest value parameters with fixed multi-device savings. We also run seasonal promotions and special discounts for long-term subscribers.`}
          />
        </FadeInStagger>
      </div>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-[#003554] border-t border-white/5 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-[#fff1d0] mb-4 uppercase tracking-tight">
              Ready to Start Streaming with us?
            </h2>
            <p className="text-[#fdc500] font-bold text-lg mb-8 max-w-2xl mx-auto">
              Join over 20,000 satisfied customers enjoying premium entertainment loops today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="#pricing-section"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#3CAFFF] text-[#fff1d0] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shadow-[0_0_30px_rgba(60,175,255,0.3)]"
              >
                Choose Your Plan
              </Link>
              <Link
                href="/setup"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#fff1d0] text-[#3CAFFF] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 border-2 border-[#3CAFFF]"
              >
                Setup Guide
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-[#fff1d0]/40 text-xs font-black uppercase tracking-widest">
              <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-[#3CAFFF]" /> Instant Activation</span>
              <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-[#3CAFFF]" /> Secure Checkout</span>
              <span className="flex items-center gap-2"><CreditCard className="w-3.5 h-3.5 text-[#3CAFFF]" /> All Major Cards</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}