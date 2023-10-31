'use client'

import React from 'react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './allProducts.module.scss';
import NavBar from '../navBar';
import { basePath } from '@/next.config';
import Card from '../card';
import CategoryButton from './categoryButton';
import ProductList from '@/ProductList.json'

export default function AllProducts() {

    const [title, setTitle] = useState("All Supplements");
    const [buttonsList, setButtonsList] = useState([false]);

    const [pagewidth, setPageWidth] = useState(0);
    const [textcontainerWidth, setTextcontainerWidth] = useState(0);
    const ref = useRef<null | HTMLDivElement>(null);
    const textcontainerRef = useRef<null | HTMLDivElement>(null);


    useEffect(() => {
        var buttonslist: any[] = [];

        if(textcontainerRef.current){
            for (let index = 0; index < textcontainerRef.current?.children.length; index++) {
                buttonslist.push(false);

            }
            setButtonsList(buttonslist)
        }

        setPageWidth(ref.current ? ref.current.offsetWidth : 0)
        setTextcontainerWidth(textcontainerRef.current ? textcontainerRef.current.offsetWidth : 0)
    }, [ref.current, pagewidth, textcontainerRef.current, textcontainerWidth]);

    const changeTitle = (title : string) => {
        setTitle('category' + title);
        
    }

    return (
        <div className={styles.pageContainer} style={{ overflow: 'hidden' }}>


            <NavBar color='white' textColor='black' filter='invert(100%)'></NavBar>

            <div className={styles.pageContentContainer}>
                <div className={styles.productTabsSection}>
                    <div>
                        <h1 className={styles.pageTitle} style={{ opacity: '0' }}>{pagewidth}</h1>
                        <div ref={textcontainerRef} className={styles.textContainer}>
                            <CategoryButton pressed={buttonsList[0]}>All Supplements</CategoryButton>
                            <CategoryButton pressed={buttonsList[1]}>category2</CategoryButton>
                            <CategoryButton pressed={buttonsList[2]}>category3</CategoryButton>
                            <CategoryButton pressed={buttonsList[3]}>category4</CategoryButton>
                            <CategoryButton pressed={buttonsList[4]}>category5</CategoryButton>
                            <CategoryButton pressed={buttonsList[5]}>category6</CategoryButton>
                            <CategoryButton pressed={buttonsList[6]}>category7</CategoryButton>
                            <CategoryButton pressed={buttonsList[7]}>category8</CategoryButton>
                            <CategoryButton pressed={buttonsList[8]}>category9</CategoryButton>
                            <CategoryButton pressed={buttonsList[9]}>category10</CategoryButton>
                            <CategoryButton pressed={buttonsList[10]}>category11</CategoryButton>
                        </div>
                        <div className={styles.changeTheRulesImage}>
                            <Image src={`${basePath}/changeTheRules2.png`} fill style={{ display: 'block', objectFit: 'cover' }} alt='change the rules'></Image>
                        </div>
                    </div>
                </div>
                <div ref={ref} className={styles.allProductsSection}>
                    <h1 className={styles.pageTitle}>{title}</h1>
                    <section className={styles.productsGrid}>
                        {ProductList.products.map(product => (
                            <Card product={product.name} key={product.name} flavor={product.flavours[0].name} textColor='black' pageWidth={pagewidth}></Card>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}