import '@/app/globals.scss'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Menu from './components/Menu/Menu'

const poppins = Poppins({
  subsets:['latin'],
  weight: ["400", "500", "600", "700","800", "900"],
}) 

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Poppins&display=swap" rel="stylesheet"/>
      </head>
      <body className={poppins.className}>
        <Menu/>
        {children}
        </body>
    </html>
  )
}