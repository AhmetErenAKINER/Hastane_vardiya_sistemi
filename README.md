# 🏥 Hastane Randevu Sistemi (Hospital Appointment System)

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş, uçtan uca (End-to-End) bir hastane randevu yönetim sistemidir. **Ruby on Rails** tabanlı güçlü bir backend API ve **React** ile geliştirilmiş dinamik bir frontend arayüzünden oluşmaktadır.

## 🚀 Proje Hakkında

Hastane Randevu Sistemi, hastaların kolayca poliklinik seçip randevu alabildiği, alınan randevuların anlık olarak görüntülenebildiği kullanıcı dostu bir uygulamadır. Proje, **Behavior-Driven Development (BDD)** prensipleri gözetilerek geliştirilmiş ve **Cypress** ile test edilmiştir.

### 🛠️ Kullanılan Teknolojiler

**Backend:**
*   **Ruby on Rails 8 (API Mode):** Hızlı, güvenli ve ölçeklenebilir RESTful API mimarisi.
*   **SQLite:** Hafif ve taşınabilir veritabanı çözümü.
*   **Rack-CORS:** Frontend ile güvenli veri iletişimi için Cross-Origin Resource Sharing yapılandırması.

**Frontend:**
*   **React (Vite):** Yüksek performanslı ve modüler kullanıcı arayüzü.
*   **TypeScript:** Tip güvenliği (Type Safety) ile daha sağlam kod yapısı.
*   **Axios:** API istekleri için optimize edilmiş HTTP istemcisi.
*   **CSS3:** Modern ve responsive tasarım.

**Test & Otomasyon:**
*   **Cypress:** Uçtan uca (E2E) test otomasyonu.
*   **Cucumber (Gherkin):** İş birimlerinin anlayabileceği formatta (BDD) test senaryoları.

---

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

### 1. Backend (Rails) Kurulumu
```bash
cd server
bundle install
rails db:migrate
rails s
```
*Backend sunucusu `http://localhost:3000` adresinde çalışacaktır.*

### 2. Frontend (React) Kurulumu
```bash
cd client
npm install
npm run dev
```
*Frontend uygulaması `http://localhost:5173` adresinde çalışacaktır.*

---

## 🧪 Test Süreçleri

Projenin test senaryoları **Cypress** ve **Cucumber** kullanılarak hazırlanmıştır. Testleri çalıştırmak için:

```bash
cd client
npx cypress open
```

---

## 🙏 Teşekkür ve İthaf

Bu projenin geliştirilme sürecindeki değerli katkıları, rehberlikleri ve akademik vizyonları için hocalarım:

*   **Sayın Dr. Öğr. Üyesi Nurettin ŞENYER**
*   **Sayın Dr. Öğr. Üyesi Ömer DUMUŞ**

beyefendilere en içten teşekkürlerimi sunarım. Onların bilgi birikimi ve yönlendirmeleri, bu çalışmanın ortaya çıkmasında büyük rol oynamıştır.

---

**Geliştirici:** Ahmet Eren AKINER
**Lisans:** MIT
