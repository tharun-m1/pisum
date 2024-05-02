import React from "react";
import styles from "./home.module.css";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

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
      </div>
    </>
  );
}

export default Home;
