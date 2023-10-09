'use client'

import React from 'react';
import Image from 'next/image';
import SlideShow from './SlideShow';
import styles from './page.module.scss';
import Link from 'next/link';
import Category from './category';
import ReviewCard from './reviewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import { basePath } from '@/next.config';

export default function Home() {

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* <Image fill src={`${basePath}/abstractBG.png`} alt='abstract background' objectFit='cover' style={{ zIndex: -1 }}></Image> */}

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', backgroundColor: 'black', overflow: 'hidden'}}>
        <Image src={`${basePath}/HeroBG.png`} width={1920} height={800} objectFit='contain' alt='rule background'></Image>
        <div className={styles.backgroundText}>
          <div className={styles.bgTextCont}>
            <p>Elevate Your Fitness with Nutrition Rule.</p>
            <p style={{ marginBottom: '0', marginTop: '3rem' }}>@NutriRule</p>
            <div>
              <FontAwesomeIcon className={styles.socialIcons} icon={faInstagram} />
              <FontAwesomeIcon className={styles.socialIcons} icon={faYoutube} />
              <FontAwesomeIcon className={styles.socialIcons} icon={faTiktok} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.backgroundButtonSection}>
        <button className={styles.backgroundButton} style={{backgroundColor: 'yellow'}}></button>
        <button className={styles.backgroundButton}></button>
        <button className={styles.backgroundButton}></button>
      </div>

      <div className={styles.categoryContainer}>
        <div>
          <h1 className={styles.catTitle}>browse by category</h1>
          <p className={styles.catPara}>Browse our Products Based on What YOU Need!</p>
        </div>
        <div className="row">
          <div className='col-sm-4 px-1'>
            <Category productName="Protein" maskImg={`${basePath}/MaskShape.png`} productImg={`${basePath}/WheyJar.png`}></Category>
          </div>
          <div className='col-sm-4 px-1'>
            <Category productName="Drinks" maskImg={`${basePath}/MaskShape.png`} productImg={`${basePath}/WheyJar.png`}></Category>
          </div>
          <div className='col-sm-4 px-1'>
            <Category productName="Protein" maskImg={`${basePath}/MaskShape.png`} productImg={`${basePath}/WheyJar.png`}></Category>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', height: '1100px', marginTop: '3rem', backgroundColor: 'black' }} >
        {/* <Image fill src={`${basePath}/BrushBG2.png`} objectFit='cover' alt='background for slider' style={{ zIndex: -1 }}></Image> */}
        <div className={styles.trendingSection}>
          <h1 className={styles.trendingTitle}>trending products</h1>
          <p className={styles.trendingPara}>Most Popular Products By Demand!</p>
          <SlideShow></SlideShow>
        </div>
      </div>

      <div className='row'>


        <div className='col-xxl-5' style={{ position: 'relative', display: 'flex', justifyContent: 'center', bottom: '200px' }}>

          <Image src={`${basePath}/changeTheRules.png`} alt='message from team background' width={460 * 1.2} height={1060 * 1.2}></Image>
          <div style={{ position: 'absolute', width: 500, top: 200 }}>
            <div className={styles.teamText}>
              <p className={styles.teamParagraph}>
                We understand that the journey to optimal health is unique for each individual, and with Nutrition Rule, you have a steadfast partner supporting you every step of the way. Embrace our supplements with confidence, knowing that they are designed to unlock your potential, elevate your performance, and ultimately, make a positive impact on your life.
              </p>
              <p className={styles.teamParagraph}>
                Thank you for choosing Nutrition Rule. Together, we are redefining the rules of nutrition for a healthier and brighter future.
              </p>
              <p className={styles.teamBigText}>
                Sincerely, The Nutrition Rule Team.
              </p>
            </div>
          </div>

        </div>

        <div className='col-xxl-7' style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className={styles.reviewTitle}>See What Our Customers Say About Us!</div>
          <div className={styles.reviewsContainer}>
            <div style={{ display: 'flex' }}>
              <div style={{ marginTop: '8rem' }}>
                <ReviewCard title='Life-Changing Supplements!' icon={`${basePath}/Lydia.png`} reviewerName='Lydia Anderson'>{"I've tried countless supplements, but Nutrition Rule stands out! Their products are top-notch, and I've seen incredible results. I can't recommend them enough."}</ReviewCard>
                <ReviewCard title='Life-Changing Supplements!' icon={`${basePath}/Lydia.png`} reviewerName='Lydia Anderson'>{"I've tried countless supplements, but Nutrition Rule stands out! Their products are top-notch, and I've seen incredible results. I can't recommend them enough."}</ReviewCard>
                <ReviewCard title='Life-Changing Supplements!' icon={`${basePath}/Lydia.png`} reviewerName='Lydia Anderson'>{"I've tried countless supplements, but Nutrition Rule stands out! Their products are top-notch, and I've seen incredible results. I can't recommend them enough."}</ReviewCard>
              </div>
              <div style={{ marginBottom: '8rem' }}>
                <ReviewCard title='Life-Changing Supplements!' icon={`${basePath}/Lydia.png`} reviewerName='Lydia Anderson'>{"I've tried countless supplements, but Nutrition Rule stands out! Their products are top-notch, and I've seen incredible results. I can't recommend them enough."}</ReviewCard>
                <ReviewCard title='Life-Changing Supplements!' icon={`${basePath}/Lydia.png`} reviewerName='Lydia Anderson'>{"I've tried countless supplements, but Nutrition Rule stands out! Their products are top-notch, and I've seen incredible results. I can't recommend them enough."}</ReviewCard>
                <ReviewCard title='Life-Changing Supplements!' icon={`${basePath}/Lydia.png`} reviewerName='Lydia Anderson'>{"I've tried countless supplements, but Nutrition Rule stands out! Their products are top-notch, and I've seen incredible results. I can't recommend them enough."}</ReviewCard>
              </div>
            </div>

          </div>
          <Image style={{ margin: '5rem' }} src={`${basePath}/Splash.png`} alt='reviews background' width='1200' height='1200'></Image>
        </div>

      </div>



    </div>
  )
}


