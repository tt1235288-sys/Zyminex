import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const PRICING_URL = `${SITE_URL}/pricing`;

export const metadata: Metadata = {
  // Use absolute to bypass the parent template and lock the exact SERP title
  title: {
    absolute: `${CONSTANTS.BRAND_NAME} IPTV Pricing - Official Subscription Plans & Cost`,
  },
  description: `Explore official ${CONSTANTS.BRAND_NAME} IPTV pricing and subscription plans from $11.60/mo. 15,000+ live 4K channels, PPV sports & instant multi-device setup.`,
  alternates: {
    canonical: PRICING_URL,
  },
  openGraph: {
    title: `${CONSTANTS.BRAND_NAME} IPTV Pricing - Official Subscription Plans & Cost`,
    description: `Explore official ${CONSTANTS.BRAND_NAME} IPTV pricing and subscription plans from $11.60/mo. 15,000+ live 4K channels, PPV sports & instant multi-device setup.`,
    url: PRICING_URL,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.BRAND_NAME} IPTV Pricing & Multi-Device Subscription Plans`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.BRAND_NAME} IPTV Pricing - Official Subscription Plans & Cost`,
    description: `Explore official ${CONSTANTS.BRAND_NAME} IPTV pricing and subscription plans from $11.60/mo. 15,000+ live 4K channels, PPV sports & instant multi-device setup.`,
    images: [`${SITE_URL}/img/structer.webp`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
  },
  keywords: [
    `${CONSTANTS.BRAND_NAME} pricing`,
    `${CONSTANTS.BRAND_NAME} cost`,
    `${CONSTANTS.BRAND_NAME} plans`,
    `${CONSTANTS.BRAND_NAME} subscription`,
    `${CONSTANTS.BRAND_NAME} iptv service`,
    'IPTV subscription cost',
    'buy IPTV subscription',
    'multi-device IPTV pricing',
    '4K sports streaming package',
  ],
};

// Unified Pricing Structured Data Graph (Product + Complete Offers + Validated FAQs)
const PricingStructuredData = () => {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${PRICING_URL}/#product`,
        name: `${CONSTANTS.BRAND_NAME} IPTV Subscription`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `Official multi-device subscription plans for ${CONSTANTS.BRAND_NAME} IPTV service. Stream 15,000+ live channels, sports PPV, and 60,000+ VOD movies in 4K 60FPS.`,
        brand: {
          '@type': 'Brand',
          name: CONSTANTS.BRAND_NAME,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '5000',
          bestRating: '5',
          worstRating: '1',
        },
        offers: [
          // 1 Device Tiers
          {
            '@type': 'Offer',
            name: '1 Device - 3 Months',
            price: '35.00',
            priceCurrency: 'USD',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: PRICING_URL,
            description: `3 months access on 1 device with 15,000+ live channels and 60,000+ VODs`,
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'US',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 7,
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            },
          },
          {
            '@type': 'Offer',
            name: '1 Device - 6 Months',
            price: '45.00',
            priceCurrency: 'USD',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: PRICING_URL,
            description: `6 months access on 1 device with 15,000+ live channels and 60,000+ VODs`,
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'US',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 7,
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            },
          },
          {
            '@type': 'Offer',
            name: '1 Device - 12 Months',
            price: '75.00',
            priceCurrency: 'USD',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: PRICING_URL,
            description: `12 months access on 1 device with 15,000+ live channels and 60,000+ VODs`,
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'US',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 7,
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            },
          },
          // 2 Devices Tiers
          {
            '@type': 'Offer',
            name: '2 Devices - 3 Months',
            price: '60.00',
            priceCurrency: 'USD',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: PRICING_URL,
            description: `3 months access on 2 devices simultaneously`,
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'US',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 7,
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            },
          },
          {
            '@type': 'Offer',
            name: '2 Devices - 6 Months',
            price: '80.00',
            priceCurrency: 'USD',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: PRICING_URL,
            description: `6 months access on 2 devices simultaneously`,
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'US',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 7,
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            },
          },
          {
            '@type': 'Offer',
            name: '2 Devices - 12 Months',
            price: '110.00',
            priceCurrency: 'USD',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: PRICING_URL,
            description: `12 months access on 2 devices simultaneously`,
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'US',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 7,
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            },
          },
          // 3 Devices Tiers
          {
            '@type': 'Offer',
            name: '3 Devices - 3 Months',
            price: '75.00',
            priceCurrency: 'USD',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: PRICING_URL,
            description: `3 months access on 3 devices simultaneously`,
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'US',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 7,
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            },
          },
          {
            '@type': 'Offer',
            name: '3 Devices - 6 Months',
            price: '105.00',
            priceCurrency: 'USD',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: PRICING_URL,
            description: `6 months access on 3 devices simultaneously`,
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'US',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 7,
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            },
          },
          {
            '@type': 'Offer',
            name: '3 Devices - 12 Months',
            price: '150.00',
            priceCurrency: 'USD',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: PRICING_URL,
            description: `12 months access on 3 devices simultaneously`,
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'US',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 7,
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            },
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PRICING_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `What payment methods does ${CONSTANTS.BRAND_NAME} accept?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${CONSTANTS.BRAND_NAME} accepts major credit cards (Visa, Mastercard), PayPal, and cryptocurrencies (Bitcoin, USDT) with 256-bit SSL encrypted checkout protocols.`,
            },
          },
          {
            '@type': 'Question',
            name: `Can I upgrade or downgrade my ${CONSTANTS.BRAND_NAME} plan?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, you can upgrade connections or extend your subscription period at any time by connecting with 24/7 technical live assistance.`,
            },
          },
          {
            '@type': 'Question',
            name: `Is there a long-term contract with ${CONSTANTS.BRAND_NAME}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `No, all ${CONSTANTS.BRAND_NAME} plans operate on a prepaid, pay-as-you-go basis without lock-in contracts or hidden termination fees.`,
            },
          },
          {
            '@type': 'Question',
            name: `Does ${CONSTANTS.BRAND_NAME} offer a refund policy?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, ${CONSTANTS.BRAND_NAME} provides a 7-day money-back satisfaction guarantee on all multi-device subscription plans.`,
            },
          },
          {
            '@type': 'Question',
            name: `Can I stream ${CONSTANTS.BRAND_NAME} on multiple devices simultaneously?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, multi-room packages support concurrent viewing on 2 or 3 separate terminals across Smart TVs, Firestick, Android, and iOS.`,
            },
          },
          {
            '@type': 'Question',
            name: `What is included with ${CONSTANTS.BRAND_NAME} subscription plans?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Every plan includes uncompressed 4K 60FPS feeds, 15,000+ international channels, 60,000+ daily VOD releases, and full EPG synchronization.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="pricing-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PricingStructuredData />
      {children}
    </>
  );
}