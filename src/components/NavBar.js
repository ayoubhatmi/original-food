"use client";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <header className={styles.NavBar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          L'original Food
        </Link>
        <div className={styles.navContainer}>
          <Link className={styles.btn} href="/">
            Se connecter
          </Link>
          <Link href="/cart">
            <div className={styles.cart}>
              <FaShoppingCart className={styles.cartIc} />
              <span className={styles.Quantity}>
                <span>{cartItems.length}</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
