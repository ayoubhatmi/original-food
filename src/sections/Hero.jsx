import styles from "./Hero.module.scss";
import Image from "next/image";
import heroImg from "../../public/images/hero-img.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.heroImg}
        src={heroImg}
        alt="L'original Food"
        fill
        style={{
          objectFit: "cover",
          zIndex: -99,
        }}
      ></Image>
      <h1 className={styles.header}>L'original Food</h1>
      <p className={styles.slogan}>
        Soyez original, mangez original avec L'Original Food!
      </p>
      <Link className={styles.btn} href="/">
        Voir le Menu
      </Link>
    </section>
  );
};

export default Hero;
