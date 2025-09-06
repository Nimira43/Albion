import type { Metadata } from 'next' 
import { Poppins } from 'next/font/google' 
import '@/assets/styles/globals.css' 
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: {
    template: `%s | Albion`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
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
