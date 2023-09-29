"use client";

import styles from "./Article.module.scss";
import Image from "next/image";
import { data } from "../../../utils/data";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import BoissonChooser from "./_components/BoissonChooser";
import SeulOuMenuChooser from "./_components/SeulOuMenuChooser";
import SauceFromagere from "./_components/SauceFromagere";
import ViandesChooser from "./_components/ViandesChooser";
import Sauces from "./_components/SaucesChooser";
import NbPiecesChooser from "./_components/NbPiecesChooser";
import SupplementsChooser from "./_components/SupplementsChooser";
import QuantityChooser from "./_components/QuantityChooser";
import Instructions from "./_components/Instructions";

const Article = ({ params: { slug } }) => {
  const article = data.articles.find((article) => article.slug === slug);

  // const { cartItems } = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  const [sauces, setSauces] = useState([]);
  const [viandes, setViandes] = useState([]);
  const [sauceFromagere, setSauceFromagere] = useState("");
  const [seulOuMenu, setSeulOuMenu] = useState({
    name: "Seul",
    price: 0,
  });
  const [boisson, setBoisson] = useState("");
  const [nbPieces, setNbPieces] = useState({ nb: 0, price: 0 });
  const [quantity, setQuantity] = useState(1);

  // Handle supplements and their price.
  const [supplements, setSupplements] = useState([]);
  const [supplementsPrice, setSupplementsPrice] = useState(0);
  const handleSupplementsPriceChange = (newSupplementsPrice) => {
    setSupplementsPrice(newSupplementsPrice);
  };

  //Specific instructions
  const [comment, setComment] = useState("");

  //TotalPrice
  const [totalPrice, setTotalPrice] = useState(0);
  const handleTotalPrice = () => {
    let total =
      (article.price + supplementsPrice + seulOuMenu.price + nbPieces.price) *
      quantity;
    setTotalPrice(total);
  };

  // CartItems
  const [cartItem, setCartItem] = useState({});
  const handleCartItem = () => {
    setCartItem({
      name: article.name,
      sauces: article.sauces ? sauces : null,
      viandes: article.nbViandes ? viandes : null,
      sauceFromagere: article.sauceFromagere ? sauceFromagere : null,
      seulOuMenu: article.seulOuMenu ? seulOuMenu : null,
      boisson: article.boissons ? boisson : null,
      supplements: article.supplements ? supplements : null,
      nbPieces: article.nbPieces ? nbPieces : null,
      comment: comment,
      quantity: quantity,
      price: totalPrice,
    });
  };

  useEffect(() => {
    handleTotalPrice();
  }, [quantity, supplementsPrice, seulOuMenu, nbPieces]);

  return (
    <div className={styles.Article}>
      <Image
        className={styles.image}
        src={article.image}
        width={492}
        height={492}
      />

      <div className={styles.content}>
        <h1 className={styles.name}>{article.name}</h1>
        <p className={styles.price}>{article.price} €</p>
        <p className={styles.description}>{article.description}</p>

        <form>
          {article.pieces && (
            <NbPiecesChooser setNbPieces={setNbPieces} article={article} />
          )}

          {article.sauces && <Sauces sauces={sauces} setSauces={setSauces} />}

          {article.nbViandes && (
            <ViandesChooser
              viandes={viandes}
              setViandes={setViandes}
              article={article}
            />
          )}

          {article.sauceFromagere && (
            <SauceFromagere setSauceFromagere={setSauceFromagere} />
          )}

          {article.seulOuMenu && (
            <SeulOuMenuChooser setSeulOuMenu={setSeulOuMenu} />
          )}

          {article.seulOuMenu && seulOuMenu.name === "Menu" && (
            <BoissonChooser setBoisson={setBoisson} />
          )}

          {article.boissons && <BoissonChooser setBoisson={setBoisson} />}
          {article.supplements && (
            <SupplementsChooser
              supplements={supplements}
              setSupplements={setSupplements}
              onSupplementsPriceChange={handleSupplementsPriceChange}
            />
          )}

          <Instructions setComment={setComment} />
          <QuantityChooser setQuantity={setQuantity} />

          <button
            className={styles.btn}
            onClick={() => (handleCartItem(), dispatch(addToCart(cartItem)))}
          >
            Ajouter au panier : {totalPrice} €
          </button>
        </form>
      </div>
    </div>
  );
};

export default Article;
