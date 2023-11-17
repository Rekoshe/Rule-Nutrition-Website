import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import ProductsList from '@/ProductList.json';
import { basePath } from "@/next.config";
import { useState } from 'react';


export default function Card(props: { product: string; flavor: string; pageWidth: number; textColor: string; }) {

    var prdct = ProductsList.products.find((elemnent) => elemnent.name == props.product);
    var flvr = prdct?.flavours.find((element) => element.name == props.flavor)

    const [hasFalvor, setHasFalvor] = useState(true);

    var mobileMultiplier = 1;

    const cardWidth = (width: number): number => {
        if (width != null && width != 0) {
            if (width <= 720) {
                numberOfCardShown = 2;
                mobileMultiplier = 1.3;
            }
            return (width / numberOfCardShown) - 1
        }
        return 0;
    }


    return (
        <div className={styles.cardContainer} style={{ width: cardWidth(props.pageWidth), padding: '5px' }}>
            <div className={styles.cardImageHolder} style={{ height: cardWidth(props.pageWidth) }}>
                <div className={styles.cardImageContainer} >
                    <Image fill className={styles.cardImage} src={`${basePath}/products/${flvr?.img}`} alt={`${prdct?.name} ${flvr?.name}`}></Image>
                </div>
            </div>

            <div className={styles.cardName} style={{ fontSize: cardWidth(props.pageWidth) * 0.073, color: props.textColor }}>{prdct?.name}</div>
            <div style={{ color: props.textColor, fontSize: cardWidth(props.pageWidth) * 0.07, display: hasFalvor ? 'block' : 'none' }} className={styles.cardPrice}>{flvr?.name}</div>

            <Link href={`/Product${prdct?.url}`} className={styles.cardButton} style={{fontSize: cardWidth(props.pageWidth) * 0.04 * mobileMultiplier }}>View Product</Link>

        </div>
    )
}


export const cardMargin = 1;
export var numberOfCardShown = 4;

export function cardPadding(width: number) {

    if (width != null && width <= 720) {
        return (30)
    } else {
        return (70)
    }
}