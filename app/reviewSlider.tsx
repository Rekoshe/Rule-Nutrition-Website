'use client'

import ReviewCard from "./reviewCard";
import styles from "./page.module.scss";
import { basePath } from "@/next.config";
import reviewList from "@/Reviews.json";

export default function ReviewSlider(props: { reviewList: any[]; }) {

    return (

        <div className={styles.reviewsContainer} style={{overflow: 'auto'}}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    {props.reviewList.map(element => (
                        <ReviewCard key={Math.random()} title={element.reviewTitle} icon={`${basePath}/${element.reviewerImage}`} reviewerName={element.reviewerName}>{element.reviewMessage}</ReviewCard>
                    ))}
                </div>
            </div>

        </div>

    )
}