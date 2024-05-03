import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./hompage.module.css";
function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.slider}>
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default HomePage;
