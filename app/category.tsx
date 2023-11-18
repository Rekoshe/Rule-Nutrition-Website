'use client'

import React from 'react';
import Image from 'next/image'
import styles from './page.module.scss'

import { useState } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';

export default function Category(props: {
  ProductName: any;
  productLabel: string; maskImg: string | StaticImport; productImg: string | StaticImport;
}) {

  const [scale, setScale] = useState(1.2);
  var displayValue = 'block'

  if(props.ProductName == ""){
    displayValue = 'none';
  }

  return (
    <Link href={`/AllProducts${props.ProductName}`} className={styles.catCard}>
      <div className={styles.cardImages}>
        <div className={styles.maskImage}>
          <Image src={props.maskImg} fill alt='image background' style={{ objectFit: 'contain', transform: `scale(${scale})`, display: displayValue }} className={styles.mask}></Image>
        </div>

        <div className={styles.productImage}>
          <Image onMouseEnter={() => { setScale(1.6) }} onMouseLeave={() => { setScale(1.2) }} src={props.productImg} fill alt='image of whey jar' style={{ objectFit: 'contain' }} className={styles.img}></Image>
        </div>
      </div>
      <span className={styles.productNameText}>{props.productLabel + ' >>'}</span>
    </Link>
  )
}