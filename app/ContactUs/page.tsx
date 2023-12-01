'use client'

import Image from "next/image";
import Link from "next/link";
import styles from './contactUS.module.scss'
import { basePath } from "@/next.config";
import NavBar from "../navBar";

export default function ContactUS() {
    return (
        <div className={styles.body}>
            <NavBar filter="" textColor='white' color="black"></NavBar>
            <div className={styles.firstSection}>
                <div className={styles.aboutImg}>
                    <Image fill src={`${basePath}/aboutImg.png`} alt="about image" style={{ objectFit: 'contain' }}></Image>
                </div>
                <div className={styles.mobileAboutImg}>
                    <Image fill src={`${basePath}/mobileAboutImg.png`} alt="about image" style={{ objectFit: 'contain' }}></Image>
                </div>
                <div className={styles.buttonSection}>
                    <Link className={styles.getStartedButton} href={'/AllProducts'}>get started</Link>
                    <Link className={styles.contactButton} href={'#contact'}>Contact us!</Link>
                </div>
            </div>
            <div className={styles.secondSection}>
                <div className={styles.descImg}>
                    <Image fill src={`${basePath}/descImg.png`} style={{ objectFit: 'contain' }} alt="background 69"></Image>
                </div>
                <div className={styles.secondSectionText}>
                    <div className={styles.bigText}>Welcome to a World of High-Quality Nutrition Tailored to Your Needs.</div>
                    <div className={styles.para}>At <span style={{ color: '#FA2' }}>Nutrition Rule,</span> we&apos;re your ally in achieving fitness excellence through science-backed nutrition, empowering you to reach your goals with high-quality supplements and unwavering commitment.</div>
                    <div className={styles.mobileDescImage}>
                        <Image alt='mobile desc image' src={`${basePath}/mobileDescImg.png`} fill style={{objectFit: 'contain'}}></Image>
                    </div>
                    <div className={styles.bigText}>Join Us in The Pursuit of Excellence</div>
                    <div className={styles.para}>Embark on your fitness journey with <span style={{ color: '#FA2' }}>Nutrition Rule.</span> Whether you&apos;re an athlete, bodybuilder, or striving to enhance your well-being, our products and expertise will help you reach your goals.</div>
                </div>
            </div>
            <div id="contact" className={styles.thirdSection}>
                <div className={styles.contactImg}>
                    <Image fill src={`${basePath}/contactImg.png`} alt="contact image" style={{ objectFit: 'contain' }}></Image>
                </div>
                <div className={styles.mobileContactImg}>
                    <Image fill src={`${basePath}/mobileContactImg.png`} alt="contact image" style={{ objectFit: 'contain' }}></Image>
                </div>
                <div className={styles.contactText}>
                    Questions or Comments? Email us at<br></br>
                    <span style={{ color: '#FA2', fontWeight: '700' }}>info@nutritionrule.com</span><br></br>
                    and we&apos;ll get back to you as soon as possible.
                </div>
            </div>
        </div>
    )
}