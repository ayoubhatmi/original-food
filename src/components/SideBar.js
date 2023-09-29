import Link from "next/link";
import styles from "./SideBar.module.scss";
import { data } from "@/utils/data";

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <ul className={styles.list}>
        {data.categories.map((article, index) => (
          <li className={styles.item} key={index}>
            <Link className={styles.link} href={`#${article.name}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
