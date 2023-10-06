import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Card(props: { image: string | StaticImport; children: string; flavor: string }) {

    return (
        <div className={styles.cardContainer} style={{width: cardWidth, margin:cardMargin}}>
            <div>
                <Image fill className={styles.cardImage} src={props.image} alt={props.children}></Image>
            </div>

            <h1 className={styles.cardName}>{props.children}</h1>
            <h4 style={{opacity: 0.5}} className={styles.cardPrice}>{props.flavor}</h4>
            <button className={styles.cardButton}>View Product</button>
        </div>
    )
}

export const cardWidth = 300;
export const cardMargin = 10;