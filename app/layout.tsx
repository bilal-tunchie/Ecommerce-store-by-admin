import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PreviewModal from '@/components/preview-modal';
import { ToastProvider } from '@/providers/toast-provider';
import { ThemeProvider } from '@/providers/theme-provider';

const font = Urbanist({ subsets: ['latin'] })

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem
        >
          <ToastProvider />
          <PreviewModal />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
