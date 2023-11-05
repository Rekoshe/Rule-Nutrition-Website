'use client'

import ReviewCard from "./reviewCard";
import styles from "./page.module.scss";
import { basePath } from "@/next.config";
import reviewList from "@/Reviews.json";

export default function ReviewSlider(props) {
    return (

        <div className={styles.reviewsContainer}>
            <div style={{ display: 'flex', justifyContent:'center' }}>
                <div>
                    {reviewList.ReviewList.map(element => (
                        <ReviewCard title={element.reviewTitle} icon={`${basePath}/${element.reviewerImage}`} reviewerName={element.reviewerName}>{element.reviewMessage}</ReviewCard>
                    ))}
                </div>
            </div>

        </div>

    )
}