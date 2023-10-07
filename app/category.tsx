'use client'

import React from 'react';
import Image from 'next/image'
import styles from './page.module.scss'
import { useState } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function Category(props: {
    productName: string; maskImg: string | StaticImport; productImg: string | StaticImport; 
}) {
    
  const [scale, setScale] = useState(1.2);
  return (
    <div style={{marginLeft: '3rem', marginRight: '3rem'}}>
      <div className={styles.maskContainerContainer}>
        <div className={styles.maskContainer}>
          <Image src={props.maskImg} fill alt='image background' style={{ objectFit: 'contain', transform: `scale(${scale})` }} className={styles.mask}></Image>
          <Image onMouseEnter={() => { setScale(1.5) }} onMouseLeave={() => { setScale(1.2) }} src={props.productImg} fill alt='image of whey jar' style={{ objectFit: 'contain' }} className={styles.img}></Image>
        </div>
      </div>
      <span className={styles.productNameText}>{props.productName}</span>
    </div>
  )
}