import styles from "../app/menu/[slug]/Article.module.scss";
import { data } from "@/utils/data";

const Sauces = ({ sauces, setSauces }) => {
  const handleSauces = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSauces([...sauces, value]);
    } else {
      setSauces((sauces) => sauces.filter((item) => item !== value));
    }
  };

  return (
    <>
      <h2 className={styles.listHeader}>Sauce</h2>
      <p className={styles.listDescription}>Choisissez-en 2 max.</p>
      <ul>
        {data.sauces.map((sauce) => (
          <li className={styles.inputbox} key={sauce}>
            <label for={sauce}> {sauce}</label>
            <input
              className={styles.checkbox}
              type="checkbox"
              id={sauce}
              name={sauce}
              value={sauce}
              disabled={sauces.length === 2 && !sauces.includes(sauce)}
              onChange={handleSauces}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sauces;
