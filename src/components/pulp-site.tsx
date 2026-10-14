import { useState } from "react";
import { Factory, Settings, Users, Cylinder } from "lucide-react";
import timelineSvg from "../assets/timeline.svg?raw";

const PRODUCTS = [
  {
    title: "خمیر فلاف پالپ",
    image: "https://hot.ir-central1.arvanstorage.ir/pulp/assets/rolled.avif",
    alt: "رول خمیر فلاف پالپ تصفیه شده و معمولی",
    text: "ماده اولیه اصلی تولید پوشک بچه، نوار بهداشتی و پدهای بیمارستانی. تولید در دو نوع تصفیه شده (Treated) و معمولی.",
  },
  {
    title: "آلفا سلولز (لینتر پنبه)",
    image: "https://hot.ir-central1.arvanstorage.ir/pulp/assets/linter.avif",
    alt: "آلفا سلولز باکیفیت تهیه شده از لینتر پنبه",
    text: "تولید خمیر کاغذ با کیفیت بسیار بالا از لینتر پنبه جهت استفاده در صنایع حساس شیمیایی و استراتژیک.",
  },
  {
    title: "خمیر از باگاس",
    image: "https://hot.ir-central1.arvanstorage.ir/pulp/assets/fluff.avif",
    alt: "تولید خمیر کاغذ اقتصادی و باکیفیت از باگاس و ضایعات کشاورزی",
    text: "بهره‌گیری از ضایعات کشاورزی (باگاس) برای تولید خمیر کاغذ؛ راهکاری پایدار و اقتصادی برای جایگزینی منابع چوبی.",
  },
] as const;

const PROJECTS = [
  {
    title: "سالن خشک‌کن",
    text: "نمای طولی سالن تولید؛ بدنهٔ ماشین، کانال بخار و مسیر حرکت اپراتور در کنار خط.",
    image: "/media/hall.jpg",
    alt: "سالن تولید و خط خشک‌کن",
    photo: "ph-hall",
    icon: Factory,
  },
  {
    title: "جزئیات تجهیزات",
    text: "هود، زانویی‌های انتقال و قطعات کناری خط؛ همان چیزی که در سالن از نزدیک دیده می‌شود.",
    image: "/media/detail.jpg",
    alt: "جزئیات ماشین و کانال‌های انتقال",
    photo: "ph-detail",
    icon: Settings,
  },
  {
    title: "روز راه‌اندازی",
    text: "تنظیم ماشین کنار تیم بهره‌بردار، پیش از تحویل خط و شروع تولید.",
    image: "/media/team.jpg",
    alt: "تیم در حال راه‌اندازی خط",
    photo: "ph-team",
    icon: Users,
  },
  {
    title: "مخازن خمیر",
    text: "مخازن استیل گرد در سالن تولید، هنگام بازدید و بررسی پیش از بهره‌برداری.",
    image: "/media/tanks.jpg",
    alt: "بازدید مخازن استیل خمیر",
    photo: "ph-tanks",
    icon: Cylinder,
  },
] as const;

