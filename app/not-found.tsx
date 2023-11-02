'use client'

import { notFound } from "next/navigation"
import NavBar from "./navBar"
import styles from './page.module.scss'
import Image from "next/image"
import Link from "next/link"
import { basePath } from "@/next.config"

export default function NotFound() {
    return (
        <>
            <NavBar color={'white'} textColor={'black'} filter="invert(100)"></NavBar>
            <div className={styles.notFoundSection}>
                <div className={styles.notFoundTextContainer}>
                    <div className={styles.notFoundBigText}>oops! <br></br>page not found.</div>
                    <div className={styles.notFoundPara}>it seems like there&apos;s an issue. The page you&apos;re <br></br> looking for could not be found.</div>
                    <Link className={styles.homepageButton} href={'/'}>back to homepage</Link>
                </div>
                <div className={styles.notFoundImage}>
                    <Image style={{objectFit: 'contain'}} fill src={`${basePath}/404.png`} alt="404 image"></Image>
                </div>
            </div>
        </>
    )
}