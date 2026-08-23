import { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://zyminex.stream`),
  title: {
    default: `Zyminex - Setup Guide 2026 | Easy Installation`,
    template: `%s | Zyminex - Official Setup Guide`,
  },
  description: `Zyminex: Complete step-by-step setup guide for Firestick, Smart TV, Android, iOS, Apple TV, PC & Mac. Start streaming in 5 minutes. Trusted IPTV provider with 24/7 support.`,
  keywords: [
    `Zyminex setup`,
    `Zyminex guide`,
    `Zyminex service`,
    `Zyminex installation`,
    `Zyminex tutorial`,
    'IPTV installation guide',
    'Firestick IPTV setup',
    'Smart TV IPTV tutorial',
    'Android IPTV setup',
    'iOS IPTV installation',
    'Apple TV IPTV guide',
    'PC IPTV setup',
    'Mac IPTV tutorial',
    'IPTV configuration',
    'IPTV player setup',
    'best IPTV setup guide',
    'quick IPTV installation',
    'iptv encoder box',
    '4k iptv encoder',
    'iptv encoder hdmi',
    'zyminex tv',
    'zyminex iptv',
    'zyminex subscription',
    'what is hdmi iptv encoder',
    'how to connect hdmi to iptv',
    'iptv italiane 4k'
  ],
  alternates: {
    canonical: `https://zyminex.stream/setup`,
  },
  openGraph: {
    title: `Zyminex - Setup Guide 2026 | Easy Installation`,
    description: `Install Zyminex on Firestick, Smart TV, Android, iOS, Apple TV, PC, and Mac. Step-by-step tutorial with 24/7 support.`,
    url: `https://zyminex.stream/setup`,
    type: 'website',
    images: [
      {
        url: `https://zyminex.stream/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `Zyminex Setup Guide - All Devices`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Zyminex - Setup Guide & Installation`,
    description: `Easy Zyminex installation guide for all devices. 5-minute setup with 24/7 support.`,
    images: [`https://zyminex.stream/img/structer.webp`],
    creator: `@Zyminex`,
    site: `@Zyminex`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD HowTo Schema for Setup Page
const HowToSchema = () => (
  <script
    type="application/ld+json"
    id="setup-howto-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `How to Setup Zyminex on Any Device`,
        "description": `Complete step-by-step installation guide for Zyminex on all supported devices.`,
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "11.66"
        },
        "image": `https://zyminex.stream/img/structer.webp`,
        "step": [
          {
            "@type": "HowToStep",
            "name": `Create Your Zyminex Account`,
            "text": `Sign up for Zyminex and choose your subscription plan. Receive login credentials via email instantly.`,
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Enable Unknown Sources (Firestick)",
            "text": "Go to Settings > My Fire TV > Developer Options > Turn ON Apps from Unknown Sources.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Install Downloader App",
            "text": "Search for 'Downloader' in the Amazon App Store and install the official app.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": `Enter Zyminex Installation Code`,
            "text": "Open Downloader and enter code 83492 to download the official Zyminex app.",
            "position": 4
          },
          {
            "@type": "HowToStep",
            "name": `Login with Zyminex Credentials`,
            "text": `Open the app and select 'Login with Xtream Codes API'. Enter your Zyminex Username, Password, and Portal URL.`,
            "position": 5
          },
          {
            "@type": "HowToStep",
            "name": `Start Streaming with Zyminex`,
            "text": `Browse 15,000+ live channels and 60,000+ VODs in stunning 4K quality with Zyminex.`,
            "position": 6
          }
        ],
        "supply": [
          "Firestick or Android TV device",
          "Stable internet connection (min 15 Mbps)",
          `Active Zyminex subscription`
        ],
        "tool": [
          "Downloader app",
          "IPTV player app"
        ]
      })
    }}
  />
);

