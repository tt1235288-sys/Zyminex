import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  Award, 
  Globe, 
  Users, 
  Server, 
  Zap, 
  ShieldCheck, 
  Trophy, 
  Clock, 
  Headphones, 
  Sparkles,
  Heart,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Zyminex Premium IPTV Service',
  description: 'Discover the story behind Zyminex, the world\'s leading premium IPTV service provider operating high-tech stream setups across zyminex.stream.',
  alternates: {
    canonical: 'https://zyminex.stream/about',
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#003554]">
      
      {/* Hero Section Container */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(60,175,255,0.15),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3CAFFF08_1px,transparent_1px),linear-gradient(to_bottom,#3CAFFF08_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-[#fff1d0]" />
            <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#fff1d0] uppercase tracking-tighter leading-none mb-6">
            About <span className="text-[#3CAFFF]">Zyminex</span>
          </h1>
          <p className="text-lg md:text-xl text-[#fff1d0]/70 font-bold max-w-2xl mx-auto">
            Discover the story behind the world's leading premium IPTV Service provider.
          </p>
        </div>
      </section>

      {/* Statistics Grid Matrix - Premier Cream Cards with border-4 */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: "20,000+", label: "Happy Subscribers" },
            { icon: Globe, value: "100+", label: "Countries Covered" },
            { icon: Server, value: "150+", label: "Server Locations" },
            { icon: Trophy, value: "4.9/5", label: "Customer Rating" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl shadow-xl hover:scale-[1.02] transition-transform">
              <stat.icon className="w-10 h-10 text-[#3CAFFF] mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-black text-[#003554] uppercase tracking-tight">{stat.value}</div>
              <div className="text-[#003554]/60 text-xs font-black uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HIGH-CTR CENTRALIZED CALL-TO-ACTION BANNER */}
      <section className="w-full bg-gradient-to-r from-[#3CAFFF] via-[#003554] to-[#3CAFFF] py-10 px-4 sm:px-6 border-y-4 border-[#fff1d0]/20 shadow-[0_0_50px_rgba(60,175,255,0.4)] relative z-20 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="relative inline-block">
            <div className="bg-[#fff1d0] text-[#3CAFFF] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md animate-bounce">
              RECOMMENDED
            </div>
            <div className="absolute inset-0 rounded-full bg-[#fff1d0]/30 animate-ping opacity-75 pointer-events-none" />
          </div>
          <h4 className="text-[#fff1d0] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            BOOST YOUR EXPERIENCE<br/>BUY PREMIUM IPTV FROM US!
          </h4>
          <p className="text-[#fff1d0]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            We rank among top IPTV Providers. Get stable, buffering-free 4K network loops loaded layout instantly on zyminex tv.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#fff1d0] text-[#003554] hover:bg-[#003554] hover:text-[#fff1d0] hover:scale-105 hover:shadow-[0_0_30px_rgba(241,232,219,0.5)] transition-all duration-300 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl relative group/btn animate-pulse"
            >
              <span>Buy IPTV Now</span>
              <ArrowRight className="w-5 h-5 text-[#3CAFFF] group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Layout Block Area */}
      <div className="max-w-3xl mx-auto px-4 py-16 w-full">
        
        {/* Introduction Box Container - Styled to follow border-4 rules */}
        <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#3CAFFF]" />
              </div>
            </div>
            <div>
              <p className="text-[#003554] font-bold text-base leading-relaxed">
                Welcome to <span className="text-[#3CAFFF] font-black">Zyminex</span>, the world's leading provider of premium <span className="text-[#3CAFFF] font-black">IPTV Service</span> plans. 
                We built our platform with a single goal in mind: to revolutionize the way you experience television streams and premium IPTV Encoder hardware integrations.
              </p>
            </div>
          </div>
        </div>

        {/* Core Layout with Custom Prose Accents */}
        <div className="prose prose-invert max-w-none
          [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-black [&>h2]:text-[#fff1d0] [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:uppercase [&>h2]:tracking-tight
          [&>p]:text-[#fff1d0]/80 [&>p]:text-sm [&>p]:md:text-base [&>p]:font-medium [&>p]:leading-relaxed [&>p]:mb-6
        ">
          
          <h2>Our Mission</h2>
          <p>
            To provide the most stable, high-definition streaming service at a competitive price, backed by exceptional customer support. 
            We constantly update our zyminex subscription VOD library and server technology to keep you ahead of the digital entertainment curve.
          </p>

          <h2>Who We Are</h2>
          <p>
            Zyminex was founded by a team of streaming technology enthusiasts who recognized the need for a reliable, 
            high-quality IPTV Service. Traditional cable TV was expensive, inflexible, and offered limited content. Streaming services 
            were fragmented, requiring multiple setups. We resolved that fragment by showing users how to connect HDMI to IPTV and streamlining infrastructure pipelines cleanly.
          </p>

          <h2>What Makes Us Different</h2>
          
          {/* Feature Matrix Layout Block - Premier Cream with border-4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 not-prose">
            {[
              { icon: ShieldCheck, title: "99.9% Uptime", desc: "Enterprise-grade infrastructure ensures your content is always available" },
              { icon: Zap, title: "Anti-Freeze Tech", desc: "Proprietary streaming technology eliminates buffering" },
              { icon: Globe, title: "Global Coverage", desc: "Servers in 100+ countries for optimal performance" },
              { icon: Headphones, title: "24/7 Support", desc: "Expert support team always ready to assist you" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-[#fff1d0] rounded-2xl border-4 border-[#3CAFFF] shadow-lg">
                <item.icon className="w-8 h-8 text-[#3CAFFF] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-black text-[#003554] text-sm uppercase tracking-wider">{item.title}</h3>
                  <p className="text-[#003554]/70 text-xs font-bold mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Our Infrastructure</h2>
          <p>
            Our infrastructure is powered by global CDN networks, ensuring that every stream is delivered to your device with 
            minimal latency and absolute reliability. Whether you are invested in live sports, blockbuster movies, or iptv italiane 4k blocks, 
            <span className="text-[#3CAFFF] font-black"> Zyminex</span> has you covered.
          </p>

          <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 my-8 not-prose shadow-xl">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-[#3CAFFF]" />
                </div>
              </div>
              <div>
                <p className="text-[#003554] text-sm font-bold leading-relaxed">
                  <span className="text-[#3CAFFF] font-black uppercase tracking-wide block mb-0.5">Technical Excellence:</span> Our servers are strategically located across North America, 
                  Europe, Asia, Australia, and the Middle East. We utilize active configurations to handle queries like what is HDMI IPTV encoder capabilities for optimal terminal connections.
                </p>
              </div>
            </div>
          </div>

          <h2>Our Content Library</h2>
          <p>
            With <span className="text-[#3CAFFF] font-black">15,000+ live channels</span> and <span className="text-[#3CAFFF] font-black">60,000+ video-on-demand titles</span>, 
            our content library is one of the largest in the industry. We offer:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "Premium sports networks (ESPN, Sky Sports, DAZN)",
              "Breaking news channels (CNN, BBC, Fox News)",
              "Entertainment (HBO, Showtime, AMC, FX, Comedy Central)",
              "International channels from 100+ countries including iptv italiane 4k hubs",
              "Kids content (Nickelodeon, Disney Channel, Cartoon Network)",
              "PPV events included at no extra cost"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
                <Star className="w-5 h-5 text-[#fdc500] flex-shrink-0 mt-0.5" />
                <span className="text-[#fff1d0]">{item}</span>
              </li>
            ))}
          </ul>

          <h2>Our Commitment to You</h2>
          <p>
            We are committed to providing the best possible zyminex tv experience. This includes:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "7-day money-back guarantee on all tiered subscription allocations",
              "Instant activation protocols routed right after verification payment",
              "24/7 customer support via live messaging terminal loops and WhatsApp",
              "Regular network matrix updates with new stations and VOD assets",
              "Transparent global pricing matrices with no hidden terminal fees"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-[#3CAFFF] flex-shrink-0 mt-0.5" />
                <span className="text-[#fff1d0]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 my-8 not-prose shadow-xl">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#3CAFFF]" />
                </div>
              </div>
              <div>
                <p className="text-[#003554] text-sm font-bold leading-relaxed">
                  <span className="text-[#3CAFFF] font-black uppercase tracking-wide block mb-0.5">Our Promise:</span> We are strictly committed to your complete satisfaction metrics. If you are not happy with our service channels, 
                  we will instantly refund your execution payment structure within 7 days. No questions asked.
                </p>
              </div>
            </div>
          </div>

          <h2>Join Our Community</h2>
          <p>
            Thousands of satisfied customers have already made the switch to <span className="text-[#3CAFFF] font-black">Zyminex</span>. 
            Join our growing community and experience television the way it was meant to be - unlimited, affordable, and high-quality loops.
          </p>
        </div>

        {/* Lower Call-To-Action Box Container Area */}
        <div className="mt-16 text-center not-prose">
          <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-black text-[#003554] uppercase tracking-tight mb-3">Ready to Experience the Best IPTV Service?</h3>
            <p className="text-[#3CAFFF] font-bold text-sm md:text-base max-w-md mx-auto mb-8">
              Join over 20,000 satisfied customers enjoying premium entertainment loops with zyminex subscription layouts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4">
              <Link 
                href="/pricing" 
                className="w-full sm:w-auto text-center px-6 py-4 rounded-full bg-[#3CAFFF] text-[#fff1d0] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-md"
              >
                View Our Plans
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto text-center px-6 py-4 rounded-full bg-[#003554] text-[#3CAFFF] font-black text-sm uppercase tracking-widest border-2 border-[#3CAFFF] transition-transform hover:scale-105"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* Return Pathway Alignment Segment */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[#3CAFFF] hover:text-[#fff1d0] transition-colors font-black text-xs uppercase tracking-widest">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}