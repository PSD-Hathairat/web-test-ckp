import '../styles/globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
title: 'My Webdoc — Language School',
description: 'A simple bilingual school website (Thai/English)'
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
