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
    slug: 'taksit-artislari-nasil-hesaplanir',
    title: {
      tr: 'Sosyal Konut Taksit Artışları Nasıl Hesaplanır? (2025 Rehberi)',
      en: 'How Are Social Housing Installment Increases Calculated? (2025 Guide)',
    },
    excerpt: {
      tr: 'Sosyal konut taksit artışları nasıl hesaplanır? İlk artış ne zaman yapılır? Memur maaş artış oranlarına göre taksit hesaplama rehberi.',
      en: 'How are social housing installment increases calculated? When is the first increase? A guide to installment calculations based on civil servant salary increases.',
    },
    content: {
      tr: `# Sosyal Konut Taksit Artışları Nasıl Hesaplanır? (2025 Rehberi)

500 Bin Sosyal Konut Projesi kapsamında konut sahibi olan vatandaşlar, %10 peşinat + 240 ay (20 yıl) vade ile sabit oranlı konut ödemesi yapar. Ancak taksit tutarları sabit kalmaz; her yıl iki kez Ocak ve Temmuz aylarında, son 6 aylık dönem için açıklanan Memur Maaş Artış Oranına göre artırılır.

Bu yazıda taksit artış sisteminin nasıl çalıştığını, ilk artışın ne zaman yapıldığını ve geri ödeme sürecinin nasıl planlanması gerektiğini detaylıca anlattım.

## 1️⃣ Taksitler Ne Zaman Başlıyor?

Hak sahibi kurada belirlendikten sonra sözleşme sürecine çağrılır.

**Taksit başlangıcı**: Sözleşme tarihini takip eden ay itibarıyla başlar.

**Örnek**: Sözleşme Mart 2026'da imzalandı → İlk taksit Nisan 2026'da ödenir.

## 2️⃣ Taksit Artış Formülü (Resmî Sistem)

Her taksit döneminde hesaplama şu şekilde yapılır:

**Yeni Taksit = Eski Taksit x (1 + Son 6 Aylık Memur Maaş Artış Oranı)**

**Artış dönemleri**:
- **1. dönem**: Ocak
- **2. dönem**: Temmuz

Bakanlık metninde bu açık şekilde ifade edilmiştir: "Aylık taksitler yılda iki kez memur maaş artış oranına göre artırılır."

## 3️⃣ İlk Artış Ne Zaman Yapılır?

Resmî belgeye göre ilk dönemsel artış, sözleşme imzalama tarihine göre İdarece belirlenir.

Yani: Sözleşme → Temmuz'a yakınsa → İlk artış Ocak'a değil, Temmuz'a denk gelebilir.

## 4️⃣ Örnek Taksit Artış Hesabı

📌 **Başlangıç taksiti**: 7.500 TL

Varsayalım ki Memur Maaş Artışları:
- **Ocak 2027**: %21
- **Temmuz 2027**: %9

**Hesaplama**:

**Ocak 2027**: 7.500 x 1.21 = 9.075 TL

**Temmuz 2027**: 9.075 x 1.09 = 9.895 TL

Yani bir yılda **7.500 TL → 9.895 TL** olur (toplamda %32 artış).

## 5️⃣ Bu Artışlar Neden Yapılıyor?

Taksit artışlarının amacı:
- İnşaat ve malzeme maliyetlerinden doğan fiyat farkını dengelemek
- Projenin sürdürülebilirliğini sağlamak
- Hak sahiplerinin kira yerine ev sahibi olmasını kolaylaştırmak

Bu nedenle memur zammı, bir nevi enflasyonla uyumlu güncelleme aracıdır.

## 6️⃣ Taksit Artışları Kira ile Karşılaştırıldığında

| Kira Artışı | Konut Taksiti Artışı |
|-------------|----------------------|
| Devlet tarafından sınırlanabilir | Resmî memur zammına bağlı |
| Her ev sahibine göre değişir | Tüm hak sahiplerine eşit uygulanır |
| Üst sınır bazen aşılıyor | Net ve takip edilebilir |

Kira artışlarının belirsiz olduğu bir ortamda; 20 yıllık sabit sistemli taksit modeli daha öngörülebilir bulunuyor.

## 7️⃣ Taksit Artışından Kaçınmak Mümkün mü?

Hayır, artış tüm hak sahipleri için zorunlu uygulanır.

Ancak:
- Fırsat oldukça erken ödeme
- Borç kapatma seçenekleri

ile toplam faiz ve artış etkisi düşürülebilir.

## 8️⃣ Sonuç: İyi Planlama Şart

Başvuru sürecine giren biri için:

✔️ Aylık taksitleri değil, gelecek yıllardaki taksit seviyelerini düşünmek
✔️ Hane gelirinin artış temposuyla karşılaştırmak
✔️ Kira ile tasarruf farkını hesaplamak

bütçe yönetimi için kritik öneme sahiptir.

## 9️⃣ Sık Sorulan 3 Kısa Cevap

| Soru | Cevap |
|------|-------|
| Taksitler sabit mi? | ❌ Hayır |
| Artış yılda kaç kez? | 2 kez (Ocak & Temmuz) |
| Artış neye göre? | Memur maaş artışı |

---

### 🧮 Kendi Durumunuzu Hesaplayın

[Taksit Hesaplama Aracımız](/tr/calculator) ile:
- Maaş artışına göre ödeme planını görebilir
- Taksit artışlarını simüle edebilir
- Gelir-taksit dengesini analiz edebilirsiniz

⚠️ **Bu içerik resmî kaynaklara dayanmaktadır**. Güncel bilgiler için [toki.gov.tr](https://www.toki.gov.tr) ve [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr) adreslerini ziyaret edin.`,
      en: `# How Are Social Housing Installment Increases Calculated? (2025 Guide)

Citizens who own homes under the 500 Thousand Social Housing Project make fixed-rate housing payments with 10% down payment + 240 months (20 years) term. However, installment amounts do not remain fixed; they are increased twice a year in January and July, according to the Civil Servant Salary Increase Rate announced for the last 6-month period.

In this article, I explained in detail how the installment increase system works, when the first increase is made, and how the repayment process should be planned.

## 1️⃣ When Do Installments Start?

After the beneficiary is determined in the lottery, they are invited to the contract process.

**Installment start**: Begins as of the month following the contract date.

**Example**: Contract signed in March 2026 → First installment paid in April 2026.

## 2️⃣ Installment Increase Formula (Official System)

The calculation is made for each installment period as follows:

**New Installment = Old Installment x (1 + Last 6 Months Civil Servant Salary Increase Rate)**

**Increase periods**:
- **1st period**: January
- **2nd period**: July

This is clearly stated in the Ministry text: "Monthly installments are increased twice a year according to the civil servant salary increase rate."

## 3️⃣ When Is the First Increase Made?

According to the official document, the first periodic increase is determined by the Administration according to the contract signing date.

So: Contract → if close to July → First increase may coincide with July, not January.

## 4️⃣ Sample Installment Increase Calculation

📌 **Starting installment**: 7,500 TRY

Assuming Civil Servant Salary Increases:
- **January 2027**: 21%
- **July 2027**: 9%

**Calculation**:

**January 2027**: 7,500 x 1.21 = 9,075 TRY

**July 2027**: 9,075 x 1.09 = 9,895 TRY

So in one year **7,500 TRY → 9,895 TRY** (32% increase in total).

## 5️⃣ Why Are These Increases Made?

The purpose of installment increases:
- To balance price differences arising from construction and material costs
- To ensure project sustainability
- To facilitate homeownership for beneficiaries instead of renting

Therefore, civil servant raises serve as an inflation-adjusted update mechanism.

## 6️⃣ Installment Increases Compared to Rent

| Rent Increase | Housing Installment Increase |
|---------------|------------------------------|
| Can be limited by the state | Tied to official civil servant raises |
| Varies by landlord | Applied equally to all beneficiaries |
| Upper limit sometimes exceeded | Clear and trackable |

In an environment where rent increases are uncertain; a 20-year fixed system installment model is found more predictable.

## 7️⃣ Is It Possible to Avoid Installment Increases?

No, the increase is mandatory for all beneficiaries.

However:
- Early payment when opportunity arises
- Debt closing options

can reduce the total interest and increase effect.

## 8️⃣ Conclusion: Good Planning Is Essential

For someone entering the application process:

✔️ Think about future installment levels, not monthly installments
✔️ Compare with household income growth rate
✔️ Calculate rent vs. installment savings

are critical for budget management.

## 9️⃣ 3 Frequently Asked Questions

| Question | Answer |
|----------|--------|
| Are installments fixed? | ❌ No |
| How many times a year do they increase? | 2 times (January & July) |
| Based on what? | Civil servant salary increase |

---

### 🧮 Calculate Your Own Situation

With our [Installment Calculator](/en/calculator):
- View payment plan according to salary increase
- Simulate installment increases
- Analyze income-installment balance

⚠️ **This content is based on official sources**. For current information, visit [toki.gov.tr](https://www.toki.gov.tr) and [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr).`,
    },
    author: 'Sosyal Konut App',
    publishedAt: '2025-12-04',
    category: 'Ödeme & Taksit',
    tags: ['taksit artışı', 'memur maaş artışı', 'ödeme planı', 'hesaplama'],
    readingTime: 7,
    featured: true,
  },
  {
    slug: 'kura-sistemi-nasil-isler',
    title: {
      tr: 'Sosyal Konut Kura Sistemi Nasıl İşler? (2025 Rehberi)',
      en: 'How Does the Social Housing Lottery System Work? (2025 Guide)',
    },
    excerpt: {
      tr: 'Kura ne zaman çekiliyor? Hak sahipliği nasıl belirleniyor? Kategori öncelikleri neler? Sosyal konut kura sisteminin detaylı rehberi.',
      en: 'When is the lottery drawn? How is eligibility determined? What are the category priorities? A detailed guide to the social housing lottery system.',
    },
    content: {
      tr: `# Sosyal Konut Kura Sistemi Nasıl İşler? (2025 Rehberi)

500 Bin Sosyal Konut Projesinde hak sahipliği kurayla belirleniyor. Başvuru yapan herkes başvuru bedelini yatırmış olsa da, kısıtlı kontenjan nedeniyle sadece kurada adı çıkanlar konut sahibi olabiliyor.

Bu yazıda kura sürecinin adım adım nasıl ilerlediğini, hangi kategorilerin öncelikli olduğunu ve konutun tipinin nasıl belirlendiğini sade bir dille anlattık.

## 1️⃣ Kura Ne Zaman?

Resmî tanıtım dokümanında kura tarihleri şöyle belirtilmiştir:

**Hak Sahibi Belirleme Kura Tarihleri**: 29.12.2025 – 27.02.2026

Bu kura, hak sahibi olup olmadığınızı belirler. Ancak konutunuzun tam olarak nerede ve hangi blokta olacağını belirleyen ikincil kura daha sonra yapılır.

## 2️⃣ Kura Kaç Aşamada Yapılır?

Kura süreci **2 aşamalıdır**:

| Aşama | Açıklama |
|-------|----------|
| 1️⃣ Hak Sahibi Belirleme Kurası | Projede kimin konut alma hakkı kazandığı belirlenir |
| 2️⃣ Konut Belirleme Kurası | Hangi konutu alacağınız belli olur |

Resmî dökümanda bu şöyle açıklanır: "İlk hak sahipliği kurası yapılır, ardından ihale sonrası konut tipleri netleşince konut belirleme kurası gerçekleştirilir."

Yani ikinci kura inşaat ihale süreçlerine bağlıdır.

## 3️⃣ Kura Kategorileri ve Öncelikler

Başvurular **7 kategori** üzerinden kabul edilir:

1. Şehit Aileleri, Terör / Harp / Vazife Malulleri
2. Gazi Vatandaşlar (Kore – Kıbrıs)
3. En az %40 Engelli Vatandaşlar
4. Emekliler
5. 3 ve Daha Fazla Çocuklu Aileler
6. 18–30 Yaş Arası Gençler
7. Diğer Alıcı Adayları

Bu kategoriler için kontenjanlar ve daire tipleri de ayrılmıştır:

| Kategori | Daire Tipi |
|----------|------------|
| Şehit Ailesi & Gazi | 2+1 (65 m²) |
| Engelli Vatandaşlar | 2+1 (65 m²) |
| Emekliler | 1+1 ve 2+1 |
| 3+ Çocuklu Aile | 2+1 ve 2+1 (80 m²) |
| Gençler | 1+1 |
| Diğer Alıcılar | 2+1 & 2+1 (80 m²) |

🔎 **Not**: Projede yeterli konut olmazsa, en yakın daire tipi verilir.

## 4️⃣ Kura Sırasında Eşitlik Durumunda Ne Olur?

Önce kategori önceliği geçerlidir. Kategori içi eşitlik varsa:

- İkamet şartını daha uzun süredir sağlayan
- Başvuru belgelerini eksiksiz teslim eden

avantajlı olabilir. (TOKİ, her projede ek kura kriterleri duyurabilir.)

## 5️⃣ Kura Sonuçları Nereden Öğrenilir?

Hak sahipliği sonuçları şu kanallardan açıklanır:

| Kanal | Açıklama |
|-------|----------|
| TOKİ web sitesi | Proje bazlı listeler yayınlanır |
| e-Devlet | Başvuru Listesi ekranından görüntülenir |
| Banka bilgilendirmesi | SMS bilgilendirmesi yapılabilir |

Kazanamayanlar için başvuru ücreti iadesi yapılır.

## 6️⃣ Kazanamayanlar Başvuru Ücretini Nasıl Geri Alıyor?

Başvuru ücretleri banka tarafından:

- Şube
- ATM
- Havale/EFT

yolu ile kısa süre içinde iade edilir.

📌 **Şehit Aileleri & Terör Malulleri başvuru bedeli ödemez**

## 7️⃣ Kura Kazananlar İçin Sonraki Aşama

Kura sonrasında:

1. Hak sahipleri TOKİ tarafından sözleşme imzalamaya çağrılır
2. %10 peşinat ödenir
3. Bir sonraki ay taksit ödemeleri başlar

Ardından:

- Konut belirleme kurası yapılır
- İnşaat teslim süreci başlar
- Tapu devri teslim aşamasında gerçekleştirilir

## 8️⃣ Kısa Kısa Bilgiler

| Soru | Cevap |
|------|-------|
| Kura zorunlu mu? | Evet, başvuru sayısı kontenjanı geçerse |
| Kura online yayınlanır mı? | Genellikle canlı yayın olur |
| Kura çekilişi noter huzurunda mı? | Evet, resmi prosedürdür |
| İnşaat iptal olursa? | Hak sahipleri bilgilendirilir |

## Sonuç: "Kura Çıkarsa Anahtar, Çıkmazsa Para Geri"

Bu proje özellikle:

✔️ Sabit ve düşük taksit isteyen
✔️ Kiradan kurtulmak isteyen
✔️ Dar ve orta gelir grubundaki haneler için

gerçekçi bir ev sahibi olma fırsatı sunuyor.

Kura, sadece şans değil: Doğru kategori → Doğru planlama → Doğru şehir seçimi başarı oranını artırır.

---

### 📊 Daha Fazla Bilgi

- [Başvuru Şartları Rehberi](/tr/blog/kimler-basvurabilir-sartlar-neler) - Detaylı başvuru şartları
- [Şehirlere Göre Kontenjan Dağılımı](/tr/blog/sehirlere-gore-kontenjan-dagilimi) - İllere göre konut sayıları
- [Taksit Hesaplama Aracı](/tr/calculator) - Ödeme planınızı hesaplayın

⚠️ **Güncel bilgiler için**: [toki.gov.tr](https://www.toki.gov.tr) ve [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr)`,
      en: `# How Does the Social Housing Lottery System Work? (2025 Guide)

In the 500 Thousand Social Housing Project, eligibility is determined by lottery. Even though everyone who applies pays the application fee, only those whose names are drawn in the lottery can own a home due to limited quotas.

In this article, we explained step by step how the lottery process works, which categories have priority, and how the type of housing is determined.

## 1️⃣ When Is the Lottery?

The lottery dates are specified in the official announcement document:

**Eligibility Determination Lottery Dates**: December 29, 2025 – February 27, 2026

This lottery determines whether you are eligible. However, a secondary lottery is held later to determine exactly where and in which block your home will be.

## 2️⃣ How Many Stages Is the Lottery?

The lottery process is **2-stage**:

| Stage | Description |
|-------|-------------|
| 1️⃣ Eligibility Determination Lottery | Determines who wins the right to purchase housing |
| 2️⃣ Housing Assignment Lottery | Determines which housing unit you will receive |

The official document explains: "First, the eligibility lottery is held, then after the tenders, when housing types are finalized, the housing assignment lottery is held."

So the second lottery depends on construction tender processes.

## 3️⃣ Lottery Categories and Priorities

Applications are accepted under **7 categories**:

1. Families of Martyrs, Terror / War / Duty Casualties
2. Veteran Citizens (Korea – Cyprus)
3. Citizens with at least 40% Disability
4. Retirees
5. Families with 3 or More Children
6. Youth Aged 18–30
7. Other Buyer Candidates

Quotas and apartment types are also allocated for these categories:

| Category | Apartment Type |
|----------|----------------|
| Martyr Family & Veteran | 2+1 (65 m²) |
| Disabled Citizens | 2+1 (65 m²) |
| Retirees | 1+1 and 2+1 |
| 3+ Children Family | 2+1 and 2+1 (80 m²) |
| Youth | 1+1 |
| Other Buyers | 2+1 & 2+1 (80 m²) |

🔎 **Note**: If there are not enough housing units in the project, the closest apartment type will be provided.

## 4️⃣ What Happens in Case of Tie in the Lottery?

First, category priority applies. If there is equality within a category:

- Those who have met the residence requirement for a longer period
- Those who submitted application documents completely

may have an advantage. (TOKİ may announce additional lottery criteria for each project.)

## 5️⃣ Where Are Lottery Results Announced?

Eligibility results are announced through these channels:

| Channel | Description |
|---------|-------------|
| TOKİ website | Project-based lists are published |
| e-Government | Viewable from Application List screen |
| Bank notification | SMS notification may be made |

Application fees are refunded for non-winners.

## 6️⃣ How Do Non-Winners Get Their Application Fee Back?

Application fees are refunded by the bank through:

- Branch
- ATM
- Wire transfer/EFT

within a short time.

📌 **Families of Martyrs & Terror Casualties do not pay application fee**

## 7️⃣ Next Stage for Lottery Winners

After the lottery:

1. Eligible winners are invited by TOKİ to sign a contract
2. 10% down payment is made
3. Installment payments start the next month

Then:

- Housing assignment lottery is held
- Construction delivery process begins
- Title deed transfer occurs at delivery stage

## 8️⃣ Quick Facts

| Question | Answer |
|----------|--------|
| Is the lottery mandatory? | Yes, if applications exceed quota |
| Is the lottery broadcast online? | Usually live broadcast |
| Is the lottery in the presence of a notary? | Yes, it's an official procedure |
| What if construction is cancelled? | Eligible winners are informed |

## Conclusion: "If You Win the Lottery, You Get Keys; If Not, Money Back"

This project offers a realistic homeownership opportunity especially for:

✔️ Those who want fixed and low installments
✔️ Those who want to get rid of rent
✔️ Low and middle-income households

The lottery is not just luck: Right category → Right planning → Right city selection increases success rate.

---

### 📊 More Information

- [Application Requirements Guide](/en/blog/kimler-basvurabilir-sartlar-neler) - Detailed application requirements
- [Quota Distribution by Cities](/en/blog/sehirlere-gore-kontenjan-dagilimi) - Housing numbers by province
- [Installment Calculator](/en/calculator) - Calculate your payment plan

⚠️ **For current information**: [toki.gov.tr](https://www.toki.gov.tr) and [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr)`,
    },
    author: 'Sosyal Konut App',
    publishedAt: '2025-12-04',
    category: 'Başvuru Rehberi',
    tags: ['kura', 'hak sahipliği', 'kategori', 'kontenjan'],
    readingTime: 6,
    featured: true,
  },
  {
    slug: 'sehirlere-gore-kontenjan-dagilimi',
    title: {
      tr: '500 Bin Sosyal Konut Projesi: Şehirlere Göre Kontenjan Dağılımı (2025)',
      en: '500 Thousand Social Housing Project: Quota Distribution by Cities (2025)',
    },
    excerpt: {
      tr: 'Hangi şehre kaç konut ayrıldı? Deprem bölgesi avantajları neler? İllere göre kontenjan dağılımı ve stratejik şehir seçimi rehberi.',
      en: 'How many housing units were allocated to which city? What are the earthquake zone advantages? A guide to quota distribution by provinces and strategic city selection.',
    },
    content: {
      tr: `# 500 Bin Sosyal Konut Projesi: Şehirlere Göre Kontenjan Dağılımı (2025)

500 Bin Sosyal Konut Projesi, 81 ilin tamamını kapsayan çok büyük bir konut hamlesi. Her il için ayrılan kontenjan nüfus, talep yoğunluğu ve deprem riski gibi faktörlere göre belirlenmiştir.

Tanıtım kitapçığında yayımlanan verilere göre; bazı illere 10 binden fazla, bazı küçük illere ise 600'den az konut ayrılmıştır.

Bu rehberde şehirler bazında kontenjan sayılarını ve bu sayıların ne anlama geldiğini anlattım.

## 1️⃣ Kontenjanlar Ne Zaman Kesinleşir?

Resmî metinde şu ifade geçer:

> "Konutların adet, brüt m², net m² ve fiyat bilgileri ihaleden sonra kesinlik kazanacaktır."

Yani kontenjan tabloları planlanan hedef olup, ihale sonrası güncellemeler yapılabilir.

## 2️⃣ En Yüksek Kontenjan Ayrılan İlk 10 Şehir

Tanıtım kitabındaki verilere göre:

| Sıra | Şehir | Kontenjan |
|------|-------|-----------|
| 1 | Ankara | 30.823 |
| 2 | İstanbul | 21.020 |
| 3 | Bursa | 17.225 |
| 4 | Konya | 15.000 |
| 5 | Antalya | 13.213 |
| 6 | Hatay | 12.639 |
| 7 | Gaziantep | 13.190 |
| 8 | Mersin | 12.165 |
| 9 | Adana | 12.292 |
| 10 | Şanlıurfa | 10.340 |

Bu illerin ortak özelliği: **yüksek nüfus + yüksek talep + deprem riski (bazıları için)**

## 3️⃣ Deprem Bölgesine Ayrılan Ek Kontenjanlar

Depremden etkilenen **11 il** için ikamet şartı daha esnek tanımlanmıştır.

Bu şehirler arasında: **Adana, Adıyaman, Diyarbakır, Elazığ, Gaziantep, Hatay, Kahramanmaraş, Kilis, Malatya, Osmaniye, Şanlıurfa** yer alır.

Burada amaç, evini kaybeden veya riskli evde yaşayan vatandaşlara öncelik verilmesidir.

## 4️⃣ Daha Küçük Şehirlerde Kontenjan Durumu

Ardahan gibi küçük şehirlerde tek haneli binlerin altında rakamlar vardır:

📌 **Örnek**: Ardahan — 619 konut

Bu gibi illerde:

- Talep düşük olabilir
- İnşaat alanı daha sınırlı olabilir
- **Kura rekabeti daha düşük olabilir → avantaj**

## 5️⃣ İller Bazında Konut Tipi Tercihleri

Kategori bazlı konut tipleri resmî tabloda şöyle verilmiştir:

| Kategori | Tip | Metrekare |
|----------|-----|-----------|
| Engelli / Şehit Ailesi / Gazi | 2+1 | 65 m² |
| Emekli | 1+1 & 2+1 | 55–65 m² |
| Gençler | 1+1 | 55 m² |
| 3+ Çocuklu Aile & Diğer | 2+1 | 65–80 m² |

İstanbul ve büyükşehirlerde **80 m²** seçeneği daha çok öne çıkıyor.

## 6️⃣ Hangi Şehri Seçmeliyim? (Stratejik Bakış)

Başvururken şu kriterlere bakmak çok önemli:

| Kriter | Açıklama |
|--------|----------|
| Kurada şans oranı | Talebin düşük olduğu şehir avantaj sağlar |
| Gelir & ikamet şartı | Yaşadığın şehirle uyumlu olmalı |
| Daire tipi | Ailenin kişi sayısına göre |
| Bölgesel risk | Deprem bölgesinde esneklik avantajıdır |

**💡 İpucu**:
- Büyükşehirlerde rekabet ↑ (Ankara/İstanbul)
- Küçük şehirlerde rekabet ↓ ama talep ve yatırım geri dönüşü değişebilir

## 7️⃣ Şehrine Göre Ne Kadar Kira Tasarrufu Sağlarsın?

Bu bilgi için [hesaplama aracımızı](/tr/calculator) kullanarak, kira–taksit farkını görebilirsin.

## 8️⃣ Kontenjanlar Değişir mi?

**Evet** — Resmî açıklama:

> "Projede yeterli talep olmazsa konut üretimi azaltılabilir veya başka bölgelere yönlendirilebilir."

Yani başvuru oranları kritik!

## Sonuç: Şehir Seçimi Şansını Belirler

Eğer:

✅ Başvurduğun şehir yüksek nüfuslu ise → rekabet yüksek

✅ Başvurduğun şehir küçük ve talep düşük ise → şans yüksek

Bu nedenle başvuru öncesi **şehir seçimini hem gelir hem de yaşam planlarına göre yapmak** mantıklı olacaktır.

---

### 📊 İlgili Rehberler

- [Başvuru Şartları](/tr/blog/kimler-basvurabilir-sartlar-neler) - Kimler başvurabilir?
- [Kura Sistemi](/tr/blog/kura-sistemi-nasil-isler) - Kura nasıl işler?
- [Taksit Hesaplama](/tr/calculator) - Ödeme planını hesapla

⚠️ **Güncel bilgiler**: [toki.gov.tr](https://www.toki.gov.tr) ve [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr)`,
      en: `# 500 Thousand Social Housing Project: Quota Distribution by Cities (2025)

The 500 Thousand Social Housing Project is a massive housing initiative covering all 81 provinces. The quota allocated for each province has been determined based on factors such as population, demand intensity, and earthquake risk.

According to data published in the promotional booklet; some provinces have been allocated more than 10,000 units, while some smaller provinces have been allocated less than 600 units.

In this guide, I explained the quota numbers by city and what these numbers mean.

## 1️⃣ When Are Quotas Finalized?

The official text states:

> "Information on the number, gross m², net m², and price of housing will be finalized after the tender."

So quota tables are planned targets and may be updated after tenders.

## 2️⃣ Top 10 Cities with Highest Quotas

According to data in the promotional booklet:

| Rank | City | Quota |
|------|------|-------|
| 1 | Ankara | 30,823 |
| 2 | Istanbul | 21,020 |
| 3 | Bursa | 17,225 |
| 4 | Konya | 15,000 |
| 5 | Antalya | 13,213 |
| 6 | Hatay | 12,639 |
| 7 | Gaziantep | 13,190 |
| 8 | Mersin | 12,165 |
| 9 | Adana | 12,292 |
| 10 | Şanlıurfa | 10,340 |

Common feature of these provinces: **high population + high demand + earthquake risk (for some)**

## 3️⃣ Additional Quotas for Earthquake Zones

The residence requirement has been defined more flexibly for **11 provinces** affected by earthquakes.

These cities include: **Adana, Adıyaman, Diyarbakır, Elazığ, Gaziantep, Hatay, Kahramanmaraş, Kilis, Malatya, Osmaniye, Şanlıurfa**.

The aim here is to give priority to citizens who lost their homes or live in risky houses.

## 4️⃣ Quota Situation in Smaller Cities

In small cities like Ardahan, numbers are below single-digit thousands:

📌 **Example**: Ardahan — 619 housing units

In such provinces:

- Demand may be low
- Construction area may be more limited
- **Lottery competition may be lower → advantage**

## 5️⃣ Housing Type Preferences by Province

Category-based housing types are given in the official table as follows:

| Category | Type | Square Meters |
|----------|------|---------------|
| Disabled / Martyr Family / Veteran | 2+1 | 65 m² |
| Retiree | 1+1 & 2+1 | 55–65 m² |
| Youth | 1+1 | 55 m² |
| 3+ Children Family & Others | 2+1 | 65–80 m² |

In Istanbul and major cities, the **80 m²** option is more prominent.

## 6️⃣ Which City Should I Choose? (Strategic View)

It is very important to consider these criteria when applying:

| Criterion | Description |
|-----------|-------------|
| Lottery success rate | Cities with low demand provide advantage |
| Income & residence requirement | Must be compatible with the city you live in |
| Apartment type | According to family size |
| Regional risk | Flexibility in earthquake zones is an advantage |

**💡 Tip**:
- In big cities competition ↑ (Ankara/Istanbul)
- In small cities competition ↓ but demand and investment return may vary

## 7️⃣ How Much Rent Savings by City?

For this information, you can see the rent-installment difference using our [calculator tool](/en/calculator).

## 8️⃣ Do Quotas Change?

**Yes** — Official statement:

> "If there is insufficient demand in the project, housing production may be reduced or redirected to other regions."

So application rates are critical!

## Conclusion: City Selection Determines Your Chance

If:

✅ The city you apply to has a high population → high competition

✅ The city you apply to is small and demand is low → high chance

Therefore, it would be logical to **make city selection based on both income and life plans** before application.

---

### 📊 Related Guides

- [Application Requirements](/en/blog/kimler-basvurabilir-sartlar-neler) - Who can apply?
- [Lottery System](/en/blog/kura-sistemi-nasil-isler) - How does the lottery work?
- [Installment Calculator](/en/calculator) - Calculate payment plan

⚠️ **Current information**: [toki.gov.tr](https://www.toki.gov.tr) and [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr)`,
    },
    author: 'Sosyal Konut App',
    publishedAt: '2025-12-04',
    category: 'Başvuru Rehberi',
    tags: ['kontenjan', 'şehirler', 'il bazında', 'deprem bölgesi'],
    readingTime: 9,
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
  {
    slug: 'basvuru-nasil-yapilir',
    title: {
      tr: '500 Bin Sosyal Konut Başvurusu Nasıl Yapılır? e-Devlet ve Banka Rehberi (2025)',
      en: 'How to Apply for 500 Thousand Social Housing? e-Government and Bank Guide (2025)',
    },
    excerpt: {
      tr: 'e-Devlet ve banka şubelerinden adım adım başvuru rehberi. Gerekli belgeler, tarihler ve başvuru süreci detayları.',
      en: 'Step-by-step application guide from e-Government and bank branches. Required documents, dates, and application process details.',
    },
    content: {
      tr: `# 500 Bin Sosyal Konut Başvurusu Nasıl Yapılır?

📍 **e-Devlet ve Banka Şube Rehberi (2025)**

500 Bin Sosyal Konut Projesine başvurular iki farklı kanaldan yapılıyor:
- ✔️ e-Devlet üzerinden online işlem
- ✔️ Yetkili banka şubelerinden yüz yüze işlem

Her iki yöntemde de başvuru bedeli yatırılması zorunludur ve başvurunun geçerli olması için başvuru şartlarının sağlanması gerekir.

Bu rehberde adım adım, başvuruyu eksiksiz yapman için gereken tüm bilgileri resmi kaynaklarla açıkladım.

## 1️⃣ Başvuruda En Önemli Tarihler

Resmî kitapçığa göre:

- **Başvuru Tarihleri**: 10.11.2025 – 19.12.2025
- **Kura Tarihleri**: 29.12.2025 – 27.02.2026
- **Başvuru Bedeli**: 5.000 TL

📌 **e-Devlet başvuruları 18.12.2025 tarihinde sona eriyor.**

## 2️⃣ Başvuru Yapmadan Önce Hazırlık Listesi

Başvuru sahibinin:

- ✔️ En az 10 yıldır T.C. vatandaşı olması
- ✔️ 18 yaşını doldurmuş olması
- ✔️ Aynı hane halkından yalnızca 1 başvuru olması
- ✔️ Türkiye sınırlarında tapuya kayıtlı bağımsız konutu bulunmaması
- ✔️ Hane halkı gelirinin sınırlar içinde olması

## 3️⃣ e-Devlet Üzerinden Başvuru (Adım Adım)

⏱ **Ortalama süre**: 3–5 dakika

### 🧩 Adımlar:

**1️⃣ e-Devlet'e giriş**
→ [e-devlet.gov.tr](https://www.turkiye.gov.tr)

**2️⃣ "TOKİ – Konut / İşyeri Başvuru" hizmetini seç**

**3️⃣ Başvurulacak il ve proje seçilir**

**4️⃣ Başvuru şartlarının yer aldığı taahhütname onaylanır**

**5️⃣ Sistem bankada adınıza bir hesap otomatik açar**
→ SMS ile IBAN gönderilir

**6️⃣ Başvuru bedeli ATM/EFT/Havale ile yatırılır**
→ Yatırılmazsa başvuru otomatik iptal edilir

📌 **Her şey bittiğinde**: Başvuru durumu "Başvuru Listesi" ekranından takip edilir

**💡 Tavsiye**: Başvuru sonrası ekran görüntüsü + dekont mutlaka saklanmalı.

## 4️⃣ Banka Şubelerinden Başvuru (Adım Adım)

**Yetkili bankalar**:
- Ziraat Bankası
- Halkbank
- Emlak Katılım Bankası

### Gerekli Belgeler

| Durum | İstenen Belge |
|-------|---------------|
| Genel Başvuru | T.C. Kimlik Kartı |
| Engelli Vatandaşlar | Engelli raporu (sözleşme aşamasında da kabul) |
| Emekliler | SGK'dan emeklilik belgesi |
| 3 ve Daha Fazla Çocuklu | Vukuatlı nüfus kayıt örneği |

### İşlem adımları:

1. Kimlik ile yetkili şubeye git
2. Başvuru taahhütnamesi imzala
3. 5.000 TL başvuru bedeli banka personeline öde
4. Başvurunun sisteme işlendiğini teyit et

**⛑ Avantaj**: Banka personeli şartları seninle birlikte kontrol eder
**⚠️ Dezavantaj**: Şubeler başvuru yoğunluğunda kalabalık olabilir

## 5️⃣ Başvuruda Sık Yapılan Hatalar (Ve Çözümleri)

| Hata | Sonuç | Çözüm |
|------|-------|-------|
| Başvuru yapıldı ama bedel yatırılmadı | Başvuru iptal | IBAN'a hemen EFT/ATM |
| Aynı haneden iki başvuru | İkinci eşin başvurusu iptal | Sadece 1 kişi başvuru yapsın |
| Yanlış kategori seçimi | Kurada dezavantaj | Kategori şartlarını iyi incele |
| İkamet şartı sağlanmıyor | Başvuru geçersiz | Adres kaydı güncellenmeli |

## 6️⃣ Başvuru Bedeli İadesi Nasıl Alınır?

Kura sonucuna göre hak sahibi olamayanlara bedel iade edilir:

- Banka şubeleri
- ATM
- EFT/Havale

ile kısa sürede geri ödenir.

🎯 **Önemli**: Şehit Aileleri – Terör Malulleri başvuru bedeli ödemez.

## 7️⃣ Başvurudan Sonra Ne Olur?

**1️⃣ Hak Sahibi Belirleme Kurası**
➡️ 29.12.2025 – 27.02.2026

**2️⃣ Hak sahipleri sözleşmeye çağrılır**
- ➡️ %10 peşinat ödenir
- ➡️ Taksitler bir sonraki ay başlar

**3️⃣ İkinci kura ile konutun blok/kat/dairenin net yeri belirlenir**

**4️⃣ İnşaat + teslim + tapu devri süreci başlar**

## 8️⃣ Kimler Hızlı Başvuru Yapmalı?

Bu proje özellikle şu vatandaşlar için kaçırılmayacak fırsat:

- Kirada oturup konut sahibi olmak isteyenler
- Hane gelir şartlarını sağlayan aileler
- 18–30 yaş gençler (ayrı kota)
- Emekliler (ayrı kota)
- Deprem bölgelerinde yaşayan aileler

## 9️⃣ Hemen Başvuru İçin Hazır Mısın? ✔️ Kontrol Listesi

- ☑️ 10 yıl vatandaşlık
- ☑️ Kira/konut sahibi değilim
- ☑️ Hane gelirim sınırlar içinde
- ☑️ İkamet şartını sağlıyorum
- ☑️ 5.000 TL başvuru bedeli hazır
- ☑️ Sadece ben/eşim başvuruyor

**Hepsine ✔️ ise** → başvurabilirsin 🎯

---

### 🧮 Başvuru Öncesi Hesaplama Yap

[Taksit Hesaplama Aracı](/tr/calculator) ile başvuru yapmadan önce taksit planını görüntüle.

### 📌 Şartları Tekrar Kontrol Et

[Başvuru Şartları Rehberi](/tr/blog/kimler-basvurabilir-sartlar-neler) - Detaylı başvuru şartları

## Sonuç

500 Bin Sosyal Konut Projesine başvuru süreci:
→ Doğru şartları sağla
→ Bir kanal seç (e-Devlet / banka)
→ Başvuru bedelini yatır
→ Kurayı bekle
→ Hak kazanırsan ev sahibi ol 🏡

⚠️ **Güncel bilgiler için**: [toki.gov.tr](https://www.toki.gov.tr) ve [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr)`,
      en: `# How to Apply for 500 Thousand Social Housing?

📍 **e-Government and Bank Branch Guide (2025)**

Applications for the 500 Thousand Social Housing Project are made through two different channels:
- ✔️ Online application via e-Government
- ✔️ Face-to-face application at authorized bank branches

In both methods, payment of the application fee is mandatory, and application requirements must be met for the application to be valid.

In this guide, I explained step by step all the information you need to complete your application with official sources.

## 1️⃣ Most Important Dates for Application

According to the official booklet:

- **Application Dates**: November 10, 2025 – December 19, 2025
- **Lottery Dates**: December 29, 2025 – February 27, 2026
- **Application Fee**: 5,000 TRY

📌 **e-Government applications end on December 18, 2025.**

## 2️⃣ Pre-Application Checklist

The applicant must:

- ✔️ Be a Turkish citizen for at least 10 years
- ✔️ Have reached 18 years of age
- ✔️ Only 1 application per household
- ✔️ Have no registered independent housing within Turkey
- ✔️ Household income within limits

## 3️⃣ Application via e-Government (Step by Step)

⏱ **Average time**: 3–5 minutes

### 🧩 Steps:

**1️⃣ Login to e-Government**
→ [e-devlet.gov.tr](https://www.turkiye.gov.tr)

**2️⃣ Select "TOKİ – Housing / Workplace Application" service**

**3️⃣ Select province and project to apply**

**4️⃣ Approve the commitment form with application requirements**

**5️⃣ System automatically opens an account in your name at the bank**
→ IBAN sent via SMS

**6️⃣ Application fee deposited via ATM/EFT/Wire transfer**
→ If not deposited, application is automatically cancelled

📌 **When everything is done**: Application status is tracked from "Application List" screen

**💡 Advice**: Application screenshot + receipt must be saved.

## 4️⃣ Application from Bank Branches (Step by Step)

**Authorized banks**:
- Ziraat Bank
- Halkbank
- Emlak Participation Bank

### Required Documents

| Status | Required Document |
|--------|-------------------|
| General Application | Turkish ID Card |
| Disabled Citizens | Disability report (also accepted at contract stage) |
| Retirees | Retirement certificate from SGK |
| 3 or More Children | Population registry with events |

### Transaction steps:

1. Go to authorized branch with ID
2. Sign application commitment form
3. Pay 5,000 TRY application fee to bank staff
4. Confirm application is entered into system

**⛑ Advantage**: Bank staff checks requirements with you
**⚠️ Disadvantage**: Branches can be crowded during application rush

## 5️⃣ Common Application Mistakes (And Solutions)

| Mistake | Result | Solution |
|---------|--------|----------|
| Application made but fee not deposited | Application cancelled | Immediately EFT/ATM to IBAN |
| Two applications from same household | Second spouse's application cancelled | Only 1 person should apply |
| Wrong category selection | Disadvantage in lottery | Review category requirements carefully |
| Residence requirement not met | Application invalid | Address record must be updated |

## 6️⃣ How to Get Application Fee Refund?

Fee is refunded to those who do not win eligibility according to lottery result:

- Bank branches
- ATM
- EFT/Wire transfer

Refunded in a short time.

🎯 **Important**: Families of Martyrs – Terror Casualties do not pay application fee.

## 7️⃣ What Happens After Application?

**1️⃣ Eligibility Determination Lottery**
➡️ December 29, 2025 – February 27, 2026

**2️⃣ Eligible winners are invited to contract**
- ➡️ 10% down payment is made
- ➡️ Installments start next month

**3️⃣ Second lottery determines exact block/floor/apartment location**

**4️⃣ Construction + delivery + title deed transfer process begins**

## 8️⃣ Who Should Apply Quickly?

This project is an unmissable opportunity especially for:

- Those renting who want to own a home
- Families meeting household income requirements
- Youth aged 18–30 (separate quota)
- Retirees (separate quota)
- Families living in earthquake zones

## 9️⃣ Ready to Apply Right Now? ✔️ Checklist

- ☑️ 10 years citizenship
- ☑️ Not renting/homeowner
- ☑️ Household income within limits
- ☑️ Meet residence requirement
- ☑️ 5,000 TRY application fee ready
- ☑️ Only me/my spouse applying

**If all ✔️** → you can apply 🎯

---

### 🧮 Calculate Before Application

[Installment Calculator](/en/calculator) - View installment plan before applying.

### 📌 Check Requirements Again

[Application Requirements Guide](/en/blog/kimler-basvurabilir-sartlar-neler) - Detailed application requirements

## Conclusion

Application process for 500 Thousand Social Housing Project:
→ Meet requirements
→ Choose a channel (e-Government / bank)
→ Deposit application fee
→ Wait for lottery
→ If you win, become a homeowner 🏡

⚠️ **For current information**: [toki.gov.tr](https://www.toki.gov.tr) and [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr)`,
    },
    author: 'Sosyal Konut App',
    publishedAt: '2025-12-04',
    category: 'Başvuru Rehberi',
    tags: ['başvuru', 'e-devlet', 'banka', 'başvuru süreci', 'belgeler'],
    readingTime: 10,
    featured: true,
  },
  {
    slug: 'ilcelere-gore-fiyatlar',
    title: {
      tr: 'İlçelere Göre Sosyal Konut Fiyatları ve Taksit Örnekleri (2025 Rehberi)',
      en: 'Social Housing Prices and Installment Examples by Districts (2025 Guide)',
    },
    excerpt: {
      tr: 'İlçe bazında konut fiyatları, başlangıç taksitleri ve kira-taksit karşılaştırması. İlçe seçimi nasıl yapılır?',
      en: 'Housing prices by district, initial installments, and rent-installment comparison. How to choose a district?',
    },
    content: {
      tr: `# İlçelere Göre Sosyal Konut Fiyatları ve Taksit Örnekleri (2025 Rehberi)

500 Bin Sosyal Konut Projesi, tüm Türkiye'de dar ve orta gelirli vatandaşlara 20 yıl vade ile ev sahibi olma imkânı sunuyor. Ancak fiyatlar ve başlangıç taksit miktarları, şehirlere ve hatta ilçe bazında bile değişiklik gösteriyor.

Bu rehberde, proje kapsamındaki konutların fiyatlandırma mantığını, ilçe bazlı örnek ödeme planlarını ve gelecekteki taksit artışlarını nasıl hesaplayabileceğini anlattım.

## 1️⃣ İlçelere Göre Fiyat Neden Değişiyor?

Fiyatlar belirlenirken üç ana parametre kullanılıyor:

| Kriter | Etkisi |
|--------|--------|
| İnşaat maliyeti | Büyükşehirlerde daha yüksek |
| Arsa maliyeti | İlçe merkezine yaklaştıkça artar |
| Konut tipi | 1+1, 2+1 (65 m²), 2+1 (80 m²) |

Bakanlık dokümanlarında şu ifade yer alıyor:

> "Konutların adet, brüt-net m² ve fiyat bilgileri ihaleden sonra kesinleşir."

📌 Yani fiyatlar proje başlarken kesin olmuyor, ihale sonrası duyuruluyor.

## 2️⃣ İlçe Bazlı Örnek Başlangıç Taksitleri

**Aşağıdaki tablo ortalama örneklerdir** (2025 için güncel veri → Finans otoritelerinin memur zam projeksiyonlarına göre oluşturulmuş örnek)

| İlçe | Daire Tipi | Peşinat | İlk Taksit | Vade |
|------|------------|---------|------------|------|
| Ankara – Sincan | 2+1 (65 m²) | 250.000 TL | 6.200 TL | 240 ay |
| İstanbul – Tuzla | 2+1 (80 m²) | 300.000 TL | 8.900 TL | 240 ay |
| İzmir – Menemen | 2+1 (65 m²) | 260.000 TL | 7.100 TL | 240 ay |
| Bursa – Nilüfer | 2+1 (80 m²) | 280.000 TL | 7.850 TL | 240 ay |
| Gaziantep – Şahinbey | 2+1 (65 m²) | 210.000 TL | 5.900 TL | 240 ay |

⚠️ **Not**: Bu rakamlar örnek hesaplamadır. Nihai rakamlar ihale sonrası ilan edilir.

## 3️⃣ Taksitler Nasıl Artar?

Her iki yılda bir **Memur Maaş Artış** oranına göre güncellenir.

📌 **Örnek artış senaryosu**:

**İlk taksit**: 6.200 TL (Ankara – Sincan)

**Ocak zammı**: %21

**Temmuz zammı**: %9

**Hesap**:
- Ocak 2027 → 6.200 x 1.21 = 7.502 TL
- Temmuz 2027 → 7.502 x 1.09 = 8.177 TL

**1 yılda +1.977 TL artış** (= %31'den fazla)

## 4️⃣ "Kira mı? Taksit mi?" İlçe Bazlı Karşılaştırma

| İlçe | Ortalama Kira | Başlangıç Taksiti | Kira – Taksit Farkı |
|------|---------------|-------------------|---------------------|
| Sincan | 10.000 TL | 6.200 TL | Taksit avantajlı |
| Tuzla | 17.000 TL | 8.900 TL | Taksit büyük avantajlı |
| Nilüfer | 14.500 TL | 7.850 TL | Taksit avantajlı |

→ Büyükşehirlerde kiraya verdiğin paradan daha düşük taksitle ev sahibi olma ihtimali doğuyor.

## 5️⃣ İlçeye Göre Konut Seçerken Dikkat Edilecekler

| Dikkat Edilmesi Gereken | Neden |
|-------------------------|-------|
| İş–ev ulaşımı | Ulaşım maliyeti tasarrufu etkiler |
| Daire tipi | Aile sayısına göre doğru seçim |
| Bölgesel gelişim | Değer artışı avantaj sağlar |
| İkamet şartı | Başvuru geçerliliği için zorunlu |

## 6️⃣ Taksit Hesaplamanı Kişisel Gelirine Göre Yap

→ Kendi maaşına göre taksit artış etkisini mutlaka test et:

### 🧮 [Taksit Artış Hesaplayıcı](/tr/calculator)

Bu araç ile:

- ✔️ İlk yıl kaç TL ödersin
- ✔️ 5 yıl sonra ne kadar olur
- ✔️ 10–20 yıl toplam ödeme analizi

…hepsini görebilirsin.

## 7️⃣ "Başvuru Yaptım, Şehri Değiştirmek İstiyorum"

**Olur mu?**

**Hayır.** Başvurulan proje, başvurudan sonra değiştirilemez.

📌 Bu yüzden başvurmadan önce mutlaka şu soruyu cevapla:

> 5–20 yıl boyunca bu ilçede yaşayabilir miyim?

## 8️⃣ Sık Sorulan 3 Kısa Soru

| Soru | Cevap |
|------|-------|
| İlçeler arasında fiyat farkı olabilir mi? | Evet, ciddi farklar olur |
| Hangi ilçe daha avantajlı? | Kira yüksekse → Taksit daha avantajlı |
| Peşinat artarsa taksit düşer mi? | Evet |

## Sonuç: İlçe Seçimi = Finansal Gelecek

Konuta başvurmadan önce:

- ✔️ Yaşayacağın bölge
- ✔️ Taksit artış senaryosu
- ✔️ Kira karşılaştırması

hepsi birlikte değerlendirilmeli.

---

### 📊 İlgili Rehberler

- [Başvuru Şartları](/tr/blog/kimler-basvurabilir-sartlar-neler) - Kimler başvurabilir?
- [Şehirlere Göre Kontenjan](/tr/blog/sehirlere-gore-kontenjan-dagilimi) - İllere göre konut sayıları
- [Taksit Hesaplama](/tr/calculator) - Ödeme planını hesapla

⚠️ **Güncel bilgiler**: [toki.gov.tr](https://www.toki.gov.tr) ve [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr)`,
      en: `# Social Housing Prices and Installment Examples by Districts (2025 Guide)

The 500 Thousand Social Housing Project offers homeownership opportunities with a 20-year term to low and middle-income citizens across Turkey. However, prices and initial installment amounts vary by cities and even by districts.

In this guide, I explained the pricing logic of housing units within the project, district-based sample payment plans, and how to calculate future installment increases.

## 1️⃣ Why Do Prices Vary by District?

Three main parameters are used when determining prices:

| Criterion | Impact |
|-----------|--------|
| Construction cost | Higher in major cities |
| Land cost | Increases closer to district center |
| Housing type | 1+1, 2+1 (65 m²), 2+1 (80 m²) |

The Ministry documents state:

> "Information on the number, gross-net m², and price of housing will be finalized after the tender."

📌 So prices are not certain at the start of the project, they are announced after tenders.

## 2️⃣ Sample Initial Installments by District

**The table below shows average examples** (current data for 2025 → example created based on financial authorities' civil servant raise projections)

| District | Apartment Type | Down Payment | Initial Installment | Term |
|----------|----------------|--------------|---------------------|------|
| Ankara – Sincan | 2+1 (65 m²) | 250,000 TRY | 6,200 TRY | 240 months |
| Istanbul – Tuzla | 2+1 (80 m²) | 300,000 TRY | 8,900 TRY | 240 months |
| Izmir – Menemen | 2+1 (65 m²) | 260,000 TRY | 7,100 TRY | 240 months |
| Bursa – Nilüfer | 2+1 (80 m²) | 280,000 TRY | 7,850 TRY | 240 months |
| Gaziantep – Şahinbey | 2+1 (65 m²) | 210,000 TRY | 5,900 TRY | 240 months |

⚠️ **Note**: These figures are sample calculations. Final figures will be announced after tenders.

## 3️⃣ How Do Installments Increase?

Updated every two years according to **Civil Servant Salary Increase** rate.

📌 **Sample increase scenario**:

**Initial installment**: 6,200 TRY (Ankara – Sincan)

**January raise**: 21%

**July raise**: 9%

**Calculation**:
- January 2027 → 6,200 x 1.21 = 7,502 TRY
- July 2027 → 7,502 x 1.09 = 8,177 TRY

**+1,977 TRY increase in 1 year** (= over 31%)

## 4️⃣ "Rent or Installment?" District-Based Comparison

| District | Average Rent | Initial Installment | Rent – Installment Difference |
|----------|--------------|---------------------|-------------------------------|
| Sincan | 10,000 TRY | 6,200 TRY | Installment advantageous |
| Tuzla | 17,000 TRY | 8,900 TRY | Installment highly advantageous |
| Nilüfer | 14,500 TRY | 7,850 TRY | Installment advantageous |

→ In major cities, there's a possibility of homeownership with lower installments than what you pay for rent.

## 5️⃣ What to Consider When Choosing Housing by District

| What to Consider | Why |
|------------------|-----|
| Work-home commute | Transportation cost affects savings |
| Apartment type | Right choice based on family size |
| Regional development | Value increase provides advantage |
| Residence requirement | Mandatory for application validity |

## 6️⃣ Calculate Your Installment Based on Personal Income

→ Definitely test the installment increase effect based on your salary:

### 🧮 [Installment Increase Calculator](/en/calculator)

With this tool:

- ✔️ How much will you pay in the first year
- ✔️ How much after 5 years
- ✔️ 10–20 year total payment analysis

…you can see everything.

## 7️⃣ "I Applied, Want to Change City"

**Is it possible?**

**No.** The applied project cannot be changed after application.

📌 Therefore, before applying, definitely answer this question:

> Can I live in this district for 5–20 years?

## 8️⃣ 3 Frequently Asked Questions

| Question | Answer |
|----------|--------|
| Can there be price differences between districts? | Yes, significant differences |
| Which district is more advantageous? | If rent is high → Installment more advantageous |
| If down payment increases, does installment decrease? | Yes |

## Conclusion: District Choice = Financial Future

Before applying for housing:

- ✔️ The area where you will live
- ✔️ Installment increase scenario
- ✔️ Rent comparison

should all be evaluated together.

---

### 📊 Related Guides

- [Application Requirements](/en/blog/kimler-basvurabilir-sartlar-neler) - Who can apply?
- [Quota by Cities](/en/blog/sehirlere-gore-kontenjan-dagilimi) - Housing numbers by province
- [Installment Calculator](/en/calculator) - Calculate payment plan

⚠️ **Current information**: [toki.gov.tr](https://www.toki.gov.tr) and [evsahibiturkiye.gov.tr](https://evsahibiturkiye.gov.tr)`,
    },
    author: 'Sosyal Konut App',
    publishedAt: '2025-12-04',
    category: 'Ödeme & Taksit',
    tags: ['fiyatlar', 'ilçeler', 'taksit örnekleri', 'kira karşılaştırma'],
    readingTime: 8,
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
