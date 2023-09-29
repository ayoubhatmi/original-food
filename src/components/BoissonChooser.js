import styles from "../app/menu/[slug]/Article.module.scss";
import { data } from "@/utils/data";

const BoissonChooser = ({ setBoisson }) => {
  const handleBoisson = (e) => {
    setBoisson(e.target.value);
  };

  return (
    <>
      <h2 className={styles.listHeader}>Boissons</h2>
      <p className={styles.listDescription}>Choisissez-en 1.</p>
      <ul>
        {data.boissons.map((boisson) => (
          <li className={styles.inputbox} key={boisson}>
            <label for={boisson}> {boisson}</label>
            <input
              className={styles.radio}
              type="radio"
              id={boisson}
              name="boisson"
              value={boisson}
              onChange={handleBoisson}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default BoissonChooser;
