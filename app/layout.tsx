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

      <body style={{ margin: 0 }} className={outfit.className}>
        <div className={styles.navContainer}>
          <div>
            <Link className={styles.navLinks} style={{ fontWeight: 900 }} href={'#'}>
              <Image src={`${basePath}/Content.png`} width="213" height='59' alt='nutrition rule logo'></Image>
            </Link>
          </div>
          <div>
            <Link className={styles.navLinks} href={'#'}>products</Link>
            <Link className={styles.navLinks} href={'#'}>about us</Link>
            <Link className={styles.navLinks} href={'#'}>contact us</Link>
          </div>
        </div>

        {children}


        <div style={{ position: 'relative', minHeight: 500, backgroundColor: 'black' }}>
          <Image src={`${basePath}/trendingStroke.png`} alt='background for footer' fill objectFit='cover' style={{ zIndex: 0 }}></Image>
          <div style={{ position: 'absolute', top: 100 }} className={styles.footerNavCont}>
            <Link className={styles.navLinks} style={{ fontWeight: 900 }} href={'#'}>
              <Image src={`${basePath}/Content.png`} width={213 * 1.4} height={59 * 1.4} alt='nutrition rule logo'></Image>
            </Link>
            <div>
              <Link className={styles.fotnavLinks} href={'#'}>products</Link>
              <Link className={styles.fotnavLinks} href={'#'}>about us</Link>
              <Link className={styles.fotnavLinks} href={'#'}>contact us</Link>
              <p style={{ color: 'white', borderTopStyle: 'solid', paddingTop: '1rem' }}>
                © 2023 Nutrition Rule. All Rights Reserved.
              </p>
            </div>
          </div>

        </div>

      </body>
    </html>
  )
}
