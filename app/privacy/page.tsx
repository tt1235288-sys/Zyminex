import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Mail, CheckCircle, Server, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Zyminex Premium IPTV Service',
  description: 'At Zyminex, we take your privacy seriously. Learn how we collect, use, and protect your information across our top IPTV Providers ecosystem on zyminex.stream.',
  alternates: {
    canonical: 'https://zyminex.stream/privacy',
  }
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#003554]">
      
      {/* Hero Section Container */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(60,175,255,0.15),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3CAFFF08_1px,transparent_1px),linear-gradient(to_bottom,#3CAFFF08_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#fff1d0]" />
            <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#fff1d0] uppercase tracking-tighter leading-none mb-6">
            Privacy <span className="text-[#3CAFFF]">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-[#fff1d0]/70 font-bold max-w-2xl mx-auto">
            At Zyminex, we take your privacy seriously. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-xs text-[#fff1d0]/40 mt-4 font-bold uppercase tracking-wider">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section Container */}
      <div className="max-w-3xl mx-auto px-4 py-16 w-full">
        
        {/* Info Box Container - Modified to border-4 */}
        <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#3CAFFF]" />
              </div>
            </div>
            <div>
              <p className="text-[#003554] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#3CAFFF] font-black uppercase tracking-wide block mb-0.5">Our Commitment:</span> We are strictly committed to protecting your personal data matrix loops and being entirely transparent about how we process terminal profiles.
              </p>
            </div>
          </div>
        </div>

        {/* Core Layout with Custom Prose Accents */}
        <div className="prose prose-invert max-w-none
          [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-black [&>h2]:text-[#fff1d0] [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:uppercase [&>h2]:tracking-tight
          [&>p]:text-[#fff1d0]/80 [&>p]:text-sm [&>p]:md:text-base [&>p]:font-medium [&>p]:leading-relaxed [&>p]:mb-6
        ">
          
          <h2>1. Information We Collect</h2>
          <p>
            When you use our IPTV Service, we may collect the following types of information parameters:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "Email address (for account creation and communication infrastructure handles)",
              "Payment info (processed securely through encrypted third-party payment integrations)",
              "IP address and device parameters (for system log validation metrics and security diagnostics)",
              "Subscription tier configuration and plan runtime options",
              "Operational communication preference histories"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-[#3CAFFF] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 my-8 not-prose shadow-xl">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#3CAFFF]" />
                </div>
              </div>
              <div>
                <p className="text-[#003554] text-sm font-bold leading-relaxed">
                  <span className="text-[#3CAFFF] font-black uppercase tracking-wide block mb-0.5">What We Do NOT Collect:</span> We do not monitor your active visual streaming streams selection records, save your payment card variables locally, or ever trade profile matrices to third-party marketing frameworks.
                </p>
              </div>
            </div>
          </div>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect for the following purposes:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "To deploy and sustain your user allocation dashboard profiling",
              "To execute secure, uncompressed validation of your checkout invoices",
              "To transmit essential maintenance warnings and core network alerts",
              "To provide support terminal operations and diagnostic tracking help",
              "To optimize interface components for a faster deployment mapping layout",
              "To intercept fraud and terminate multi-account credential piracy leaks"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-[#3CAFFF] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information from unauthorized access, 
            disclosure, alteration, or destruction. These measures include:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "SSL/TLS encryption protocols for all live API communication packets",
              "Secure private cloud networks fortified by edge firewall parameters",
              "Continuous system security analysis updates and network structural reviews",
              "Restricted engineering permission access to databases",
              "Multi-factor authentication protocols for administrative control layers"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-[#3CAFFF] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#fff1d0] border-4 border-green-600 rounded-3xl p-6 my-8 not-prose shadow-xl">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <div>
                <p className="text-[#003554] text-sm font-bold leading-relaxed">
                  <span className="text-green-600 font-black uppercase tracking-wide block mb-0.5">Our Guarantee:</span> We never sell your personal information data profiles to tracking brokers. Your systemic trust remains our highest optimization target.
                </p>
              </div>
            </div>
          </div>

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, 
            and remember your preferences. You can control cookie settings through your browser preferences.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We may use third-party service providers to assist with payment processing, analytics, and customer support. 
            These providers are contractually obligated to protect your information and only use it for the purposes 
            specified by Zyminex.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal information parameters:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "Access: Request an absolute copy of your recorded information indexes",
              "Correction: Request modifications to inaccurate data attributes",
              "Deletion: Request absolute termination of your profile files from our clusters",
              "Restriction: Command a temporary pause on database execution logs processing",
              "Portability: Request data format packaging for structural deployment migration",
              "Opt-out: Instantly unlink your email coordinates from announcement tracks"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-[#3CAFFF] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information for as long as your zyminex subscription account is active or as needed to provide you with our services. 
            After account termination, we may retain certain information for legal compliance, fraud prevention, and record-keeping purposes.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. 
            If you believe a minor has provided us with personal information, please contact us immediately.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy 
            on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            <li className="flex items-center gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
              <Mail className="w-5 h-5 text-[#3CAFFF]" />
              <span>Email: <a href="mailto:privacy@zyminex.stream" className="text-[#3CAFFF] font-black hover:text-[#fff1d0] transition-colors">privacy@zyminex.stream</a></span>
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