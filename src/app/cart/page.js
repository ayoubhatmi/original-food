"use client";
import dynamic from "next/dynamic";

import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import NavBar from "@/components/NavBar";
import emptyCartImg from "../../../public/images/empty-cart.svg";
import Image from "next/image";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [itemsTotalPrice, setItemsTotalPrice] = useState(0);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleItemsTotalPrice = () => {
    let sum = 0;

    cartItems.forEach((element) => {
      sum += element.totalPrice;
    });
    setItemsTotalPrice(sum);
  };

  useEffect(() => {
    handleItemsTotalPrice();
  }, [cartItems]);
  return (
    <>
      <NavBar />
      <div className={styles.Cart}>
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <Image
              src={emptyCartImg}
              width={380}
              height={380}
              alt="empty-card"
            />
            <p>Votre panier est actuellement vide.</p>
            <Link href="/#menu" className={styles.cta}>
              Commandez maintenant !
            </Link>
          </div>
        ) : (
          <div className={styles.container}>
            <div className={styles.cartItems}>
              <h2>Récapitulatif de la commande</h2>
              <div>
                {cartItems.map((item, index) => (
                  <div className={styles.cartItem} key={index}>
                    <span className={styles.item}>
                      {item.quantity} x {item.name}
                    </span>
                    <span className={styles.itemPrice}>
                      {item.totalPrice} €
                    </span>

                    <FaTrash
                      onClick={() => removeFromCartHandler(item.id)}
                      className={styles.deleteIc}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.totalContainer}>
              <div className={styles.total}>
                <h2>Total de la commande</h2>
                <div className={styles.priceContainer}>
                  <p className={styles.bold}>Total</p>
                  <p className={styles.bold}>{itemsTotalPrice} €</p>
                </div>
              </div>
              <button className={styles.btn}>Commander</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
