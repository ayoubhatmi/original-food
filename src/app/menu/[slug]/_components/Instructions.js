import styles from "../Article.module.scss";

const Instructions = ({ setComment }) => {
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <h2 className={styles.listHeader}>Instructions spécifiques</h2>
      <textarea
        cols="30"
        rows="10"
        name="message"
        placeholder="Ajouter un commentaire"
        onChange={handleComment}
      />
      <p className={styles.listDescription}>
        Des frais peuvent s&apos;appliquer aux suppléments.
      </p>
    </>
  );
};

export default Instructions;
