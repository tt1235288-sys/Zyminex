'use client';

import Link from "next/link";
import Image from "next/image";
import { CONSTANTS } from "@/lib/seo";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#003554] text-[#fff1d0]/70 py-16 px-6 lg:px-12 border-t-4 border-[#3CAFFF] overflow-hidden min-h-[380px]">
      {/* Structural Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3CAFFF]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 mb-5 group inline-flex"
              aria-label={`${CONSTANTS.BRAND_NAME} - Home`}
            >
              <div className="w-auto h-12 flex items-center group-hover:scale-105 transition-transform">
                <Image
                  src="/img/iptv-logo.webp"
                  alt={CONSTANTS.BRAND_NAME}
                  width={180}
                  height={48}
                  className="object-contain h-full w-auto"
                  priority
                />
              </div>
            </Link>

            <p className="text-base font-bold text-[#fff1d0]/80 max-w-md leading-relaxed mb-6">
              Experience the future of entertainment with{" "}
              <strong className="text-[#3CAFFF]">Zyminex</strong>. 
              Delivering premium IPTV Service worldwide with 15,000+ channels and 60,000+ VODs. Explore premium IPTV Providers options at zyminex.stream.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Follow Zyminex on Twitter"
                className="group w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-[#3CAFFF] hover:border-[#3CAFFF] transition-all duration-300"
              >
                <Twitter className="w-4 h-4 text-[#fff1d0]/50 group-hover:text-[#fff1d0] transition-colors" />
              </a>

              <a
                href="#"
                aria-label="Follow Zyminex on Instagram"
                className="group w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-[#3CAFFF] hover:border-[#3CAFFF] transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-[#fff1d0]/50 group-hover:text-[#fff1d0] transition-colors" />
              </a>

              <a
                href="#"
                aria-label="Follow Zyminex on Facebook"
                className="group w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-[#3CAFFF] hover:border-[#3CAFFF] transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-[#fff1d0]/50 group-hover:text-[#fff1d0] transition-colors" />
              </a>
            </div>
          </div>

          {/* Pages links */}
          <div>
            <h4 className="text-[#fff1d0] font-black mb-5 tracking-widest uppercase text-sm">
              Pages
            </h4>
            <ul className="space-y-3 text-sm font-bold">
              <li><Link href="/" className="text-[#fff1d0]/50 hover:text-[#fdc500] transition-colors">Home</Link></li>
              <li><Link href="/pricing" className="text-[#fff1d0]/50 hover:text-[#fdc500] transition-colors">Pricing</Link></li>
              <li><Link href="/setup" className="text-[#fff1d0]/50 hover:text-[#fdc500] transition-colors">Setup Guide</Link></li>
              <li><Link href="/blog" className="text-[#fff1d0]/50 hover:text-[#fdc500] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-[#fff1d0]/50 hover:text-[#fdc500] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-[#fff1d0] font-black mb-5 tracking-widest uppercase text-sm">
              Legal
            </h4>
            <ul className="space-y-3 text-sm font-bold">
              <li><Link href="/terms" className="text-[#fff1d0]/50 hover:text-[#fdc500] transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-[#fff1d0]/50 hover:text-[#fdc500] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/about" className="text-[#fff1d0]/50 hover:text-[#fdc500] transition-colors">About US</Link></li>
              <li><Link href="/refund" className="text-[#fff1d0]/50 hover:text-[#fdc500] transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar Payment Allocations */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#fff1d0]/40 font-bold">
          © {new Date().getFullYear()} {CONSTANTS.BRAND_NAME}. All rights reserved.
        </p>

        <div className="flex items-center gap-3 flex-wrap ">
          {[
            { src: "/img/payment/1.png", alt: "PayPal" },
            { src: "/img/payment/2.png", alt: "Bitcoin" },
            { src: "/img/payment/3.png", alt: "Visa" },
            { src: "/img/payment/4.png", alt: "Mastercard" },
          ].map((item) => (
            <div
              key={item.alt}
              className="relative h-9 w-14 flex-shrink-0 rounded-lg border border-white/10 bg-[#fff1d0]/80 backdrop-blur-sm flex items-center justify-center hover:border-[#3CAFFF]/40 hover:bg-[#3CAFFF]/5 transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="56px"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}