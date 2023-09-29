import styles from "../app/menu/[slug]/Article.module.scss";
import { data } from "@/utils/data";

const SeulOuMenuChooser = ({ setSeulOuMenu }) => {
  const handleSeulOuMenu = (e) => {
    setSeulOuMenu(e.target.value);
  };

  return (
    <>
      <h2 className={styles.listHeader}>Seul ou en Menu</h2>
      <p className={styles.listDescription}>Choisissez-en 1.</p>
      <ul>
        <li className={styles.inputbox}>
          <label for="seul">Seul</label>
          <input
            className={styles.radio}
            type="radio"
            id="seul"
            name="seulOuMenu"
            value="seul"
            onChange={handleSeulOuMenu}
          />
        </li>
        <li className={styles.inputbox}>
          <div>
            <label for="menu">En menu</label>
            <p className={styles.itemPrice}>+ 2,90 €</p>
          </div>
          <input
            className={styles.radio}
            type="radio"
            id="menu"
            name="seulOuMenu"
            value="menu"
            onChange={handleSeulOuMenu}
          />
        </li>
      </ul>
    </>
  );
};

export default SeulOuMenuChooser;
