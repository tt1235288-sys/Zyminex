import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, FileText, AlertCircle, CheckCircle, CreditCard, UserCheck, Ban, RefreshCw, Mail, Scale, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Zyminex Premium IPTV Service',
  description: 'Please read these terms carefully before using Zyminex IPTV Service options. View our usage terms and legal configurations on zyminex.stream.',
  alternates: {
    canonical: 'https://zyminex.stream/terms',
  }
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#003554]">
      
      {/* Hero Section Container */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(60,175,255,0.15),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3CAFFF08_1px,transparent_1px),linear-gradient(to_bottom,#3CAFFF08_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6 shadow-md">
            <Scale className="w-4 h-4 text-[#fff1d0]" />
            <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#fff1d0] uppercase tracking-tighter leading-none mb-6">
            Terms of <span className="text-[#3CAFFF]">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-[#fff1d0]/70 font-bold max-w-2xl mx-auto">
            Please read these terms carefully before using Zyminex services.
          </p>
          <p className="text-xs text-[#fff1d0]/40 mt-4 font-bold uppercase tracking-wider">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section Container */}
      <div className="max-w-3xl mx-auto px-4 py-16 w-full">
        
        {/* Acceptance Box Container - Modified to border-4 */}
        <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#3CAFFF]" />
              </div>
            </div>
            <div>
              <p className="text-[#003554] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#3CAFFF] font-black uppercase tracking-wide block mb-0.5">Acceptance of Terms:</span> By accessing or subscribing to Zyminex, you agree to be bound by these Terms of Service and our Privacy Policy framework.
              </p>
            </div>
          </div>
        </div>

        {/* Core Layout with Custom Prose Accents */}
        <div className="prose prose-invert max-w-none
          [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-black [&>h2]:text-[#fff1d0] [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:uppercase [&>h2]:tracking-tight
          [&>p]:text-[#fff1d0]/80 [&>p]:text-sm [&>p]:md:text-base [&>p]:font-medium [&>p]:leading-relaxed [&>p]:mb-6
        ">
          
          <h2>1. Description of Service</h2>
          <p>
            Zyminex ("IPTV Service", "we", "us", or "our") provides a digital streaming service that allows subscribers to access live television channels, video-on-demand content, and related features (the "Service"). The Service is intended for personal, non-commercial use only.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            By using our Service, you represent and warrant that:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "You are at least 18 years of age and hold active legal execution capacity",
              "You have the absolute corporate capacity to enter into a binding agreement",
              "You will provide accurate and complete data variables when building profiles",
              "You will not share your private subscription credentials with foreign systems",
              "You will comply with all regional, state, and target routing country law systems"
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
                  <UserCheck className="w-5 h-5 text-[#3CAFFF]" />
                </div>
              </div>
              <div>
                <p className="text-[#003554] text-sm font-bold leading-relaxed">
                  <span className="text-[#3CAFFF] font-black uppercase tracking-wide block mb-0.5">Account Responsibility:</span> You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your active dashboard route.
                </p>
              </div>
            </div>
          </div>

          <h2>3. Subscription Plans and Payments</h2>
          <p>
            Zyminex offers various subscription plans as described on our Pricing page. By subscribing, you agree to:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "Pay all fees associated with your chosen multi-device tier plans",
              "Provide accurate and complete payment information coordinates",
              "Authorize us to process transaction invoices for the selected runtime duration",
              "Be responsible for any regional tax metrics applicable to your account node"
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
                  <CreditCard className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <div>
                <p className="text-[#003554] text-sm font-bold leading-relaxed">
                  <span className="text-green-600 font-black uppercase tracking-wide block mb-0.5">Payment Security:</span> All payments are processed through secure, PCI-compliant payment gateways. We do not store your full payment card details on our local clusters.
                </p>
              </div>
            </div>
          </div>

          <h2>4. Acceptable Use Policy</h2>
          <p>
            You agree NOT to use the Service for any prohibited purpose, including but not limited to:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "Redistributing, reselling, or cloning subscription line configurations",
              "Sharing your active line terminal credentials with secondary users",
              "Using the server streams directory to execute any illegal actions",
              "Attempting to capture stream coordinates, reverse engineer, or stress servers",
              "Recording, rebroadcasting, or duplicating uncompressed digital feeds",
              "Deploying automated tracking web scraping spiders onto catalog indices"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
                <Ban className="w-5 h-5 text-[#3CAFFF] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 my-8 not-prose shadow-xl">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-[#3CAFFF]" />
                </div>
              </div>
              <div>
                <p className="text-[#003554] text-sm font-bold leading-relaxed">
                  <span className="text-[#3CAFFF] font-black uppercase tracking-wide block mb-0.5">Violation Consequences:</span> Infringement on these parameters triggers immediate account blacklisting logs termination without liability refunds, and we protect our pipeline vectors by pursuing legal actions.
                </p>
              </div>
            </div>
          </div>

          <h2>5. Refund Policy</h2>
          <p>
            We offer fixed pricing architecture structures matching 1 Device, 2 Devices, or 3 Devices tiers. If you are not completely satisfied with our Service, you may explore support protocols within our runtime terms.
          </p>

          <h2>6. Service Availability and Modifications</h2>
          <p>
            We strive to provide uninterrupted Service, but we do not guarantee that the Service will be available at all times. We reserve the right to:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "Modify, suspend, or discontinue any aspect of the media directory",
              "Change subscription fees with reasonable system update notices",
              "Perform scheduled core routing cluster optimizations affecting active runtimes"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-[#3CAFFF] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2>7. Intellectual Property</h2>
          <p>
            The Service, including its code, design, logos, and content (excluding third-party content), is owned by Zyminex and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or create derivative works of our intellectual property without our express written consent.
          </p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. Discover configurations matching what is HDMI IPTV encoder questions natively.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZYMINEX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE. Learn more about optimal deployments like how to connect HDMI to IPTV safely.
          </p>

          <h2>10. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice, for conduct that violates these Terms or is otherwise harmful to Zyminex, other users, or third parties. Upon termination, your right to use the Service will cease immediately. Enjoy premium iptv italiane 4k hubs safely under compliance.
          </p>

          <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 my-8 not-prose shadow-xl">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-[#3CAFFF]" />
                </div>
              </div>
              <div>
                <p className="text-[#003554] text-sm font-bold leading-relaxed">
                  <span className="text-[#3CAFFF] font-black uppercase tracking-wide block mb-0.5">Survival:</span> Sections regarding intellectual property, warranty disclaimers, liability limitations, and governing law shall survive any termination of these Terms.
                </p>
              </div>
            </div>
          </div>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws applicable to zyminex.stream, without regard to its conflict of law provisions.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
          </p>

          <h2>13. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            <li className="flex items-center gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
              <Mail className="w-5 h-5 text-[#3CAFFF]" />
              <span>Email: <a href="mailto:legal@zyminex.stream" className="text-[#3CAFFF] font-black hover:text-[#fff1d0] transition-colors">legal@zyminex.stream</a></span>
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