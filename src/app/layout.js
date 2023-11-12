import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "@/app/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Witcher monsters',
  description: 'Witcher monsters',
}

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>

  <html lang="en" className='dark'>
    <body>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
  )
}
