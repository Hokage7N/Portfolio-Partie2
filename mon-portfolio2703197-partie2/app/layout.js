// components/RootLayout.js

import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import StoreProvider from '@/components/StoreProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '',
  description: '',
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <StoreProvider>
        <Header />
        {children}
        <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
