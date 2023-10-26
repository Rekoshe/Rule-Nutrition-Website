import Link from "next/link";
import Image from "next/image";
import styles from './page.module.scss';
import { basePath } from "@/next.config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar(props: {
    filter: string;
    textColor: any; color: string; 
}) {
    return (
        <div className={styles.navContainer} style={{backgroundColor: `${props.color}` }}>
            <div>
                <Link className={styles.navLinks} href={'/'}>
                    <Image src={`${basePath}/Content.png`} style={{filter: `${props.filter}`}} width={213*.7} height={59*.7} alt='nutrition rule logo'></Image>
                </Link>
            </div>
            <div className={styles.navBarItems}>
                <Link className={styles.navLinks} style={{  color: `${props.textColor}` }}  href={'/AllProducts'}>products</Link>
                <Link className={styles.navLinks} style={{  color: `${props.textColor}` }}  href={'#'}>about us</Link>
                <Link className={styles.navLinks} style={{  color: `${props.textColor}` }}  href={'#'}>contact us</Link>
            </div>
            <div className={styles.mobileMenuButton}>
                <button style={{backgroundColor: 'transparent', border: 'none'}}>
                    <FontAwesomeIcon style={{color: 'white'}} icon={faBars}/>
                </button>
            </div>
        </div>
    )
}