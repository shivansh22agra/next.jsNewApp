import React from "react";
import Image from "next/image";
import styles from "./footer.module.css"
export const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Shivansh. All rights reserved.</div>
      <div  className={styles.socialImages}>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl67tqp7JiatMVvirr3WU58JDSrSzy72N8Rw&usqp=CAU"
        width={15}
        height={15}
        // className={styles.icon}
        alt="Linkden"
      />
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl67tqp7JiatMVvirr3WU58JDSrSzy72N8Rw&usqp=CAU"
        width={15}
        height={15}
        // className={styles.icon}
        alt="Linkden"
      />{" "}
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl67tqp7JiatMVvirr3WU58JDSrSzy72N8Rw&usqp=CAU"
        width={15}
        height={15}
        // className={styles.icon}
        alt="Linkden"
      />
      </div>
    </div>
  );
};
export default Footer;
