import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';


export const dynamicParams = false; // only allow specified langs
export const metadata: Metadata = {
title: 'My Webdoc — Language School'
};


export function generateStaticParams() {
return [{ lang: 'en' }, { lang: 'th' }];
}


export default function LangLayout({
children,
params
}: {
children: React.ReactNode;
params: { lang: 'en' | 'th' };
}) {
return (
<div>
<Navbar lang={params.lang} />
<main className="container py-10 space-y-8">{children}</main>
<footer className="container py-10 text-xs text-white/60">
© {new Date().getFullYear()} My Webdoc
</footer>
</div>
);
}