// Events data with tags (max 3 per event)
const events = [
    {
        id: 1,
        title: "Farkında Ol; Güvende Kal",
        tags: ["Siber Güvenlik", "Kriptoloji", "Okul Öncesi"],
        age: "11-15 yaş (Ortaokul)",
        leader: "Sümeyye İrem YETER",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Etkinlik, öğrencilerin dijital ortamlarda karşılaşabilecekleri risklere dikkat çekmek amacıyla düzenlenmektedir.</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Dijital ortamlarda güvenlik farkındalığı</li>
            <li>Şifreleme ve dijital güvenlik</li>
            <li>Güvenilir kişi - güvensiz ortam farkındalığı</li>
            <li>Kriptoloji temelli şifre çözme oyunu</li>
        </ul>
        <p>Kriptoloji ve psikolojik güvenlik konularını harmanlayan bu atölye, öğrencilere dijital dünyada güvende kalma yollarını öğretir.</p>`
    },
    {
        id: 2,
        title: "Siber Kahraman Kalkanım",
        tags: ["Siber Güvenlik", "Sanat", "Kriptoloji"],
        age: "5-8. sınıf",
        leader: "Didem KESKİN ÇAYIR",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Dijital güvenliğin bir değerler bütünü olduğunu vurgulayan yaratıcı bir atölye.</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Renklerin dili ve siber değerler</li>
            <li>Kalkan metaforu ile dijital güvenlik</li>
            <li>Kriptolojik kalkan tasarımı</li>
            <li>Kavram kartları ve anlamlandırma</li>
        </ul>
        <p>Öğrenciler kendi siber güvenlik kalkanlarını tasarlayarak, dijital değerleri görselleştirecekler.</p>`
    },
    {
        id: 3,
        title: "Jeolojinin Alfabesi: Kayaçlar",
        tags: ["Bilim", "Kriptoloji", "Oyun"],
        age: "İlkokul ve üzeri",
        leader: "HAYRİYE KORKMAZ",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Kayaçların doğanın yazdığı şifreli bir günlük olduğunu keşfedin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Jeolojik şifreleme: Magmatik, tortul ve metamorfik kayaçlar</li>
            <li>Kayaç analizi ve sınıflandırma</li>
            <li>Algoritma oyunu ile öğrenme</li>
            <li>Uygulamalı laboratuvar çalışması</li>
        </ul>
        <p>Kriptoloji ve jeoloji bilimini birleştiren benzersiz bir deneyim.</p>`
    },
    {
        id: 4,
        title: "Boncuk Boncuk Güvenlik",
        tags: ["Sanat", "Siber Güvenlik", "Kriptoloji"],
        age: "10-14 yaş",
        leader: "Derya Altıntaş",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Hama boncuklarıyla siber güvenlik figürleri tasarlayın!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Siber kahraman ve güçlü parola anlatımı</li>
            <li>Renk farkındalığı ve güvenlik kodları</li>
            <li>Hama boncuklarıyla tasarım</li>
            <li>Kişiselleştirilmiş güvenlik tılsımı</li>
        </ul>
        <p>Sanat ve teknoloji bir arada! Kendi siber güvenlik figürünüzü yaratın.</p>`
    },
    {
        id: 5,
        title: "Medya Okuryazarlığı Dijital Oyun Atölyesi",
        tags: ["Yapay Zeka", "Siber Güvenlik", "Oyun"],
        age: "9 yaş ve üzeri",
        leader: "Suzan ATMACA",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>3D robot Zihni ile dijital güvenlik öğrenin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Dijital muhafız Zihni ile tanışma</li>
            <li>Medya okuryazarlığı ve güvenli alan farkındalığı</li>
            <li>Kripto-labirent oyunu</li>
            <li>İnteraktif şifre çözme</li>
        </ul>
        <p>Yapay zeka destekli eğitimle siber güvenlik dünyasına adım atın!</p>`
    },
    {
        id: 6,
        title: "Dijital Denge Yolculuğu",
        tags: ["Siber Güvenlik", "Drama", "Oyun"],
        age: "10-14 yaş",
        leader: "Gülay TURĞUT",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Ekran kullanım alışkanlıklarınızı dengeye getirin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Emoji ile duygu anlatımı</li>
            <li>Hikaye ve karar farkındalığı</li>
            <li>Drama ve çözüm oyunu</li>
            <li>Dijital kullanım takip tablosu</li>
        </ul>
        <p>Dijital bağımlılık ve zaman yönetimi konusunda farkındalık kazanın.</p>`
    },
    {
        id: 7,
        title: "Veri Dedektifleri",
        tags: ["Siber Güvenlik", "Oyun", "Kriptoloji"],
        age: "10 yaş ve üzeri",
        leader: "Tuğçe Höbek",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Dijital ayak izlerinizi keşfedin ve yönetin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Dijital ayak izi ve görünmez veri</li>
            <li>Veri analizi ve risk farkındalığı</li>
            <li>Veri iz avı ve haritalama</li>
            <li>Kişisel farkındalık kartları</li>
        </ul>
        <p>İnternette bıraktığınız izleri takip edin ve güvenli kalın!</p>`
    },
    {
        id: 8,
        title: "İrrasyonel Şifreleme",
        tags: ["Kriptoloji", "Siber Güvenlik", "Oyun"],
        age: "Ortaokul, Lise ve üstü",
        leader: "Ahmet Harun Açık",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Tarihten günümüze şifreleme sanatını öğrenin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Kriptolojinin alfabesi: Harf-sayı eşleşmesi</li>
            <li>Mesaj hazırlama ve gizli yazım</li>
            <li>Şifre çözme ve yardımlaşma oyunu</li>
            <li>Analitik düşünme becerileri</li>
        </ul>
        <p>Julius Caesar'ın kullandığı yöntemlerle kendi şifrelerinizi yaratın!</p>`
    },
    {
        id: 9,
        title: "Siber Yolculukta Drama",
        tags: ["Okul Öncesi", "Drama", "Siber Güvenlik"],
        age: "5-6 yaş",
        leader: "Ayşe Çağdaş",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Küçükler için eğlenceli siber güvenlik draması!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Güvenli adımlar, hızlı kaçışlar oyunu</li>
            <li>Siber Bezirgan Başı oyunu</li>
            <li>Doğaçlama ve görsel hafıza</li>
            <li>Afiş tasarımı</li>
        </ul>
        <p>Drama yöntemiyle okul öncesi çocuklara dijital güvenlik!</p>`
    },
    {
        id: 10,
        title: "ACT: Acil Çözüm Takımı",
        tags: ["Kriptoloji", "Oyun", "Siber Güvenlik"],
        age: "9 yaş ve üzeri",
        leader: "Elif DİLEK",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>20 dakika içinde sistemi kurtarın!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Caesar şifrelemesi</li>
            <li>Görünmez veri ve UV ışık</li>
            <li>Pigpen Cipher (Mason Şifresi)</li>
            <li>Zamana karşı yarış</li>
        </ul>
        <p>Ekip çalışması ve kriptoloji bilgisi ile dijital tehditleri durdurun!</p>`
    },
    {
        id: 11,
        title: "Dijital Şehir Trafik Işıkları",
        tags: ["Okul Öncesi", "Siber Güvenlik", "Oyun"],
        age: "5-6 yaş",
        leader: "Yüksel Canbolat",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Renk kodları ile dijital güvenliği öğrenin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Yeşil (Güvenli), Sarı (Dikkat), Kırmızı (Tehlike)</li>
            <li>Karar verme ve farkındalık</li>
            <li>Hareketli renk oyunu</li>
            <li>Görsel öğrenme</li>
        </ul>
        <p>Anaokulu çağındaki çocuklar için eğlenceli güvenlik eğitimi!</p>`
    },
    {
        id: 12,
        title: "Yemleme Avcıları",
        tags: ["Siber Güvenlik", "Oyun", "Kriptoloji"],
        age: "10-15 yaş",
        leader: "Pınar UŞAR",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Oltalama (Phishing) saldırılarını tespit edin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Dijital okuryazarlık ve dil bilgisi</li>
            <li>Kırmızı bayraklar analizi</li>
            <li>Yemleme kartlarını deşifre etme</li>
            <li>Yazım hataları ve şüpheli linkler</li>
        </ul>
        <p>Türkçe öğretmeni bakış açısıyla siber güvenlik!</p>`
    },
    {
        id: 13,
        title: "Siber Memory",
        tags: ["Oyun", "Siber Güvenlik", "Okul Öncesi"],
        age: "6-10 yaş",
        leader: "Esengül Eryılmaz",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Siber güvenlik sembollerini eşleştirin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>E-posta virüsü, şifre, mobil güvenlik kartları</li>
            <li>Hafıza oyunu mekanikleri</li>
            <li>Ödüllü öğrenme</li>
            <li>Görsel hafıza geliştirme</li>
        </ul>
        <p>Oyun oynayarak siber güvenlik öğrenin!</p>`
    },
    {
        id: 14,
        title: "Sezar Çarkı",
        tags: ["Kriptoloji", "Oyun", "Siber Güvenlik"],
        age: "9 yaş (İlkokul 3. sınıf)",
        leader: "Sıtkı Bilal Doğan",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Roma imparatorlarının şifreleme yöntemini keşfedin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Sezar Çarkı ve anahtar kavramı</li>
            <li>Harf kaydırma algoritması</li>
            <li>Şifreleme ve deşifre etme</li>
            <li>Matematiksel mantık</li>
        </ul>
        <p>Tarihi bir şifreleme tekniğiyle mesajlarınızı koruyun!</p>`
    },
    {
        id: 15,
        title: "Siber Güvenlik Konulu Masal",
        tags: ["Okul Öncesi", "Drama", "Sanat"],
        age: "4-12 yaş",
        leader: "Elmas Gezer",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Masallarla siber güvenlik öğrenin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>İnteraktif masal anlatımı</li>
            <li>Dijital kahraman ve güvenlik kuralları</li>
            <li>Boyama ve sanatsal ifade</li>
            <li>Çıkış bileti değerlendirme</li>
        </ul>
        <p>Dijital dünya masalları ile çocuklara güvenlik bilinci!</p>`
    },
    {
        id: 16,
        title: "Dijital Dedektif",
        tags: ["Siber Güvenlik", "Oyun", "Kriptoloji"],
        age: "11-13 yaş",
        leader: "Aysel SÜRÜCÜ",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Güvenli ve tehlikeli durumları ayırt edin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Güvenli vs tehlikeli durum analizi</li>
            <li>Güçlü parola oluşturma</li>
            <li>İki aşamalı dedektiflik operasyonu</li>
            <li>Mıknatıslı tahta ile kod oluşturma</li>
        </ul>
        <p>Dedektif olun ve dijital dünyayı güvenli hale getirin!</p>`
    },
    {
        id: 17,
        title: "Gerçek mi Yapay Zeka mı?",
        tags: ["Yapay Zeka", "Siber Güvenlik", "Oyun"],
        age: "9 yaş ve üzeri",
        leader: "Muhammed Gökhan Perçem",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Deepfake videoları tespit edin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Yapay zeka videoları analizi</li>
            <li>Dijital manipülasyon farkındalığı</li>
            <li>Görsel tutarsızlıklar tespiti</li>
            <li>Tablet üzerinden test</li>
        </ul>
        <p>Gördüğünüz her şey gerçek mi? Öğrenin!</p>`
    },
    {
        id: 18,
        title: "Eğlenceli Şifreleme: Kaydırmalı Algoritma",
        tags: ["Kriptoloji", "Oyun", "Sanat"],
        age: "Ortaokul",
        leader: "Nuriye Aşut Önal",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Renkli şifre diskleriyle mesaj gönderin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Sezar şifrelemesi ve kaydırmalı algoritma</li>
            <li>Anahtar (key) kavramı</li>
            <li>Gönderici-alıcı rol paylaşımı</li>
            <li>Şifreli mesajlaşma oyunu</li>
        </ul>
        <p>Algoritmik düşünmeyi şifreleme ile öğrenin!</p>`
    },
    {
        id: 19,
        title: "Siber Kahramanlar Maske Atölyesi",
        tags: ["Sanat", "Siber Güvenlik", "Drama"],
        age: "10-14 yaş",
        leader: "Bilgen Akgül",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Kendi siber kahramanınızı yaratın!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Karakter tasarımı ve strateji</li>
            <li>Yüz boyama ve semboller</li>
            <li>Slogan oluşturma</li>
            <li>Siber muhafız birliği fotoğrafı</li>
        </ul>
        <p>Sanat ve teknoloji ile dijital kahramanınızı canlandırın!</p>`
    },
    {
        id: 20,
        title: "Bilgisayar Şifreleme Sistemleri",
        tags: ["Kriptoloji", "Siber Güvenlik", "Bilim"],
        age: "Ortaokul ve üzeri",
        leader: "Kübra Aycan Kavlak",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Kod yazarak şifreleme yapın!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Simetrik ve asimetrik şifreleme</li>
            <li>Hash fonksiyonları</li>
            <li>Algoritma mantığı</li>
            <li>Kodlama ile şifreleme deneyimi</li>
        </ul>
        <p>Gerçek bilgisayar şifreleme sistemlerini kodlayın!</p>`
    },
    {
        id: 21,
        title: "Aileler İçin Dijital Güvenlik Söyleşisi",
        tags: ["Siber Güvenlik", "Drama", "Oyun"],
        age: "Ebeveynler",
        leader: "Melek Candemir",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Ebeveynler için dijital ebeveynlik rehberi!</p>
        <h3>Söyleşi İçeriği:</h3>
        <ul>
            <li>Ortak deneyimler ve farkındalık</li>
            <li>Ekran süresi yönetimi</li>
            <li>Güvenli oyun seçimi</li>
            <li>Aile dijital anayasası oluşturma</li>
        </ul>
        <p>Çay eşliğinde samimi bir söyleşi ile bilinçli ebeveyn olun!</p>`
    },
    {
        id: 22,
        title: "Şifre Fabrikası",
        tags: ["Oyun", "Kriptoloji", "Siber Güvenlik"],
        age: "9 yaş ve üzeri",
        leader: "Müzeyyen Tekerek",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Zamana karşı güçlü şifre üretin!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Şifre bileşenleri ve güvenlik standartları</li>
            <li>Küp oyunu ile şifre oluşturma</li>
            <li>Kum saati ve zil yarışması</li>
            <li>Güvenlik onayı</li>
        </ul>
        <p>Heyecan dolu bir oyunla şifre güvenliğini öğrenin!</p>`
    },
    {
        id: 23,
        title: "İnteraktif Bilim Sunumu",
        tags: ["Bilim", "Siber Güvenlik", "Drama"],
        age: "Tüm yaşlar",
        leader: "Muhammed Eren Karaoğlu",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Argümantasyon temelli bilim sunumu!</p>
        <h3>Sunum İçeriği:</h3>
        <ul>
            <li>Deneyim temelli bilgi aktarımı</li>
            <li>Görsel destekli anlatım</li>
            <li>Fikir çarpıştırma atölyesi</li>
            <li>Senaryo analizi</li>
        </ul>
        <p>Siber güvenlik konusunda derinlemesine tartışma!</p>`
    },
    {
        id: 24,
        title: "Bilim Laboratuvarı: Elementlerin Gücü",
        tags: ["Bilim", "Drama", "Oyun"],
        age: "Tüm yaşlar",
        leader: "Seracettin OSMANOĞLU",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Fizik ve kimya deneyleri ile bilim şöleni!</p>
        <h3>Gösteri İçeriği:</h3>
        <ul>
            <li>Ateş ve buz: Yanma deneyi ve sıvı azot</li>
            <li>Akışkanlar mekaniği ve görünmez kuvvetler</li>
            <li>Kimyasal tepkimeler</li>
            <li>Basınç gücü deneyleri</li>
        </ul>
        <p>Doğanın yasalarını gözlerinizle görün!</p>`
    },
    {
        id: 25,
        title: "Kripto ve Siber Gelecek",
        tags: ["Kriptoloji", "Bilim", "Siber Güvenlik"],
        age: "Lise ve üzeri",
        leader: "Dr. Hasan Koca",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>DNA tabanlı şifreleme sistemi!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Biyokriptografik model</li>
            <li>DNA dörtlük sistemi (A, C, G, T)</li>
            <li>Modüler aritmetik</li>
            <li>Genetik kod laboratuvarı</li>
        </ul>
        <p>Geleceğin şifreleme teknolojisi: DNA kriptolojisi!</p>`
    },
    {
        id: 26,
        title: "Sistemi Kurtar Güvende Kal",
        tags: ["Oyun", "Siber Güvenlik", "Kriptoloji"],
        age: "Ortaokul ve Lise",
        leader: "Ayşe Gültepe",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Dijital labirentte görev tamamlayın!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Ortaokul: Fiziksel görev odaları</li>
            <li>Lise: Dijital QR kod rotası</li>
            <li>Phishing tespiti ve dijital ayak izi</li>
            <li>Güvenli bağlantı analizi</li>
        </ul>
        <p>Seviye seviye ilerleyin ve sistemi kurtarın!</p>`
    },
    {
        id: 27,
        title: "Bilim Gösterisi",
        tags: ["Bilim", "Drama", "Oyun"],
        age: "Tüm yaşlar",
        leader: "Emre Yıldız",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Fizik ve kimya deneyleri ile bilim şöleni!</p>
        <h3>Gösteri İçeriği:</h3>
        <ul>
            <li>Isı ve madde etkileşimi</li>
            <li>Ateş deneyleri ve sıvı azot</li>
            <li>Akışkanlar mekaniği</li>
            <li>Kimyasal tepkimeler ve basınç</li>
        </ul>
        <p>Bilimin büyüsünü keşfedin!</p>`
    },
    {
        id: 28,
        title: "Bileğimde Şifreleme",
        tags: ["Sanat", "Kriptoloji", "Oyun"],
        age: "Tüm yaşlar",
        leader: "Tunahan Aktoprak",
        location: "---WIP---",
        time: "---WIP---",
        description: `<p>Boncuklarla kendi şifrenizi yaratın!</p>
        <h3>Etkinlik İçeriği:</h3>
        <ul>
            <li>Güçlü şifre neden önemli?</li>
            <li>Şifre karşılaştırma tablosu</li>
            <li>8 boncukla benzersiz şifre</li>
            <li>Bileklik yapımı</li>
        </ul>
        <p>Şifrenizi taşıyın, güvenliğinizi hatırlayın!</p>`
    }
];
