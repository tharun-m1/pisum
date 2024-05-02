import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { data } from "../../assets/data";
import styles from "./category.module.css";
// import search from "../../assets/search.svg";
import ProductCard from "../../components/ProductCard/ProductCard";
function Category() {
  const { category } = useParams();
  const location = useLocation();
  const pageData = data.find((el) => el.type === category);
  // const arr = Array.from({ length: 10 }, () => 0);

  useEffect(() => {
    window.scrollTo({ top: "0" });
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.banner}>
          <img src={pageData.banner} alt={pageData.type} />
          <div>
            <div className={styles.type}>{pageData.type}</div>
            <div className={styles.route}>HOME {location.pathname}</div>
          </div>
        </div>
        {/* <div className={styles.searchContainer}>
          <div className={styles.inputBox}>
            <input placeholder="search..." type="text" />
          </div>
          <div className={styles.searchIcon}>
            <img src={search} alt="search for product" />
          </div>
        </div> */}
        <div className={styles.caption}>Indian {pageData.type} Exporter</div>
        <div className={styles.line}></div>
        <div className={styles.info}>
          <div>{pageData.para1}</div>
          <div>{pageData.para2}</div>
        </div>
        <div className={styles.productsCont}>
          {pageData.items.map((item, index) => {
            return <ProductCard key={item.name} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Category;
