'use client'

import React from 'react';
import styles from './page.module.scss'
import Card, { numberOfCardShown } from './card'
import { useState, useRef, useEffect } from 'react'
import BestSellingProducts from '@/BestSellingList.json';

export default function SlideShow() {

  const slider = useRef<null | HTMLDivElement>(null)
  const [position, setPosition] = useState(0);

  const ref = useRef<null | HTMLDivElement>(null);

  const [pagewidth, setPageWidth] = useState(0);

  useEffect(() => {
    setPageWidth(ref.current ? ref.current.offsetWidth : 0)
  }, [pagewidth]);

  useEffect(() => {
    const interval = setInterval(() => {
      scroll();
    }, 10);
    return () => clearInterval(interval);
  }, [position]);

  const bestSellers = () => {

    var bestList = [];

    BestSellingProducts.BestProducts.forEach(element => {
      bestList.push(element);
    });

    for (let elemnent = 0; elemnent < numberOfCardShown; elemnent++) {
      bestList.push(BestSellingProducts.BestProducts[elemnent]);      
    }

    return (
      <>
        {bestList.map(element => (
          <Card key={Math.random()} textColor='white' product={element.name} flavor={element.flavor} pageWidth={pagewidth}></Card>
        ))}
        
      </>
    )
  }

  const scroll = () => {

    setPosition(position + 1)

    if (slider.current != null) {
      slider.current.scroll({
        left: position,
      });

      if (position + pagewidth >= slider.current.scrollWidth) {
        setPosition(0);
      }
    }
  }

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

      <div className={styles.slideShow} >
        <div ref={slider} className={styles.cardsContainer}>
          {bestSellers()}
        </div>
      </div>
    </div>
  )
}
