import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import { Button } from "@/components/button/Button";
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let's Keep in Touch</div>
      <div className={styles.row}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <div>
          <form className={styles.form}>
            <input type="text" placeholder="name" className={styles.input} />
            <input type="text" placeholder="email" className={styles.input} />
            <textarea
              className={styles.input}
              placeholder="message"
              cols="30"
              rows="10"
            ></textarea>
            <Button url="#" text="Send" />
          </form>{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
