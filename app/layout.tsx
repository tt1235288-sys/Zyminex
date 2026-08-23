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
    default: `${CONSTANTS.FOCUS_KEYWORD}: #1 Service & 4K Streaming | Official`,
    template: `%s | ${CONSTANTS.BRAND_NAME} - Best Provider 2026`,
  },
  description: `Stream 20,000+ live channels, 4K sports events, and on-demand movies with ${CONSTANTS.BRAND_NAME}. Anti-freeze technology with instant multi-device setup.`,
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
    title: `${CONSTANTS.FOCUS_KEYWORD}: #1 Service & 4K Streaming | Official`,
    description: `Stream 20,000+ live channels, 4K sports events, and on-demand movies with ${CONSTANTS.BRAND_NAME}. Anti-freeze servers with 99.9% uptime.`,
    url: SITE_URL,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.BRAND_NAME} - Premium Live TV Service with 4K Streaming`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD}: Official 4K Live TV & Sports Streaming`,
    description: `Stream 20,000+ live channels, 4K sports events, and on-demand movies with ${CONSTANTS.BRAND_NAME}. Instant multi-device setup.`,
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
    CONSTANTS.BRAND_NAME,
    CONSTANTS.FOCUS_KEYWORD,
    `${CONSTANTS.BRAND_NAME} cost`,
    `${CONSTANTS.BRAND_NAME} channels`,
    `${CONSTANTS.BRAND_NAME} review reddit`,
    'IPTV service',
    'best IPTV provider',
    '4K streaming',
    'live TV streaming',
    'sports PPV',
    'IPTV subscription',
    'premium IPTV',
    'international channels',
    'IPTV 2026',
    'streaming service',
    'cord cutting',
    'live channels',
    'movies on demand',
    'iptv free trial',
    'anti-freeze IPTV',
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#003554',
};

// Organization Schema
const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    id="organization-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": CONSTANTS.BRAND_NAME,
        "alternateName": `${CONSTANTS.BRAND_NAME} IPTV Service`,
        "url": SITE_URL,
        "logo": `${SITE_URL}/img/structer.webp`,
        "image": `${SITE_URL}/img/structer.webp`,
        "description": `${CONSTANTS.BRAND_NAME} is the leading service with 15,000+ live channels and 60,000+ VODs in stunning 4K quality with anti-freeze technology and 24/7 support.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English"],
          "contactOption": "TollFree"
        },
        "sameAs": [
          "https://twitter.com/zyminex",
          "https://facebook.com/zyminex",
          "https://instagram.com/zyminex",
          "https://t.me/zyminex"
        ]
      })
    }}
  />
);

// Website Schema
const WebsiteSchema = () => (
  <script
    type="application/ld+json"
    id="website-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": CONSTANTS.BRAND_NAME,
        "alternateName": `${CONSTANTS.BRAND_NAME} - Best Streaming Service`,
        "url": SITE_URL,
        "description": `${CONSTANTS.BRAND_NAME} is the leading service with 15,000+ live channels and 60,000+ VODs in stunning 4K quality with anti-freeze technology.`,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${SITE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      })
    }}
  />
);

// Product Schema
const ProductSchema = () => (
  <script
    type="application/ld+json"
    id="product-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${CONSTANTS.BRAND_NAME} Premium Subscription`,
        "image": `${SITE_URL}/img/structer.webp`,
        "description": `${CONSTANTS.BRAND_NAME} is the leading IPTV service with 15,000+ live channels and 60,000+ VODs in stunning 4K quality with anti-freeze technology.`,
        "brand": { 
          "@type": "Brand", 
          "name": CONSTANTS.BRAND_NAME 
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "5000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": [
          { 
            "@type": "Offer", 
            "name": "1 Device - 3 Months", 
            "priceCurrency": "USD", 
            "price": "35.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `${SITE_URL}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "1 Device - 6 Months", 
            "priceCurrency": "USD", 
            "price": "45.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `${SITE_URL}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "1 Device - 12 Months", 
            "priceCurrency": "USD", 
            "price": "75.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `${SITE_URL}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "2 Devices - 3 Months", 
            "priceCurrency": "USD", 
            "price": "60.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `${SITE_URL}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "2 Devices - 6 Months", 
            "priceCurrency": "USD", 
            "price": "80.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `${SITE_URL}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "2 Devices - 12 Months", 
            "priceCurrency": "USD", 
            "price": "110.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `${SITE_URL}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "3 Devices - 3 Months", 
            "priceCurrency": "USD", 
            "price": "75.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `${SITE_URL}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "3 Devices - 6 Months", 
            "priceCurrency": "USD", 
            "price": "105.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `${SITE_URL}/pricing`
          },
          { 
            "@type": "Offer", 
            "name": "3 Devices - 12 Months", 
            "priceCurrency": "USD", 
            "price": "150.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `${SITE_URL}/pricing`
          }
        ]
      })
    }}
  />
);

