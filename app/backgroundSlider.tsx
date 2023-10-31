import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './page.module.scss';

import { useRef, useState, useEffect } from "react";
import { basePath } from "@/next.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function BackgroundSlider() {

    const [color1, setColor1] = useState('yellow');
    const [color2, setColor2] = useState('gray');
    const [color3, setColor3] = useState('gray');

    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(selected == 2){
                scroll(0);
            }else {
                scroll(selected + 1)
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [selected]);

    const slider = useRef<null | HTMLDivElement>(null);

    const scroll = (order: number) => {
        var multiplyer = 0;
        setSelected(order);

        switch (order) {
            case 0:
                setColor1('yellow');
                setColor2('gray');
                setColor3('gray');
                break;
            case 1:
                setColor1('gray');
                setColor2('yellow');
                setColor3('gray');
                multiplyer = 3;
                break;
            case 2:
                setColor1('gray');
                setColor2('gray');
                setColor3('yellow');
                multiplyer = 1;
                break;
        }

        if (slider.current != null) {
            slider.current.scroll({
                left: slider.current.scrollWidth / multiplyer,
                behavior: "smooth",
            });
        }


        
    }

    return (
        <div>
            <div ref={slider} style={{ position: 'relative', display: 'flex', backgroundColor: 'black', height: '40vw', overflow: 'hidden' }}>
                <div className={styles.backgroundImg}>
                    <Image src={`${basePath}/heroDesktop.png`} fill objectFit='contain' alt='rule background'></Image>
                </div>
                <div className={styles.backgroundImg}>
                    <Image src={`${basePath}/heroDesktop.png`} fill objectFit='contain' alt='rule background'></Image>
                </div>
                <div className={styles.backgroundImg}>
                    <Image src={`${basePath}/heroDesktop.png`} fill objectFit='contain' alt='rule background'></Image>
                </div>
            </div>

            <div style={{ backgroundColor: 'black', paddingBottom: '2rem' }}>
                <div className={styles.backgroundButtonSection}>
                    <button onClick={() => scroll(0)} className={styles.backgroundButton} style={{ backgroundColor: color1 }}></button>
                    <button onClick={() => scroll(1)} className={styles.backgroundButton} style={{ backgroundColor: color2 }}></button>
                    <button onClick={() => scroll(2)} className={styles.backgroundButton} style={{ backgroundColor: color3 }}></button>
                </div>

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

        </div>
    )
}