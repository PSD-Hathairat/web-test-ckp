// app/[lang]/copy.ts
export type Lang = 'en' | 'th';


export const copy = {
en: {
heroTitle: 'Learn Languages with Confidence',
heroSubtitle: 'Small classes, friendly teachers, real progress — online and on campus.',
cta: 'Book a Free Trial',
aboutTitle: 'About Our School',
aboutBody:
'We are a community-focused language school offering flexible schedules and practical courses for all levels.',
privacyTitle: 'Privacy Policy',
privacyBody:
'We only collect the data necessary to provide our services and never sell your information to third parties.'
},
th: {
heroTitle: 'เรียนภาษาอย่างมั่นใจ',
heroSubtitle: 'คลาสขนาดเล็ก ครูเป็นกันเอง พัฒนาจริงทั้งออนไลน์และที่สาขา',
cta: 'จองคอร์สทดลองฟรี',
aboutTitle: 'เกี่ยวกับโรงเรียนของเรา',
aboutBody:
'เราเป็นโรงเรียนสอนภาษาที่เน้นชุมชน จัดตารางเรียนยืดหยุ่น และเนื้อหาที่ใช้ได้จริงสำหรับทุกระดับ',
privacyTitle: 'นโยบายความเป็นส่วนตัว',
privacyBody:
'เราเก็บข้อมูลเท่าที่จำเป็นในการให้บริการ และจะไม่ขายข้อมูลของคุณให้บุคคลที่สาม'
}
} as const;