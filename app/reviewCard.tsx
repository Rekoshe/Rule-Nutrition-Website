import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ReviewCard(props: { title: string; children: string; icon: string | StaticImport; reviewerName: string;}) {

    const [carHeight, setCarHeight] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);


    useEffect(() => {

        setCarHeight(ref.current ? ref.current.offsetHeight : 0);
        
    }, [])


    return (
        <div ref={ref} className={styles.reviewCardCont} style={{ margin: '0.1rem'}}>
            <div style={{ fontSize: carHeight * 0.5 }}>{props.title}</div>
            <FontAwesomeIcon style={{ fontSize: carHeight * 0.5 }} className={styles.reviewQoute} icon={faQuoteLeft}></FontAwesomeIcon>
            <div style={{ fontSize: carHeight * 0.35 }} className={styles.reviewPara}>{props.children}</div>
            <div style={{ textAlign: 'right', fontSize: carHeight * 0.5 }} className={styles.reviewQoute}><FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon></div>
            <div style={{ display: 'flex' }}>
                <div className={styles.reviewImage}>
                    <Image src={props.icon} alt='review Icon' fill style={{ objectFit: 'contain' }}></Image>
                </div>
                <div>
                    <div style={{ fontSize: carHeight * 0.5 }}>{props.reviewerName}</div>
                    <div style={{ color: 'orange', fontSize: carHeight * 0.5 }}> ★  ★  ★  ★  ★</div>
                </div>
            </div>
        </div>
    )
}