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
            <h3>{props.title}</h3>
            <FontAwesomeIcon className={styles.reviewQoute} icon={faQuoteLeft}></FontAwesomeIcon>
            <p className={styles.reviewPara}>{props.children}</p>
            <p style={{ textAlign: 'right', margin: 0 }} className={styles.reviewQoute}><FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon></p>
            <div style={{ display: 'flex' }}>
                <Image src={props.icon} alt='review Icon' width={60} height={60} style={{marginRight: '1rem'}}></Image>
                <div>
                    <h3 style={{ margin: 0 }}>{props.reviewerName}</h3>
                    <h5 style={{color: 'yellow', margin: 0}}> ★  ★  ★  ★  ★</h5>
                </div>
            </div>
        </div>
    )
}