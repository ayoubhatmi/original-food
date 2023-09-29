import styles from "../Article.module.scss";
import { data } from "@/utils/data";

const SupplementsChooser = ({
  supplements,
  setSupplements,
  onSupplementsPriceChange,
}) => {
  const handleSupplements = (e) => {
    if (e.target.checked) {
      setSupplements([
        ...supplements,
        { name: e.target.value, price: parseInt(e.target.dataset.price) },
      ]);
    } else {
      setSupplements((supplements) =>
        supplements.filter((item) => item.name !== e.target.value)
      );
    }
  };

  const calculateSupplementsPrice = () => {
    let totalPrice = 0;

    supplements.forEach((item) => {
      totalPrice += item.price;
    });

    onSupplementsPriceChange(totalPrice);
  };

  calculateSupplementsPrice();

  return (
    <>
      <h2 className={styles.listHeader}>Suppléments</h2>
      <p className={styles.listDescription}>Choisissez-en 10 max.</p>
      <ul>
        {data.supplements.map((supplement, index) => (
          <li className={styles.inputbox} key={index}>
            <div>
              <label for={supplement}> {supplement.name} </label>
              <p className={styles.itemPrice}>+ {supplement.price},00 €</p>
            </div>
            <input
              className={styles.checkbox}
              type="checkbox"
              id={supplement.name}
              name={supplement.name}
              value={supplement.name}
              data-price={supplement.price}
              onChange={handleSupplements}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SupplementsChooser;
