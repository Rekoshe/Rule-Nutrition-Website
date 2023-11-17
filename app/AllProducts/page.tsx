'use client'

import React from 'react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './allProducts.module.scss';
import NavBar from '../navBar';
import { basePath } from '@/next.config';
import Card from '../card';
import ProductList from '@/ProductList.json'


export default function AllProducts({ in: inProp }: any) {

    const [title, setTitle] = useState("All Supplements");
    const [singleProduct, setSingleProduct] = useState(ProductList.products[0]);

    const [pagewidth, setPageWidth] = useState(0);
    const [textcontainerWidth, setTextcontainerWidth] = useState(0);
    const [animation, setAnimation] = useState(false);

    const ref = useRef<null | HTMLDivElement>(null);

    const textcontainerRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        setPageWidth(ref.current ? ref.current.offsetWidth : 0)
        setTextcontainerWidth(textcontainerRef.current ? textcontainerRef.current.offsetWidth : 0)

        var name = ProductList.products.find((element) => element.url == window.location.search);
        if (name != null) {
            setSingleProduct(name);
            setTitle(name.name);
        }
    }, []);

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
                        <div key={Math.random()} className={animation ? styles.CardItemContainer : " "} onAnimationEnd={() => setAnimation(false)}>
                            <Card product={element.productName} flavor={element.productFlavor} pageWidth={pagewidth} textColor='black'></Card>
                        </div>
                    ))}
                </>
            )
        }

        return (
            <>
                {singleProduct.flavours.map((element: { name: string; }) => (
                    <div key={Math.random()} className={animation ? styles.CardItemContainer : " "} onAnimationEnd={() => setAnimation(false)}>
                        <Card product={singleProduct.name} flavor={element.name} pageWidth={pagewidth} textColor='black'></Card>
                    </div>
                ))}
            </>
        )

    }

    const selectFamily = (element: any) => {

        if (element == singleProduct && title != "All Supplements")
            return;

        setSingleProduct(element);
        setTitle(element.name);
        setAnimation(true);

    }

    return (
        <div className={styles.pageContainer} style={{ overflow: 'hidden' }}>


            <NavBar color='white' textColor='black' filter='invert(100%)'></NavBar>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={styles.pageContentContainer}>
                    <div className={styles.productTabsSection}>
                        <div>
                            <h1 className={styles.pageTitle} style={{ opacity: '0' }}>{pagewidth}</h1>
                            <div ref={textcontainerRef} className={styles.textContainer}>
                                <button
                                    style={{ fontWeight: `${title == "All Supplements" ? '700' : '500'}`, transform: `${title == "All Supplements" ? 'translateX(30px)' : 'translateX(0)'}` }}
                                    onClick={() => { setTitle("All Supplements"); setAnimation(true); }} className={styles.categoryText}>all supplements</button>
                                {ProductList.products.map(element => (
                                    <button
                                        key={element.categoryName}
                                        style={{ fontWeight: `${singleProduct.name == element.name && title != "All Supplements" ? '700' : '500'}`, transform: `${singleProduct.name == element.name && title != "All Supplements" ? 'translateX(30px)' : 'translateX(0)'}` }}
                                        className={styles.categoryText}
                                        onClick={() => { selectFamily(element) }}>
                                        {element.categoryName}
                                    </button>
                                ))}
                            </div>
                            <div className={styles.changeTheRulesImage}>
                                <Image src={`${basePath}/changeTheRules2.png`} fill style={{ display: 'block', objectFit: 'contain' }} alt='change the rules'></Image>
                            </div>
                        </div>
                    </div>
                    <div ref={ref} className={styles.allProductsSection}>
                        <h1 className={styles.pageTitle}>{title}</h1>
                        <div style={{ overflow: 'auto' }}>
                            <div className={styles.mobileCategoryTextContainer}>
                                <button
                                    onClick={() => { setTitle("All Supplements") }} className={styles.categoryMobileText}>all supplements</button>
                                {ProductList.products.map(element => (
                                    <button
                                        key={element.categoryName}
                                        className={styles.categoryMobileText}
                                        onClick={() => { selectFamily(element) }}>
                                        {element.categoryName}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.productsGrid}>
                            {selectCategory()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}