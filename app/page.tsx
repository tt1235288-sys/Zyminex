'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import SocialShareSection from './components/SocialShareSection';
import AnimatedCounter from './components/AnimatedCounter';
import { 
  PlayCircle, 
  ShieldCheck, 
  MonitorPlay, 
  Send, 
  Twitter, 
  MessageCircle, 
  Share2, 
  Instagram, 
  Facebook,
  Zap, 
  Download, 
  CreditCard, 
  CheckCircle2, 
  MonitorSmartphone, 
  Tv2, 
  Globe, 
  Cpu, 
  ArrowRight, 
  Award, 
  Lock, 
  ThumbsUp, 
  Users, 
  Server, 
  Film, 
  Trophy, 
  Calendar, 
  Database, 
  Tv, 
  Volume2, 
  Activity, 
  BarChart, 
  Medal, 
  Settings, 
  LifeBuoy,
  Shield
} from 'lucide-react';

// Dynamic component imports with SSR disabled for pure client widgets
const PricingSection = dynamic(() => import('./components/PricingSection'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#3CAFFF] border-t-transparent" />
    </div>
  ),
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#003554] rounded-xl animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  ssr: false,
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-[#003554] rounded-2xl animate-pulse max-w-7xl mx-auto" />,
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#3CAFFF] border-t-transparent" />
    </div>
  ),
});

function HomePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#003554] text-[#fff1d0] overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative px-6 py-24 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt={`${CONSTANTS.BRAND_NAME} 4K streaming entertainment library setup`}
            fill
            priority
            className="object-cover object-center brightness-[0.25]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#003554]/60" />
        </div>
        
        <FadeIn className="relative z-10 max-w-5xl pt-10 mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-[#fff1d0]" />
            <span className="text-[#fff1d0] font-bold text-xs uppercase tracking-widest">Top Rated 4K Streaming Network</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[#fff1d0] mb-6 leading-none whitespace-normal break-words">
            {CONSTANTS.BRAND_NAME} - BEST <br className="hidden md:block" />
            <span className="text-[#3CAFFF]">IPTV PROVIDER</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-[#fff1d0]/90 max-w-3xl mx-auto mb-6 font-medium leading-relaxed px-2">
            Unlock premium entertainment with {CONSTANTS.BRAND_NAME}. Stream over 15,000 live international channels, 60,000 movies on demand, and major pay-per-view sports events with ultra-stable anti-freeze server technology and instant multi-device activation.
          </p>

          <p className="text-xs sm:text-sm text-[#fdc500] max-w-2xl mx-auto mb-10 font-semibold leading-relaxed">
            Rated by thousands on Reddit and community streaming forums for zero-buffering 60 FPS sports playback and affordable multi-device pricing packages.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link href="/pricing" className="w-full sm:w-auto text-center whitespace-nowrap px-6 sm:px-8 py-4 rounded-full bg-[#3CAFFF] text-[#fff1d0] font-black text-base sm:text-lg hover:bg-[#3CAFFF]/80 transition-transform hover:scale-105 uppercase tracking-wider shrink-0">
              View {CONSTANTS.BRAND_NAME} Cost & Plans
            </Link>
            <Link href="#channels" className="w-full sm:w-auto text-center whitespace-nowrap px-6 sm:px-8 py-4 rounded-full bg-[#fff1d0] text-[#3CAFFF] font-black text-base sm:text-lg hover:bg-[#fdc500] transition-transform hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0">
              <PlayCircle className="w-5 h-5 shrink-0" /> Browse Channels
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#fff1d0] font-bold uppercase tracking-widest bg-[#003554]/40 backdrop-blur-sm px-8 py-4 rounded-3xl border border-white/5">
            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-[#3CAFFF]" /> Ultra 4K 60 FPS</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#3CAFFF]" /> 99.9% Server Uptime</span>
            <span className="flex items-center gap-2"><Activity className="w-5 h-5 text-[#3CAFFF]" /> Anti-Freeze Engine</span>
          </div>
        </FadeIn>
      </section>

      {/* Partner Slider Section */}
      <div className="min-h-[128px]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* 3-Step Setup Section */}
      <section className="py-24 bg-[#3CAFFF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <span className="text-[#003554] bg-[#fff1d0] px-4 py-1 rounded-full font-black uppercase tracking-widest text-xs mb-4">Quick Setup Tutorial</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#fff1d0] tracking-tighter uppercase leading-none">
                START STREAMING IN <br/><span className="text-[#003554]">3 SIMPLE STEPS</span>
              </h2>
              <p className="text-[#fff1d0] text-lg mt-6 font-bold">
                Setting up your {CONSTANTS.BRAND_NAME} subscription is fast and straightforward. Follow our simple activation guide to deploy high-speed streaming on Smart TVs, Firestick, Android, and iOS devices within minutes.
              </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <FadeInItem className="relative flex flex-col items-center text-center z-10 group bg-[#003554] p-8 rounded-3xl border border-white/5 hover:border-[#fff1d0] transition-all hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-[#3CAFFF] flex items-center justify-center mb-6 relative">
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#fff1d0] text-[#003554] font-black flex items-center justify-center text-sm shadow-lg">1</div>
                <CreditCard className="w-10 h-10 text-[#fff1d0]" />
              </div>
              <h3 className="text-2xl font-black text-[#fff1d0] mb-4 tracking-tighter uppercase">Choose Your Plan</h3>
              <p className="text-[#fdc500] text-base font-bold leading-relaxed">
                Select your preferred subscription period with flexible 1, 3, 6, or 12-month packages and multi-device connection options.
              </p>
            </FadeInItem>

            <FadeInItem className="relative flex flex-col items-center text-center z-10 group bg-[#003554] p-8 rounded-3xl border border-white/5 hover:border-[#fff1d0] transition-all hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-[#3CAFFF] flex items-center justify-center mb-6 relative">
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#fff1d0] text-[#003554] font-black flex items-center justify-center text-sm shadow-lg">2</div>
                <Download className="w-10 h-10 text-[#fff1d0]" />
              </div>
              <h3 className="text-2xl font-black text-[#fff1d0] mb-4 tracking-tighter uppercase">Install Your App</h3>
              <p className="text-[#fdc500] text-base font-bold leading-relaxed">
                Download your favorite player like IPTV Smarters Pro, TiviMate, or IBO Player onto your streaming hardware.
              </p>
            </FadeInItem>

            <FadeInItem className="relative flex flex-col items-center text-center z-10 group bg-[#003554] p-8 rounded-3xl border border-white/5 hover:border-[#fff1d0] transition-all hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-[#3CAFFF] flex items-center justify-center mb-6 relative">
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#fff1d0] text-[#003554] font-black flex items-center justify-center text-sm shadow-lg">3</div>
                <Tv2 className="w-10 h-10 text-[#fff1d0]" />
              </div>
              <h3 className="text-2xl font-black text-[#fff1d0] mb-4 tracking-tighter uppercase">Instant Activation</h3>
              <p className="text-[#fdc500] text-base font-bold leading-relaxed">
                Log in using your Xtream Codes API credentials sent immediately to your email and start watching in ultra 4K.
              </p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Living Room Section */}
      <section className="w-full bg-[#003554] py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#3CAFFF] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#fff1d0]">
            UNMATCHED STREAMING COMFORT
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#fff1d0] leading-none">
            THE ULTIMATE LIVING ROOM <span className="text-[#fdc500]">ENTERTAINMENT SETUP</span>
          </h2>
        </div>

        <div className="w-full bg-black/20 py-8 flex justify-center items-center transition-all duration-300 hover:drop-shadow-[0_0_50px_rgba(253,197,0,0.15)]">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt={`${CONSTANTS.BRAND_NAME} home entertainment 4K live streaming setup`}
              width={1200}
              height={480}
              priority
              className="h-full w-full object-contain"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-[#fdc500] font-bold">
            Stream your favorite uncompressed live channels while relaxing in total comfort. {CONSTANTS.BRAND_NAME} delivers high-throughput server architecture directly to Smart TVs, streaming boxes, and mobile displays without complex hardware decoders.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link href="/pricing" className="bg-[#fff1d0] px-10 py-4 text-sm font-black uppercase tracking-widest text-[#3CAFFF] hover:bg-[#3CAFFF] hover:text-[#fff1d0] transition duration-300 rounded-full">
              Get Started with {CONSTANTS.BRAND_NAME}
            </Link>
          </div>
        </div>
      </section>

      {/* Media Channels Section */}
      <section id="channels" className="pt-24 bg-[#fdc500] max-w-[100vw] overflow-hidden relative min-h-[400px]">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#003554] mb-4 uppercase tracking-tighter leading-none">
              PREMIUM ULTRA HD CHANNEL LIBRARY
            </h2>
            <p className="text-[#003554] font-bold text-lg max-w-3xl">
              Access thousands of high-definition channels, live sports networks, and on-demand movies with real-time electronic program guide (EPG) synchronization.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#003554] rounded-xl" />
            ))}
          </div>
        )}
      </section>

      {/* Pricing Section */}
      <div className="min-h-[600px] bg-[#003554]">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      {/* Trust Badges */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fff1d0] rounded-3xl p-8 md:p-12">
          <FadeInStagger className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#003554] flex items-center justify-center shrink-0">
                <Lock className="w-8 h-8 text-[#fff1d0]" />
              </div>
              <div>
                <h3 className="font-black text-[#003554] text-xl uppercase tracking-tight">Encrypted Checkout</h3>
                <p className="text-[#3CAFFF] font-bold text-sm">256-bit SSL encrypted payment protocols for secure billing</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#003554] flex items-center justify-center shrink-0">
                <ThumbsUp className="w-8 h-8 text-[#fff1d0]" />
              </div>
              <div>
                <h3 className="font-black text-[#003554] text-xl uppercase tracking-tight">Satisfaction Guarantee</h3>
                <p className="text-[#3CAFFF] font-bold text-sm">Risk-free trial period and fast credential activation</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#003554] flex items-center justify-center shrink-0">
                <LifeBuoy className="w-8 h-8 text-[#fff1d0]" />
              </div>
              <div>
                <h3 className="font-black text-[#003554] text-xl uppercase tracking-tight">24/7 Live Support</h3>
                <p className="text-[#3CAFFF] font-bold text-sm">Technical assistance available via live chat and WhatsApp</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#003554] flex items-center justify-center shrink-0">
                <Medal className="w-8 h-8 text-[#fff1d0]" />
              </div>
              <div>
                <h3 className="font-black text-[#003554] text-xl uppercase tracking-tight">Enterprise Servers</h3>
                <p className="text-[#3CAFFF] font-bold text-sm">Optimized for high-demand sports and 4K video feeds</p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-[#fdc500] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#003554] mb-4 uppercase tracking-tighter">
              {CONSTANTS.BRAND_NAME} BY THE NUMBERS
            </h2>
            <p className="text-[#fff1d0] text-base font-bold bg-[#003554] px-6 py-2 rounded-2xl max-w-xl mx-auto mt-4">
              Industry-leading performance metrics and verifiable server uptime statistics.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-[#003554] mb-2"><AnimatedCounter value={20} suffix="K+" /></span>
              <span className="text-sm text-[#003554] font-black uppercase tracking-widest mt-2">Active Subscribers</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-[#003554] mb-2"><AnimatedCounter value={15} suffix="K+" /></span>
              <span className="text-sm text-[#003554] font-black uppercase tracking-widest mt-2">Live Channels</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-[#003554] mb-2"><AnimatedCounter value={60} suffix="K+" /></span>
              <span className="text-sm text-[#003554] font-black uppercase tracking-widest mt-2">VOD Movies & Series</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-[#003554] mb-2"><AnimatedCounter value={99.9} decimals={1} suffix="%" /></span>
              <span className="text-sm text-[#003554] font-black uppercase tracking-widest mt-2">Verified Uptime</span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Global Server Map */}
      <div className="min-h-[400px] bg-[#003554]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* Benefits Section */}
      <section className="py-24 bg-[#fff1d0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#003554] mb-6 uppercase tracking-tighter leading-none">
              WHY <span className="text-[#3CAFFF]">{CONSTANTS.BRAND_NAME}</span> IS THE LEADING STREAMING CHOICE
            </h2>
            <p className="text-[#003554] font-bold text-lg max-w-3xl mx-auto">
              Discover why cord-cutters and home theater enthusiasts choose our high-bitrate streaming infrastructure for daily viewing.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: Database, title: "Massive Content Library", desc: "Access 15,000+ live global channels and over 60,000 on-demand movies updated on a daily schedule." },
              { icon: Activity, title: "Anti-Freeze Server Protocol", desc: "Proprietary server load-balancing technology eliminates buffering and packet jitter during live sporting events." },
              { icon: Server, title: "High-Throughput Global CDN", desc: "Distributed edge servers across North America, Europe, and Asia ensure minimal latency and ultra-fast zapping speeds." },
              { icon: Trophy, title: "Unrestricted Sports & PPV", desc: "Stream major football leagues, boxing PPVs, MMA bouts, and motorsport events in native 60 FPS full HD and 4K." },
              { icon: Calendar, title: "Automated 7-Day EPG Guide", desc: "Track program schedules easily with our synchronized electronic guide that integrates directly into your player." },
              { icon: Users, title: "Multi-Connection Support", desc: "Enjoy simultaneous streaming on multiple TVs, phones, or tablets with our flexible multi-room account packages." }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#003554] rounded-3xl p-8 border-3 border-[#3CAFFF] hover:border-[#fff1d0] transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-[#3CAFFF] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#fff1d0]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#fff1d0] mb-3 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-[#fdc500] font-medium">{item.desc}</p>
                </div>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* Channel Categories */}
      <section className="py-24 bg-[#003554]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-6 uppercase tracking-tighter leading-none">
              EXPLORE OUR CHANNEL LINEUP
            </h2>
            <p className="text-[#fdc500] font-bold text-lg max-w-3xl mx-auto">
              Our channel lineup covers every major entertainment, sports, and international category in crystal-clear 4K and Full HD.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { cat: "Live Sports", channels: "ESPN, Sky Sports, BT Sport, DAZN, Bein Sports, TNT Sports", icon: Trophy },
              { cat: "24/7 World News", channels: "CNN, BBC News, Sky News, CNBC, Bloomberg, Fox News", icon: Globe },
              { cat: "Premium Entertainment", channels: "HBO, Showtime, Starz, Cinemax, AMC, FX Networks", icon: Tv },
              { cat: "Family & Kids", channels: "Disney Channel, Nickelodeon, Cartoon Network, Boomerang", icon: Shield },
              { cat: "International Feeds", channels: "UK, USA, Canada, Italy (Italiane 4K), Germany, France, Arabic, LatAm", icon: Globe },
              { cat: "Music & Concerts", channels: "MTV, VH1, Stingray Music, Clubland, Live Concert Feeds", icon: Volume2 },
              { cat: "Cinema & VOD", channels: "Paramount, TCM, Cinema Vault, Latest Blockbusters", icon: Film },
              { cat: "Major PPV Events", channels: "UFC, WWE, Boxing Championship Cards, Racing PPVs", icon: Trophy }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#fff1d0] rounded-xl p-4 border-3 border-[#3CAFFF] hover:border-[#fff1d0] transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-[#3CAFFF]" />
                    <h3 className="font-bold text-[#3CAFFF] text-sm sm:text-base uppercase tracking-wider">{item.cat}</h3>
                  </div>
                  <p className="text-[#003554] font-medium text-xs">{item.channels}</p>
                </div>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="bg-[#003554] py-20">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          
          {/* Block 1 */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 overflow-hidden rounded-3xl bg-[#3CAFFF] p-3 rotate-2 transition-transform hover:rotate-0 duration-500">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/image-1.webp"
                  alt={`${CONSTANTS.BRAND_NAME} 4K streaming quality configuration`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#003554] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#fff1d0]">
                  High Bitrate Pipeline
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#003554] p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[320px]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3CAFFF] text-[#fff1d0] shrink-0">
                      <PlayCircle className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-lg font-black uppercase text-[#fff1d0]">4K Ultra HD Feeds</p>
                      <p className="text-xs font-bold text-[#fdc500]">
                        Uncompressed 60 FPS live video delivered via optimized edge CDN routes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FadeIn className="order-2">
              <span className="mb-4 inline-flex rounded-full bg-[#3CAFFF] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#fff1d0]">
                HIGH PERFORMANCE TRANSMISSION
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#fff1d0] leading-none mb-4">
                EXPERIENCE ADVANCED <span className="text-[#3CAFFF]">4K STREAMING SERVERS</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#fdc500] font-bold">
                Pairing enterprise-grade server infrastructure with hardware-accelerated video rendering guarantees seamless playback across all your devices. {CONSTANTS.BRAND_NAME} delivers uncompressed feeds with rapid channel switching and full EPG integration.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {['Anti-freeze server load balancing', 'Sub-second channel switching speeds', 'High-capacity on-demand movie vault', 'Compatible with Smart TVs, Firestick & Android'].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#3CAFFF]/20 border border-[#3CAFFF]/40 px-4 py-3 text-sm font-bold uppercase text-[#fff1d0]">✓ {item}</div>
                ))}
              </div>
              
              <div className="w-full flex sm:inline-flex mt-8 px-1">
                <Link href="/pricing" className="w-full sm:w-auto text-center whitespace-nowrap bg-[#fff1d0] px-8 py-4 text-sm font-black uppercase tracking-widest text-[#3CAFFF] hover:bg-[#3CAFFF] hover:text-[#fff1d0] transition duration-300 rounded-full shrink-0">
                  Claim Your Access Now
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Block 2 */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex rounded-full bg-[#3CAFFF]/20 border border-[#3CAFFF]/40 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#fff1d0]">
                LIVE SPORTS & PPV COVERAGE
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#fff1d0] leading-none mb-4">
                STREAM EVERY MAJOR <span className="text-[#fdc500]">STADIUM & ARENA MATCH</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#fdc500] font-bold">
                Never miss a single match. Gain instant access to premier football tournaments, championship boxing matches, MMA fights, motorsport races, and basketball leagues in pristine 60 FPS without blackout restrictions.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {['Premier League, Champions League & La Liga', 'UFC, Boxing PPV & WWE Events', 'Low-latency 60 FPS live sports feeds', 'Multi-language audio track options'].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#3CAFFF] px-4 py-3 text-sm font-bold uppercase text-[#fff1d0]">✓ {item}</div>
                ))}
              </div>
              
              <div className="w-full flex sm:inline-flex mt-8 px-1">
                <Link href="/pricing" className="w-full sm:w-auto text-center whitespace-nowrap bg-[#3CAFFF] px-8 py-4 text-sm font-black uppercase tracking-widest text-[#003554] hover:bg-[#fff1d0] hover:text-[#003554] transition duration-300 rounded-full shrink-0">
                  Unlock Sports Channels
                </Link>
              </div>
            </FadeIn>
            <div className="relative order-1 overflow-hidden rounded-3xl bg-[#3CAFFF]/30 p-3 lg:order-2 -rotate-2 transition-transform hover:rotate-0 duration-500">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/bg-1.webp"
                  alt={`${CONSTANTS.BRAND_NAME} live sports 4K streaming feed`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#003554] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#fff1d0]">
                  Live Sports Coverage
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#003554] p-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3CAFFF] text-[#003554]">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-lg font-black uppercase text-[#fff1d0]">VIP Sports Coverage</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#fdc500]">All Major Leagues & PPVs Included</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#3CAFFF]/10 px-4 py-2 rounded-full border border-[#3CAFFF]/20 mb-6">
              <BarChart className="w-4 h-4 text-[#fdc500]" />
              <span className="text-[#fdc500] font-bold text-sm uppercase tracking-wider">Side-by-Side Comparison</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-6 uppercase tracking-tight">
              {CONSTANTS.BRAND_NAME.toUpperCase()} VS TRADITIONAL CABLE
            </h2>
            <p className="text-[#fff1d0]/80 text-lg max-w-3xl mx-auto font-medium">
              See why thousands of viewers are cutting the cord and switching to {CONSTANTS.DOMAIN} for flexible, high-resolution home entertainment.
            </p>
          </FadeIn>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <div className="bg-gradient-to-br from-[#003554]/80 to-black/80 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 border-b border-r border-white/10 bg-white/5"><h3 className="text-xl font-bold text-white">Feature</h3></div>
                <div className="p-6 border-b border-r border-white/10 bg-gradient-to-r from-[#3CAFFF]/10 to-transparent"><h3 className="text-xl font-bold text-[#fdc500]">{CONSTANTS.BRAND_NAME}</h3></div>
                <div className="p-6 border-b border-white/10"><h3 className="text-xl font-bold text-white/40">Traditional Cable</h3></div>
                
                {[
                  { feature: "Monthly Cost", us: "From $11.60/mo (No hidden fees)", cable: "$80-$150 per month", highlight: true },
                  { feature: "Contract Required", us: "No contract (Pay as you go)", cable: "12-24 month commitment" },
                  { feature: "Live Channels", us: "15,000+ worldwide feeds", cable: "100-300 local channels", highlight: true },
                  { feature: "VOD Library", us: "60,000+ movies & TV series", cable: "Limited or pay-per-view" },
                  { feature: "4K 60 FPS Streaming", us: "Full 4K & UHD support", cable: "Rarely available", usIcon: true },
                  { feature: "Multi-Device Support", us: "Smart TVs, Firestick, Android, iOS", cable: "Extra fees per TV box", usIcon: true },
                  { feature: "Sports PPV Included", us: "All major fight cards included", cable: "Extra $60-$90 per event", usIcon: true },
                  { feature: "Global International Feeds", us: "100+ countries supported", cable: "Local broadcasts only", highlight: true }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-0 contents">
                    <div className={`p-6 border-r border-white/5 ${idx % 2 === 0 ? 'bg-white/5' : ''}`}><span className="text-white/80 font-medium">{row.feature}</span></div>
                    <div className={`p-6 border-r border-white/5 ${idx % 2 === 0 ? 'bg-white/5' : ''}`}>
                      {row.usIcon ? (
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#fdc500]" /><span className="text-[#fdc500] font-semibold">{row.us}</span></div>
                      ) : (
                        <span className={`${row.highlight ? 'text-[#fdc500] font-bold' : 'text-white/80'}`}>{row.us}</span>
                      )}
                    </div>
                    <div className={`p-6 ${idx % 2 === 0 ? 'bg-white/5' : ''}`}><span className="text-white/40">{row.cable}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {[
              { feature: "Monthly Cost", us: "From $11.60/mo", cable: "$80-$150/month" },
              { feature: "Contract Required", us: "No contract", cable: "12-24 month lock-in" },
              { feature: "Live Channels", us: "15,000+ global channels", cable: "100-300 channels" },
              { feature: "VOD Library", us: "60,000+ movies & shows", cable: "Limited titles" },
              { feature: "4K Streaming", us: "Yes (Native 60 FPS)", cable: "Rarely" },
              { feature: "Multi-Device", us: "Multi-room packages", cable: "Additional box fees" },
              { feature: "Sports PPV", us: "All included", cable: "Extra $60-90 per event" },
              { feature: "Global Feeds", us: "100+ countries", cable: "Local only" }
            ].map((row, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/[0.01] to-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/5 p-6">
                <div className="text-center mb-4"><span className="text-white/60 text-sm uppercase tracking-wider">{row.feature}</span></div>
                <div className="flex justify-between items-center">
                  <div className="text-left"><div className="text-[#3CAFFF] font-bold text-lg">{row.us}</div><div className="text-[#3CAFFF]/60 text-xs">{CONSTANTS.BRAND_NAME}</div></div>
                  <div className="text-right"><div className="text-white/40 line-through text-lg">{row.cable}</div><div className="text-white/20 text-xs">Traditional Cable</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-6 uppercase tracking-tight">
            TRUSTED BY OVER <span className="text-[#3CAFFF]">20,000+ SUBSCRIBERS</span> WORLDWIDE
          </h2>
          <p className="text-[#fdc500] text-lg font-bold max-w-2xl mx-auto">
            Read real feedback from cord-cutters who upgraded their home streaming with {CONSTANTS.BRAND_NAME}.
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Marcus V.", text: "I've tried multiple streaming services, but Zyminex operates with unmatched stability. The 4K sports channels stream with zero buffering even during major football derbies.", role: "Home Entertainment Enthusiast" },
            { name: "Sophia L.", text: "Completely cancelled my expensive cable box. Zyminex gives me all the live sports, news channels, and movie libraries my whole family needs across every TV.", role: "Smart Home Streamer" },
            { name: "Damian K.", text: "The international channel selection is incredible. Fast channel zapping, crystal-clear 4K quality, and responsive customer support whenever needed.", role: "Verified Subscriber" }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-[#fff1d0] rounded-3xl p-8 border-4 border-[#3CAFFF] shadow-2xl transition-transform hover:-translate-y-2 duration-300">
              <div className="flex gap-2 mb-6 items-center">
                <div className="w-12 h-12 rounded-full bg-[#3CAFFF] flex items-center justify-center shrink-0">
                  <MonitorPlay className="w-6 h-6 text-[#fff1d0]" />
                </div>
                <div className="h-1 w-full bg-[#003554]/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#3CAFFF] w-[90%]" />
                </div>
              </div>
              <p className="text-[#003554] font-bold text-lg leading-relaxed mb-8 italic">"{testimonial.text}"</p>
              <div className="border-t border-[#003554]/20 pt-4">
                <div className="font-black text-[#003554] text-xl uppercase tracking-tight">{testimonial.name}</div>
                <div className="text-[#3CAFFF] text-sm font-black uppercase tracking-wider mt-1">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </FadeInStagger>
      </section>

      {/* Device Support Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full relative">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-6 uppercase tracking-tight">
            COMPATIBLE WITH ALL STREAMING DEVICES
          </h2>
          <p className="text-[#fff1d0]/80 text-lg max-w-3xl mx-auto mb-16 font-medium">
            {CONSTANTS.BRAND_NAME} integrates seamlessly with your favorite media player apps and operating systems with simple 5-minute setup guides.
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
          {[
            { tag: "Smart TVs (Samsung / LG)", icon: Tv2 },
            { tag: "Android TV & Boxes", icon: Cpu },
            { tag: "Apple TV & iOS", icon: MonitorSmartphone },
            { tag: "Amazon Firestick 4K", icon: Zap },
            { tag: "Windows PC & Mac", icon: MonitorPlay },
            { tag: "MAG & Formuler Boxes", icon: ShieldCheck },
          ].map((device) => {
            const Icon = device.icon;
            return (
              <div key={device.tag} className="bg-white/[0.02] backdrop-blur-sm border-2 border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#fdc500]/40 hover:bg-white/[0.04] hover:-translate-y-2 transition-all cursor-pointer group">
                <Icon className="w-12 h-12 text-[#fff1d0] group-hover:text-[#fdc500] group-hover:scale-110 transition-all" />
                <span className="text-sm font-bold text-[#fff1d0]/80 group-hover:text-[#fff1d0] text-center">{device.tag}</span>
              </div>
            );
          })}
        </FadeInStagger>
      </section>

{/* 1-Click Social Sharing Section */}
      <SocialShareSection />


      {/* FAQ Wrapper */}
      <div className="min-h-[400px] bg-[#003554]">
        {isMounted ? <FAQ /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* Blog Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-[#fff1d0] mb-4 uppercase tracking-tight">
              LATEST <span className="text-[#3CAFFF]">GUIDES & STREAMING LOGS</span>
            </h2>
            <p className="text-[#fdc500] text-lg font-bold">
              Read our in-depth tutorials on hardware setup, buffer elimination, and streaming optimizations.
            </p>
          </div>
          
          <div className="flex shrink-0">
            <Link href="/blog" className="whitespace-nowrap px-6 py-3 rounded-full border border-white/10 text-[#fff1d0] font-bold hover:bg-white/5 transition-colors flex items-center gap-2 group shrink-0">
              <span>View All Guides</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#fdc500]" />
            </Link>
          </div>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {blogPosts.slice(0, 3).map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 bg-white/[0.01] border border-white/5 shadow-lg group-hover:border-[#3CAFFF]/40 transition-colors duration-300">
                  <Image 
                    src={post.image} 
                    alt={`${post.title} - ${CONSTANTS.BRAND_NAME} Guide`} 
                    width={800}
                    height={450}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#003554]/40" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-[#3CAFFF] text-[#fff1d0] text-[10px] font-black uppercase tracking-widest rounded-lg inline-block">{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#fff1d0] mb-3 group-hover:text-[#3CAFFF] transition-colors tracking-tight line-clamp-2 uppercase">{post.title}</h3>
                <p className="text-[#fff1d0]/70 text-sm md:text-base mb-4 line-clamp-2 leading-relaxed font-medium">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#fdc500] uppercase tracking-widest group-hover:gap-3 transition-all">
                  Read Full Guide<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          ))}
        </FadeInStagger>
      </section>
        
      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#003554]">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#3CAFFF]/20 bg-black shadow-[0_0_80px_rgba(60,175,255,0.08)] lg:rounded-[3rem]">
            <Image
              src="/img/bg-2.webp"
              alt={`${CONSTANTS.BRAND_NAME} high-speed secure streaming network setup`}
              width={1400}
              height={600}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-30 brightness-[0.4]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#3CAFFF]/15 blur-[110px]" />

            <FadeIn className="relative z-10 px-6 py-14 text-center sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#3CAFFF]/30 bg-[#3CAFFF]/10 px-4 py-2 backdrop-blur-md">
                <svg className="h-4 w-4 text-[#fdc500]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L13 7L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7 7L10 2Z" /></svg>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#fdc500]">Official Streaming Access</span>
              </div>
              <h2 className="mx-auto max-w-5xl text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[#fff1d0] leading-none mb-6">
                UPGRADE YOUR <br/><span className="text-[#3CAFFF]">ENTERTAINMENT TODAY</span>
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#fff1d0]/80 md:text-lg font-medium">
                Stream 15,000+ live channels, 60,000+ movies on demand, and uninterrupted 4K sports with {CONSTANTS.DOMAIN}. Instant account activation with 24/7 dedicated customer support.
              </p>
              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['15K+', 'Live Channels'],
                  ['4K 60FPS', 'Ultra HD Streams'],
                  ['99.9%', 'Verified Uptime'],
                  ['24/7', 'Live Assistance'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/5 bg-black/60 p-4 backdrop-blur-md">
                    <div className="text-2xl font-black text-[#3CAFFF] sm:text-3xl">{value}</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#fff1d0]/50">{label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto px-4">
                <Link href="/pricing" className="w-full sm:w-auto text-center whitespace-nowrap rounded-full bg-[#3CAFFF] px-10 py-4 text-sm font-black uppercase tracking-widest text-[#fff1d0] shadow-[0_0_30px_rgba(60,175,255,0.35)] hover:bg-[#3CAFFF]/80 transition-all hover:scale-105 shrink-0">
                  Choose Your Subscription
                </Link>
                <Link href="/setup" className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-[#fff1d0] backdrop-blur-md hover:bg-white/10 transition-all shrink-0">
                  <Settings className="h-5 w-5 text-[#fdc500] shrink-0" /> Device Setup Guides
                </Link>
              </div>
              
              <p className="mt-8 text-sm font-medium text-[#fff1d0]/50">Instant Activation • 256-Bit SSL Encrypted Checkout • Risk-Free Guarantee</p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;