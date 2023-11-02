'use client'
import NavBar from "../navBar";
import styles from './product.module.scss';
import Image from "next/image";
import { basePath } from "@/next.config";
import Link from "next/link";
import { useEffect, useState } from 'react';
import ProductList from '@/ProductList.json';
import PropertyItem from "./propertyItem";

export default function Product() {

    const [product, setProduct] = useState(ProductList.products[0]);

    useEffect(() => {
        var name = ProductList.products.find((element) => element.url == window.location.search);
        if(name != null){
            setProduct(name);
        }
    }, []);

    return (
        <div className={styles.page}>
            <NavBar color='white' textColor='black' filter='invert(100%)'></NavBar>
            <div className={styles.firstSection}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageInnerContainer}>
                        <Image fill style={{ objectFit: 'contain' }} src={`${basePath}/${product?.flavours[0].img}`} alt='productImage'></Image>
                    </div>
                </div>
                <div className={styles.productInfoContainer}>
                    <div className={styles.infoTextContainer}>
                        <div className={styles.infoPath}> <Link className={styles.infoPathButtons} href={'/'}> home </Link> &nbsp; //  &nbsp;<Link className={styles.infoPathButtons} href={'/AllProducts'}>products</Link> &nbsp; // &nbsp; <span style={{ color: 'orange' }}>{product.name}</span></div>
                        <div className={styles.infoName}>{product.name}</div>
                        <div className={styles.infoServing}> {product.numOfServings} servings &nbsp; &nbsp; | &nbsp; &nbsp; serving size: {product.servingSize}g &nbsp; &nbsp; | &nbsp; &nbsp; net.wt: {product.netWeightLB}LB {product.netWeightKG}kg</div>
                        <div className={styles.infoFlavor}>{product.flavours[0].name}</div>
                        <div className={styles.infoGrid}>
                            {product.flavours.map(flavor => (
                                <button key={flavor.name} className={styles.infoFlavorIcon}>
                                    <Image fill alt="flavor" style={{objectFit: 'contain'}} src={`${basePath}/StrawBerries.png`}></Image>
                                </button>
                            ))}
                        </div>
                        <div className={styles.infoPara}>{product.infoParagraph}</div>
                    </div>
                </div>
            </div>
            <div className={styles.bigTextSection}>
                <span className={styles.bigText}>{product.bigText}</span>
            </div>
            <div className={styles.propertiesSection}>
                <PropertyItem alt="absorption property" text={product.properties[0].propertyTitle} img={product.properties[0].propertyImg}></PropertyItem>
                <PropertyItem alt="absorption property" text={product.properties[1].propertyTitle} img={product.properties[1].propertyImg}></PropertyItem>
                <PropertyItem alt="amino acids property" text={product.properties[2].propertyTitle} img={product.properties[2].propertyImg}></PropertyItem>
                <PropertyItem alt="heal property" text={product.properties[3].propertyTitle} img={product.properties[3].propertyImg}></PropertyItem>    
            </div>
            <div className={styles.factsSection}>
                <div className={styles.factText}>
                    <div className={styles.paraTitle}>{'>'}{product.factTitles[0].title}</div>
                    <div className={styles.factsPara}>{product.factTitles[0].paragraph}</div>
                    <div className={styles.paraTitle}>{'>'}{product.factTitles[1].title}</div>
                    <div className={styles.factsPara}>{product.factTitles[1].paragraph}</div>
                    <div className={styles.paraTitle}>{'>'}{product.factTitles[2].title}</div>
                    <div className={styles.factsPara}>{product.factTitles[2].paragraph}</div>
                    <div className={styles.smallNote}>{'>'}{product.smallNote}</div>
                </div>
                <div className={styles.factSheetImg}>
                    <Image fill style={{ objectFit: 'contain' }} src={`${basePath}/${product.factsImg}`} alt='fact sheet'></Image>
                </div>
                <div className={styles.productImg}>
                    <Image fill style={{ objectFit: 'contain' }} src={`${basePath}/${product.flavorsImg}`} alt='rule product'></Image>
                </div>
            </div>
        </div>
    );
}