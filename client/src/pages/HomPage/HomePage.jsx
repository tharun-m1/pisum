import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./hompage.module.css";
import Chilli from "../../assets/product-imgs/chilli.png";
import Makhana from "../../assets/product-imgs/Makhana.png";
import DryFruits from "../../assets/product-imgs/dry-fruits.png";
import Pulses from "../../assets/product-imgs/pulses.png";
import Cereals from "../../assets/product-imgs/cereals.png";
import whyUsImg from "../../assets/why-us.png";
function HomePage() {
  const types = ["all", "spices", "dryFruits", "cereals", "pulses", "makhana"];
  const [cat, setCat] = useState("all");

  const images = {
    spices: Chilli,
    dryFruits: DryFruits,
    cereals: Cereals,
    pulses: Pulses,
    makhana: Makhana,
  };

  useEffect(() => {
    window.scrollTo({ top: "0" });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.slider}>
          <Carousel />
        </div>
        <div className={styles.prodRange}>
          <div className={styles.caption}>
            <strong>Our Product Range</strong>
          </div>
          <div className={styles.line}></div>
          <div className={styles.types}>
            {types.map((type, idx) => {
              return (
                <div
                  onClick={() => setCat(type)}
                  style={{
                    backgroundColor: type === cat ? "blue" : "",
                    color: type === cat ? "white" : "",
                  }}
                >
                  {type}
                </div>
              );
            })}
          </div>
          <div className={styles.products}>
            {cat === "all" ? (
              Object.keys(images).map((k, idx) => {
                return (
                  <div>
                    <img src={images[k]} alt="farm food" /> <br />
                    <div className={styles.prodName}>{types[idx + 1]}</div>
                  </div>
                );
              })
            ) : (
              <div>
                <img src={images[cat]} alt="farm food" /> <br />
                <div className={styles.prodName}>{cat}</div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.whyUsCaption}>Why Choose Us</div>
        <div className={styles.whyUs}>
          <div className={styles.left}>
            <img src={whyUsImg} alt="why us" />
          </div>
          <div className={styles.right}>
            <div className={styles.rightCap}>FEATURES OF PISUM</div>
            <div className={styles.info}>
              With the increasing demand for safe and sustainable products, we
              are committed to supporting local farmers and communities and
              delivering quality p roducts to our customers.
            </div>
            <div className={styles.points}>
              <ul>
                <li>High Quality Varieties</li>
                <li>Safer Agronomic Practices</li>
                <li>Farmer centric approach</li>
                <li>Reduced production costs and resources</li>
                <li>Meet Market demand and consumer preferences</li>
                <li>Utilization of native diverse genetic resources</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
