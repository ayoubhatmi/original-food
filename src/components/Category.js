import ArticleCard from "./ArticleCard";
import styles from "./Category.module.scss";
import { data } from "@/utils/data";

const Category = ({ category }) => {
  const articles = data.articles.filter((article) =>
    article.category.includes(category.name)
  );
  return (
    <div className={styles.Category} id={category.name}>
      <h2 className={styles.title}>{category.title}</h2>
      <ul className={styles.articles}>
        {articles.map((article, index) => (
          <li key={index}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
