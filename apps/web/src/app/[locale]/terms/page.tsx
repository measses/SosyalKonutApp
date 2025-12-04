import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'terms' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations('terms');

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">{t('title')}</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <p className="text-gray-600 mb-6">{t('intro')}</p>
          <p className="text-sm text-gray-500 mb-8">{t('lastUpdated')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t('section1.title')}</h2>
          <p className="text-gray-700">{t('section1.content')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t('section2.title')}</h2>
          <p className="text-gray-700 mb-4">{t('section2.content')}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>{t('section2.item1')}</li>
            <li>{t('section2.item2')}</li>
            <li>{t('section2.item3')}</li>
            <li>{t('section2.item4')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t('section3.title')}</h2>
          <p className="text-gray-700">{t('section3.content')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t('section4.title')}</h2>
          <p className="text-gray-700">{t('section4.content')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t('section5.title')}</h2>
          <p className="text-gray-700 mb-4">{t('section5.content')}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>{t('section5.item1')}</li>
            <li>{t('section5.item2')}</li>
            <li>{t('section5.item3')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t('section6.title')}</h2>
          <p className="text-gray-700">{t('section6.content')}</p>
        </section>

        <section className="mb-8 bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t('section7.title')}</h2>
          <p className="text-gray-700 mb-4">{t('section7.content')}</p>
          <p className="text-gray-700">
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@sosyalkonut.app" className="text-brand-teal hover:underline">
              hello@sosyalkonut.app
            </a>
          </p>
          <p className="text-gray-700">
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/measses/TokiCheck/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal hover:underline"
            >
              github.com/measses/TokiCheck/issues
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
