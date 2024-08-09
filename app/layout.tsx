import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// import { Inter } from 'next/font/google'; 
/*
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 */

export default function RootLayout({  children, }: 
  { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}
        <h1>My App</h1>
        <div>{ children }</div>
      </body>
    </html>
  )
}