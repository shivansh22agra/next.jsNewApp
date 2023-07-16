import React from "react";
import styles from "./portfolio.module.css";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1>Our Work</h1>
      <h3>Choose a gallery</h3>
      <div className={styles.itemContainer}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrationss</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/application" className={styles.item}>
          <span className={styles.title}>Applicatin</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
