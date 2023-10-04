import styles from "./Infos.module.scss";
import { MdDeliveryDining, MdFastfood } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { BiSolidDish } from "react-icons/bi";
import packingImg from "../../public/images/packing.png";

const Infos = () => {
  return (
    <div className={styles.Infos}>
      <div className={styles.warpper}>
        <div className={styles.container}>
          <div className={styles.icon}>
            <IoFastFood />
          </div>
          <h2>À emporter</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.icon}>
            <MdDeliveryDining />
          </div>
          <h2>Livraison</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.icon}>
            <BiSolidDish />
          </div>
          <h2>Sur place</h2>
        </div>
      </div>
    </div>
  );
};

export default Infos;
