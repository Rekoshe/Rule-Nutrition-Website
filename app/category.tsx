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
    <div className={styles.catCard}>
      <div className={styles.maskContainerContainer}>
        <div className={styles.maskContainer}>

          <Image onMouseEnter={() => { setScale(1.5) }} onMouseLeave={() => { setScale(1.2) }} src={props.productImg} width={400} height={400} alt='image of whey jar' style={{ objectFit: 'contain' }} className={styles.img}></Image>
          <Image src={props.maskImg} width={200} height={400} alt='image background' style={{ objectFit: 'contain', transform: `scale(${scale})` }} className={styles.mask}></Image>

        </div>
      </div>
      <span className={styles.productNameText}>{props.productName + ' >>'}</span>
    </div>
  )
}