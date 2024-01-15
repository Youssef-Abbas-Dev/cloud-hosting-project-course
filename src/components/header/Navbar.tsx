import Link from "next/link";
import styles from './header.module.css';
import { GrTechnology } from "react-icons/gr";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <Link href="/" className={styles.logo}>
                    CLOUD
                    <GrTechnology />
                    HOSTING
                </Link>
            </div>
            <ul className={styles.navLinks}>
                <Link className={styles.navLink} href="/">Home</Link>
                <Link className={styles.navLink} href="/articles">Articles</Link>
                <Link className={styles.navLink} href="/about">About</Link>
                <Link className={styles.navLink} href="/admin">Admin Dashboard</Link>
            </ul>
        </nav>
    )
}

export default Navbar