import Link from 'next/link';
import { copy } from './copy';


export default function Home({ params }: { params: { lang: 'en' | 'th' } }) {
const t = copy[params.lang];
return (
<section className="space-y-8">
<div className="card rounded-2xl p-10">
<h1 className="text-3xl md:text-4xl font-semibold mb-3">{t.heroTitle}</h1>
<p className="text-white/80 text-base md:text-lg">{t.heroSubtitle}</p>
<div className="mt-6">
<Link
href={`/${params.lang}/about`}
className="text-white/80 inline-block rounded-xl bg-[var(--accent)] px-4 py-2 font-medium hover:opacity-90"
>
{t.cta}
</Link>
</div>
</div>


<div className="grid md:grid-cols-3 gap-5">
{[1,2,3].map((i) => (
<div key={i} className="card rounded-2xl p-6">
<h3 className="font-semibold mb-2">{params.lang === 'en' ? `Course Highlight ${i}` : `จุดเด่นคอร์ส ${i}`}</h3>
<p className="text-white/70 text-sm">
{params.lang === 'en'
? 'Interactive lessons, placement tests, and certificates.'
: 'บทเรียนโต้ตอบแบบเรียลไทม์ แบบทดสอบวัดระดับ และใบรับรองจบหลักสูตร'}
</p>
</div>
))}
</div>
</section>
);
}