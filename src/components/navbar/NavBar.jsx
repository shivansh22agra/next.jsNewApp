import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Toggle from "../toggle/toggle";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
export const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">Nextjs Website</Link>

      <div className={styles.links}>
        <Toggle/>
        {links.map((link) => (
          <Link key={link.id} className="" href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default NavBar;
