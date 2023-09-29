"use client";

import SideBar from "@/components/SideBar";
import styles from "./Menu.module.scss";
import Category from "@/components/Category";
import { data } from "@/utils/data";

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <h2 className={styles.header}>Notre carte 🍽️</h2>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <div className={styles.content}>
          {data.categories.map((category, index) => (
            <Category category={category} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
