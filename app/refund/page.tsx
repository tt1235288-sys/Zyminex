import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, FileText, AlertCircle, CheckCircle, Mail, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Refund Policy | Zyminex Premium IPTV Service',
  description: 'Please read our runtime transaction billing terms carefully regarding account provisions and balance adjustments on zyminex.stream.',
  alternates: {
    canonical: 'https://zyminex.stream/refund',
  }
};

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#003554]">
      
      {/* Hero Section Container */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(60,175,255,0.15),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3CAFFF08_1px,transparent_1px),linear-gradient(to_bottom,#3CAFFF08_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#fff1d0]" />
            <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">Billing & Protection</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#fff1d0] uppercase tracking-tighter leading-none mb-6">
            Refund <span className="text-[#3CAFFF]">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-[#fff1d0]/70 font-bold max-w-2xl mx-auto">
            Please read our runtime transaction billing terms carefully regarding account provisions and balance adjustments.
          </p>
          <p className="text-xs text-[#fff1d0]/40 mt-4 font-bold uppercase tracking-wider">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section Container */}
      <div className="max-w-3xl mx-auto px-4 py-16 w-full">
        
        {/* Main Conditions Box - Modified to border-4 */}
        <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#3CAFFF]" />
              </div>
            </div>
            <div>
              <p className="text-[#003554] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#3CAFFF] font-black uppercase tracking-wide block mb-0.5">Subscription Activation Note:</span> By executing payment on our platform setup systems, you confirm access authorization parameters. All streaming subscription provisions are processed automatically into active user lines.
              </p>
            </div>
          </div>
        </div>

        {/* Core Layout with Custom Prose Accents */}
        <div className="prose prose-invert max-w-none
          [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-black [&>h2]:text-[#fff1d0] [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:uppercase [&>h2]:tracking-tight
          [&>p]:text-[#fff1d0]/80 [&>p]:text-sm [&>p]:md:text-base [&>p]:font-medium [&>p]:leading-relaxed [&>p]:mb-6
        ">
          
          <h2>1. System Protocol & Provisioning</h2>
          <p>
            Once a payment transaction routes successfully into our enterprise gateway architecture, our automated networks allocate dedicated server line resources for your client profile. Due to immediate bandwidth slot locking, all setup deployment configurations are definitive upon delivery across our IPTV Service tiers.
          </p>

          <h2>2. Service Level Adjustments</h2>
          <p>
            We stand behind our network stream reliability. In case of localized terminal setup mismatch issues, our technical dispatch team operates continuous line optimization. If system diagnostic conflicts prevent access, users are entitled to standard routing modification configurations on zyminex tv.
          </p>

          <h2>3. Account Validation Windows</h2>
          <p>
            To guarantee customer satisfaction parameters while protecting streaming line assets from malicious allocation exploitation, all validation adjustment procedures follow strict runtime bounds:
          </p>
          
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "Account data line evaluation logs must be opened through our official channels",
              "Our engineering dispatch crew remains active 24/7 to adjust streaming protocols",
              "Configuration adjustments are applied to equivalent system parameters within runtime windows",
              "Line modifications ensure full access synchronization without service disruption tracks"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-[#3CAFFF] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Subdued Terms Area — Small, un-highlighted layout block */}
          <div className="mt-12 pt-6 border-t-2 border-white/5 opacity-40 hover:opacity-100 transition-opacity duration-300">
            <p className="text-[11px] font-medium leading-relaxed text-[#fff1d0]/60 tracking-normal normal-case">
              * Verification Framework Clauses: Transactions generated through terminal checkouts link instantly to live CDN provisioning protocols. When a payment completes, capital tokens are locked for transit node preservation and cannot be extracted or returned as liquid currency. Account configuration adjustments, replacements, or technical profile line modifications are strictly constrained to an operational window of 24 hours post-payment receipt. Requests initiated outside this designated 24-hour evaluation envelope are systemically voided by network routing policies.
            </p>
          </div>

          <h2>4. Technical Support Terminals</h2>
          <p>
            If you encounter unexpected channel synchronization delays or playback error prompts, please refrain from executing secondary external payment counter-actions. Open a support thread directly to get real-time diagnostic parameters routing help from top IPTV Providers.
          </p>
          
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            <li className="flex items-center gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
              <Mail className="w-5 h-5 text-[#3CAFFF]" />
              <span>Billing desk support: <a href="mailto:billing@zyminex.stream" className="text-[#3CAFFF] font-black hover:text-[#fff1d0] transition-colors">billing@zyminex.stream</a></span>
            </li>
          </ul>
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