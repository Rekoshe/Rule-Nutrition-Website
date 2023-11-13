import styles from './product.module.scss';
import Image from 'next/image';
import { basePath } from '@/next.config';

export default function PropertyItem(props: { img: string; alt: string; text:string }) {
    return (
        <div className={styles.propertyItem}>
            <div className={styles.propertyIcons}>
                <Image fill style={{ objectFit: 'contain' }} src={`${basePath}/properties/${props.img}`} alt={`${props.alt}`}></Image>
            </div>
            {props.text}
        </div>
    );
}