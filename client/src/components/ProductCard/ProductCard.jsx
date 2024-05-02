import React from "react";
import styles from "./productcard.module.css";
// import chilli from "../../assets/chilli.png";
import { useNavigate } from "react-router-dom";
function ProductCard({ item }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`${item.name}`)}
        className={styles.container}
      >
        <div className={styles.imgSection}>
          <img src={item.imgUrl} alt="item" />
        </div>
        <div className={styles.name}>{item.name}</div>
      </div>
    </>
  );
}

export default ProductCard;
