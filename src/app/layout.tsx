import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { Footer, Header } from '@/shared/ui';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'KinoHub',
  description: 'Watch everything from everywhere',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <div className='flex-1'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
