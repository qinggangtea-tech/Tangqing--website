import React, { useState } from "react";
import { MapPin, Phone, Mail, Info } from "lucide-react";

const THEME = {
  primary: "#586438",
  primaryDark: "#3e4726",
  accent: "#b6a26a",
  accentDark: "#8f7f57",
  paper: "#e7ddc9",
  crimson: "#b20d0d",
};

const LOGO = "/logo.jpg";
const HERO_BG = "/hero.jpg";

const Copy = {
  en: {
    brand: "TangQing 唐青",
    nav: { about: "What is Xiao Qing Gan", origin: "Origin", gallery: "Gallery", process: "Process", brew: "Brewing", storage: "Storage & Taste", faq: "FAQ", contact: "Contact" },
    heroTitle: "One little citrus, a world of tea",
    heroSub: "Xinhui tangerine peel meets mellow Yunnan Pu'er—bright aroma, smooth and lingering.",
    aboutTitle: "What is Xiao Qing Gan 小青柑是什么",
    aboutP1: "Xiao Qing Gan = green tangerine peel + Pu'er tea. Peel from Xinhui (Guangdong) is sun/low-heat dried, filled with ripe Pu'er, creating citrus fragrance and gentle depth.",
    aboutP2: "小青柑由广东新会青柑与云南普洱结合而成，清香与甜润相融，入口顺滑。",
    originTitle: "Origin & Terroir 原产地与风土",
    originP1: "Peel: Xinhui, Guangdong (rich oil cells, vivid aroma). Pu'er: Yunnan (fermentation & aging for smooth body).",
    originP2: "青柑来自广东新会；普洱来自云南。风味受品种、晒制及拼配影响。",
    processTitle: "Process 制作工艺",
    processSteps: [
      "Harvest green tangerines · 采摘青柑",
      "Clean & pierce · 清洗与打孔",
      "Fill with Pu'er · 填入普洱",
      "Dry / sun‑cure · 低温干燥/晒制",
      "Rest to balance aroma · 回仓养味",
      "Grade & pack · 分级与包装",
    ],
    brewTitle: "Brewing 冲泡方法",
    brewPoints: [
      "Vessel: Gaiwan/small pot 5–7 oz (150–200 ml) · 器具：盖碗/小壶",
      "Dosage: whole or half fruit · 投茶：整颗或半颗",
      "Water: 203–212°F (95–100°C) · 水温：95–100°C",
      "Rinse once quickly · 醒茶：快速润洗 1 次",
      "1st 15–30s, then adjust · 首泡15–30秒，随口感加减",
      "6–10 infusions · 可续泡6–10次",
    ],
    storageTitle: "Storage & Taste 保存与口感",
    storageP1: "Store cool & dry, avoid odors; time softens citrus and deepens sweetness.",
    storageP2: "阴凉干燥避异味；随时间转化，柑香更柔，汤感更顺。",
    faqTitle: "FAQ 常见问题",
    FAQ: [
      { q: "Is it sour? 会很酸吗？", a: "No—it's bright citrus peel with gentle sweetness, balanced by smooth Pu'er. 不会，是清香与甜润配合普洱的顺滑。" },
      { q: "Finish in one day? 当天要喝完吗？", a: "You can. Or seal and refrigerate for 1–2 days for later steeps. 可以；也可密封冷藏1–2天再续泡。" },
      { q: "Giftable? 适合送礼吗？", a: "Great for gifting—elegant, tasty, easy to brew. 礼盒可定制。" },
    ],
    contactTitle: "Contact 合作与联系",
    contactSub: "U.S. wholesale/retail/corporate gifting—email or phone us. Based in NYC.",
    email: "qinggangtea@gmail.com",
    phone: "+1 917-615-6330",
    footer: "© " + new Date().getFullYear() + " TangQing 唐青. All rights reserved",
  },
};

function Section({ id, title, children }: any) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {title && (
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[14px] w-[14px] rotate-45" style={{ background: THEME.accent }} />
          <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: THEME.primary }}>{title}</h2>
          <div className="flex-1 border-t" style={{ borderColor: THEME.accent }} />
          <div className="h-[14px] w-[14px] rotate-45" style={{ background: THEME.accent }} />
        </div>
      )}
      <div className="text-[15px] leading-7 text-zinc-800">{children}</div>
    </section>
  );
}

