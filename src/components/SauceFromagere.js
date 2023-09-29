import styles from "../app/menu/[slug]/Article.module.scss";
import { data } from "@/utils/data";

const SauceFromagere = ({ setSauceFromagere }) => {
  const handleSauceFromagere = (e) => {
    setSauceFromagere(e.target.value);
  };

  return (
    <>
      <h2 className={styles.listHeader}>Sauce fromagère</h2>
      <p className={styles.listDescription}>Choisissez-en 1 max.</p>
      <ul>
        {data.saucesFromagere.map((sauceFromagere) => (
          <li className={styles.inputbox} key={sauceFromagere}>
            <label for={sauceFromagere}> {sauceFromagere}</label>
            <input
              className={styles.radio}
              type="radio"
              id={sauceFromagere}
              name="sauceFromagere"
              value={sauceFromagere}
              onChange={handleSauceFromagere}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SauceFromagere;
