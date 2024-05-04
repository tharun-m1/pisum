import React, { useEffect, useState } from "react";
import styles from "./carousel.module.css";
// import img1 from "../../assets/carousel-img/1.jpg";
// import img2 from "../../assets/carousel-img/2.jpg";
// import img3 from "../../assets/carousel-img/3.jpg";
function Carousel({ images, text }) {
  // const images = [img1, img2, img3];
  const [showImgIdx, setShowImgIdx] = useState(0);
  // eslint-disable-next-line
  const handleBack = () => {
    setShowImgIdx((imgIdx) => {
      if (imgIdx === 0) {
        return images.length - 1;
      } else {
        return imgIdx - 1;
      }
    });
  };
  // eslint-disable-next-line
  const handleNext = () => {
    setShowImgIdx((imgIdx) => {
      if (imgIdx === images.length - 1) {
        return 0;
      }
      return imgIdx + 1;
    });
  };
  useEffect(() => {
    const id = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(id);
    // eslint-disable-next-line
  }, [handleNext, handleBack]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgCont}>
          {images.map((i, idx) => {
            return (
              <img height={"20%"} src={images[showImgIdx]} alt="farm-food" />
            );
          })}
        </div>
        <div onClick={handleBack} className={styles.leftArrowCont}>
          <div className={styles.leftArrow}></div>
        </div>
        <div onClick={handleNext} className={styles.rightArrowCont}>
          <div className={styles.rightArrow}></div>
        </div>
        <div className={styles.nav}>
          {images.map((img, idx) => {
            return (
              <div
                onClick={() => setShowImgIdx(idx)}
                style={{ borderColor: idx === showImgIdx ? "white" : "" }}
              >
                {" "}
              </div>
            );
          })}
        </div>
        {text && (
          <div className={styles.carText}>
            <div>Farmroots</div>
            <div>Your source for premium indian produce</div>
            <div>Get Started</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Carousel;
