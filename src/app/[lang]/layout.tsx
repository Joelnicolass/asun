
import { Locale } from '@/i18n.config';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
// import videobg from '../../../public/assets/';
import { getDictionary } from '@/lib/dictionary';
import { RootLayoutProvider } from './RootLayoutProvider.component';
import Header from './components/header/header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  
  const { navigation } = await getDictionary(params.lang)
  return (
    <html lang={params.lang}>
        <body className={inter.className}>
      <RootLayoutProvider>
          <video
            autoPlay
            loop
            muted
            style={{
              objectFit: 'cover',
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              zIndex: -1,
            }}
          >
            <source src='/video.mp4' type='video/mp4' />
          </video>
          <Header navigation={navigation} lang={params.lang}></Header>
          <main>{children}</main>
        </RootLayoutProvider>
        </body>
    </html>
  );
}
