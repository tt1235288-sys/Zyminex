import { Metadata } from 'next';

const DOMAIN = 'www.zyminex.stream';
const BRAND_NAME = 'Zyminex';
const FOCUS_KEYWORD = 'Zyminex IPTV';

export const CONSTANTS = {
  DOMAIN,
  FOCUS_KEYWORD,
  BRAND_NAME,
};

export const generateSEOMetadata = (
  pageName: string,
  customDescription?: string,
  path: string = ''
): Metadata => {
  const cleanPath = path.startsWith('/') ? path : path ? `/${path}` : '';
  const canonicalUrl = `https://${CONSTANTS.DOMAIN}${cleanPath}`;
  
  // Exact 50-55 char range to prevent truncation and pixel overflow (< 500px)
  const metaTitle = `${pageName} | ${CONSTANTS.BRAND_NAME}`;
  
  // Clean, non-repetitive 150-158 character description with high-intent keywords
  const defaultDesc = `Explore ${CONSTANTS.BRAND_NAME} with 20,000+ live channels, 4K sports streams & on-demand movies. Low-latency anti-freeze servers with fast setup.`;
  const cleanDescription = customDescription || defaultDesc;

  return {
    metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
    title: {
      default: metaTitle,
      template: `%s | ${CONSTANTS.BRAND_NAME}`,
    },
    description: cleanDescription,
    keywords: [
      CONSTANTS.FOCUS_KEYWORD,
      `${CONSTANTS.BRAND_NAME} cost`,
      `${CONSTANTS.BRAND_NAME} channels`,
      `${CONSTANTS.BRAND_NAME} review reddit`,
      '4K sports streaming',
      'anti-freeze live TV',
      'stable media player setup',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: cleanDescription,
      url: canonicalUrl,
      siteName: CONSTANTS.BRAND_NAME,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
          width: 1200,
          height: 630,
          alt: `${CONSTANTS.BRAND_NAME} 4K Live Entertainment`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: cleanDescription,
      images: [`https://${CONSTANTS.DOMAIN}/img/structer.webp`],
      creator: `@${CONSTANTS.BRAND_NAME}`,
      site: `@${CONSTANTS.BRAND_NAME}`,
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
};