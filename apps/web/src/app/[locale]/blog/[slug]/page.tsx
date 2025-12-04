import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/lib/blog-posts';
import MarkdownContent from '@/components/blog/MarkdownContent';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  const locales = ['tr', 'en'];

  return locales.flatMap((locale) => posts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${locale === 'tr' ? post.title.tr : post.title.en} - Sosyal Konut App`,
    description: locale === 'tr' ? post.excerpt.tr : post.excerpt.en,
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      title: `${locale === 'tr' ? post.title.tr : post.title.en}`,
      description: locale === 'tr' ? post.excerpt.tr : post.excerpt.en,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const content = locale === 'tr' ? post.content.tr : post.content.en;

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link href={`/${locale}`} className="hover:text-brand-teal transition-colors">
          {locale === 'tr' ? 'Ana Sayfa' : 'Home'}
        </Link>
        <span>/</span>
        <Link href={`/${locale}/blog`} className="hover:text-brand-teal transition-colors">
          {locale === 'tr' ? 'Blog' : 'Blog'}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{locale === 'tr' ? post.title.tr : post.title.en}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-sm font-semibold border border-brand-teal/30">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {locale === 'tr' ? post.title.tr : post.title.en}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{new Date(post.publishedAt).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US')}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              {post.readingTime} {locale === 'tr' ? 'dk okuma' : 'min read'}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <span key={tag} className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Language Switcher */}
      <div className="flex justify-end mb-4">
        <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
          <Link
            href={`/tr/blog/${slug}`}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
              locale === 'tr' ? 'bg-white text-brand-teal shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🇹🇷 Türkçe
          </Link>
          <Link
            href={`/en/blog/${slug}`}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
              locale === 'en' ? 'bg-white text-brand-teal shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🇬🇧 English
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mb-12">
        <MarkdownContent content={content} />
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 rounded-lg p-8 text-center border border-brand-teal/20 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          {locale === 'tr' ? 'Hesaplama Aracımızı Deneyin' : 'Try Our Calculator'}
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          {locale === 'tr'
            ? 'Kendi durumunuzu analiz edin ve bilinçli kararlar alın.'
            : 'Analyze your situation and make informed decisions.'}
        </p>
        <Link
          href={`/${locale}/calculator`}
          className="inline-block bg-brand-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-teal-dark transition-colors shadow-md hover:shadow-lg"
        >
          {locale === 'tr' ? 'Hemen Hesapla' : 'Calculate Now'}
        </Link>
      </div>

      {/* Back to Blog */}
      <div className="text-center">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-teal-dark font-semibold transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {locale === 'tr' ? 'Tüm Yazılara Dön' : 'Back to All Posts'}
        </Link>
      </div>
    </article>
  );
}
