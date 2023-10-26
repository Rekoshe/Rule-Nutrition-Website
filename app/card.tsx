import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import useWindowDimensions from "./windowDeminsions";
import { useEffect } from 'react';


export default function Card(props: { image: string | StaticImport; children: string; flavor: string; pageWidth: number }) {

    const cardWidth = (width: number) => {
        if (width != null && width != 0) {
            if (width <= 720) {
                numberOfCardShown = 2;
            }
            return (width / numberOfCardShown)
        }
    }

    return (
        <div className={styles.cardContainer} style={{ width: cardWidth(props.pageWidth), padding:'5px' }}>
            <div>
                <Image fill style={{ padding: cardPadding(props.pageWidth), paddingTop: 140 }} className={styles.cardImage} src={props.image} alt={props.children}></Image>
            </div>

            <h5 className={styles.cardName}>{props.children}</h5>
            <h6 style={{ opacity: 0.5, color: 'white' }} className={styles.cardPrice}>{props.flavor}</h6>
            <div><h5 style={{ color: 'orange' }}>★  ★  ★  ★  ★</h5></div>
            <button className={styles.cardButton}>View Product</button>
        </div>
    )
}


export const cardMargin = 1;
export var numberOfCardShown = 5;

export function cardPadding(width: number) {

    if (width != null && width <= 720) {
        return (30)
    } else {
        return (70)
    }
}