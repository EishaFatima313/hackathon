// src/app/Navbar.tsx
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image"; // ✅ Correct import

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Correct icon import

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        {/* ✅ Use capital 'I' for Image & provide width & height */}
        <Image src="/logosign.png" alt="Logo" width={50} height={50} />
      </div>
      <nav className={styles.links}>
        <Link href="/">New & Featured</Link>
        <Link href="/allproducts">All Products</Link>
        <Link href="/man">Men</Link>
        <Link href="/woman">Women</Link>
        <Link href="/kids">Kids</Link>
        <Link href="/sale">Sale</Link>
        <Link href="/Snnikers">Snnikers</Link>
      </nav>
      <div>
        <FontAwesomeIcon icon={faHeart} className={styles.icon} />
      </div>
    </header>
  );
};

export default Navbar;
