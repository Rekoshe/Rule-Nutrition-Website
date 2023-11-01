import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { basePath } from '@/next.config'
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';

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

        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>

      </head>

      <body className={outfit.className} style={{overflowX: 'hidden'}}>


        {children}


        <div className={styles.footer}>
          <div className={styles.footerNavCont}>

            <div className={styles.footerTextContent}>
              <Link className={styles.footerNavImg} href={'/'}>
                <Image src={`${basePath}/Content.png`} style={{ objectFit: 'contain' }} fill alt='nutrition rule logo'></Image>
              </Link>
              <Link className={styles.fotnavLinks} href={'/AllProducts'}>products</Link>
              <Link className={styles.fotnavLinks} href={'#'}>contact us</Link>
              <Link className={styles.fotnavLinks} href={'#'}>about us</Link>
              <p className={styles.copyRightText}>
                © 2023 Nutrition Rule. All Rights Reserved.
              </p>
            </div>


            <div className={styles.footerImg}>
              <Image src={`${basePath}/Crown.png`} fill style={{ objectFit: 'contain' }} alt='Rule logo crown'></Image>
            </div>
          </div>

        </div>
      </body>
    </html>
  )
}
