"use client";

import styles from "./Hero.module.scss";
import Image from "next/image";
import heroImg from "../../public/images/hero-img.jpg";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          L&apos;original Food
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
      </header>
      <Image
        className={styles.heroImg}
        src={heroImg}
        alt="Loriginal Food"
        fill
        style={{
          objectFit: "cover",
          zIndex: -99,
        }}
      ></Image>
      <div className={styles.container}>
        <h1 className={styles.title}>L&apos;original Food</h1>
        <p className={styles.slogan}>
          Soyez original, mangez original avec L&apos;Original Food!
        </p>
        <Link className={styles.cta} href="#menu">
          Voir le Menu
        </Link>
      </div>
    </section>
  );
};

export default Hero;
