'use client'

import React from 'react';
import Image from 'next/image';
import SlideShow from './SlideShow';
import styles from './page.module.scss';
import Category from './category';
import NavBar from './navBar';
import BackgroundSlider from './backgroundSlider';
import HomeContent from '@/HomeContent.json';

import { basePath } from '@/next.config';
import '@fortawesome/fontawesome-svg-core/styles.css'
import ReviewSlider from './reviewSlider';

export default function Home() {



  return (
    <div style={{ overflowX: 'clip' }}>



      <NavBar color='black' textColor='white' filter=''></NavBar>

      <BackgroundSlider></BackgroundSlider>


      <div className={styles.categoryContainer}>
        <div className={styles.categoryText}>
          <h1 className={styles.catTitle}>browse by category</h1>
          <div className={styles.catPara}>Browse our Products Based on What YOU Need!</div>
        </div>

        <div className={styles.cardRowsContainer}>
          <div className={styles.catCardsRow}>
            {HomeContent.Categories.firstRow.map(element => (
              <Category key={Math.random()} productLabel={element.categoryLabel} ProductName={element.categoryProductUrl} maskImg={`${basePath}/MaskShape.png`} productImg={`${basePath}/homeCategories/${element.categoryImg}`}></Category>
            ))}
          </div>
          <div className={styles.catCardsRow}>
          {HomeContent.Categories.secondRow.map(element => (
              <Category key={Math.random()} productLabel={element.categoryLabel} ProductName={element.categoryProductUrl} maskImg={`${basePath}/MaskShape.png`} productImg={`${basePath}/homeCategories/${element.categoryImg}`}></Category>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', backgroundColor: 'black' }} >
        <SlideShow></SlideShow>
      </div>

      <div className={styles.reviewsSection}>
        <div className={styles.reviewsSectionContaienr}>


          <div className={styles.teamMessageContainer}>


            <div className={styles.teamTextContainer}>
              <div className={styles.teamText}>
                <div className={styles.teamParagraph}>
                  We understand that the journey to optimal health is unique for each individual, and with Nutrition Rule, you have a steadfast partner supporting you every step of the way. Embrace our supplements with confidence, knowing that they are designed to unlock your potential, elevate your performance, and ultimately, make a positive impact on your life.
                </div>
                <div className={styles.teamParagraph}>
                  Thank you for choosing Nutrition Rule. Together, we are redefining the rules of nutrition for a healthier and brighter future.
                </div>
                <div className={styles.teamBigText}>
                  Sincerely, <br></br> The Nutrition Rule Team.
                </div>
              </div>
            </div>

            <div className={styles.teamImg}>
              <Image src={`${basePath}/changeTheRules2.png`} alt='change the rules' fill></Image>
            </div>
          </div>

          <div className={styles.reviewsSectionCont}>
            <div className={styles.reviewTitle}>See What Our Customers Say About Us!</div>
            <div className={styles.reviewSliderAndImageContainer}>

              <div className={styles.splashImg}>
                <Image className={styles.splashImgProper} src={`${basePath}/Splash.png`} alt='reviews background' fill></Image>
              </div>
              <div className={styles.reviewSliderContainer}>
                <ReviewSlider scrollDirection={true} reviewList={HomeContent.Reviews.firstColumn}></ReviewSlider>
                <ReviewSlider scrollDirection={false} reviewList={HomeContent.Reviews.secondColumn}></ReviewSlider>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}