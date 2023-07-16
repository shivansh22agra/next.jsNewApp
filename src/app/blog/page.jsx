import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
const BlogPage = () => {
  return (
    <div className={styles.container}>
      <Image
        src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
        // fill={true}
        width={300}
        height={200}
        alt=""
      />
      <div>
        <h1>Text</h1>
        <p>desc</p>
      </div>
    </div>
  );
};

export default BlogPage;
