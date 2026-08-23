import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Mail, AlertCircle, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'DMCA Copyright Policy | Zyminex IPTV Service',
  description: 'Zyminex respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA). View our copyright directory procedures at zyminex.stream.',
  alternates: {
    canonical: 'https://zyminex.stream/dmca',
  }
};

export default function DMCAPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#003554]">
      
      {/* Hero Section Container */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(60,175,255,0.15),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3CAFFF08_1px,transparent_1px),linear-gradient(to_bottom,#3CAFFF08_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#fff1d0]" />
            <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">Copyright Protection</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#fff1d0] uppercase tracking-tighter leading-none mb-6">
            DMCA <span className="text-[#3CAFFF]">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-[#fff1d0]/70 font-bold max-w-2xl mx-auto">
            Zyminex respects intellectual property rights and complies with the Digital Millennium Copyright Act.
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
                <AlertCircle className="w-5 h-5 text-[#3CAFFF]" />
              </div>
            </div>
            <div>
              <p className="text-[#003554] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#3CAFFF] font-black uppercase tracking-wide block mb-0.5">Important Notice:</span> Zyminex does not host, store, upload, or distribute any video content. Our service provides a directory of streams that are publicly available on the internet.
              </p>
            </div>
          </div>
        </div>

        {/* Core Layout with Custom Prose Accents */}
        <div className="prose prose-invert max-w-none
          [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-black [&>h2]:text-[#fff1d0] [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:uppercase [&>h2]:tracking-tight
          [&>p]:text-[#fff1d0]/80 [&>p]:text-sm [&>p]:md:text-base [&>p]:font-medium [&>p]:leading-relaxed [&>p]:mb-6
        ">
          <h2>1. Our Commitment to Copyright Law</h2>
          <p>
            Zyminex ("IPTV Service", "we", "us", or "our") is committed to complying with 
            the Digital Millennium Copyright Act (DMCA) and respecting the intellectual property rights of others. 
            We expect our users and service to do the same.
          </p>

          <h2>2. What We Do Not Host</h2>
          <p>
            It is important to clarify that <span className="text-[#3CAFFF] font-black">Zyminex</span> does not host, 
            store, upload, or distribute any video content, audio content, or media files on our own servers. 
            Our service acts as a search engine and directory that indexes and organizes links to streams that are 
            publicly available across the internet. We do not control, own, or modify any of the content accessed 
            through our platform.
          </p>

          <h2>3. DMCA Takedown Notice</h2>
          <p>
            If you are a copyright owner or an authorized agent and believe that any content accessible through 
            our service infringes upon your copyrights, you may submit a DMCA takedown notice. Upon receipt of a 
            valid notice, we will respond promptly to remove or disable access to the allegedly infringing content.
          </p>

          <h2>4. How to Submit a DMCA Notice</h2>
          <p>
            To file a DMCA notice with Zyminex, please send an email to:
          </p>
          
          {/* Email Container - Modified to border-4 */}
          <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-6 my-8 text-center not-prose shadow-xl">
            <Mail className="w-8 h-8 text-[#3CAFFF] mx-auto mb-3" />
            <a href="mailto:dmca@zyminex.stream" className="text-[#003554] font-black text-xl md:text-2xl hover:text-[#3CAFFF] transition-colors uppercase tracking-tight">
              dmca@zyminex.stream
            </a>
          </div>

          <p>
            Your DMCA notice MUST include the following information:
          </p>

          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "A physical or electronic signature of the copyright owner or authorized agent",
              "Identification of the copyrighted work claimed to have been infringed",
              "Identification of the material that is claimed to be infringing with sufficient detail (including URLs)",
              "Your contact information: name, address, telephone number, and email address",
              "A statement that you have a good faith belief that use of the material is not authorized",
              "A statement that the information in the notice is accurate, under penalty of perjury"
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
                  <AlertCircle className="w-5 h-5 text-[#3CAFFF]" />
                </div>
              </div>
              <div>
                <p className="text-[#003554] text-sm font-bold leading-relaxed">
                  <span className="text-[#3CAFFF] font-black uppercase tracking-wide block mb-0.5">Warning:</span> Please be aware that under the DMCA, any person who knowingly materially misrepresents that material is infringing may be liable for damages, including costs and attorney fees.
                </p>
              </div>
            </div>
          </div>

          <h2>5. Counter-Notice Procedure</h2>
          <p>
            If you believe that your content was removed due to a mistake or misidentification, you may file a 
            counter-notice. Your counter-notice must include:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            {[
              "Your physical or electronic signature",
              "Identification of the material that was removed and its location before removal",
              "A statement under penalty of perjury that you have a good faith belief the material was removed by mistake",
              "Your name, address, and telephone number",
              "Your consent to the jurisdiction of the Federal District Court in your location"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-[#3CAFFF] flex-shrink-0 mt-0.5" />
                <span className="text-[#fff1d0]">{item}</span>
              </li>
            ))}
          </ul>

          <h2>6. Repeat Infringers</h2>
          <p>
            Zyminex reserves the right to terminate, in appropriate circumstances, the zyminex subscription accounts of users who are repeat infringers of intellectual property rights.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For any questions regarding this DMCA Policy, please contact us at:
          </p>
          <ul className="space-y-3 mb-8 list-none p-0 not-prose">
            <li className="flex items-center gap-3 text-[#fff1d0]/80 font-bold text-sm md:text-base">
              <Mail className="w-5 h-5 text-[#3CAFFF]" />
              <span>Email: <a href="mailto:dmca@zyminex.stream" className="text-[#3CAFFF] font-black hover:text-[#fff1d0] transition-colors">dmca@zyminex.stream</a></span>
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