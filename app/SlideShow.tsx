'use client'

import React from 'react';
import Image from 'next/image'
import styles from './page.module.scss'
import Card from './card'
import { cardWidth, cardMargin } from './card';
import { useState } from 'react'

export default function SlideShow() {

  const numberOfCardShown = 4;

  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <div>
      
      <div className={styles.slideShowContainer}>
        <Image src='/VectorLeft.png' alt='arrow pointer' width='20' height='20' onClick={() => { if (selectedCard < 1) setSelectedCard(selectedCard + 1) }} className={styles.leftbutton}></Image>
        <div className={styles.slideShow} style={{ width: (cardMargin * 2 + cardWidth) * numberOfCardShown }}>
          <div className={styles.cardsContainer} style={{ transform: `translateX(${(cardWidth + cardMargin * 2) * selectedCard}px)` }}>
            <Card image="/ruleProduct.png" flavor='Pineapple & Coconut' >Rule Pre-Workout</Card>
            <Card image="/ruleProduct.png" flavor='Pineapple & Coconut' >Rule Pre-Workout</Card>
            <Card image="/ruleProduct.png" flavor='Pineapple & Coconut' >Rule Pre-Workout</Card>
            <Card image="/ruleProduct.png" flavor='Pineapple & Coconut' >Rule Pre-Workout</Card>
            <Card image="/ruleProduct.png" flavor='Pineapple & Coconut' >Rule Pre-Workout</Card>
            <Card image="/ruleProduct.png" flavor='Pineapple & Coconut'>Rule Pre-Workout</Card>
            <Card image="/ruleProduct.png" flavor='Pineapple & Coconut' >Rule Pre-Workout</Card>
          </div>
        </div>
        <Image src='/VectorRight.png' alt='arrow pointer' width='20' height='20' onClick={() => { if (selectedCard > -5) { setSelectedCard(selectedCard - 1) } }} className={styles.rightbutton}></Image>
      </div>
    </div>
  )
}