// Service Schema
const ServiceSchema = () => (
  <script
    type="application/ld+json"
    id="service-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${CONSTANTS.BRAND_NAME} Subscription`,
        "alternateName": CONSTANTS.BRAND_NAME,
        "serviceType": "Streaming Subscription",
        "provider": {
          "@type": "Organization",
          "name": CONSTANTS.BRAND_NAME
        },
        "description": `${CONSTANTS.BRAND_NAME} provides 15,000+ live channels and 60,000+ VODs in 4K quality with anti-freeze technology and 24/7 customer support.`,
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Subscription Plans",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "1 Device - 3 Months"
              },
              "price": "35",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "1 Device - 6 Months"
              },
              "price": "45",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "1 Device - 12 Months"
              },
              "price": "75",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "2 Devices - 3 Months"
              },
              "price": "60",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "2 Devices - 6 Months"
              },
              "price": "80",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "2 Devices - 12 Months"
              },
              "price": "110",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "3 Devices - 3 Months"
              },
              "price": "75",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "3 Devices - 6 Months"
              },
              "price": "105",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "3 Devices - 12 Months"
              },
              "price": "150",
              "priceCurrency": "USD"
            }
          ]
        }
      })
    }}
  />
);

// FAQ Schema
const FAQSchema = () => (
  <script
    type="application/ld+json"
    id="faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is IPTV?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional cable or satellite. Zyminex provides a premium service with 15,000+ live channels, 60,000+ VODs, and 4K streaming quality."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best IPTV service in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zyminex is widely regarded as the best service, offering exceptional 4K streaming quality, 15,000+ live channels, 60,000+ movies and series, anti-freeze technology, 99.9% uptime, and 24/7 customer support."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best IPTV provider for live sports?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best provider is Zyminex, which combines massive sports content selection, reliable streaming with anti-freeze technology, 4K quality, and affordable multi-device pricing starting at just $35 for 3 months."
            }
          },
          {
            "@type": "Question",
            "name": "Which IPTV is the best choice on Reddit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zyminex is highly rated on Reddit community threads, trusted by thousands of subscribers worldwide for superior 4K streaming, anti-freeze technology, and round-the-clock customer support."
            }
          },
          {
            "@type": "Question",
            "name": "How does IPTV work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IPTV works by streaming television content over your internet connection. Zyminex uses advanced servers and anti-freeze technology to deliver smooth, buffer-free 4K streaming to all your devices, including Smart TVs, Firestick, Android, and iOS."
            }
          },
          {
            "@type": "Question",
            "name": "How do I set up my IPTV subscription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Setting up Zyminex is easy: 1) Choose your subscription plan, 2) Receive your activation details via email, 3) Download our recommended app on your device, 4) Enter your credentials, and start watching instantly."
            }
          }
        ]
      })
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
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${CONSTANTS.BRAND_NAME} - Best Service 2026`,
        "description": `${CONSTANTS.BRAND_NAME} is the leading IPTV service with 15,000+ live channels and 60,000+ VODs in stunning 4K quality with anti-freeze technology.`,
        "url": SITE_URL,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/img/structer.webp`,
          "width": "1200",
          "height": "630"
        }
      })
    }}
  />
);

// Article Schema
const ArticleSchema = () => (
  <script
    type="application/ld+json"
    id="article-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${CONSTANTS.BRAND_NAME} - Best Service 2026 | 4K Streaming`,
        "image": [
          `${SITE_URL}/img/structer.webp`
        ],
        "datePublished": "2026-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "author": {
          "@type": "Person",
          "name": `${CONSTANTS.BRAND_NAME} Team`
        },
        "publisher": {
          "@type": "Organization",
          "name": CONSTANTS.BRAND_NAME,
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/img/structer.webp`
          }
        }
      })
    }}
  />
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#003554" />
        <meta name="thumbnail" content={`${SITE_URL}/img/structer.webp`} />
      </head>
      <body 
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-[#003554] text-[#fff1d0]`} 
        suppressHydrationWarning
      >
        <LoadingScreen />

        {/* JSON-LD Schemas */}
        <OrganizationSchema />
        <WebsiteSchema />
        <ProductSchema />
        <ServiceSchema />
        <FAQSchema />
        <WebPageSchema />
        <ArticleSchema />

        <Header />
        {children}
        <Footer />

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-6NR51QZXKL" />
        
        <FloatingWhatsApp />
      </body>
    </html>
  );
}