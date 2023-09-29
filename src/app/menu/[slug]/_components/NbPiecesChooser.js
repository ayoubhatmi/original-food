import styles from "../Article.module.scss";

const NbPiecesChooser = ({ article, setNbPieces }) => {
  const handleNbPieces = (e) => {
    setNbPieces({
      nb: e.target.value,
      price: parseInt(e.target.dataset.price),
    });
  };

  return (
    <>
      <h2 className={styles.listHeader}>Nombre des pièces</h2>
      <p className={styles.listDescription}>Choisissez-en 1 max.</p>
      <ul>
        {article.pieces.map((item) => (
          <li className={styles.inputbox} key={item.nb}>
            <div>
              <label for={item.nb}>{item.nb} pièces</label>
              <p className={styles.itemPrice}>
                {item.price ? "+ " + item.price + " €" : null}
              </p>
            </div>
            <input
              className={styles.radio}
              type="radio"
              id={item.nb}
              name="nbPiece"
              value={item.nb}
              data-price={item.price}
              onChange={handleNbPieces}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default NbPiecesChooser;
