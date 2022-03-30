import styles from "../styles/Home.module.css";

export default () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <a href="https://nextjs.org">Body</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </div>
    </main>
  );
};
