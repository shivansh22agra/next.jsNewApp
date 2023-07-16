import React from "react";
import styles from "./category.module.css";
import { items } from "./data";
import { Button } from "@/components/button/Button";
import Image from "next/image";

const CategoryPage = ({ params }) => {
  console.log(`__params ${params.category}`);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {items.applications.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
