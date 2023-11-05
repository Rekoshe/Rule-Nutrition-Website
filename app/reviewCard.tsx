import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ReviewCard(props: { title: string; children: string; icon: string | StaticImport; reviewerName: string; }) {
    return (
        <div className={styles.reviewCardCont}>
            <div>{props.title}</div>
            <FontAwesomeIcon className={styles.reviewQoute} icon={faQuoteLeft}></FontAwesomeIcon>
            <div className={styles.reviewPara}>{props.children}</div>
            <div style={{ textAlign: 'right', margin: 0 }} className={styles.reviewQoute}><FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon></div>
            <div style={{ display: 'flex' }}>
                <div className={styles.reviewImage}>
                    <Image src={props.icon} alt='review Icon' fill style={{ objectFit: 'contain' }}></Image>
                </div>
                <div>
                    <div style={{ margin: 0 }}>{props.reviewerName}</div>
                    <div style={{ color: 'yellow', margin: 0 }}> ★  ★  ★  ★  ★</div>
                </div>
            </div>
        </div>
    )
}