'use client'

import React from 'react';
import Image from 'next/image';
import SlideShow from './SlideShow';
import styles from './page.module.scss';
import Link from 'next/link';
import Category from './category';
import ReviewCard from './reviewCard';
import NavBar from './navBar';
import BackgroundSlider from './backgroundSlider';

import { basePath } from '@/next.config';
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function Home() {

  

  return (
    <div style={{ overflow: 'hidden' }}>



      <NavBar color='black' textColor='white' filter=''></NavBar>

      <BackgroundSlider></BackgroundSlider>


      <div className={styles.categoryContainer}>
        <div className={styles.categoryText}>
          <h1 className={styles.catTitle}>browse by category</h1>
          <div className={styles.catPara}>Browse our Products Based on What YOU Need!</div>
        </div>

        <div className={styles.cardRowsContainer}>
          <div className={styles.catCardsRow}>
            <Category productName="all supplements" maskImg={`${basePath}/MaskShape.png`} productImg={`${basePath}/allSups.png`}></Category>
            <Category productName="BCAA & ENERGY DRINKS" maskImg={`${basePath}/MaskShape.png`} productImg={`${basePath}/takeOff.png`}></Category>
            <Category productName="pre-workout" maskImg={`${basePath}/MaskShape.png`} productImg={`${basePath}/preWorkout.png`}></Category>
          </div>
          <div className={styles.catCardsRow}>
            <Category productName="intra-workout" maskImg={`${basePath}/MaskShape.png`} productImg={`${basePath}/EAA.png`}></Category>
            <Category productName="post-workout" maskImg={`${basePath}/MaskShape.png`} productImg={`${basePath}/Creatine.png`}></Category>
            <Category productName="Protein" maskImg={`${basePath}/MaskShape.png`} productImg={`${basePath}/WheyJar.png`}></Category>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', margin: '2rem auto', backgroundColor: 'black' }} >
        <SlideShow></SlideShow>
      </div>

      <div className={styles.reviewsSection}>
        <div className='row'>


          <div className='col-xxl-5' style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>

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
    </div>
  )
}