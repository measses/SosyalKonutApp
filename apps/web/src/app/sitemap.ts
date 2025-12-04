import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sosyalkonut.app';
  const locales = ['tr', 'en'];
  const currentDate = new Date();

  // Ana sayfalar
  const mainPages = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: 'calculator', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'faq', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: 'privacy-policy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: 'terms', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: 'iletisim', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: 'blog', priority: 0.7, changeFrequency: 'daily' as const },
  ];

  // Her dil için URL'leri oluştur
  const urls = locales.flatMap((locale) =>
    mainPages.map((page) => ({
      url: `${baseUrl}/${locale}${page.path ? `/${page.path}` : ''}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: locales.reduce(
          (acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}${page.path ? `/${page.path}` : ''}`;
            return acc;
          },
          {} as Record<string, string>
        ),
      },
    }))
  );

  return urls;
}
