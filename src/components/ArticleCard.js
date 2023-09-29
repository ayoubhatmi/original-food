import Image from "next/image";
import styles from "./ArticleCard.module.scss";
import Link from "next/link";

const ArticleCard = ({ article }) => {
  return (
    <div className={styles.ArticleCard}>
      <Link href={`/menu/${article.slug}`}>
        <Image
          src={article.image}
          width={248}
          height={192}
          alt={article.slug}
        />
        <h3 className={styles.name}>{article.name}</h3>
        <p className={styles.price}>{article.price} €</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
