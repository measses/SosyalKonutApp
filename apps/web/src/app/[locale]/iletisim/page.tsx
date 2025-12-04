import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">{t('title')}</h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">{t('subtitle')}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* GitHub */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gray-100 rounded-lg">
              <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{t('github.title')}</h2>
              <p className="text-sm text-gray-600">{t('github.subtitle')}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{t('github.description')}</p>
          <a
            href="https://github.com/measses/TokiCheck"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
          >
            {t('github.button')}
          </a>
        </div>

        {/* Email */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-brand-teal/10 rounded-lg">
              <svg className="w-8 h-8 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{t('email.title')}</h2>
              <p className="text-sm text-gray-600">{t('email.subtitle')}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{t('email.description')}</p>
          <a
            href="mailto:hello@sosyalkonut.app"
            className="inline-block bg-brand-teal text-white px-6 py-2 rounded-lg hover:bg-brand-teal-dark transition-colors font-semibold"
          >
            {t('email.button')}
          </a>
        </div>
      </div>

      {/* Açık Kaynak Bilgisi */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
          <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('opensource.title')}</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">{t('opensource.description')}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/measses/TokiCheck"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-blue-300 text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-100 transition-colors font-semibold"
          >
            {t('opensource.repo')}
          </a>
          <a
            href="https://github.com/measses/TokiCheck/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-blue-300 text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-100 transition-colors font-semibold"
          >
            {t('opensource.issues')}
          </a>
          <a
            href="https://github.com/measses/TokiCheck/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-blue-300 text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-100 transition-colors font-semibold"
          >
            {t('opensource.discussions')}
          </a>
        </div>
      </div>

      {/* Destek */}
      <div className="mt-8 bg-gradient-to-r from-brand-coral/10 to-brand-teal/10 border border-brand-coral/30 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('support.title')}</h3>
        <p className="text-gray-700 mb-6">{t('support.description')}</p>
        <a
          href="https://buymeacoffee.com/mertaraz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-coral text-white px-8 py-3 rounded-lg hover:bg-brand-coral-dark transition-colors font-semibold shadow-md hover:shadow-lg"
        >
          {t('support.button')}
        </a>
      </div>
    </div>
  );
}
