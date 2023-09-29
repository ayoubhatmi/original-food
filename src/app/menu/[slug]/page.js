"use client";

import styles from "./Article.module.scss";
import Image from "next/image";
import { data } from "../../../utils/data";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import SupplementsChooser from "@/components/SupplementsChooser";
import BoissonChooser from "@/components/BoissonChooser";
import SeulOuMenuChooser from "@/components/SeulOuMenuChooser";
import SauceFromagere from "@/components/SauceFromagere";
import ViandesChooser from "@/components/ViandesChooser";
import Sauces from "@/components/Sauces";
import NbPiecesChooser from "@/components/NbPiecesChooser";

const Article = ({ params: { slug } }) => {
  const article = data.articles.find((article) => article.slug === slug);

  // const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [sauces, setSauces] = useState([]);
  const [viandes, setViandes] = useState([]);
  const [sauceFromagere, setSauceFromagere] = useState("");
  const [seulOuMenu, setSeulOuMenu] = useState("");
  const [boisson, setBoisson] = useState("");

  const [nbPieces, setNbPieces] = useState();

  // Handle supplements and their price.
  const [supplements, setSupplements] = useState([]);
  const [supplementsPrice, setSupplementsPrice] = useState(0);
  const handleSupplementsPriceChange = (newSupplementsPrice) => {
    setSupplementsPrice(newSupplementsPrice);
  };

  //Specific instructions
  const [comment, setComment] = useState("");
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  //Quantité
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  //TotalPrice
  const [totalPrice, setTotalPrice] = useState(0);

  // CartItems
  const [cartItem, setCartItem] = useState({ name: article.name });
  useEffect(() => {
    let total = 0;
    if (seulOuMenu === "menu") {
      total += 2.9;
    }

    total += (article.price + supplementsPrice) * quantity;
    setTotalPrice(total);
    setCartItem({
      name: article.name,
      sauces: article.sauces ? sauces : null,
      viandes: article.nbViandes ? viandes : null,
      sauceFromagere: article.sauceFromagere ? sauceFromagere : null,
      seulOuMenu: article.seulOuMenu ? seulOuMenu : null,
      boisson: article.boissons ? boisson : null,
      supplements: article.supplements ? supplements : null,
      comment: comment,
      quantity: quantity,
      price: 100,
    });
  }, [quantity, supplementsPrice, seulOuMenu]);

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
          {article.nbPieces ? (
            <NbPiecesChooser setNbPieces={setNbPieces} />
          ) : null}

          {article.sauces ? (
            <Sauces sauces={sauces} setSauces={setSauces} />
          ) : null}

          {article.nbViandes ? (
            <ViandesChooser
              viandes={viandes}
              setViandes={setViandes}
              article={article}
            />
          ) : null}

          {article.sauceFromagere ? (
            <SauceFromagere setSauceFromagere={setSauceFromagere} />
          ) : null}

          {article.seulOuMenu ? (
            <SeulOuMenuChooser setSeulOuMenu={setSeulOuMenu} />
          ) : null}

          {article.seulOuMenu && seulOuMenu === "menu" ? (
            <BoissonChooser setBoisson={setBoisson} />
          ) : null}

          {article.boissons ? <BoissonChooser setBoisson={setBoisson} /> : null}
          {article.supplements ? (
            <SupplementsChooser
              supplements={supplements}
              setSupplements={setSupplements}
              onSupplementsPriceChange={handleSupplementsPriceChange}
            />
          ) : null}

          {/* Comment */}
          <h2 className={styles.listHeader}>Instructions spécifiques</h2>
          <textarea
            cols="30"
            rows="10"
            name="message"
            placeholder="Ajouter un commentaire"
            onChange={handleComment}
          />
          <p className={styles.listDescription}>
            Des frais peuvent s'appliquer aux suppléments.
          </p>

          {/* Quantité */}
          <div className={styles.select}>
            <select onChange={handleQuantity}>
              {[...Array(98)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>

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
