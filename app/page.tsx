'use client'

import React from 'react';
import Image from 'next/image';
import SlideShow from './SlideShow';
import styles from './page.module.scss';
import Link from 'next/link';
import Category from './category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import { relative } from 'path';
import { abort } from 'process';

export default function Home() {

  return (
    <div style={{ position: 'relative' }}>
      <Image fill src="/abstractBG.png" alt='abstract background' style={{ zIndex: -1 }}></Image>

      <div className={styles.navContainer}>
        <div>
          <Link className={styles.navLinks} style={{ fontWeight: 900 }} href={'#'}>
            <Image src="/Content.png" width="213" height='59' alt='nutrition rule logo'></Image>
          </Link>
        </div>
        <div>
          <Link className={styles.navLinks} href={'#'}>products</Link>
          <Link className={styles.navLinks} href={'#'}>about us</Link>
          <Link className={styles.navLinks} href={'#'}>contact us</Link>
        </div>
      </div>

      <div style={{ position: 'relative', height: '1700px', zIndex: '-1' }}>
        <Image src="/HeroBG.png" fill objectFit='cover' alt='rule background'></Image>
        <div className={styles.backgroundText}>
          <div className={styles.bgTextCont}>
            <p>Elevate Your Fitness with Nutrition Rule.</p>
            <div>
              <FontAwesomeIcon className={styles.socialIcons} icon={faInstagram} />
              <FontAwesomeIcon className={styles.socialIcons} icon={faYoutube} />
              <FontAwesomeIcon className={styles.socialIcons} icon={faTiktok} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.categoryContainer}>
        <div>
          <h1 className={styles.catTitle}>browse by category</h1>
          <p className={styles.catPara}>Browse our Products Based on What YOU Need!</p>
        </div>
        <div className={styles.catProduct}>
          <Category productName="Protein" maskImg="/MaskShape.png" productImg="/WheyCategory.png"></Category>
          <Category productName="Drinks" maskImg="/MaskShape.png" productImg="/TakeOffStrawBerry.png"></Category>
        </div>
      </div>

      <div style={{ position: 'relative', height: '1100px', marginTop: '3rem' }} >
        <Image fill src="/BrushBG2.png" objectFit='cover' alt='background for slider' style={{ zIndex: -1 }}></Image>
        <div className={styles.trendingSection}>
          <h1 className={styles.trendingTitle}>trending products</h1>
          <p className={styles.trendingPara}>Most Popular Products By Demand!</p>
          <SlideShow></SlideShow>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <div className={styles.reviewTitle}>See What Our Customers Say About Us!</div>
            <Image src="/Splash.png" alt='reviews background' width='700' height='700'></Image>
          </div>
          <div style={{ position: 'relative' }}>
            <div>
              <Image src="/changeTheRules.png" alt='message from team background' width={460 * 1.2} height={1060 * 1.2}></Image>
              <div className={styles.teamText}>
                <p className={styles.teamParagraph}>
                  We understand that the journey to optimal health is unique for each individual, and with Nutrition Rule, you have a steadfast partner supporting you every step of the way. Embrace our supplements with confidence, knowing that they are designed to unlock your potential, elevate your performance, and ultimately, make a positive impact on your life.
                </p>
                <p className={styles.teamParagraph}>
                  Thank you for choosing Nutrition Rule. Together, we are redefining the rules of nutrition for a healthier and brighter future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', minHeight: 500 }}>
        <Image src="/trendingStroke.png" alt='background for footer' fill objectFit='cover' style={{ zIndex: -1 }}></Image>
        <div style={{ position: 'absolute', top: 100 }} className={styles.footerNavCont}>
          <Link className={styles.navLinks} style={{ fontWeight: 900 }} href={'#'}>
            <Image src="/Content.png" width={213 * 1.4} height={59 * 1.4} alt='nutrition rule logo'></Image>
          </Link>
          <div>
            <Link className={styles.fotnavLinks} href={'#'}>products</Link>
            <Link className={styles.fotnavLinks} href={'#'}>about us</Link>
            <Link className={styles.fotnavLinks} href={'#'}>contact us</Link>
            <p style={{color: 'white'}}>
              2023 Nutrition Rule. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}


