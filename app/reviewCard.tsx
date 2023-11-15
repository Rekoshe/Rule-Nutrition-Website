import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ReviewCard(props: {
    carWidth: number; title: string; children: string; icon: string | StaticImport; reviewerName: string; 
}) {

    


    return (
        <div className={styles.reviewCardCont}>
            <div style={{ fontSize: props.carWidth * 0.07 }}>{props.title}</div>
            <FontAwesomeIcon style={{ fontSize: props.carWidth * 0.05 }} className={styles.reviewQoute} icon={faQuoteLeft}></FontAwesomeIcon>
            <div style={{ fontSize: props.carWidth * 0.04 }} className={styles.reviewPara}>{props.children}</div>
            <div style={{ textAlign: 'right', fontSize: props.carWidth * 0.05 }} className={styles.reviewQoute}><FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon></div>
            <div style={{ display: 'flex' }}>
                <div className={styles.reviewImage}>
                    <Image src={props.icon} alt='review Icon' fill style={{ objectFit: 'contain', borderRadius: '100%'}}></Image>
                </div>
                <div>
                    <div style={{ fontSize: props.carWidth * 0.05 }}>{props.reviewerName}</div>
                    <div style={{ color: 'orange', fontSize: props.carWidth * 0.05 }}> ★  ★  ★  ★  ★</div>
                </div>
            </div>
        </div>
    )
}