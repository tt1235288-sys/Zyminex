'use client';

import { useState } from 'react';
import { CONSTANTS } from '@/lib/seo';
import { 
  Share2, 
  Twitter, 
  Facebook, 
  Send, 
  MessageCircle, 
  Link2, 
  Check,
  Flame
} from 'lucide-react';
import { FadeIn } from './AnimatedSection';

export default function SocialShareSection() {
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://${CONSTANTS.DOMAIN}`;
  const shareTitle = `${CONSTANTS.BRAND_NAME} IPTV: Stream 4K Live TV & Sports with Zero Buffering!`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareLinks = [
    {
      name: 'Twitter / X',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      bg: 'hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]',
      color: 'text-[#1DA1F2]',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: 'hover:bg-[#4267B2]/20 hover:border-[#4267B2]',
      color: 'text-[#4267B2]',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      bg: 'hover:bg-[#25D366]/20 hover:border-[#25D366]',
      color: 'text-[#25D366]',
    },
    {
      name: 'Telegram',
      icon: Send,
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      bg: 'hover:bg-[#0088cc]/20 hover:border-[#0088cc]',
      color: 'text-[#0088cc]',
    },
    {
      name: 'Reddit',
      icon: Flame,
      url: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      bg: 'hover:bg-[#FF4500]/20 hover:border-[#FF4500]',
      color: 'text-[#FF4500]',
    },
  ];

  return (
    <section 
      className="py-16 bg-[#003554]/90 border-t border-b border-white/5 relative overflow-hidden"
      aria-label={`Share ${CONSTANTS.BRAND_NAME} Platform`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#3CAFFF]/10 border border-[#3CAFFF]/30 px-4 py-1.5 rounded-full mb-4">
            <Share2 className="w-4 h-4 text-[#fdc500]" />
            <span className="text-[#fdc500] font-black text-xs uppercase tracking-widest">Share This Platform</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#fff1d0]">
            SHARE <span className="text-[#3CAFFF]">{CONSTANTS.BRAND_NAME}</span> WITH FRIENDS
          </h2>
          <p className="text-[#fff1d0]/80 text-base md:text-lg mt-3 font-medium">
            {`Found the premier 4K streaming setup? Share ${CONSTANTS.DOMAIN} across your social channels and communities with one click.`}
          </p>
        </FadeIn>

        {/* Action Share Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
          {shareLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share ${CONSTANTS.BRAND_NAME} on ${item.name}`}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 ${item.bg} text-[#fff1d0] font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <Icon className={`w-5 h-5 ${item.color}`} />
                <span>{item.name}</span>
              </a>
            );
          })}

          {/* Copy Direct Link Button */}
          <button
            onClick={handleCopyLink}
            aria-label={`Copy ${CONSTANTS.BRAND_NAME} website link to clipboard`}
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#3CAFFF] text-[#003554] font-black text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#fff1d0] hover:scale-105 shadow-md cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-[#003554]" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Link2 className="w-5 h-5 text-[#003554]" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}