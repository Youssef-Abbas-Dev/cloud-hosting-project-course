import Link from 'next/link'
import styles from "./header.module.css";
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className={styles.header}>
        <Navbar />
        <div className={styles.right}>
         <Link className={styles.btn} href="/login">Login</Link>
         <Link className={styles.btn} href="/register">Register</Link>
        </div>
    </header>
  )
}

export default Header