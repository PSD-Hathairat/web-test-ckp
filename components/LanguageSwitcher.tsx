'use client';
import { usePathname, useRouter } from 'next/navigation';


export default function LanguageSwitcher({ lang }: { lang: 'en' | 'th' }) {
const router = useRouter();
const pathname = usePathname() || '/en';
const other = lang === 'en' ? 'th' : 'en';


const swap = () => {
const segments = pathname.split('/').filter(Boolean);
if (segments.length === 0) {
router.push(`/${other}`);
return;
}
segments[0] = other; // replace first segment (language)
router.push('/' + segments.join('/'));
};


return (
<button
onClick={swap}
className="rounded-xl border border-white/10 px-3 py-1.5 hover:bg-white/10 transition"
aria-label="Switch language"
>
{lang === 'en' ? 'ไทย' : 'EN'}
</button>
);
}