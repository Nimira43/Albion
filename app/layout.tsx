import type { Metadata } from 'next' 
import { Poppins } from 'next/font/google' 
import '@/assets/styles/globals.css' 
import { APP_NAME } from '@/lib/constants'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: 'E-commerce website using Next JS 15, TypeScript, Tailwind, Shadcn, Prisma and PostgreSQL',
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode 
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  ) 
}
