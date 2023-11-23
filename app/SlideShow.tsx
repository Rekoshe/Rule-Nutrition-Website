'use client'

import React from 'react';
import styles from './page.module.scss'
import Card, { numberOfCardShown } from './card'
import { useState, useRef, useEffect } from 'react'
import BestSellingProducts from '@/BestSellingList.json';

export default function SlideShow() {

  const slider = useRef<null | HTMLDivElement>(null)
  const [position, setPosition] = useState(0);
  const [bestList, setBestList] = useState(BestSellingProducts.BestProducts);
  const [newBestList, setNewBestList] = useState([{name: 'HYDROLYZED ISOLATE', flavor: 'Chocolate Caramel', id: 0}])

  const ref = useRef<null | HTMLDivElement>(null);

  const [pagewidth, setPageWidth] = useState(0);

  var bestlist: {
    name: string,
    flavor: string,
    id: number
  }[] = [];

  useEffect(() => {
    setPageWidth(ref.current ? ref.current.offsetWidth : 0)

    window.addEventListener('resize', handleResize)

    if (pagewidth != 0) {
      

      bestlist = bestList.map(element => (
        {name: element.name, flavor: element.flavor, id: 0}
      ))

      for (let i = 0; i < numberOfCardShown; i++) {
        bestlist.push({name: bestList[i].name, flavor: bestList[i].flavor, id: 0})
      }

      var num = 0;

      bestlist.forEach(element => {
        
        element.id = num;
        num++;
      });

      setNewBestList(bestlist);
    }

  }, [pagewidth, bestList]);

  useEffect(() => {
    const interval = setInterval(() => {
      scroll();
    }, 10);
    return () => clearInterval(interval);
  }, [position]);

  const  handleResize = () => {
    setPageWidth(ref.current ? ref.current.offsetWidth : 0)
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
    <div ref={ref} className={styles.slideShowContainer}>
      <div style={{ height: '20%' }}>
        <div className={styles.trendingSection}>
          {/* <Image src={`${basePath}/VectorLeft.png`} alt='arrow pointer' width='50' height='50' onClick={() => scroll(-1)} className={styles.leftbutton}></Image> */}
          <span className={styles.trendingTitle}>best selling products!</span>
          {/* <Image src={`${basePath}/VectorRight.png`} alt='arrow pointer' width='50' height='50' onClick={() => scroll(1)} className={styles.rightbutton}></Image> */}
        </div>
        <p className={styles.trendingPara}> Most Popular Products By Demand!</p>
      </div>

      <div className={styles.slideShow} >
        <div ref={slider} className={styles.cardsContainer}>
          {newBestList.map(element => (
            <Card key={element.id} textColor='white' product={element.name} flavor={element.flavor} pageWidth={pagewidth}></Card>
          ))}
        </div>
      </div>
    </div>
  )
}
