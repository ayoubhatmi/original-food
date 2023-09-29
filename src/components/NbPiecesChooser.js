import styles from "../app/menu/[slug]/Article.module.scss";
import { data } from "@/utils/data";

const NbPiecesChooser = ({ setNbPieces }) => {
  const handleNbPieces = (e) => {
    setNbPieces(e.target.value);
    // setnbPiecesPrice(getNbPiecesPrice(e.target.value));
  };

  // const getNbPiecesPrice = (nbPieces) => {
  //   const nbPiece = data.nbPieces.find((item) => item.nb === nbPieces);
  //   return nbPiece.nb;
  // };

  return (
    <>
      <h2 className={styles.listHeader}>Nombre des pièces</h2>
      <p className={styles.listDescription}>Choisissez-en 1 max.</p>
      <ul>
        {data.nbPieces.map((nbPiece) => (
          <li className={styles.inputbox} key={nbPiece.nb}>
            <div>
              <label for={nbPiece.nb}>{nbPiece.nb} pièces</label>
              <p className={styles.itemPrice}>
                {nbPiece.price ? "+ " + nbPiece.price + " €" : null}
              </p>
            </div>
            <input
              className={styles.radio}
              type="radio"
              id={nbPiece.nb}
              name="nbPiece"
              data-value={`"nb": ${nbPiece.nb}, "price": ${nbPiece.nb}`}
              onChange={handleNbPieces}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default NbPiecesChooser;
