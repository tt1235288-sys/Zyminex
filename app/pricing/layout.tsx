// app/pricing/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://zyminex.stream`),
  title: {
    default: `Zyminex - Best IPTV Plans 2026 - 4K Streaming | Official Website`,
    template: `%s | Zyminex - Official Pricing`,
  },
  description: `Zyminex: Multi-device IPTV plans from $35/3mo. 15,000+ channels, 60,000+ VODs, 4K quality. 7-day money-back guarantee. Official website - Subscribe now!`,
  authors: [{ name: `Zyminex Team` }],
  creator: 'Zyminex',
  publisher: 'Zyminex',
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
    canonical: `https://zyminex.stream/pricing`,
  },
  openGraph: {
    title: `Zyminex - Best IPTV Plans 2026 | Official Website`,
    description: `Subscribe to Zyminex from $35/3mo. 15,000+ channels, 60,000+ VODs, 4K quality. Multi-device support. Official website.`,
    url: `https://zyminex.stream/pricing`,
    siteName: 'Zyminex',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://zyminex.stream/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `Zyminex Pricing Plans - Best IPTV Subscription Official Website`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Zyminex - Best IPTV Plans 2026 | Official Website`,
    description: `From $35/3mo. 15,000+ channels, 60,000+ VODs, 4K quality. Multi-device plans available.`,
    images: [`https://zyminex.stream/img/structer.webp`],
    creator: `@Zyminex`,
    site: `@Zyminex`,
  },
  category: 'entertainment',
  keywords: [
    `Zyminex pricing`,
    `Zyminex plans`,
    `Zyminex subscription`,
    `Zyminex cost`,
    `Zyminex review`,
    `Zyminex guide`,
    `Zyminex service`,
    `Zyminex official website`,
    'IPTV subscription cost',
    'best IPTV price',
    'cheap IPTV subscription',
    'IPTV 4K pricing',
    'sports IPTV package',
    'IPTV service',
    'best IPTV provider',
    '4K streaming',
    'live TV streaming',
    'sports PPV',
    'premium IPTV',
    'international channels',
    'IPTV 2026',
    'iptv free trial',
    'iptv encoder box',
    '4k iptv encoder',
    'iptv encoder hdmi',
    'zyminex tv',
    'what is hdmi iptv encoder',
    'how to connect hdmi to iptv',
    'iptv italiane 4k'
  ],
};

