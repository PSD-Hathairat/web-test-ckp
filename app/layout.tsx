import '../styles/globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';


export const metadata: Metadata = {
title: 'My Webdoc — Language School',
description: 'A simple bilingual school website (Thai/English)'
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<Script
src="https://cdn-cmp.predictive.dev/cmp.js"
strategy="afterInteractive"
charSet="UTF-8"
/>
<Script
src="https://cdn-cmp.predictive.dev/5d2febd3-15e2-4bca-b1eb-4cbf1895e0ed/init.js"
strategy="afterInteractive"
charSet="UTF-8"
/>
{children}
</body>
</html>
);
}
