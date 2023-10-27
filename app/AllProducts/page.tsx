'use client'

import React from 'react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './allProducts.module.scss';
import NavBar from '../navBar';
import { basePath } from '@/next.config';
import Card from '../card';
import { relative } from 'path';

export default function AllProducts() {

    const [title, setTitle] = useState("All Supplements");

    const [pagewidth, setPageWidth] = useState(0);
    const [textcontainerWidth, setTextcontainerWidth] = useState(0);
    const ref = useRef<null | HTMLDivElement>(null);
    const textcontainerRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
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
                            <button onClick={() => changeTitle('All Supplements')} className={styles.categoryText}>All Supplements</button>
                            <button onClick={() => changeTitle('2')} className={styles.categoryText}>category2</button>
                            <button onClick={() => changeTitle('3')} className={styles.categoryText}>category3</button>
                            <button onClick={() => changeTitle('4')} className={styles.categoryText}>category4</button>
                            <button onClick={() => changeTitle('5')} className={styles.categoryText}>category5</button>
                            <button onClick={() => changeTitle('6')} className={styles.categoryText}>category6</button>
                            <button onClick={() => changeTitle('7')} className={styles.categoryText}>category7</button>
                            <button onClick={() => changeTitle('8')} className={styles.categoryText}>category8</button>
                            <button onClick={() => changeTitle('9')} className={styles.categoryText}>category9</button>
                            <button onClick={() => changeTitle('10')} className={styles.categoryText}>category10</button>
                            <button onClick={() => changeTitle('11')} className={styles.categoryText}>category11</button>
                        </div>
                        <div className={styles.changeTheRulesImage}>
                            <Image src={`${basePath}/changeTheRules2.png`} fill style={{ display: 'block', objectFit: 'cover' }} alt='change the rules'></Image>
                        </div>
                    </div>
                </div>
                <div ref={ref} className={styles.allProductsSection}>
                    <h1 className={styles.pageTitle}>{title}</h1>
                    <section className={styles.productsGrid}>
                        <Card textColor='black' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='someOtherFlavor' >Rule Pre-Workout1</Card>
                        <Card textColor='black' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout2</Card>
                        <Card textColor='black' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout3</Card>
                        <Card textColor='black' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout4</Card>
                        <Card textColor='black' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout5</Card>
                        <Card textColor='black' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout6</Card>
                        <Card textColor='black' image={`${basePath}/ruleProduct.png`} pageWidth={pagewidth} flavor='Pineapple & Coconut' >Rule Pre-Workout7</Card>
                    </section>
                </div>
            </div>
        </div>
    )
}