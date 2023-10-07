'use client'

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import styles from './allProducts.module.scss';

export default function AllProducts() {

    const [title, setTitle] = useState("Supplements");

    return (
        <div className={styles.pageContainer}>

        </div>
    )
}