function Pill({ children }: any) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs tracking-wide" style={{ borderColor: THEME.accent, color: THEME.primary }}>
      {children}
    </span>
  );
}

function NavLink({ href, children }: any) {
  return (
    <a href={href} className="text-sm hover:opacity-80" style={{ color: THEME.primary }}>
      {children}
    </a>
  );
}

function DropdownMenu({ label, items }: any) {
  return (
    <div className="relative group">
      <button className="text-sm" style={{ color: THEME.primary }}>{label}</button>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute right-0 mt-2 w-44 rounded-xl border bg-white/95 shadow-sm backdrop-blur" style={{ borderColor: THEME.accent }}>
        <ul className="py-2">
          {items.map((it: any, i: number) => (
            <li key={i}>
              <a href={it.href} className="block px-3 py-2 text-sm hover:bg-black/5" style={{ color: THEME.primary }}>
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SealButton({ href, children }: any) {
  return (
    <a href={href} className="inline-flex items-center justify-center px-5 py-2.5 text-sm rounded-md shadow-sm border transition-transform active:scale-95" style={{ background: THEME.crimson, color: "#fff", borderColor: "#8e0a0a", letterSpacing: "0.5px" }}>
      {children}
    </a>
  );
}

function CloudDivider() {
  return (
    <div className="w-full my-8" aria-hidden="true">
      <svg viewBox="0 0 1200 90" preserveAspectRatio="none" className="w-full h-[40px]">
        <path d="M0,60 C150,20 300,100 450,60 C600,20 750,100 900,60 C1050,20 1200,80 1200,80 L1200,90 L0,90 Z" fill={THEME.accentDark} fillOpacity="0.5" />
      </svg>
    </div>
  );
}

function Card({ children }: any) {
  return (
    <div className="rounded-2xl overflow-hidden border shadow-sm bg-white/80 backdrop-blur" style={{ borderColor: THEME.accent }}>
      {children}
    </div>
  );
}

function GallerySection({ onSetHero, onAddToStory }: any) {
  const [images, setImages] = useState<string[]>([
    "/hero.jpg",
    "/logo.jpg",
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.png",
    "/photo5.jpg",
  ]);
  const inputId = "gallery-input";
  return (
    <Section id="gallery" title="Gallery 图片集">
      <p>Click the button below to preview images locally (not uploaded). 点击下方按钮进行本地预览（不会上传服务器）。</p>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <Card key={i}>
            <div className="w-full h-full">
              <img src={src} alt={`gallery-${i + 1}`} className="w-full h-40 object-cover" />
              <div className="flex gap-2 p-3 border-t" style={{borderColor: THEME.accent}}>
                <button onClick={() => onSetHero?.(src)} className="rounded-xl border px-2 py-1 text-xs" style={{ borderColor: THEME.primaryDark, color: THEME.primaryDark }}>Set as Hero</button>
                <button onClick={() => onAddToStory?.(src)} className="rounded-xl border px-2 py-1 text-xs" style={{ borderColor: THEME.accent, color: THEME.accent }}>Add to Story</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <input
          id={inputId}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            const urls = files.map((f) => URL.createObjectURL(f));
            setImages((prev) => [...prev, ...urls]);
          }}
        />
        <button
          type="button"
          onClick={() => (document.getElementById(inputId) as HTMLInputElement)?.click()}
          className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm transition-shadow"
          style={{ borderColor: THEME.primaryDark, color: THEME.primaryDark }}
        >
          Add images / 添加图片
        </button>
      </div>
    </Section>
  );
}

export default function TangQingSite() {
  const L = Copy.en;
  const [heroBg, setHeroBg] = useState(HERO_BG);
  const [storyImages, setStoryImages] = useState<string[]>([]);
  const [logoSrc, setLogoSrc] = useState(LOGO);
  const [aboutImg, setAboutImg] = useState("/photo1.jpg");
  return (
    <div style={{ background: THEME.paper, fontFamily: "'Noto Serif SC','Songti SC','SimSun','Times New Roman',serif", backgroundImage: "radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(0deg, rgba(200,169,106,0.05), rgba(200,169,106,0.05))", backgroundSize: "10px 10px, auto", backgroundAttachment: "fixed", backgroundBlendMode: "multiply" }} className="min-h-screen text-zinc-900">
      <header className="sticky top-0 z-40 border-b backdrop-blur" style={{ background: "rgba(247,240,230,0.85)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items中心 gap-3">
            <img src={logoSrc} alt="TangQing logo" className="w-9 h-9 object-contain"/>
            <span className="font-semibold tracking-wide text-lg" style={{ color: THEME.primary }}>{L.brand}</span>
            <Pill>NYC · Small‑batch 小批量</Pill>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#about">{L.nav.about}</NavLink>
            <NavLink href="#origin">{L.nav.origin}</NavLink>
            <NavLink href="#gallery">{L.nav.gallery}</NavLink>
            <NavLink href="#process">{L.nav.process}</NavLink>
            <NavLink href="#brew">{L.nav.brew}</NavLink>
            <NavLink href="#storage">{L.nav.storage}</NavLink>
            <NavLink href="#faq">{L.nav.faq}</NavLink>
            <NavLink href="#contact">{L.nav.contact}</NavLink>
            <DropdownMenu label="More" items={[{label:"Brand Story", href:"#story"}]} />
            <a href="https://instagram.com/_tangqing_" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-80" style={{ color: THEME.primary }}>Instagram</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.28 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0) 100%)" }} />
        <div className="absolute -right-24 -top-24 w-[380px] h-[380px] rounded-full blur-3xl" style={{ background: THEME.accent, opacity: 0.35 }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-[1fr,380px] gap-10 items-center">
          <div>
            <Pill>Xiao Qing Gan · 小青柑</Pill>
            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold leading-tight" style={{ color: THEME.primary }}>{L.heroTitle}</h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-700 max-w-prose">{L.heroSub}</p>
            <div className="mt-7 flex gap-3">
              <a href="#about" className="rounded-xl border px-5 py-2.5 text-sm" style={{ borderColor: THEME.primaryDark, color: THEME.primaryDark }}>快速了解 · Learn more</a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 text-sm rounded-md shadow-sm border transition-transform active:scale-95" style={{ background: THEME.crimson, color: "#fff", borderColor: "#8e0a0a", letterSpacing: "0.5px" }}>Contact / Wholesale</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border shadow-sm bg-white/80 backdrop-blur" style={{ borderColor: THEME.accent }}>
            <div className="p-6">
              <img src={logoSrc} alt="TangQing logo" className="w-full h-auto object-contain"/>
            </div>
          </div>
        </div>
        <div className="w-full h-1" style={{ background: THEME.accentDark }} />
        <div className="w-full my-8" aria-hidden="true">
          <svg viewBox="0 0 1200 90" preserveAspectRatio="none" className="w-full h-[40px]">
            <path d="M0,60 C150,20 300,100 450,60 C600,20 750,100 900,60 C1050,20 1200,80 1200,80 L1200,90 L0,90 Z" fill="#8f7f57" fill-opacity="0.5" />
          </svg>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border shadow-sm bg-white/80 backdrop-blur" style={{ borderColor: THEME.accent }}>
            <img src="/photo1.jpg" alt="Xiao Qing Gan" className="w-full h-full object-cover" />
          </div>
          <div>
            <p>{L.aboutP1}</p>
            <p className="mt-3 italic text-zinc-600">{L.aboutP2}</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Click the button below to preview images locally (not uploaded). 点击下方按钮进行本地预览（不会上传服务器）。</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["/hero.jpg","/logo.jpg","/photo1.jpg","/photo2.jpg","/photo3.jpg","/photo4.png","/photo5.jpg"].map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border shadow-sm bg-white/80 backdrop-blur" style={{ borderColor: THEME.accent }}>
              <div className="w-full h-full">
                <img src={src} alt={`gallery-${i+1}`} className="w-full h-40 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} TangQing 唐青. All rights reserved</span>
          <div className="flex items-center gap-3">
            <a href="#about" className="hover:opacity-80">Origin／溯源</a>
            <a href="#contact" className="hover:opacity-80">Contact／联系</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
