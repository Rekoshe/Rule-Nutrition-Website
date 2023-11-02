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
    const [singleProduct, setSingleProduct] = useState(ProductList.products[0]);

    const [pagewidth, setPageWidth] = useState(0);
    const [textcontainerWidth, setTextcontainerWidth] = useState(0);
    const ref = useRef<null | HTMLDivElement>(null);
    const textcontainerRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        setPageWidth(ref.current ? ref.current.offsetWidth : 0)
        setTextcontainerWidth(textcontainerRef.current ? textcontainerRef.current.offsetWidth : 0)
    }, [pagewidth, textcontainerWidth]);

    const selectCategory = () => {

        if (title == "All Supplements") {

            var cards: { productName: string; productFlavor: string; }[] = [];

            ProductList.products.forEach(Product => {
                Product.flavours.forEach(flavor => {
                    cards.push(
                        { productName: Product.name, productFlavor: flavor.name }
                    )
                });
            });

            return (
                <>
                    {cards.map((element) => (
                        <Card key={Math.random()} product={element.productName} flavor={element.productFlavor} pageWidth={pagewidth} textColor='black'></Card>
                    ))}
                </>
            )
        }

        return (
            <>
                {singleProduct.flavours.map((element: { name: string; }) => (
                    <Card key={Math.random()} product={singleProduct.name} flavor={element.name} pageWidth={pagewidth} textColor='black'></Card>
                ))}
            </>
        )

    }

    return (
        <div className={styles.pageContainer} style={{ overflow: 'hidden' }}>


            <NavBar color='white' textColor='black' filter='invert(100%)'></NavBar>

            <div className={styles.pageContentContainer}>
                <div className={styles.productTabsSection}>
                    <div>
                        <h1 className={styles.pageTitle} style={{ opacity: '0' }}>{pagewidth}</h1>
                        <div ref={textcontainerRef} className={styles.textContainer}>
                            <button
                                style={{ fontWeight: `${title == "All Supplements" ? '700' : '500'}`, transform: `${title == "All Supplements" ? 'translateX(30px)' : 'translateX(0)'}` }}
                                onClick={() => { setTitle("All Supplements") }} className={styles.categoryText}>all supplements</button>
                            {ProductList.products.map(element => (
                                <button
                                    key={element.name}
                                    style={{ fontWeight: `${singleProduct.name == element.name && title != "All Supplements" ? '700' : '500'}`, transform: `${singleProduct.name == element.name && title != "All Supplements" ? 'translateX(30px)' : 'translateX(0)'}` }}
                                    className={styles.categoryText}
                                    onClick={() => { setSingleProduct(element), setTitle(element.name) }}>
                                    {element.name}
                                </button>
                            ))}
                        </div>
                        <div className={styles.changeTheRulesImage}>
                            <Image src={`${basePath}/changeTheRules2.png`} fill style={{ display: 'block', objectFit: 'cover' }} alt='change the rules'></Image>
                        </div>
                    </div>
                </div>
                <div ref={ref} className={styles.allProductsSection}>
                    <h1 className={styles.pageTitle}>{title}</h1>
                    <div className={styles.productsGrid}>
                        {selectCategory()}
                    </div>
                </div>
            </div>
        </div>
    )
}