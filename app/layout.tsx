import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { basePath } from '@/next.config'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nutrition Rule',
  description: 'Your Choice for Nutrition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href={`${basePath}/Favicon.png`}
          type="image/<generated>"
          sizes="<generated>"
        />

      </head>

      <body style={{ margin: 0 }} className={outfit.className}>{children}</body>
    </html>
  )
}
