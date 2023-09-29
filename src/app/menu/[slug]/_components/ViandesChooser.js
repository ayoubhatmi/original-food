import styles from "../Article.module.scss";
import { data } from "@/utils/data";

const ViandesChooser = ({ viandes, setViandes, article }) => {
  const handleViandes = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setViandes([...viandes, value]);
    } else {
      setViandes((viandes) => viandes.filter((item) => item !== value));
    }
  };

  return (
    <>
      <h2 className={styles.listHeader}>Viandes</h2>
      <p className={styles.listDescription}>
        Choisissez-en {article.nbViandes} max.
      </p>
      <ul>
        {data.viandes.map((viande) => (
          <li className={styles.inputbox} key={viande}>
            <label for={viande}> {viande}</label>
            <input
              className={styles.checkbox}
              type="checkbox"
              id={viande}
              name={viande}
              value={viande}
              disabled={
                viandes.length === article.nbViandes &&
                !viandes.includes(viande)
              }
              onChange={handleViandes}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ViandesChooser;
