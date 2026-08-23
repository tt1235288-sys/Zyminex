import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(`https://zyminex.stream`),
  title: {
    default: `Zyminex Blog - IPTV Tips & Guides 2026`,
    template: `%s | Zyminex`,
  },
  description: `Read the latest IPTV Service articles, guides, and news. Learn IPTV setup tips, channel updates, and streaming optimization on zyminex.stream.`,
  keywords: [
    `Zyminex blog`,
    `Zyminex news`,
    `Zyminex guide`,
    `Zyminex tips`,
    `IPTV Service blog`,
    `IPTV Providers news`,
    `IPTV Encoder guides`,
    `streaming tips`,
    `IPTV setup guide`,
    `zyminex subscription updates`,
    `IPTV optimization`,
    `best IPTV provider`,
    `zyminex tv reviews`,
    `streaming technology`,
    `what is hdmi iptv encoder`,
    `how to connect hdmi to iptv`,
    `iptv italiane 4k`,
  ],
  alternates: {
    canonical: `https://zyminex.stream/blog`,
  },
  openGraph: {
    title: `Zyminex Blog - IPTV Tips & Guides 2026`,
    description: `Latest IPTV Service news, setup guides, channel updates, and streaming tips from Zyminex.`,
    url: `https://zyminex.stream/blog`,
    type: 'website',
    images: [
      {
        url: `https://zyminex.stream/img/structer.png`,
        width: 1200,
        height: 630,
        alt: `Zyminex Blog - IPTV Tips & Guides`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Zyminex Blog - IPTV Tips & Guides`,
    description: `Latest IPTV tips, guides, and news from Zyminex.`,
    images: [`https://zyminex.stream/img/structer.png`],
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

const BlogListingSchema = () => (
  <script
    type="application/ld+json"
    id="blog-listing-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": `Zyminex Blog`,
        "description": `Latest news, guides, and tips about Zyminex IPTV streaming and entertainment.`,
        "url": `https://zyminex.stream/blog`,
        "publisher": {
          "@type": "Organization",
          "name": "Zyminex",
          "logo": `https://zyminex.stream/img/structer.png`
        },
        "blogPost": blogPosts.map(post => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description || post.excerpt,
          "url": `https://zyminex.stream/blog/${post.slug}`,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "image": post.image
        }))
      })
    }}
  />
);

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
            "name": `Zyminex Blog`,
            "item": `https://zyminex.stream/blog`
          }
        ]
      })
    }}
  />
);

const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Zyminex Blog - IPTV Tips & Guides`,
        "description": `Latest Zyminex articles, guides, and news.`,
        "url": `https://zyminex.stream/blog`,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `https://zyminex.stream/img/structer.png`,
          "width": "1200",
          "height": "630"
        }
      })
    }}
  />
);

export default function BlogListing() {
  return (
    <>
      <WebPageSchema />
      <BlogListingSchema />
      <BreadcrumbSchema />

      <div className="flex flex-col min-h-screen bg-[#003554] px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3CAFFF]/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#fff1d0] uppercase tracking-tighter mb-6 mt-16 relative z-10">
            Zyminex <span className="text-[#3CAFFF]">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-[#fff1d0]/70 max-w-2xl mx-auto font-bold relative z-10">
            Stay updated with the latest tips, platform updates, and comprehensive guides for maximizing your zyminex subscription parameters.
          </p>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {blogPosts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.id} 
              className="group rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col relative transform hover:-translate-y-2 isolate bg-[#fff1d0] border-4 border-[#3CAFFF] shadow-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-800">
                <Image
                  src={post.image}
                  alt={`${post.title} - Zyminex Blog Article`}
                  width={600}
                  height={750}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  priority={index < 3}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                  {post.keywords && post.keywords.slice(0, 2).map((kw: string) => (
                    <span 
                      key={kw} 
                      className="px-3 py-1.5 bg-[#003554] text-[#fff1d0] border border-white/10 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8 flex flex-col justify-end h-full">
                <div className="flex items-center gap-3 text-xs font-black text-[#3CAFFF] mb-3 uppercase tracking-widest drop-shadow-md">
                  <div className="w-8 h-8 rounded-full bg-black/80 flex items-center justify-center border border-[#3CAFFF] text-[#fff1d0] flex-shrink-0 font-black">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-[#fff1d0]">{post.author}</span>
                  <span className="text-[#fff1d0]/50">•</span>
                  <span className="text-[#fff1d0]/80 text-xs">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#fff1d0] mb-2 group-hover:text-[#3CAFFF] transition-colors duration-300 leading-tight drop-shadow-lg line-clamp-2 uppercase tracking-tight">
                  {post.title}
                </h2>
                
                <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                  <p className="text-[#fff1d0]/90 text-sm font-bold leading-relaxed mt-2 line-clamp-3">
                    {post.description || post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#3CAFFF] font-black text-xs uppercase tracking-widest mt-3 group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-3 h-3 shrink-0" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}