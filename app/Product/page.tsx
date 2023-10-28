'use client'
import NavBar from "../navBar";
import styles from './product.module.scss';
import Image from "next/image";
import { basePath } from "@/next.config";
import Link from "next/link";

export default function Product() {
    return (
        <div className={styles.page}>
            <NavBar color='white' textColor='black' filter='invert(100%)'></NavBar>
            <div className={styles.firstSection}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageInnerContainer}>
                        <Image fill style={{ objectFit: 'contain' }} src={`${basePath}/takeOff.png`} alt='productImage'></Image>
                    </div>
                </div>
                <div className={styles.productInfoContainer}>
                    <div className={styles.infoTextContainer}>
                        <div className={styles.infoPath}> <Link className={styles.infoPathButtons} href={'/'}> home </Link> &nbsp; //  &nbsp;<Link className={styles.infoPathButtons}  href={'/AllProducts'}>products</Link> &nbsp; // &nbsp; <span style={{ color: 'orange' }}>currentProduct</span></div>
                        <div className={styles.infoName}>rule somethingized isolate</div>
                        <div className={styles.infoServing}>servings &nbsp; &nbsp; | &nbsp; &nbsp; serving size: 22g &nbsp; &nbsp; | &nbsp; &nbsp; net.wt: 5LB {'2.3kg'}</div>
                        <div className={styles.infoFlavor}>flavour flavor</div>
                        <div className={styles.infoGrid}>flavors grid</div>
                        <div className={styles.infoPara}>Welcome to the world of <span style={{ fontWeight: 700 }}>Rule Hydrolyzed Isolate </span>, where we redefine protein supplementation. <br></br> Our Crafted whey isolate blend delivers unmatched purity, rapid absorption, and exquisite taste.</div>
                    </div>
                </div>
            </div>
            <div className={styles.bigTextSection}>
                <span className={styles.bigText}>Unleash Peak Performance with Our Superior RULE Whey Protein Iso Blend.</span>
            </div>
            <div className={styles.propertiesSection}>
                <div className={styles.propertyItem}>
                    <div className={styles.propertyIcons} style={{ fontSize: '2.5vw', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        25G
                    </div>
                    protien per serving
                </div>
                <div className={styles.propertyItem}>
                    <div className={styles.propertyIcons}>
                        <Image fill style={{ objectFit: 'contain' }} src={`${basePath}/absorption.svg`} alt='absorption Icon'></Image>
                    </div>
                    extremely fast absorption
                </div>
                <div className={styles.propertyItem}>
                    <div className={styles.propertyIcons}>
                        <Image fill style={{ objectFit: 'contain' }} src={`${basePath}/aminoAcids.svg`} alt='Amino Acids Icon'></Image>
                    </div>
                    rich in amino acids
                </div>
                <div className={styles.propertyItem}>
                    <div className={styles.propertyIcons}>
                        <Image fill style={{ objectFit: 'contain' }} src={`${basePath}/healing.svg`} alt='healing Icon'></Image>
                    </div>
                    faster tissue heal
                </div>
            </div>
            <div className={styles.factsSection}>
                <div className={styles.factText}>
                    <div className={styles.paraTitle}>{'> recommended dosage'}</div>
                    <div className={styles.factsPara}>consume one serving (1 scoop) of RULE ISO, which provides 25 grams of protein, either after your workout on training days or at any time during the day on rest days. Mix the serving with 250ml of water for optimal absorption.</div>
                    <div className={styles.paraTitle}>{'> ingredients'}</div>
                    <div className={styles.factsPara}>{'Instant Whey Proteins 87% {Whey Protein Concentrate (Milk) [Emulsifier: Lecithins (Soy)], Whey Protein Isolate (Milk) [Emulsifier: Lecithins (Soy)]}, flavourings, taurine 3.3%, L-Arginine 1.7%, L-Glutamine 1.7%, salt, thickener (xanthan gum), sweeteners (acesulfame K, sucralose), L-Leucine 0.3%, anti-caking agent (silicon dioxide), bromelain from pineapple 0.07% (1200 GDU/g), papain from papaya 0.07% (1.5 FIP U/mg).'}</div>
                    <div className={styles.paraTitle}>{'> allergy warning'}</div>
                    <div className={styles.factsPara}>Contains milk and soy ingredients. Manufactured in a facility that also processes eggs, wheat, peanuts, and tree nuts.</div>
                    <div className={styles.smallNote}>{'> Some Ingredients & values may differ per Flavour.'}</div>
                </div>
                <div className={styles.factSheetImg}>
                    <Image fill style={{ objectFit: 'contain' }} src={`${basePath}/factsSheet.png`} alt='fact sheet'></Image>
                </div>
                <div className={styles.productImg}>
                    <Image fill style={{ objectFit: 'contain' }} src={`${basePath}/takeOff.png`} alt='rule product'></Image>
                </div>
            </div>
        </div>
    );
}