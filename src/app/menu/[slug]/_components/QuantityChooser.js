import styles from "../Article.module.scss";

const QuantityChooser = ({ setQuantity }) => {
  const handleQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className={styles.select}>
      <select onChange={handleQuantity}>
        {[...Array(98)].map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuantityChooser;
