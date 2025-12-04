export interface BlogPost {
  slug: string;
  title: {
    tr: string;
    en: string;
  };
  excerpt: {
    tr: string;
    en: string;
  };
  content: {
    tr: string;
    en: string;
  };
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  readingTime: number; // in minutes
  featured: boolean;
}

// Blog yazıları burada statik olarak saklanacak
export const blogPosts: BlogPost[] = [
  {
    slug: 'kimler-basvurabilir-sartlar-neler',
    title: {
      tr: '500 Bin Sosyal Konut Projesi 2025: Kimler Başvurabilir, Şartlar Neler?',
      en: '500 Thousand Social Housing Project 2025: Who Can Apply, What Are the Requirements?',
    },
    excerpt: {
      tr: 'Dar ve orta gelirli vatandaşlara uzun vadeli, düşük peşinatlı konut sahibi olma imkânı sunan 500 Bin Sosyal Konut Projesi başvuru şartları, kategoriler ve detaylı rehber.',
      en: 'Comprehensive guide to the 500 Thousand Social Housing Project requirements, categories, and application process for low and middle-income citizens.',
    },
    content: {
      tr: `# 500 Bin Sosyal Konut Projesi 2025: Kimler Başvurabilir, Şartlar Neler?

500 Bin Sosyal Konut Projesi, dar ve orta gelirli vatandaşlara uzun vadeli, düşük peşinatlı konut sahibi olma imkânı sunan, Türkiye genelinde 81 ili kapsayan büyük bir konut kampanyasıdır. Başvurular, **10 Kasım 2025 – 19 Aralık 2025** tarihleri arasında banka şubeleri ve e-Devlet üzerinden alınmaktadır.

Bu yazıda, projeye kimlerin başvurabileceğini, başvuru şartlarını, gelir ve tapu kriterlerini, kategori yapısını ve sürecin nasıl işlediğini sade bir dille anlattım.

## 1. 500 Bin Sosyal Konut Projesi Nedir?

Toplu Konut İdaresi Başkanlığı (TOKİ) tarafından yürütülen proje kapsamında, Türkiye genelinde **500.000 adet sosyal konut** inşa edilmesi planlanıyor. Proje kapsamında:

- Konutlar için başvurular **T.C. Ziraat Bankası, T. Halk Bankası ve T. Emlak Katılım Bankası** yetkili şubeleri ile **e-Devlet** üzerinden kabul ediliyor.
- Başvurular, **10.11.2025 – 19.12.2025** tarihleri arasında yapılabiliyor.
- e-Devlet üzerinden başvurmak isteyenler için son gün **18.12.2025**.
- Her başvuru için **5.000 TL başvuru bedeli** alınıyor; kurada hak sahibi olamayanlar bu bedeli iade alabiliyor.
- Konutlar ihaleler tamamlandıktan sonra netleşecek fiyatlarla; **%10 peşinat ve 240 ay (20 yıl) vade** ile satılacak.

## 2. Projeye Kimler Başvurabilir? (Temel Şartlar)

Projeye başvurmak için sağlanması gereken temel şartlar özetle şöyle:

### 2.1. Vatandaşlık ve Yaş Şartı

- Başvuru sahibinin **en az 10 yıldır T.C. vatandaşı** olması gerekiyor.
- Başvuru sahibinin **18 yaşını doldurmuş** olması şart.

### 2.2. İkamet Şartı

Başvurulan projenin bulunduğu yere göre ikamet şartı aranıyor:

- **İl merkezindeki projeler için**: Aynı il merkezinde, başvuru tarihinden geriye dönük en az 1 yıldır ikamet etmek.
- **İlçe projeleri için**: İlgili ilçede en az 1 yıldır ikamet etmek.
- **Belde projeleri için**: İlgili beldede en az 1 yıldır ikamet etmek.

Eğer ikamet edilen ilçede proje yoksa, il merkezindeki projeye başvuru yapılabiliyor.

**Özel Durum**: Emekliler ve deprem bölgesindeki 11 il için ayrıca, proje ilinde en az 1 yıl ikamet veya o ilin nüfusuna kayıtlı olma gibi esnek uygulamalar bulunuyor.

### 2.3. Konut Sahibi Olmama Şartı

Başvuru sahibi, eşi ve velayeti altındaki çocuklar için:

- **24 Ekim 2025** tarihi itibarıyla Türkiye sınırları içinde tapuda kayıtlı **bağımsız konutlarının olmaması** gerekiyor.
- Daha önce **TOKİ ile konut sözleşmesi imzalamamış** olmaları gerekiyor.
- Ayrıca, konut dışındaki taşınmazların (arsa, tarladaki pay vb.) toplam rayiç değerinin **1.000.000 TL'yi geçmemesi** şartı var; bu tutar belediyeden alınacak rayiç bedel belgesiyle doğrulanıyor.

### 2.4. Hane Halkı Gelir Şartı

Başvuru sahibinin, eşinin ve velayeti altındaki çocukların **toplam hane halkı net gelirinin**:

- **Türkiye geneli için** aylık en fazla **127.000 TL**,
- **İstanbul için** aylık en fazla **145.000 TL**

olması gerekiyor. Bu hesap yapılırken:

- Maaşa ek olarak alınan yol, yemek, sosyal yardım vb. ödemeler de gelire dahil ediliyor.
- Maaştan yapılan icra, kredi, BES, avans kesintileri gelirden düşülmüyor; **brüt net maaş** üzerinden değerlendirme yapılıyor.

### 2.5. Tek Başvuru Kuralı

Bir hane halkı adına, yani **kişi ve eşi toplamda yalnızca 1 başvuru** yapabiliyor. Sehven iki başvuru olursa, ikinci başvuran eşin başvurusu iptal ediliyor.

## 3. 7 Farklı Başvuru Kategorisi ve Kimler Girebilir?

Projede başvurular, **7 ayrı kategoride** kabul ediliyor:

1. **Şehit Aileleri, Terör, Harp ve Vazife Malulleri**
2. **Gazi (Kıbrıs, Kore) Vatandaşlarımız**
3. **En az %40 Engelli Vatandaşlarımız**
4. **Emekli Vatandaşlarımız**
5. **3 ve Daha Fazla Çocuklu Aileler**
6. **18–30 Yaş Arası Genç Vatandaşlarımız**
7. **Diğer Alıcı Adayları**

### Kategori Avantajları

- **Şehit ailesi, terör, harp ve vazife malulleri** için konut sahibi olmama ve gelir şartı aranmıyor; %10 peşin, 240 ay vade ile ve teslimden sonra başlayan taksitlerle konut veriliyor.
- **3 ve daha fazla çocuklu aileler** için, 19.12.2007'den sonra doğmuş en az 3 çocuk şartı aranıyor.
- **Genç kategorisi** için, 10.11.1995 tarihinden sonra doğan vatandaşlar başvuru yapabiliyor.

### Kontenjan Oranları

- **%5**: Şehit aileleri ve gaziler
- **%5**: En az %40 engelli
- **%10**: 3+ çocuklu aileler
- **%20**: 18-30 yaş arası gençler
- **%20**: Emekliler
- **%40**: Diğer başvuru sahipleri

## 4. Başvuru Nasıl Yapılır? (Banka Şubesi ve e-Devlet)

Başvuru yapmak için iki yol var: **banka şubeleri** ve **e-Devlet**.

### 4.1. Banka Şubelerinden Başvuru

- Projenin bulunduğu ildeki **Ziraat, Halk veya Emlak Katılım Bankası** yetkili şubelerine gidilir.
- T.C. kimlik belgesi ile birlikte **"Başvuru ve Satın Alma Taahhütnamesi"** imzalanır.
- Şehit aileleri ve bazı özel gruplar, başvuru bedeli ödemeden başvuru yapabiliyor.

### 4.2. e-Devlet Üzerinden Başvuru

1. **e-Devlet'e giriş** yapıldıktan sonra TOKİ / **"Konut / İşyeri Başvuru"** hizmeti seçilir.
2. Sistem, başvuru şartları ve taahhütnamenin yer aldığı ekran üzerinden yönlendirir.
3. Başvuru sonrası, banka tarafından gönderilen **IBAN'a** belirli süre içinde EFT/havale/ATM ile **5.000 TL başvuru ücreti** yatırılır; yatırılmazsa başvuru iptal olur.
4. Başvurunun durumu, yine e-Devlet'teki **"Başvuru Listesi"** ekranından takip edilebiliyor.

## 5. Kura, Ödeme Planı ve Taksit Artışları

### 5.1. Kura Süreci

- Önce **"Hak Sahibi Belirleme Kurası"** çekiliyor; tarih ve program TOKİ tarafından duyuruluyor.
- Ardından, ihale sonrası konut tipleri ve bloklar belli olduğunda, hak sahipleri için ikinci bir **"Konut Belirleme Kurası"** yapılıyor.
- Kurada hak sahibi olamayanlar, başvuru ücretlerini kura tarihinden sonraki birkaç iş günü içinde bankadan geri alabiliyor.

### 5.2. Ödeme Şartları ve Taksit Artışları

- Konutlar **%10 peşin + 240 ay vade** ile satılıyor.
- Taksit ödemeleri, **sözleşme tarihini izleyen ay** itibarıyla başlıyor.
- Kalan borç bakiyesi ve aylık taksitler, **her yıl Ocak ve Temmuz aylarında**, son 6 aylık dönem **memur maaş artış oranına** göre artırılıyor.

Tanıtım kitapçığındaki ödeme planı örneklerinde; **Anadolu illeri ve İstanbul** için 55 m², 65 m² ve 80 m² daireler için farklı başlangıç taksitleri ve peşinat tutarları gösteriliyor; tümünde ortak nokta **%10 peşinat ve 240 ay vade**.

## 6. Sık Sorulan 3 Soru

### Soru 1: Birden Fazla Yerden Evim Yok Ama Üzerime Arsa Hissesi Var, Başvurabilir miyim?

**Evet**, tapuda bağımsız konutunuz yoksa; sahip olduğunuz gayrimenkul hisselerinin 24 Ekim 2025 tarihi itibarıyla toplam rayiç bedeli **1.000.000 TL'yi geçmiyorsa** başvurabiliyorsunuz.

### Soru 2: Aynı Evde Yaşayan Anne – Baba – Yetişkin Çocuk Ayrı Ayrı Başvurabilir mi?

Bir hane halkı adına **yalnızca tek başvuru** yapılabiliyor. Kişi ve eşi için toplamda bir başvuru hakkı var. Aynı evde yaşayan, ayrı hane olarak değerlendirilen (örneğin farklı ikamet kaydı olan) yetişkin çocuklar için durum ayrıca değerlendirilse de, resmi metinde **"bir hane halkı = tek başvuru"** kuralı açıkça vurgulanıyor.

### Soru 3: Kurada Çıkmazsam Başvuru Param Yanıyor mu?

**Hayır**. Hak sahibi olamayanların başvuru bedelleri, kura çekilişinden sonraki birkaç iş günü içinde başvuru yaptıkları bankanın şubeleri veya ATM'leri üzerinden **iade ediliyor**.

## Sonuç: Başvuru Yapmalı mıyım?

Eğer:

✅ Üzerinize kayıtlı bağımsız konutunuz yoksa
✅ Geliriniz belirtilen sınırların altındaysa
✅ İkamet ve yaş şartlarını sağlıyorsanız
✅ Uzun vadeli ama sabit ve öngörülebilir bir taksit yükünün altına girebilirim diyorsanız

**500 Bin Sosyal Konut Projesi**, özellikle kira–taksit dengesinde zorlanan hane halkları için ciddi bir fırsat sunuyor.

---

### 📊 Kendi Durumunuzu Analiz Edin

[Sosyal Konut Hesaplama Aracımız](/tr/calculator) ile:
- Taksit artışlarını simüle edin
- Gelir-taksit dengenizi görün
- Kira-taksit çakışma maliyetini hesaplayın

⚠️ **Önemli**: Bu bilgiler genel bilgilendirme amaçlıdır. Güncel ve resmi bilgiler için [toki.gov.tr](https://www.toki.gov.tr) ve [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr) adreslerini ziyaret edin.`,
      en: `# 500 Thousand Social Housing Project 2025: Who Can Apply, What Are the Requirements?

The 500 Thousand Social Housing Project is a large-scale housing initiative covering all 81 provinces of Turkey, offering long-term, low down payment homeownership opportunities for low and middle-income citizens. Applications are accepted between **November 10, 2025 – December 19, 2025** through bank branches and e-Government portal.

This article explains who can apply, application requirements, income and property criteria, category structure, and how the process works.

## 1. What is the 500 Thousand Social Housing Project?

Led by TOKİ (Housing Development Administration), the project plans to build **500,000 social housing units** across Turkey. Key features:

- Applications accepted through **Ziraat Bank, Halk Bank, and Emlak Katılım Bank** branches and **e-Government**
- Application period: **November 10 – December 19, 2025**
- **5,000 TRY application fee** (refundable if not selected in lottery)
- **10% down payment + 240 months (20 years)** installment plan

## 2. Who Can Apply? (Basic Requirements)

### 2.1. Citizenship and Age
- Must be **Turkish citizen for at least 10 years**
- Must be **18 years or older**

### 2.2. Residence Requirement
- Must have resided in the application area for **at least 1 year**

### 2.3. Property Ownership Restriction
- No registered independent housing as of **October 24, 2025**
- No previous TOKİ housing agreement
- Total property value must not exceed **1,000,000 TRY**

### 2.4. Household Income Limit
- **Nationwide**: Maximum **127,000 TRY/month**
- **Istanbul**: Maximum **145,000 TRY/month**

### 2.5. Single Application Rule
- Only **one application per household** (applicant + spouse)

## 3. 7 Application Categories

1. Families of Martyrs, Terror/War Casualties
2. Veterans (Cyprus, Korea)
3. Citizens with at least 40% Disability
4. Retirees
5. Families with 3+ Children
6. Youth aged 18-30
7. Other Applicants

### Quota Allocation
- 5%: Martyrs' families and veterans
- 5%: Disabled (40%+)
- 10%: 3+ children families
- 20%: Youth (18-30)
- 20%: Retirees
- 40%: Other applicants

## 4. How to Apply?

### 4.1. Bank Branch Application
- Visit authorized bank branches
- Sign application commitment form
- Pay 5,000 TRY application fee

### 4.2. e-Government Application
1. Login to e-Government portal
2. Find TOKİ / "Housing Application" service
3. Complete online application
4. Transfer 5,000 TRY to provided IBAN

## 5. Lottery, Payment Plan & Installment Increases

### Lottery Process
- First: Eligibility determination lottery
- Second: Housing unit assignment lottery
- Non-selected applicants receive full refund

### Payment Terms
- **10% down payment + 240 months**
- Installments start month after contract
- Increases every **January and July** based on civil servant salary increases

## Conclusion

If you meet the criteria and can handle long-term installment payments, the 500 Thousand Social Housing Project offers a significant opportunity, especially for households struggling with rent-installment balance.

---

### 📊 Analyze Your Situation

Use our [Social Housing Calculator](/en/calculator) to:
- Simulate installment increases
- View income-installment balance
- Calculate rent-installment overlap costs

⚠️ **Important**: This information is for general guidance. For official information, visit [toki.gov.tr](https://www.toki.gov.tr) and [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr).`,
    },
    author: 'Sosyal Konut App',
    publishedAt: '2025-12-04',
    category: 'Başvuru Rehberi',
    tags: ['başvuru şartları', 'kategoriler', 'gelir şartı', 'başvuru süreci', 'kura'],
    readingTime: 8,
    featured: true,
  },
  {
    slug: 'sosyal-konut-projesi-nedir',
    title: {
      tr: 'Sosyal Konut Projesi Nedir? Kimler Başvurabilir?',
      en: 'What is Social Housing Project? Who Can Apply?',
    },
    excerpt: {
      tr: '500 Bin Sosyal Konut Projesi hakkında merak ettiğiniz her şey. Başvuru şartları, süreç ve detayları burada.',
      en: 'Everything you need to know about the 500 Thousand Social Housing Project. Application requirements, process, and details.',
    },
    content: {
      tr: `# Sosyal Konut Projesi Nedir?

500 Bin Sosyal Konut Projesi, Türkiye Cumhuriyeti hükümeti tarafından konut sahibi olmak isteyen vatandaşlara uygun koşullarda konut edinme imkanı sunmak amacıyla başlatılmış kapsamlı bir projedir.

## Kimler Başvurabilir?

### Temel Şartlar

1. **Vatandaşlık**: T.C. vatandaşı olmak ve son 10 yıldır kesintisiz vatandaş olmak
2. **Yaş**: 18 yaşını doldurmuş olmak
3. **İkamet**: Başvuru yapılacak şehirde en az 1 yıl ikamet etmiş olmak
4. **Konut Sahipliği**: Kendisi ve eşi üzerine kayıtlı bağımsız konut bulunmamak
5. **TOKİ Sözleşmesi**: Daha önce TOKİ ile konut sözleşmesi yapılmamış olmak

### Gelir Şartları

- **İstanbul için**: Hane halkı yıllık toplam geliri 145.000 TL'yi geçmemeli
- **Diğer şehirler için**: Hane halkı yıllık toplam geliri 127.000 TL'yi geçmemeli

## Kontenjan Dağılımı

Projede farklı gruplar için ayrılmış kontenjanlar bulunmaktadır:

- **%5**: Şehit aileleri ve gaziler
- **%5**: En az %40 engelli vatandaşlar
- **%10**: 3 veya daha fazla çocuklu aileler
- **%20**: 18-30 yaş arası gençler
- **%20**: Emekliler
- **%40**: Diğer başvuru sahipleri

## Ödeme Planı

### Peşinat ve İlk Ödemeler

- **Başvuru ücreti**: 5.000 TL (Şehit yakınları ve gaziler için ücretsiz)
- **Peşinat**: Konut bedelinin %10'u (Sözleşme sırasında)
- **Taksit süresi**: 240 ay (20 yıl)

### Taksit Artışları

Taksitler her 6 ayda bir artış gösterir. Artış oranı:
- Memur maaş artışı
- ÜFE (Üretici Fiyat Endeksi)
- Belirlenen sabit oran

seçeneklerinden biri uygulanabilir.

## Başvuru Süreci

1. **Online Başvuru**: evsahibiturkiye.gov.tr üzerinden
2. **Başvuru Dönemi**: 10 Kasım - 19 Aralık 2025
3. **Kura Çekimi**: 29 Aralık 2025 - 27 Şubat 2026
4. **Sözleşme**: Kura sonrası hak sahipleri ile
5. **Teslimat**: Mart 2027'den itibaren

## Dikkat Edilmesi Gerekenler

⚠️ **Önemli**: Bu bilgiler genel bilgilendirme amaçlıdır. Güncel ve resmi bilgiler için mutlaka [toki.gov.tr](https://www.toki.gov.tr) ve [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr) adreslerini ziyaret edin.

## Hesaplama Aracımızla Kendinizi Test Edin

Sosyal Konut App ile:
- Taksit artışlarını simüle edebilir
- Gelir-taksit dengesini görebilir
- Kira-taksit çakışma maliyetini hesaplayabilirsiniz

[Hemen Hesapla](/tr/calculator)`,
      en: `# What is the Social Housing Project?

The 500 Thousand Social Housing Project is a comprehensive initiative launched by the Turkish government to provide affordable housing opportunities for citizens who want to own a home.

## Who Can Apply?

### Basic Requirements

1. **Citizenship**: Must be a Turkish citizen for the last 10 consecutive years
2. **Age**: Must be 18 years or older
3. **Residence**: Must have resided in the application city for at least 1 year
4. **Property Ownership**: No registered independent property under applicant or spouse's name
5. **TOKİ Agreement**: No previous housing agreement with TOKİ

### Income Requirements

- **For Istanbul**: Total annual household income must not exceed 145,000 TRY
- **For other cities**: Total annual household income must not exceed 127,000 TRY

## Quota Distribution

The project has reserved quotas for different groups:

- **5%**: Families of martyrs and veterans
- **5%**: Citizens with at least 40% disability
- **10%**: Families with 3 or more children
- **20%**: Youth aged 18-30
- **20%**: Retirees
- **40%**: Other applicants

## Payment Plan

### Down Payment and Initial Costs

- **Application fee**: 5,000 TRY (Free for families of martyrs and veterans)
- **Down payment**: 10% of housing value (At contract signing)
- **Installment period**: 240 months (20 years)

### Installment Increases

Installments increase every 6 months. The increase rate can be based on:
- Civil servant salary increases
- PPI (Producer Price Index)
- Fixed predetermined rate

## Application Process

1. **Online Application**: Through evsahibiturkiye.gov.tr
2. **Application Period**: November 10 - December 19, 2025
3. **Lottery Draw**: December 29, 2025 - February 27, 2026
4. **Contract**: With eligible winners after lottery
5. **Delivery**: Starting March 2027

## Important Notes

⚠️ **Important**: This information is for general guidance. For current and official information, please visit [toki.gov.tr](https://www.toki.gov.tr) and [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr).

## Test Yourself with Our Calculator

With Social Housing App you can:
- Simulate installment increases
- View income-installment balance
- Calculate rent-installment overlap costs

[Calculate Now](/en/calculator)`,
    },
    author: 'Sosyal Konut App',
    publishedAt: '2025-12-04',
    category: 'Genel Bilgi',
    tags: ['sosyal konut', 'toki', 'başvuru', 'şartlar'],
    readingTime: 5,
    featured: true,
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}
