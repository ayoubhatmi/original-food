import styles from "../Article.module.scss";
import { data } from "@/utils/data";

const SeulOuMenuChooser = ({ setSeulOuMenu }) => {
  const handleSeulOuMenu = (e) => {
    setSeulOuMenu({
      name: e.target.value,
      price: parseInt(e.target.dataset.price),
    });
  };

  return (
    <>
      <h2 className={styles.listHeader}>Seul ou en Menu</h2>
      <p className={styles.listDescription}>Choisissez-en 1.</p>

      {data.seulOuMenu.map((item, index) => (
        <li className={styles.inputbox} key={index}>
          <div>
            <label for={item.name}> {item.name} </label>
            {item.price > 0 && (
              <p className={styles.itemPrice}>+ {item.price},00 €</p>
            )}
          </div>
          <input
            className={styles.checkbox}
            type="radio"
            id={item.name}
            name={"seulOuMenu"}
            value={item.name}
            data-price={item.price}
            onChange={handleSeulOuMenu}
          />
        </li>
      ))}
    </>
  );
};

export default SeulOuMenuChooser;
