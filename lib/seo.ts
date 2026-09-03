import { Metadata } from 'next';

const DOMAIN = 'www.zyminex.stream';
const BRAND_NAME = 'Zyminex';
const FOCUS_KEYWORD = 'Zyminex';

export const CONSTANTS = {
  DOMAIN,
  FOCUS_KEYWORD,
  BRAND_NAME,
};

export const generateSEOMetadata = (
  pageName?: string,
  customDescription?: string,
  path: string = ''
): Metadata => {
  const cleanPath = path.startsWith('/') ? path : path ? `/${path}` : '';
  const canonicalUrl = `https://${CONSTANTS.DOMAIN}${cleanPath}`;
  
  // Front-load focus keyword for homepage; use standard template for subpages (45-55 chars)
  const metaTitle = pageName 
    ? `${pageName} | ${CONSTANTS.BRAND_NAME}`
    : `${CONSTANTS.FOCUS_KEYWORD}: Official 4K Live Streaming & TV Service`;
  
  // High-CTR description containing focus keyword within optimal 140-155 character range
  const defaultDesc = `Stream with ${CONSTANTS.BRAND_NAME} official website. Access 15,000+ live channels, 4K sports & VOD movies with anti-freeze servers and instant multi-device setup.`;
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
          alt: `${CONSTANTS.BRAND_NAME} Official 4K Live Streaming Service`,
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