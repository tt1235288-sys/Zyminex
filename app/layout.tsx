import type { Metadata, Viewport } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { CONSTANTS } from '@/lib/seo';
import { GoogleAnalytics } from '@next/third-parties/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${CONSTANTS.FOCUS_KEYWORD} IPTV - Official 4K Live Streaming & TV Service`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  description: `Stream with ${CONSTANTS.BRAND_NAME} IPTV official website. Access 15,000+ live channels, 4K sports & VOD movies with anti-freeze servers and instant multi-device setup.`,
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
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} IPTV - Official 4K Live Streaming & TV Service`,
    description: `Stream with ${CONSTANTS.BRAND_NAME} IPTV official website. Access 15,000+ live channels, 4K sports & VOD movies with anti-freeze servers and instant multi-device setup.`,
    url: SITE_URL,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.BRAND_NAME} Official 4K Live Streaming Platform`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} IPTV - Official 4K Live Streaming & TV Service`,
    description: `Stream with ${CONSTANTS.BRAND_NAME} IPTV official website. Access 15,000+ live channels, 4K sports & VOD movies with anti-freeze servers.`,
    images: [`${SITE_URL}/img/structer.webp`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
  },
  icons: {
    icon: [
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/img/favicons/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/img/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/img/favicons/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/img/favicons/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
      { url: '/img/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/img/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/img/favicons/favicon.ico',
    apple: [
      { url: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    title: CONSTANTS.BRAND_NAME,
    statusBarStyle: 'black-translucent',
  },
  manifest: '/img/favicons/site.webmanifest',
  other: {
    'msapplication-TileColor': '#003554',
    'msapplication-TileImage': '/img/favicons/mstile-144x144.png',
    'msapplication-config': '/img/favicons/browserconfig.xml',
  },
  verification: {
    google: 'G-6NR51QZXKL',
  },
  category: 'entertainment',
  keywords: [
    CONSTANTS.FOCUS_KEYWORD,
    `${CONSTANTS.BRAND_NAME} website`,
    `${CONSTANTS.BRAND_NAME} iptv service`,
    `${CONSTANTS.BRAND_NAME} cost`,
    `${CONSTANTS.BRAND_NAME} channels`,
    `${CONSTANTS.BRAND_NAME} login`,
    `is ${CONSTANTS.BRAND_NAME} legit`,
    `${CONSTANTS.BRAND_NAME} review reddit`,
    '4K sports streaming',
    'anti-freeze live TV',
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#003554',
};

// Unified Structured Data Graph Schema
const StructuredData = () => {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: CONSTANTS.BRAND_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/img/structer.webp`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${CONSTANTS.BRAND_NAME} official streaming platform offering live channels, sports, and movies with anti-freeze servers.`,
        sameAs: [
          'https://twitter.com/zyminex',
          'https://facebook.com/zyminex',
          'https://instagram.com/zyminex',
          'https://t.me/zyminex',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: CONSTANTS.BRAND_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/#service`,
        name: `${CONSTANTS.BRAND_NAME} Subscription`,
        serviceType: 'Streaming Subscription',
        provider: { '@id': `${SITE_URL}/#organization` },
        description: `Stream 15,000+ live channels and 60,000+ VODs in 4K with ${CONSTANTS.BRAND_NAME} anti-freeze infrastructure.`,
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Subscription Plans',
          itemListElement: [
            {
              '@type': 'Offer',
              name: '1 Device - 3 Months',
              price: '35.00',
              priceCurrency: 'USD',
              priceValidUntil: '2027-12-31',
              availability: 'https://schema.org/OnlineOnly',
              url: `${SITE_URL}/pricing`,
            },
            {
              '@type': 'Offer',
              name: '1 Device - 6 Months',
              price: '45.00',
              priceCurrency: 'USD',
              priceValidUntil: '2027-12-31',
              availability: 'https://schema.org/OnlineOnly',
              url: `${SITE_URL}/pricing`,
            },
            {
              '@type': 'Offer',
              name: '1 Device - 12 Months',
              price: '75.00',
              priceCurrency: 'USD',
              priceValidUntil: '2027-12-31',
              availability: 'https://schema.org/OnlineOnly',
              url: `${SITE_URL}/pricing`,
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `What is ${CONSTANTS.BRAND_NAME} and how does the service work?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${CONSTANTS.BRAND_NAME} is a high-speed streaming platform that delivers live sports, PPV events, 15,000+ international TV channels, and 60,000+ movies directly over your internet connection without requiring satellite dishes or cable box hardware.`,
            },
          },
          {
            '@type': 'Question',
            name: `Is ${CONSTANTS.BRAND_NAME} legit and safe to use?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, ${CONSTANTS.BRAND_NAME} is fully verified and trusted by thousands of active subscribers. We safeguard checkouts with 256-bit SSL encryption protocols, operate redundant anti-freeze servers with 99.9% verified uptime, and provide 24/7 dedicated customer assistance.`,
            },
          },
          {
            '@type': 'Question',
            name: `How do I receive my ${CONSTANTS.BRAND_NAME} login and activation details?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Immediately after choosing your subscription package, your official ${CONSTANTS.BRAND_NAME} login credentials—including M3U URLs and Xtream Codes API connection parameters—are dispatched to your email inbox for instant multi-device setup.`,
            },
          },
          {
            '@type': 'Question',
            name: `What should I do if ${CONSTANTS.BRAND_NAME} is not working or buffering?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `If you experience buffering or playback latency, verify that your internet speed exceeds 25 Mbps, clear your media player cache, or toggle your player's hardware video decoder. If an issue persists, our technical team is available 24/7 via live chat and WhatsApp.`,
            },
          },
          {
            '@type': 'Question',
            name: `What is the ${CONSTANTS.BRAND_NAME} cost across different devices?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `The ${CONSTANTS.BRAND_NAME} cost starts at an affordable $11.60 per month with flexible 3, 6, and 12-month payment options. We offer single-connection access as well as discounted multi-room packages supporting Smart TVs, Firestick, Android, and iOS hardware.`,
            },
          },
          {
            '@type': 'Question',
            name: `Where can I read ${CONSTANTS.BRAND_NAME} review reddit threads and user feedback?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Unfiltered community feedback and reviews can be found across independent streaming forums and Reddit discussion boards, where cord-cutters frequently highlight our zero-buffering 60 FPS sports coverage and rapid zapping speeds.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="structured-data-graph"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="thumbnail" content={`${SITE_URL}/img/structer.webp`} />
      </head>
      <body
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-[#003554] text-[#fff1d0]`}
        suppressHydrationWarning
      >
        <LoadingScreen />
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-6NR51QZXKL" />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}