// JSON-LD Pricing Page Schema with Updated Pricing
const PricingPageSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-page-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `Zyminex IPTV Subscription Plans`,
        "alternateName": "Zyminex",
        "image": `https://zyminex.stream/img/structer.webp`,
        "description": `Premium IPTV service with multi-device subscription plans starting at $35 for 3 months. Access 15,000+ live channels and 60,000+ VODs in 4K quality. Zyminex offers the best value in IPTV entertainment.`,
        "brand": {
          "@type": "Brand",
          "name": "Zyminex"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "5000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": [
          // 1 Device Plans
          {
            "@type": "Offer",
            "name": "1 Device - 3 Months",
            "price": "35.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://zyminex.stream/pricing`,
            "description": `3 months Zyminex access on 1 device with 15,000+ live channels and 60,000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "1 Device - 6 Months",
            "price": "45.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://zyminex.stream/pricing`,
            "description": `6 months Zyminex access on 1 device with 15,000+ live channels and 60,000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "1 Device - 12 Months",
            "price": "75.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://zyminex.stream/pricing`,
            "description": `12 months Zyminex access on 1 device with 15,000+ live channels and 60,000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          // 2 Devices Plans
          {
            "@type": "Offer",
            "name": "2 Devices - 3 Months",
            "price": "60.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://zyminex.stream/pricing`,
            "description": `3 months Zyminex access on 2 devices with 15,000+ live channels and 60,000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "2 Devices - 6 Months",
            "price": "80.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://zyminex.stream/pricing`,
            "description": `6 months Zyminex access on 2 devices with 15,000+ live channels and 60,000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "2 Devices - 12 Months",
            "price": "110.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://zyminex.stream/pricing`,
            "description": `12 months Zyminex access on 2 devices with 15,000+ live channels and 60,000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          // 3 Devices Plans
          {
            "@type": "Offer",
            "name": "3 Devices - 3 Months",
            "price": "75.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://zyminex.stream/pricing`,
            "description": `3 months Zyminex access on 3 devices with 15,000+ live channels and 60,000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "3 Devices - 6 Months",
            "price": "105.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://zyminex.stream/pricing`,
            "description": `6 months Zyminex access on 3 devices with 15,000+ live channels and 60,000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "3 Devices - 12 Months",
            "price": "150.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://zyminex.stream/pricing`,
            "description": `12 months Zyminex access on 3 devices with 15,000+ live channels and 60,000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "USD"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          }
        ]
      })
    }}
  />
);

// FAQ JSON-LD Schema
const PricingFAQSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What payment methods does Zyminex accept?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Zyminex accepts all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept PayPal, cryptocurrencies (Bitcoin, Ethereum, USDT), and various regional payment methods.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I upgrade or downgrade my Zyminex plan?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, you can upgrade or downgrade your Zyminex plan at any time. Contact our support team and they will assist you with the change immediately.`
            }
          },
          {
            "@type": "Question",
            "name": `Is there a contract with Zyminex?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `No, there are no contracts or long-term commitments with Zyminex. All plans are prepaid and you can cancel at any time without penalties or hidden fees.`
            }
          },
          {
            "@type": "Question",
            "name": `Does Zyminex offer refunds?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, Zyminex offers a 7-day money-back guarantee on all plans. If you're not completely satisfied, contact our support team within 7 days for a full refund.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I use Zyminex on multiple devices?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, depending on your Zyminex plan. 1 Device plan supports 1 device, 2 Devices plan supports 2 devices, and 3 Devices plan supports 3 devices simultaneously.`
            }
          },
          {
            "@type": "Question",
            "name": `What is the difference between Zyminex plans?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The Zyminex 1 Device plan includes 15,000+ channels and 60,000+ VODs with 1 connection. The 2 Devices plan includes the same content with 2 connections. The 3 Devices plan includes the same content with 3 connections - perfect for families.`
            }
          },
          {
            "@type": "Question",
            "name": `Where can I find Zyminex reviews?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `You can find Zyminex reviews on our official website, social media channels, and Reddit communities dedicated to IPTV streaming services.`
            }
          },
          {
            "@type": "Question",
            "name": `Is Zyminex the best IPTV service?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Zyminex is widely recognized as one of the best IPTV services with 4.9/5 stars from 5000+ reviews, offering superior 4K streaming quality, extensive channel selection, and reliable anti-freeze technology.`
            }
          }
        ]
      })
    }}
  />
);

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
        "name": "Zyminex",
        "alternateName": "Zyminex",
        "url": `https://zyminex.stream`,
        "logo": `https://zyminex.stream/img/structer.webp`,
        "image": `https://zyminex.stream/img/structer.webp`,
        "description": `Premium IPTV service with multi-device subscription plans starting at $35 for 3 months. Zyminex is the best IPTV provider for 2026.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
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
        "name": "Zyminex",
        "alternateName": "Zyminex",
        "url": `https://zyminex.stream`,
        "description": `Zyminex - Best IPTV subscription plans starting at $35 for 3 months. Read our Zyminex Review and Zyminex Guide.`,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `https://zyminex.stream/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
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
        "name": `Zyminex - Pricing & Subscription Plans | Official Website`,
        "description": `Choose your Zyminex subscription plan starting at $35 for 3 months. 15,000+ channels, 60,000+ VODs, 4K quality. Official website.`,
        "url": `https://zyminex.stream/pricing`,
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

// Article Schema for better image display in search
const ArticleSchema = () => (
  <script
    type="application/ld+json"
    id="article-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `Zyminex - Best IPTV Plans 2026 - 4K Streaming | Official Website`,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* JSON-LD Schemas */}
      <OrganizationSchema />
      <WebsiteSchema />
      <WebPageSchema />
      <ArticleSchema />
      <PricingPageSchema />
      <PricingFAQSchema />
      {children}
    </>
  );
}