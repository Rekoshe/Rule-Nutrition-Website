'use client'

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import styles from './allProducts.module.scss';
import NavBar from '../navBar';
import { basePath } from '@/next.config';
import Card from '../card';

export default function AllProducts() {

    const [title, setTitle] = useState("All Supplements");

    return (
        <div className={styles.pageContainer} style={{overflow: 'hidden'}}>


            <NavBar color='white' textColor='black' filter='invert(100%)'></NavBar>

            <div className='row'>
                <div className='col-sm-3' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <h1 className={styles.pageTitle} style={{opacity: '0'}}>g</h1>
                        <div>
                            <Image src={`${basePath}/changeTheRules.png`} width={400 * 0.8} height={850* 0.8} style={{ position: 'relative', display: 'block', objectFit: 'contain' }} alt='change the rules'></Image>
                        </div>
                    </div>
                </div>
                <div className='col-sm-9'>
                    <h1 className={styles.pageTitle}>{title}</h1>
                    {/* <section className={styles.productsGrid}>
                        <Card image={`${basePath}/ruleProduct.png`} flavor='someOtherFlavor' >Rule Pre-Workout1</Card>
                        <Card image={`${basePath}/ruleProduct.png`} flavor='Pineapple & Coconut' >Rule Pre-Workout2</Card>
                        <Card image={`${basePath}/ruleProduct.png`} flavor='Pineapple & Coconut' >Rule Pre-Workout3</Card>
                        <Card image={`${basePath}/ruleProduct.png`} flavor='Pineapple & Coconut' >Rule Pre-Workout4</Card>
                        <Card image={`${basePath}/ruleProduct.png`} flavor='Pineapple & Coconut' >Rule Pre-Workout5</Card>
                        <Card image={`${basePath}/ruleProduct.png`} flavor='Pineapple & Coconut' >Rule Pre-Workout6</Card>
                        <Card image={`${basePath}/ruleProduct.png`} flavor='Pineapple & Coconut' >Rule Pre-Workout7</Card>
                    </section> */}
                </div>
            </div>
        </div>
    )
}