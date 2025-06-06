import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navitem}>
        <Link href="/">home</Link>
      </div>
      <div className={styles["navitem"]}>
        <Link href="/about">about</Link>
      </div>
      <div className={styles["navitem"]}>
        <Link href="/form">form</Link>
      </div>
    </div>
  );
};

export default Navbar;
