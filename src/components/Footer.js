import styles from "./Footer.module.scss";
import Link from "next/link";
import { MdPlace, MdPhoneInTalk, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill="#ff9000"
          fillOpacity="1"
          d="M0,160L1440,64L1440,320L0,320Z"
        ></path>
      </svg>
      <div className={styles.Footer}>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li className={styles.listHeader}>Liens Rapides</li>
            <li className={styles.listItem}>
              <Link href={"/"}>Menu</Link>
            </li>
            <li className={styles.listItem}>
              <Link href={"/"}>Commander</Link>
            </li>
          </ul>
          <ul className={styles.list}>
            <li className={styles.listHeader}>Contactez-nous</li>
            <li className={styles.listItem}>
              <MdPlace className={styles.ic} /> 2 Rue Jules Guesde, Wingles,
              62410
            </li>
            <li className={styles.listItem}>
              <MdPhoneInTalk className={styles.ic} /> +33 0622445588
            </li>
            <li className={styles.listItem}>
              <MdMail className={styles.ic} /> contact@originalfood.fr
            </li>
          </ul>

          <ul className={styles.list}>
            <li className={styles.listHeader}>Horaires d'ouvertures</li>
            <li className={styles.subheader}>Dimanche - Jeudi </li>
            <li>11:30 - 14:30 18:00 - 23:00</li>
            <li>18:00 - 23:00</li>
            <li className={styles.subheader}>Vendredi</li>
            <li>18:00 - 23:00</li>
            <li className={styles.subheader}>Samedi</li>
            <li>11:30 - 14:30 18:00 - 23:00</li>
            <li>18:00 - 23:00</li>
          </ul>
        </div>

        <p className={styles.copyright}>
          L'original Food | tous droits réservés © 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
