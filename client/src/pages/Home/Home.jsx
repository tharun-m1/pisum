import React from "react";
import styles from "./home.module.css";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main}>
          <Outlet />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
