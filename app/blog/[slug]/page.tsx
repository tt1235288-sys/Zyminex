import { blogPosts } from '@/lib/blog';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Tag, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Headphones, 
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Tv
} from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return generateSEOMetadata('Article Not Found');

  // Exact SERP title strictly under 60 characters with front-loaded keywords
  const pageTitle = `${post.title} | ${CONSTANTS.BRAND_NAME}`;
  
  // Clean, sentence-aware description under 155 characters
  const rawDesc = post.description || post.excerpt || `Step-by-step technical guide on IPTV streaming, bandwidth optimization, and 4K server setup.`;
  const metaDescription = rawDesc.length > 155 ? `${rawDesc.slice(0, 152).trim()}...` : rawDesc;
  
  const postUrl = `https://${CONSTANTS.DOMAIN}/blog/${post.slug}`;
  const postImage = post.image || `https://${CONSTANTS.DOMAIN}/img/structer.webp`;

  return {
    title: {
      absolute: pageTitle,
    },
    description: metaDescription,
    keywords: post.keywords ? post.keywords.join(', ') : '',
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: pageTitle,
      description: metaDescription,
      url: postUrl,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      siteName: CONSTANTS.BRAND_NAME,
      locale: 'en_US',
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: metaDescription,
      images: [postImage],
      creator: `@${CONSTANTS.BRAND_NAME}`,
      site: `@${CONSTANTS.BRAND_NAME}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Calculate read time and clean word metrics
  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 200));
  const displayCategory = post.keywords && post.keywords.length > 0 ? post.keywords[0] : 'IPTV Guide';
  const postUrl = `https://${CONSTANTS.DOMAIN}/blog/${post.slug}`;

  // Get related articles excluding the current post
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${postUrl}/#article`,
    headline: post.title,
    description: post.description || post.excerpt,
    keywords: post.keywords ? post.keywords.join(', ') : '',
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: CONSTANTS.BRAND_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  return (
    <article className="flex flex-col min-h-screen bg-[#003554] text-[#fff1d0]">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        id="blog-article-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[45vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-28 pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={`${post.title} - ${CONSTANTS.BRAND_NAME} Article Cover`}
            fill
            priority
            className="object-cover scale-105 brightness-[0.18]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#003554]/0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003554]/30 via-transparent to-[#003554]" />
        </div>

        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 bg-[#fdc500] text-[#003554] text-xs font-black uppercase tracking-widest rounded-full shadow-md">
              {displayCategory}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#fff1d0] tracking-tighter uppercase mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#fff1d0]/80 font-bold max-w-2xl mx-auto leading-relaxed mb-6">
            {post.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-[#fff1d0]/60 text-xs sm:text-sm font-black uppercase tracking-widest">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#3CAFFF]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#3CAFFF]" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#3CAFFF]" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4">
        <Link 
          href="/blog" 
          aria-label="Back to all IPTV guides and blog articles"
          className="inline-flex items-center gap-2 text-[#3CAFFF] hover:text-[#fdc500] transition-colors font-black text-xs uppercase tracking-widest group bg-white/5 border border-white/10 px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to all articles
        </Link>
      </div>

      {/* Main Grid: Content (8 cols) + Sticky Sidebar (4 cols) */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Article Body (8 cols) */}
          <div className="lg:col-span-8 min-w-0">
            <div 
              className="prose prose-invert prose-base md:prose-lg max-w-none
                [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-black [&>h2]:text-[#fff1d0] [&>h2]:mb-4 [&>h2]:mt-10 [&>h2]:tracking-tight [&>h2]:uppercase
                [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-black [&>h3]:text-[#fff1d0] [&>h3]:mb-3 [&>h3]:mt-6 [&>h3]:uppercase
                [&>p]:text-[#fff1d0]/80 [&>p]:text-base [&>p]:font-medium [&>p]:leading-relaxed [&>p]:mb-6
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:text-[#fff1d0]/80 [&>ul]:font-medium
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:text-[#fff1d0]/80 [&>ol]:font-medium
                [&>li]:mb-2
                [&>a]:text-[#3CAFFF] [&>a]:font-black [&>a]:hover:text-[#fdc500] [&>a]:transition-colors
                [&>blockquote]:border-l-4 [&>blockquote]:border-[#3CAFFF] [&>blockquote]:bg-white/5 [&>blockquote]:pl-6 [&>blockquote]:py-3 [&>blockquote]:my-6 [&>blockquote]:text-[#fff1d0]/75 [&>blockquote]:italic
                [&>img]:rounded-2xl [&>img]:my-8 [&>img]:border-2 [&>img]:border-[#3CAFFF]/20 [&>img]:w-full [&>img]:h-auto
                [&>hr]:border-white/10 [&>hr]:my-10
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Network Diagnostic Callout Note */}
            <div className="my-10 p-6 bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-2xl text-[#003554] shadow-xl">
              <h3 className="font-black text-lg uppercase mb-2">Network Diagnostic Note</h3>
              <p className="text-sm font-bold leading-relaxed">
                Ensure your connection meets the recommended 25+ Mbps threshold for uncompressed 4K streaming. You can benchmark your network throughput via{' '}
                <a 
                  href="https://www.speedtest.net/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#3CAFFF] underline font-black inline-flex items-center gap-1"
                >
                  Speedtest by Ookla <ExternalLink className="w-3.5 h-3.5" />
                </a>.
              </p>
            </div>

            {/* Article Topics Tags */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-[#3CAFFF]" />
                <h3 className="text-[#fff1d0] font-black text-base uppercase tracking-wide">Related Topics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.keywords.slice(0, 6).map((keyword) => (
                  <span 
                    key={keyword} 
                    className="px-3.5 py-1.5 bg-[#fff1d0] text-[#003554] text-xs font-black uppercase tracking-wider rounded-full border-2 border-[#3CAFFF] shadow-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio Box */}
            <div className="mt-10 p-6 sm:p-8 rounded-2xl border-4 border-[#3CAFFF] bg-[#fff1d0] shadow-xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
                <div className="w-16 h-16 rounded-full bg-[#003554] text-[#fdc500] flex items-center justify-center font-black text-2xl uppercase shrink-0 shadow-md">
                  {post.author[0]}
                </div>
                <div>
                  <h3 className="text-[#003554] font-black text-xl mb-1 uppercase tracking-tight">{post.author}</h3>
                  <p className="text-[#3CAFFF] text-xs uppercase tracking-widest font-black mb-2">Content Editor at {CONSTANTS.BRAND_NAME}</p>
                  <p className="text-[#003554]/80 text-sm font-bold leading-relaxed">
                    {`Specializing in high-throughput streaming architecture, media player configurations, and IPTV network optimization for ${CONSTANTS.BRAND_NAME}.`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* CTA Order Card */}
            <div className="bg-[#fff1d0] border-4 border-[#fdc500] rounded-3xl p-6 shadow-2xl text-center">
              <div className="inline-flex items-center gap-1.5 bg-[#003554] text-[#fdc500] px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>Zero Buffering Setup</span>
              </div>
              <h3 className="text-2xl font-black text-[#003554] uppercase tracking-tight mb-2">
                Get {CONSTANTS.BRAND_NAME} 4K Access
              </h3>
              <p className="text-xs text-[#003554]/80 font-bold leading-relaxed mb-6">
                Stream 15,000+ live sports and cinema channels on Firestick, Smart TV, and Android from $11.60/mo.
              </p>
              <Link
                href="/pricing"
                className="w-full block py-3.5 px-4 rounded-full bg-[#fdc500] hover:bg-amber-400 text-[#003554] font-black text-xs uppercase tracking-widest transition-all duration-200 shadow-md hover:scale-[1.02]"
              >
                View Plans &amp; Pricing
              </Link>
              <p className="text-[10px] text-[#003554]/60 font-black uppercase tracking-wider mt-3">
                7-Day Money-Back Guarantee
              </p>
            </div>

            {/* Related Articles Widget */}
            <div className="bg-[#00263d] border-2 border-white/10 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <BookOpen className="w-5 h-5 text-[#3CAFFF]" />
                <h3 className="text-base font-black text-[#fff1d0] uppercase tracking-wider">
                  Related Guides
                </h3>
              </div>

              <div className="space-y-4">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group flex gap-3.5 items-start p-2.5 rounded-2xl hover:bg-white/5 transition-colors"
                  >
                    <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black/40">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-black text-[#fff1d0] group-hover:text-[#fdc500] transition-colors line-clamp-2 uppercase leading-snug">
                        {rel.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-[10px] text-[#fff1d0]/50 font-bold uppercase">
                        <span>{rel.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/blog"
                className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-black uppercase tracking-wider text-[#3CAFFF] transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Support & Setup Quick Card */}
            <div className="bg-[#00263d]/60 border border-white/10 rounded-3xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#3CAFFF]/10 border border-[#3CAFFF]/30 flex items-center justify-center mx-auto mb-3 text-[#3CAFFF]">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-wide text-[#fff1d0] mb-1">
                Need Device Help?
              </h3>
              <p className="text-xs text-[#fff1d0]/70 font-medium mb-4">
                Follow our step-by-step setup tutorials for IPTV Smarters, TiviMate, and Firestick.
              </p>
              <Link
                href="/setup"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#fdc500] hover:underline uppercase tracking-wider"
              >
                Open Setup Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </aside>

        </div>
      </div>
    </article>
  );
}