// JSON-LD FAQ Schema for Setup Page
const SetupFAQSchema = () => (
  <script
    type="application/ld+json"
    id="setup-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What devices are compatible with Zyminex?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Zyminex works on Firestick, Android TV, Smart TVs (Samsung, LG, Sony), iOS devices (iPhone, iPad, Apple TV), Windows PC, Mac, and MAG boxes.`
            }
          },
          {
            "@type": "Question",
            "name": `How long does Zyminex setup take?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Zyminex setup takes approximately 5 minutes from start to finish, including app installation and login.`
            }
          },
          {
            "@type": "Question",
            "name": `Do I need a VPN for Zyminex?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `While not required, we recommend using a VPN for privacy protection and to access geo-restricted content with Zyminex. Our Ultimate plan includes free VPN access.`
            }
          },
          {
            "@type": "Question",
            "name": `What internet speed do I need for Zyminex?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We recommend minimum 15 Mbps for HD streaming and 30 Mbps for 4K content with Zyminex. A wired ethernet connection provides the most stable experience.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I use Zyminex on multiple devices?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, you can install the Zyminex app on unlimited devices. Simultaneous streams depend on your plan tier architecture structure: 1 Device, 2 Devices, or 3 Devices.`
            }
          },
          {
            "@type": "Question",
            "name": `What if I need help with Zyminex setup?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Our 24/7 customer support team is available via live chat and WhatsApp to assist you with any Zyminex setup issues.`
            }
          },
          {
            "@type": "Question",
            "name": `Is there a Zyminex video tutorial?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, we provide a complete video tutorial on our Zyminex setup page showing step-by-step installation on all devices.`
            }
          },
          {
            "@type": "Question",
            "name": `What is the Zyminex activation code?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The Zyminex activation code for Downloader is 83492. This code will download the official Zyminex app for installation.`
            }
          }
        ]
      })
    }}
  />
);

// JSON-LD Breadcrumb Schema
const BreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    id="breadcrumb-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `https://zyminex.stream`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `Zyminex Setup Guide`,
            "item": `https://zyminex.stream/setup`
          }
        ]
      })
    }}
  />
);

// JSON-LD Organization Schema for Setup Page
const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    id="organization-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zyminex",
        "alternateName": "Zyminex",
        "url": `https://zyminex.stream`,
        "logo": `https://zyminex.stream/img/structer.webp`,
        "description": `Zyminex - Complete setup guide for all devices. Easy installation tutorial with 24/7 support.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "technical support",
          "availableLanguage": ["English"],
          "contactOption": "TollFree",
        },
        "sameAs": [
          "https://twitter.com/zyminex",
          "https://facebook.com/zyminex",
          "https://instagram.com/zyminex",
          "https://t.me/zyminex",
          "https://reddit.com/r/zyminex",
        ],
      }),
    }}
  />
);

// WebPage Schema for better image display
const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Zyminex - Setup Guide & Installation`,
        "description": `Complete Zyminex setup guide for all devices. Firestick, Smart TV, Android, iOS, Apple TV, PC & Mac.`,
        "url": `https://zyminex.stream/setup`,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `https://zyminex.stream/img/structer.webp`,
          "width": "1200",
          "height": "630"
        }
      })
    }}
  />
);

// Article Schema for better image display
const ArticleSchema = () => (
  <script
    type="application/ld+json"
    id="article-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `Zyminex - Setup Guide 2026 | Easy Installation`,
        "image": [
          `https://zyminex.stream/img/structer.webp`
        ],
        "datePublished": "2026-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "author": {
          "@type": "Person",
          "name": `Zyminex Team`
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zyminex",
          "logo": {
            "@type": "ImageObject",
            "url": `https://zyminex.stream/img/structer.webp`
          }
        }
      })
    }}
  />
);

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrganizationSchema />
      <WebPageSchema />
      <ArticleSchema />
      <HowToSchema />
      <SetupFAQSchema />
      <BreadcrumbSchema />
      {children}
    </>
  );
}