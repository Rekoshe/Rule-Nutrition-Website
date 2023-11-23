'use client'

import ReviewCard from "./reviewCard";
import styles from "./page.module.scss";
import { basePath } from "@/next.config";
import {useState, useRef, useEffect} from 'react';

export default function ReviewSlider(props: {
    scrollDirection: any; reviewList: any[];
}) {

    const [carWidth, setCarWidth] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            window.addEventListener('resize', handleResize)
            var width = ref.current.offsetWidth;
            setCarWidth(width);
            
        }

    }, [carWidth])

    const handleResize = () => {
        setCarWidth(ref.current ? ref.current.offsetWidth : 0)
    }

    return (

        <div ref={ref} className={styles.reviewsContainer} style={{ overflow: 'auto', marginTop: props.scrollDirection ? carWidth * 0.1 : carWidth * -0.1 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    {props.reviewList.map(element => (
                        <ReviewCard key={element.reviewTitle} carWidth={carWidth} title={element.reviewTitle} icon={`${basePath}/reviewProfiles/${element.reviewerImage}`} reviewerName={element.reviewerName}>{element.reviewMessage}</ReviewCard>
                    ))}
                </div>
            </div>

        </div>

    )
}