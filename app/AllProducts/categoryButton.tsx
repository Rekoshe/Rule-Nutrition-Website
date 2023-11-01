'use client'

import {useState} from 'react';
import styles from './allProducts.module.scss';

export default function CategoryButton(props : any){

    const [isPressed, setIsPressed] = useState(false)

    const handleClick = (pressed : any) => {
        setIsPressed(pressed);
    }

    return (
        <button style={{fontWeight: `${isPressed ? '700': '500'}`, transform: `${isPressed ? 'translateX(30px)': 'translateX(0)'}`}} onClick={() => handleClick(props.pressed)}
         className={styles.categoryText}>
            {props.children}
        </button>
    )
}