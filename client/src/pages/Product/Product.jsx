import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./product.module.css";
import { data } from "../../assets/data";
import point from "../../assets/point.png";
function Product() {
  const { category, product } = useParams();

  const type = data.find((el) => el.type === category);
  const pageData = type.items.find((el) => el.name === product);
  const { ingrediants } = pageData;
  const ings = ingrediants ? Object.keys(ingrediants) : null;
  useEffect(() => {
    window.scrollTo({ top: "0" });
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.banner}>
          <img src={pageData.banner} alt={pageData.name} />
        </div>
        <div className={styles.caption}>Indian {pageData.name} Exporters</div>
        <div className={styles.about}>{pageData.about}</div>
        <div className={styles.gmd}>
          <div className={styles.gmdCaption}>
            {pageData?.gmd && "Global Market Demand"}
          </div>
          <div>{pageData?.gmd}</div>
        </div>
        <div className={styles.specification}>
          <div className={styles.specCaption}>Specification</div>
          <table>
            <tr>
              <th>Product Name</th>
              <td>{pageData.name}</td>
            </tr>
            <tr>
              <th>Origin</th>
              <td>{pageData?.origin}</td>
            </tr>
            <tr>
              <th>family</th>
              <td>{pageData?.family}</td>
            </tr>
            <tr>
              <th>Binomial Name</th>
              <td>{pageData?.binomialName}</td>
            </tr>
          </table>
        </div>
        <div className={styles.ingrediants}>
          <div className={styles.ingCaption}>
            {pageData?.ingrediants && "Ingrediants"}
          </div>
          <table>
            {ings?.length > 0 &&
              ings.map((ing) => {
                return (
                  <tr>
                    <th style={{ textTransform: "capitalize" }}>{ing}</th>
                    <td>
                      {pageData?.ingrediants[ing]?.split(",").map((item) => {
                        return <div style={{ paddingTop: "5px" }}>{item}</div>;
                      })}
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
        <div className={styles.uses}>
          <div className={styles.usesCaption}>
            {pageData?.uses && "Uses :"}{" "}
          </div>
          {pageData?.uses?.map((u) => {
            return (
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img src={point} alt="arrow" />
                <div style={{ textIndent: "10px", textAlign: "justify" }}>
                  {u}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.last}>{type?.para3}</div>
      </div>
    </>
  );
}

export default Product;
