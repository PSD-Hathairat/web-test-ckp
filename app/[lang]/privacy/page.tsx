import { copy } from '../copy';


export default function Privacy({ params }: { params: { lang: 'en' | 'th' } }) {
const t = copy[params.lang];
return (
<article className="prose prose-invert max-w-none">
<h1>{t.privacyTitle}</h1>
<p>{t.privacyBody}</p>
<h2 className="mt-6">{params.lang === 'en' ? 'What we collect' : 'เราเก็บข้อมูลอะไรบ้าง'}</h2>
<ul>
{params.lang === 'en' ? (
<>
<li>Account details (name, email)</li>
<li>Course preferences & progress</li>
<li>Basic analytics (cookies)</li>
</>
) : (
<>
<li>ข้อมูลบัญชีผู้ใช้ (ชื่อ อีเมล)</li>
<li>ความสนใจคอร์สและความก้าวหน้า</li>
<li>สถิติการใช้งานพื้นฐาน (คุกกี้)</li>
</>
)}
</ul>
</article>
);
}