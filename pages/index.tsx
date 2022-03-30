import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
