import styles from "../app/menu/[slug]/Article.module.scss";
import { data } from "@/utils/data";

const SupplementsChooser = ({
  supplements,
  setSupplements,
  onSupplementsPriceChange,
}) => {
  const handleSupplements = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSupplements([...supplements, value]);
    } else {
      setSupplements((supplements) =>
        supplements.filter((item) => item !== value)
      );
    }
  };

  const calculateSupplementsPrice = () => {
    let totalPrice = 0;

    for (const selectedSupplement of supplements) {
      // Find the selected supplement in the data array
      const supplement = data.supplements.find(
        (item) => item.name === selectedSupplement
      );

      if (supplement) {
        // Add the price of the selected supplement to the total
        totalPrice += supplement.price;
      }
    }

    onSupplementsPriceChange(totalPrice);

    return totalPrice;
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
              onChange={handleSupplements}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SupplementsChooser;
