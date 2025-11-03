'use client';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';


export default function Navbar({ lang }: { lang: 'en' | 'th' }) {
const t = (k: string) =>
({
en: { home: 'Home', about: 'About', privacy: 'Privacy' },
th: { home: 'หน้าแรก', about: 'เกี่ยวกับ', privacy: 'ความเป็นส่วนตัว' }
} as const)[lang][k as 'home' | 'about' | 'privacy'];


return (
<header className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/5 z-50">
<nav className="container flex items-center gap-6 py-4">
<Link href={`/${lang}`} className="flex items-center gap-3">
<Image src="/logo.svg" alt="Logo" width={36} height={36} />
<span className="font-semibold text-lg">My Webdoc</span>
</Link>
<div className="ml-auto flex items-center gap-5 text-sm">
<Link href={`/${lang}`} className="hover:opacity-80">{t('home')}</Link>
<Link href={`/${lang}/about`} className="hover:opacity-80">{t('about')}</Link>
<Link href={`/${lang}/privacy`} className="hover:opacity-80">{t('privacy')}</Link>
<LanguageSwitcher lang={lang} />
</div>
</nav>
</header>
);
}