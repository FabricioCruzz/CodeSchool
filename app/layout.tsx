import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Code School',
  description: 'Impulsione sua carreira!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
