'use client'

import React from 'react';
import styles from './page.module.scss'
import Card, { numberOfCardShown } from './card'
import { useState, useRef, useEffect } from 'react'
import { basePath } from '@/next.config';

export default function SlideShow() {

  const slider = useRef<null | HTMLDivElement>(null)
  const [position, setPosition] = useState(0);

  const ref = useRef<null | HTMLDivElement>(null);

  const [pagewidth, setPageWidth] = useState(0);

  useEffect(() => {
    setPageWidth(ref.current ? ref.current.offsetWidth : 0)
  }, [ref.current, pagewidth]);

  useEffect(() => {
    const interval = setInterval(() => {
      scroll();
    }, 10);
    return () => clearInterval(interval);
  }, [position]);

  const scroll = () => {

    setPosition(position + 1)

    if (slider.current != null) {
      slider.current.scroll({
        left: position,
      });

      if(position + pagewidth >= slider.current.scrollWidth){
        setPosition(0);
      }
    }
  }

  const numberOfProducts = 4;

  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <div ref={ref}>
      <div style={{ padding: '2rem' }}>
        <div className={styles.trendingSection}>
          {/* <Image src={`${basePath}/VectorLeft.png`} alt='arrow pointer' width='50' height='50' onClick={() => scroll(-1)} className={styles.leftbutton}></Image> */}
          <span className={styles.trendingTitle}>best selling products!</span>
          {/* <Image src={`${basePath}/VectorRight.png`} alt='arrow pointer' width='50' height='50' onClick={() => scroll(1)} className={styles.rightbutton}></Image> */}
        </div>
        <p className={styles.trendingPara}> Most Popular Products By Demand!</p>
      </div>

      <div className={styles.slideShow}>
        <div ref={slider} className={styles.cardsContainer}>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='someOtherFlavor' >Rule Pre-Workout1</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout2</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout3</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout4</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout5</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='someOtherFlavor' >Rule Pre-Workout6</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout7</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout8</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout9</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout10</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='someOtherFlavor' >Rule Pre-Workout1</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout2</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout3</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout4</Card>
          <Card textColor='white' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout5</Card>
        </div>
      </div>
    </div>
  )
}
