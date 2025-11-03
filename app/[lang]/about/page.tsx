import { copy } from '../copy';


export default function About({ params }: { params: { lang: 'en' | 'th' } }) {
const t = copy[params.lang];
return (
<article className="prose prose-invert max-w-none">
<h1>{t.aboutTitle}</h1>
<p>{t.aboutBody}</p>
<ul>
{params.lang === 'en' ? (
<>
<li>Experienced native and bilingual teachers</li>
<li>Evening & weekend classes</li>
<li>Online + on-campus hybrid options</li>
</>
) : (
<>
<li>ครูผู้สอนมากประสบการณ์ เจ้าของภาษาและสองภาษา</li>
<li>มีคลาสช่วงเย็นและสุดสัปดาห์</li>
<li>เรียนได้ทั้งออนไลน์และที่สาขา</li>
</>
)}
</ul>
</article>
);
}