function whatsapp(topic: string) {
  const text = topic
    ? `سلام، برای مشاوره دربارهٔ ${topic} پیام می‌دهم.`
    : "سلام، برای مشاورهٔ خط تولید خمیر کاغذ پیام می‌دهم.";
  window.open(`https://wa.me/989121798057?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}

export function PulpSite() {
  const [topic, setTopic] = useState<string | null>(null);
  const [leadNote, setLeadNote] = useState("");

  return (
    <>
      <header>
        <nav aria-label="منوی اصلی">
          <ul>
            <li>
              <a href="#services" style={{ ["--section-timeline" as string]: "--section-services" }}>
                خدمات
              </a>
            </li>
            <li>
              <a href="#products" style={{ ["--section-timeline" as string]: "--section-products" }}>
                محصولات
              </a>
            </li>
            <li>
              <a href="#projects" style={{ ["--section-timeline" as string]: "--section-projects" }}>
                پروژه‌ها
              </a>
            </li>
            <li>
              <a href="#honors" style={{ ["--section-timeline" as string]: "--section-honors" }}>
                افتخارات
              </a>
            </li>
            <li>
              <a href="#footer-section" style={{ ["--section-timeline" as string]: "--section-footer" }}>
                ارتباط
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="landing">
          <picture>
            <source media="(min-width: 900px)" srcSet="/media/hero-desktop.jpg" />
            <img
              className="hero-scene"
              src="/media/hero-hall.jpg"
              fetchPriority="high"
              width="720"
              height="1280"
              alt=""
            />
          </picture>
          <div className="hero-veil" aria-hidden="true" />
          <div className="hero-stage">
            <img
              className="hero-logo"
              src="/media/logo-ribbon.png"
              width="500"
              height="500"
              alt="پالپ ایران"
            />
            <div className="hero-text">
              <h1 className="landing-headline">
                <span className="fixed-part">طراحی، ساخت،<br />نصب و راه‌اندازی</span>
                <span className="dynamic-part-wrapper">
                  <span className="dynamic-text-item">خطوط تولید خمیر کاغذ فلاف پالپ</span>
                  <span className="dynamic-text-item">خطوط تولید آلفا سلولز از پنبه و ساقه موز</span>
                  <span className="dynamic-text-item">خطوط تولید خمیر کاغذ از ضایعات کشاورزی و باگاس</span>
                </span>
              </h1>
              <div className="actions">
                <a className="btn" href="#footer-section">
                  مشاوره رایگان
                </a>
                <a className="btn" href="#products">
                  مشاهده محصولات
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <h2 className="fade-up">
            خدمات <span className="accent-text">تخصصی</span>
          </h2>
          <div className="services-layout">
            <div className="services-timeline" aria-hidden="true" dangerouslySetInnerHTML={{ __html: timelineSvg }} />
            <div className="services-cards">
              <section className="service-item">
                <div className="service-card-new">
                  <h3>طراحی حرفه‌ای</h3>
                  <p>
                    طراحی و مهندسی خطوط تولید خمیر کاغذ بهداشتی (Fluff Pulp) در ظرفیت‌های ۵ تا ۱۰۰ تن در روز با دانش فنی
                    ۱۰۰٪ بومی و کیفیت رقابتی با نمونه‌های جهانی.
                  </p>
                </div>
              </section>
              <section className="service-item">
                <div className="service-card-new">
                  <h3>ساخت ماشین‌آلات</h3>
                  <p>ساخت تمامی ماشین‌آلات و تجهیزات خطوط تولید فلاف پالپ با استفاده از دانش فنی ۱۰۰٪ بومی و مواد اولیه با کیفیت.</p>
                </div>
              </section>
              <section className="service-item">
                <div className="service-card-new">
                  <h3>راه‌اندازی خط تولید</h3>
                  <p>نصب، راه‌اندازی و آموزش کامل کارکنان شامل تولید، کنترل کیفیت، مدیریت فروش، انبارداری و حسابداری.</p>
                </div>
              </section>
              <section className="service-item">
                <div className="service-card-new">
                  <h3>گارانتی یک ساله</h3>
                  <p>گارانتی یک ساله قطعات (به غیر از قطعات الکتریکی) و حضور عوامل فنی تا پایان راه‌اندازی و تضمین کیفیت تولید.</p>
                </div>
              </section>
              <section className="service-item">
                <div className="service-card-new">
                  <h3>۱۰ سال خدمات پس از فروش</h3>
                  <p>پشتیبانی ۲۴ ساعته تلفنی برای رفع مشکلات فنی، تأمین مواد اولیه حداقل یک سال و انعقاد قرارداد فروش محصول تولیدی.</p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section id="products">
          <h2 className="fade-up">
            محصولات و <span className="accent-text">تکنولوژی‌ها</span>
          </h2>
          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <article className="product-card fade-up" tabIndex={0} key={product.title}>
                <div className="product-icon">
                  <img alt={product.alt} src={product.image} loading="lazy" width="280" height="280" decoding="async" />
                </div>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <button className="product-cta" type="button" onClick={() => setTopic(product.title)}>
                  درخواست مشاوره
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="fade-up">
            پروژه‌های <span className="accent-text">اجراشده</span>
          </h2>
          <p className="section-lead">نمایی از خط‌های نصب‌شده؛ سالن، جزئیات ماشین، روز راه‌اندازی و مخازن خمیر.</p>
          <div className="proj-list">
            {PROJECTS.map((item) => {
              const Icon = item.icon;
              return (
                <article className="proj-row" key={item.title}>
                  <div className="proj-node" aria-hidden="true">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  <div className="project-card">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <img className={item.photo} src={item.image} alt={item.alt} width="640" height="420" />
                  </div>
                </article>
              );
            })}
          </div>
          <div className="section-foot">
            <div className="statbar">
              <div className="stat">
                <strong>۱۸ سال</strong>
                <span>سابقهٔ طراحی و اجرا</span>
              </div>
              <div className="stat">
                <strong>۱۷ پروژه</strong>
                <span>موفق در سراسر ایران</span>
              </div>
              <div className="stat">
                <strong>از طراحی تا تحویل</strong>
                <span>نصب، راه‌اندازی، آموزش</span>
              </div>
            </div>
            <button className="btn" type="button" onClick={() => setTopic("خط مشابه پروژه‌های اجراشده")}>
              مشاوره برای خط مشابه
            </button>
          </div>
        </section>

        <section id="honors">
          <h2 className="fade-up">
            افتخارات و <span className="accent-text">پشتوانه</span>
          </h2>
          <p className="section-lead">تندیس ملی، آموزش مدیریت کیفیت، و دورهٔ مدیریت در آلمان.</p>
          <div className="honor-split">
            <article className="honor-bio">
              <p className="honor-kicker">مدیرعامل</p>
              <h3>محمد ایمان‌علیزاده</h3>
              <p className="honor-role">شرکت توان تولید سلولز پایتخت</p>
              <p>سابقه‌ای که از تندیس ملی سال ۱۳۹۱ شروع می‌شود و با آموزش مدیریت کیفیت و دورهٔ مدیریت در آلمان ادامه پیدا کرده است.</p>
              <ul className="facts">
                <li>
                  <b>۱۳۹۱</b>
                  <span>تندیس مدیران ارزش‌آفرین، مرکز همایش‌های صدا و سیما</span>
                </li>
                <li>
                  <b>۱۳۹۳</b>
                  <span>سمینار مدیریت کیفیت و مشتری‌مداری</span>
                </li>
                <li>
                  <b>۲۰۲۰</b>
                  <span>دورهٔ ۱۶ ساعتهٔ مدیریت در آلمان</span>
                </li>
              </ul>
            </article>
            <figure className="honor-shot">
              <img src="/media/expo.jpg" alt="محمد ایمان‌علیزاده در نمایشگاه تخصصی" width="1080" height="810" />
              <figcaption>حضور در نمایشگاه تخصصی</figcaption>
            </figure>
          </div>
          <div className="proof-grid">
            <article className="proof-card">
              <div className="proof-well">
                <img src="/media/trophy.jpg" alt="تندیس نقش مدیران ارزش‌آفرین در توسعه ملی" />
              </div>
              <h3>تندیس ملی</h3>
              <p>نقش مدیران ارزش‌آفرین در توسعه ملی، ۲۲ اسفند ۱۳۹۱، صدا و سیما</p>
            </article>
            <article className="proof-card">
              <div className="proof-well">
                <img src="/media/alliance.jpg" alt="گواهی سمینار مدیریت کیفیت و مشتری‌مداری" />
              </div>
              <h3>سمینار مدیریت کیفیت</h3>
              <p>مدیریت کیفیت و مشتری‌مداری، Alliance، ۳۰ مرداد ۱۳۹۳</p>
            </article>
            <article className="proof-card">
              <div className="proof-well">
                <img src="/media/academy.jpg" alt="گواهی دوره مدیریت آکادمی نیدرزاکسن" />
              </div>
              <h3>آکادمی نیدرزاکسن</h3>
              <p>دورهٔ ۱۶ ساعتهٔ مدیریت، ۱۷ و ۱۸ فوریه ۲۰۲۰</p>
            </article>
          </div>
        </section>

        <footer id="footer-section" className="footer-card fade-up">
          <h2>
            آماده راه‌اندازی <span className="accent-text">خط تولید</span> خود هستید؟
          </h2>
          <p>با ۱۸ سال سابقه و اجرای ۱۷ پروژه موفق در سراسر ایران، ما از صفر تا صد در کنار شما هستیم.</p>
          <form
            className="newsletter"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const contact = String(data.get("contact") ?? "").trim();
              if (!contact) return;
              setLeadNote(contact);
              whatsapp(`درخواست از فرم سایت، راه تماس: ${contact}`);
            }}
          >
            <input name="contact" placeholder="ایمیل یا شماره تماس شما..." type="text" required aria-label="ایمیل یا شماره تماس" />
            <button className="btn" type="submit">
              ثبت درخواست
            </button>
          </form>
          {leadNote ? <p>در واتس‌اپ می‌توانید همین درخواست را برای {leadNote} قطعی کنید.</p> : null}

          <div className="contact-info-card" aria-label="اطلاعات تماس پالپ ایران">
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">
                <PhoneIcon />
              </div>
              <div>
                <span className="contact-label">همراه</span>
                <a href="tel:09121798057" className="contact-value">
                  0912 179 8057
                </a>
                <a href="tel:09122346800" className="contact-value">
                  0912 234 6800
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">
                <LandlineIcon />
              </div>
              <div>
                <span className="contact-label">ثابت</span>
                <a href="tel:02188673823" className="contact-value">
                  021 8867 3823
                </a>
                <a href="tel:02188673822" className="contact-value">
                  021 8867 3822
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">
                <MailIcon />
              </div>
              <div>
                <span className="contact-label">ایمیل</span>
                <a href="mailto:info@pulpiran.ir" className="contact-value">
                  info@pulpiran.ir
                </a>
              </div>
            </div>
          </div>

          <ul className="social-links" aria-label="شبکه‌های اجتماعی پالپ ایران">
            <li>
              <a href="https://wa.me/989121798057" className="social-btn" title="واتس اپ" aria-label="واتس اپ پالپ ایران">
                <WhatsAppIcon />
              </a>
            </li>
            <li>
              <a href="mailto:info@pulpiran.ir" className="social-btn" title="ایمیل" aria-label="ایمیل پالپ ایران">
                <MailIcon />
              </a>
            </li>
          </ul>
          <p style={{ marginTop: "3rem", fontSize: "0.8rem" }}>
            © ۲۰۲۶ شرکت توان و تولید سلولز پایتخت (پالپ ایران). تمامی حقوق محفوظ است.
          </p>
        </footer>
      </main>

      <button id="ai-agent-btn" type="button" title="مشاوره" aria-label="باز کردن مشاوره" onClick={() => setTopic("مشاوره")}>
        <ChatGlyph />
      </button>

      {topic ? (
        <div className="consult-backdrop" onClick={() => setTopic(null)}>
          <div
            className="consult-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="consult-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="consult-close" type="button" onClick={() => setTopic(null)} aria-label="بستن">
              ✕
            </button>
            <h3 id="consult-title">درخواست مشاوره</h3>
            <p>موضوع: {topic}. برای ادامه، واتس‌اپ یا تماس مستقیم را انتخاب کنید.</p>
            <div className="consult-links">
              <button className="btn" type="button" onClick={() => whatsapp(topic)}>
                پیام در واتس‌اپ
              </button>
              <a className="btn" href="tel:09121798057">
                تماس ۰۹۱۲ ۱۷۹ ۸۰۵۷
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function LandlineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.1L1 23l6-1.6A11 11 0 0 0 20.5 3.5zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.6.9.9-3.5-.2-.3A9.1 9.1 0 1 1 12 20.5zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 4 14 14 0 0 0 2.9.9 2.5 2.5 0 0 0 1.6 0 2.2 2.2 0 0 0 1.5-1.1 1.8 1.8 0 0 0 .1-1.1c-.1-.1-.3-.2-.6-.3z" />
    </svg>
  );
}

function ChatGlyph() {
  return (
    <svg width="34" height="34" viewBox="0 0 512 512" aria-hidden="true">
      <path
        fill="var(--text-primary)"
        d="M310.102 87.893c11.602.396 23.238.365 34.798 1.286 18.272 1.455 34.685 7.63 48.757 19.933 14.62 12.784 24.732 28.097 28.596 47.202 1.302 6.438 2.345 13.043 2.456 19.589.519 30.628 1.022 61.264.812 91.893-.111 16.193-2.248 32.155-10.531 46.763-14.508 25.586-35.5 42.299-64.937 46.204-15.061 1.998-30.48 2.275-45.699 1.868-20.578-.551-38.18 5.793-54.203 18.388-10.845 8.525-22.474 16.054-33.735 24.053-9.783 6.95-20.645 7.075-30.297 1.545-9.718-5.569-15.686-14.931-15.011-27.014.161-2.883 1.255-5.712 1.895-8.572 1.261-5.636-.72-8.43-6.563-8.124-11.369.595-22.69-.594-33.12-4.529-11.068-4.175-20.927-11.07-28.654-20.43-10.553-12.786-16.43-27.354-16.705-44.956-.005-19.214.03-37.519-.016-55.824-.004-1.728-.513-3.455-.788-5.183.323-17.889.17-35.803 1.113-53.659.808-15.326 2.796-30.582 10.765-44.303 14.193-24.44 34.537-40.453 63.011-43.788 15.887-1.86 32.026-1.574 48.975-2.275 33.642-.036 66.361-.051 99.08-.067zm-159.068 29.319c-7.165 4.902-15.207 8.909-21.313 14.892-13.082 12.818-17.478 29.676-17.66 47.424-.394 38.316-.275 76.638-.247 114.957.013 17.398 13.227 34.504 28.807 40.808 9.233 3.736 18.617 3.426 28.14 3.786 9.852.373 18.067 4.228 23.599 12.863 5.092 7.95 6.673 16.23 3.796 25.474-.699 2.248.984 5.913 2.51 7.531 1.085 1.148 5.277.856 7.012-.343 12.342-8.523 24.53-17.284 36.535-26.279 16.488-12.354 34.861-19.058 55.486-19.302 11.661-.138 23.328.125 34.988-.07 14.07-.235 27.468-2.748 39.54-10.856 18.588-12.484 29.341-29.545 29.723-51.948.549-32.142.305-64.302.01-96.451-.14-15.245-3.156-29.82-13.006-42.26-6.09-7.69-13.139-14.257-21.985-18.426-12.507-5.895-26.001-7.15-39.658-7.147-46.651.015-93.303.03-139.954.001-11.788-.007-23.332 1.499-35.323 5.345z"
      />
      <path
        fill="var(--text-primary)"
        d="M263.049 210.712c11.775 4.517 12.536 21.685 1.424 28.173-5.013 2.927-15.212 2.038-18.898-1.867-4.884-5.174-6.193-14.262-2.889-20.058 3.338-5.857 11.124-8.969 17.652-7.069.79.23 1.599.392 2.711.821z"
      />
      <path
        fill="var(--text-primary)"
        d="M207.688 232.448c-4.874 8.774-15.076 11.001-24.003 5.333-6.28-3.988-7.421-16.064-2.58-22.756 4.23-5.847 13.685-7.402 20.831-3.425 6.392 3.557 9.292 11.529 6.636 18.184-.299.749-.475 1.547-.884 2.664z"
      />
      <path
        fill="var(--text-primary)"
        d="M312 239.287c-5.991-3.186-8.784-8.632-8.692-14.259.106-6.479 3.667-12.024 10.213-14.854 5.37-2.322 13.757-.519 18.22 5.14 4.485 5.687 4.185 12.392 1.085 17.98-3.78 6.813-10.615 8.465-17.263 7.291-1.114-.196-2.176-.693-3.563-1.298z"
      />
    </svg>
  );
}
