import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog-posts';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: locale === 'tr' ? 'Blog - Sosyal Konut Rehberi' : 'Blog - Social Housing Guide',
    description:
      locale === 'tr'
        ? 'Sosyal konut başvurusu, taksit hesaplama ve TOKİ projeleri hakkında güncel bilgiler ve rehberler.'
        : 'Current information and guides about social housing applications, installment calculations, and TOKİ projects.',
  };
}

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-brand-teal/30">
          📝 {locale === 'tr' ? 'Blog' : 'Blog'}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {locale === 'tr' ? 'Sosyal Konut Rehberi' : 'Social Housing Guide'}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {locale === 'tr'
            ? 'Sosyal konut başvurusu, taksit hesaplama ve finansal planlama hakkında bilmeniz gerekenler'
            : 'Everything you need to know about social housing applications, installment calculations, and financial planning'}
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Featured Badge */}
            {post.featured && (
              <div className="bg-gradient-to-r from-brand-teal to-brand-coral px-3 py-1 text-white text-xs font-semibold">
                ⭐ {locale === 'tr' ? 'Öne Çıkan' : 'Featured'}
              </div>
            )}

            <div className="p-6">
              {/* Category & Reading Time */}
              <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{post.category}</span>
                <span className="text-xs">📖 {post.readingTime} dk okuma</span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                {locale === 'tr' ? post.title.tr : post.title.en}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 line-clamp-3">{locale === 'tr' ? post.excerpt.tr : post.excerpt.en}</p>

              {/* Meta */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{new Date(post.publishedAt).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US')}</span>
                <span>{post.author}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read More Link */}
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-teal-dark font-semibold transition-colors"
              >
                {locale === 'tr' ? 'Devamını Oku' : 'Read More'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 rounded-lg p-8 text-center border border-brand-teal/20">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          {locale === 'tr' ? 'Kendi Durumunuzu Analiz Edin' : 'Analyze Your Own Situation'}
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          {locale === 'tr'
            ? 'Ücretsiz hesaplama aracımızla taksit simülasyonu yapın, gelir-taksit dengenizi görün ve bilinçli kararlar alın.'
            : 'Use our free calculation tool to simulate installments, view your income-installment balance, and make informed decisions.'}
        </p>
        <Link
          href={`/${locale}/calculator`}
          className="inline-block bg-brand-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-teal-dark transition-colors shadow-md hover:shadow-lg"
        >
          {locale === 'tr' ? 'Hesaplamaya Başla' : 'Start Calculating'}
        </Link>
      </div>
    </div>
  );
}
