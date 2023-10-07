'use client'

import React from 'react';
import Image from 'next/image'
import styles from './page.module.scss'
import Card, { cardPadding } from './card'
import { cardWidth, cardMargin } from './card';
import { useState } from 'react'
import { basePath } from '@/next.config';
import useWindowDimensions from "./windowDeminsions"

export default function SlideShow() {

  const { height, width } = useWindowDimensions();

  var numberOfCardShown = 4;

  if (width != null && width < 800) {
    numberOfCardShown = 1;
  } else if (width != null && width < 1170) {
    numberOfCardShown = 2;
  } else if (width != null && width < 1500) {
    numberOfCardShown = 3;
  }

  const numberOfProducts = 7;

  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <div>
      <div className={styles.slideShowContainer}>
        <Image src={`${basePath}/VectorLeft.png`} alt='arrow pointer' width='20' height='20' onClick={() => { if (selectedCard < 0) setSelectedCard(selectedCard + 1) }} className={styles.leftbutton}></Image>
        <div className={styles.slideShow} style={{ width: (cardMargin * 2 + cardWidth) * numberOfCardShown }}>
          <div className={styles.cardsContainer} style={{ transform: `translateX(${(cardWidth + cardMargin * 2) * selectedCard}px)` }}>
            <Card image={`${basePath}/ruleProduct.png`} flavor='someOtherFlavor' >Rule Pre-Workout1</Card>
            <Card image={`${basePath}/ruleProduct.png`} flavor='Pineapple & Coconut' >Rule Pre-Workout2</Card>
            <Card image={`${basePath}/ruleProduct.png`} flavor='Pineapple & Coconut' >Rule Pre-Workout3</Card>
            <Card image={`${basePath}/ruleProduct.png`} flavor='Pineapple & Coconut' >Rule Pre-Workout4</Card>
            <Card image={`${basePath}/ruleProduct.png`} flavor='Pineapple & Coconut' >Rule Pre-Workout5</Card>
            <Card image={`${basePath}/ruleProduct.png`} flavor='Pineapple & Coconut' >Rule Pre-Workout6</Card>
            <Card image={`${basePath}/ruleProduct.png`} flavor='Pineapple & Coconut' >Rule Pre-Workout7</Card>
          </div>
        </div>
        <Image src={`${basePath}/VectorRight.png`} alt='arrow pointer' width='20' height='20' onClick={() => { if (selectedCard > (numberOfProducts * -1) + numberOfCardShown) { setSelectedCard(selectedCard - 1) } }} className={styles.rightbutton}></Image>
      </div>
    </div>
  )
}