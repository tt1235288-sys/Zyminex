import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const PAGE_URL = `https://${CONSTANTS.DOMAIN}/setup`;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: `IPTV Device Setup & Installation Guide | ${CONSTANTS.BRAND_NAME} Official`,
  description: `Step-by-step setup guide for Firestick, Smart TV, Android, iOS, Apple TV, PC & Mac. Start streaming in under 5 minutes with 24/7 support.`,
  authors: [{ name: `${CONSTANTS.BRAND_NAME} Team` }],
  creator: CONSTANTS.BRAND_NAME,
  publisher: CONSTANTS.BRAND_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `IPTV Device Setup & Installation Guide | ${CONSTANTS.BRAND_NAME} Official`,
    description: `Install ${CONSTANTS.BRAND_NAME} on Firestick, Smart TV, Android, iOS, Apple TV, PC, and Mac. Step-by-step tutorial with 24/7 support.`,
    url: PAGE_URL,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.BRAND_NAME} Setup Guide - All Devices`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `IPTV Device Setup & Installation Guide | ${CONSTANTS.BRAND_NAME} Official`,
    description: `Easy ${CONSTANTS.BRAND_NAME} installation guide for all devices. 5-minute setup with 24/7 support.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.webp`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
  },
  category: 'entertainment',
  keywords: [
    `${CONSTANTS.BRAND_NAME} setup`,
    `${CONSTANTS.BRAND_NAME} guide`,
    `${CONSTANTS.BRAND_NAME} installation`,
    `${CONSTANTS.BRAND_NAME} tutorial`,
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
    'what is hdmi iptv encoder',
    'how to connect hdmi to iptv',
    'iptv italiane 4k',
  ],
};

// JSON-LD HowTo Schema
const HowToSchema = () => (
  <script
    type="application/ld+json"
    id="setup-howto-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `How to Setup ${CONSTANTS.BRAND_NAME} on Any Device`,
        description: `Complete step-by-step installation guide for ${CONSTANTS.BRAND_NAME} on all supported devices.`,
        totalTime: 'PT5M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'USD',
          value: '11.66',
        },
        image: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        step: [
          {
            '@type': 'HowToStep',
            name: `Create Your ${CONSTANTS.BRAND_NAME} Account`,
            text: `Sign up for ${CONSTANTS.BRAND_NAME} and choose your subscription plan. Receive login credentials via email instantly.`,
            position: 1,
          },
          {
            '@type': 'HowToStep',
            name: 'Enable Unknown Sources (Firestick)',
            text: 'Go to Settings > My Fire TV > Developer Options > Turn ON Apps from Unknown Sources.',
            position: 2,
          },
          {
            '@type': 'HowToStep',
            name: 'Install Downloader App',
            text: "Search for 'Downloader' in the Amazon App Store and install the official app.",
            position: 3,
          },
          {
            '@type': 'HowToStep',
            name: `Enter ${CONSTANTS.BRAND_NAME} Installation Code`,
            text: `Open Downloader and enter code 83492 to download the official ${CONSTANTS.BRAND_NAME} app.`,
            position: 4,
          },
          {
            '@type': 'HowToStep',
            name: `Login with ${CONSTANTS.BRAND_NAME} Credentials`,
            text: `Open the app and select 'Login with Xtream Codes API'. Enter your ${CONSTANTS.BRAND_NAME} Username, Password, and Portal URL.`,
            position: 5,
          },
          {
            '@type': 'HowToStep',
            name: `Start Streaming with ${CONSTANTS.BRAND_NAME}`,
            text: `Browse 15,000+ live channels and 60,000+ VODs in stunning 4K quality with ${CONSTANTS.BRAND_NAME}.`,
            position: 6,
          },
        ],
        supply: [
          'Firestick or Android TV device',
          'Stable internet connection (min 15 Mbps)',
          `Active ${CONSTANTS.BRAND_NAME} subscription`,
        ],
        tool: ['Downloader app', 'IPTV player app'],
      }),
    }}
  />
);

// JSON-LD FAQ Schema
const SetupFAQSchema = () => (
  <script
    type="application/ld+json"
    id="setup-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `What devices are compatible with ${CONSTANTS.BRAND_NAME}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${CONSTANTS.BRAND_NAME} works on Firestick, Android TV, Smart TVs (Samsung, LG, Sony), iOS devices (iPhone, iPad, Apple TV), Windows PC, Mac, and MAG boxes.`,
            },
          },
          {
            '@type': 'Question',
            name: `How long does ${CONSTANTS.BRAND_NAME} setup take?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${CONSTANTS.BRAND_NAME} setup takes approximately 5 minutes from start to finish, including app installation and login.`,
            },
          },
          {
            '@type': 'Question',
            name: `Do I need a VPN for ${CONSTANTS.BRAND_NAME}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `While not required, we recommend using a VPN for privacy protection and to access geo-restricted content with ${CONSTANTS.BRAND_NAME}. Our Ultimate plan includes free VPN access.`,
            },
          },
          {
            '@type': 'Question',
            name: `What internet speed do I need for ${CONSTANTS.BRAND_NAME}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `We recommend minimum 15 Mbps for HD streaming and 30 Mbps for 4K content with ${CONSTANTS.BRAND_NAME}. A wired ethernet connection provides the most stable experience.`,
            },
          },
          {
            '@type': 'Question',
            name: `Can I use ${CONSTANTS.BRAND_NAME} on multiple devices?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, you can install the ${CONSTANTS.BRAND_NAME} app on unlimited devices. Simultaneous streams depend on your plan tier: 1 Device, 2 Devices, or 3 Devices.`,
            },
          },
          {
            '@type': 'Question',
            name: `What if I need help with ${CONSTANTS.BRAND_NAME} setup?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Our 24/7 customer support team is available via live chat and WhatsApp to assist you with any ${CONSTANTS.BRAND_NAME} setup issues.`,
            },
          },
          {
            '@type': 'Question',
            name: `Is there a ${CONSTANTS.BRAND_NAME} video tutorial?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, we provide a complete video tutorial on our ${CONSTANTS.BRAND_NAME} setup page showing step-by-step installation on all devices.`,
            },
          },
          {
            '@type': 'Question',
            name: `What is the ${CONSTANTS.BRAND_NAME} activation code?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `The ${CONSTANTS.BRAND_NAME} activation code for Downloader is 83492. This code will download the official ${CONSTANTS.BRAND_NAME} app for installation.`,
            },
          },
        ],
      }),
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
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `https://${CONSTANTS.DOMAIN}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `${CONSTANTS.BRAND_NAME} Setup Guide`,
            item: PAGE_URL,
          },
        ],
      }),
    }}
  />
);

// JSON-LD Organization Schema
const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    id="organization-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: CONSTANTS.BRAND_NAME,
        alternateName: CONSTANTS.BRAND_NAME,
        url: `https://${CONSTANTS.DOMAIN}`,
        logo: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        description: `${CONSTANTS.BRAND_NAME} - Complete setup guide for all devices. Easy installation tutorial with 24/7 support.`,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'technical support',
          availableLanguage: ['English'],
          contactOption: 'TollFree',
        },
        sameAs: [
          'https://twitter.com/zyminex',
          'https://facebook.com/zyminex',
          'https://instagram.com/zyminex',
          'https://t.me/zyminex',
          'https://reddit.com/r/zyminex',
        ],
      }),
    }}
  />
);

// WebPage Schema
const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${CONSTANTS.BRAND_NAME} - Setup Guide & Installation`,
        description: `Complete ${CONSTANTS.BRAND_NAME} setup guide for all devices. Firestick, Smart TV, Android, iOS, Apple TV, PC & Mac.`,
        url: PAGE_URL,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
          width: '1200',
          height: '630',
        },
      }),
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
      <HowToSchema />
      <SetupFAQSchema />
      <BreadcrumbSchema />
      {children}
    </>
  );
}