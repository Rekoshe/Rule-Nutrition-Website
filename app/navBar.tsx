import Link from "next/link";
import Image from "next/image";
import styles from './page.module.scss';
import { basePath } from "@/next.config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

export default function NavBar(props: {
    filter: string;
    textColor: any; color: string;
}) {

    const [menuPosition, setMenuPosition] = useState('normal')
    var animDirection = 'normal';
    var animName = 'burgerAnimatio';
    const [menuDisplay, setMenuDisplay] = useState('none')

    const showMenu = () => {
        setMenuDisplay('flex');

    }

    const hideMenu = () => {
        setMenuDisplay('none');

    }

    const handleAnimationDone = () => {
        if (animDirection == 'reverse') {
            setMenuDisplay('none');
            console.log('menu was hidden');
        }
        console.log('animation done');
    }

    return (
        <div style={{ overflowX: 'clip', width: '100%', position: 'relative' }}>
            <div className={styles.burgerMenuContainer} onAnimationEnd={handleAnimationDone} style={{ display: `${menuDisplay}` }}>
                <div className={styles.burgerMenuListSection}>
                    <div className={styles.burgerMenuListItem}>
                        <Link className={styles.navImg} href={'/'}>
                            <Image src={`${basePath}/Content.png`} style={{ filter: 'invert(100%)', objectFit: 'contain' }} fill alt='nutrition rule logo'></Image>
                        </Link>
                        <div className={styles.mobileMenuButton}>
                            <button onClick={hideMenu} style={{ backgroundColor: 'transparent', border: 'none' }}>
                                <FontAwesomeIcon style={{ color: 'black' }} icon={faX} />
                            </button>
                        </div>
                    </div>
                    <Link href={'/'} className={styles.burgerMenuListItem}>home</Link>
                    <Link href={'/AllProducts'} className={styles.burgerMenuListItem}>products</Link>
                    <Link href={'/contacts'} className={styles.burgerMenuListItem}>contacts</Link>
                    <Link href={'/aboutUs'} className={styles.burgerMenuListItem}>about us</Link>
                </div>
                {/* <div className={styles.burgerMenuFooterSection}>

                    <div className={styles.footerImg} style={{ width: '80%' }}>
                        <Image src={`${basePath}/Crown.png`} fill style={{ objectFit: 'contain' }} alt='Rule logo crown'></Image>
                    </div>

                    <div>
                        <div style={{ textAlign: 'center', color: 'white' }}>
                            <div className={styles.twitterHandle}>@NutriRule</div>
                            <Link href={'#'} className={styles.socialIcons}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                            <Link href={'#'} className={styles.socialIcons}>
                                <FontAwesomeIcon icon={faYoutube} />
                            </Link>
                            <Link href={'#'} className={styles.socialIcons}>
                                <FontAwesomeIcon icon={faTiktok} />
                            </Link>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        © 2023 Nutrition Rule. All Rights Reserved.
                    </div>
                </div> */}
            </div>
            <div className={styles.navBigContainer} style={{ backgroundColor: `${props.color}` }}>
                <div className={styles.navContainer} >

                    <Link className={styles.navImg} href={'/'}>
                        <Image src={`${basePath}/Content.png`} style={{ filter: `${props.filter}`, objectFit: 'contain' }} fill alt='nutrition rule logo'></Image>
                    </Link>

                    <div className={styles.navBarItems}>
                        <Link className={styles.navLinks} style={{ color: `${props.textColor}` }} href={'/AllProducts'}>products</Link>
                        <Link className={styles.navLinks} style={{ color: `${props.textColor}` }} href={'#'}>about us</Link>
                        <Link className={styles.navLinks} style={{ color: `${props.textColor}` }} href={'#'}>contact us</Link>
                    </div>
                    <div className={styles.mobileMenuButton}>
                        <button onClick={showMenu} style={{ backgroundColor: 'transparent', border: 'none' }}>
                            <FontAwesomeIcon style={{ color: props.textColor }} icon={faBars} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}