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
<script src="https://cdn-cmp.predictive.dev/cmp.js" charset="UTF-8"></script>
<script src="https://cdn-cmp.predictive.dev/ead5e285-8bef-4ba0-a13d-3014eec6ac95/init.js" charset="UTF-8"></script>
{children}
</body>
</html>
);
}
