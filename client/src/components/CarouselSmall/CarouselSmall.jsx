import React, { useRef } from "react";
import styles from "./carouselsmall.module.css";
function CarouselSmall({ names, images }) {
  const scrollContRef = useRef(null);

  const handleRight = () => {
    if (scrollContRef.current) {
      scrollContRef.current.scroll({
        left: scrollContRef.current.scrollLeft + 100,
        behavior: "smooth",
      });
    }
  };
  const handleLeft = () => {
    if (scrollContRef.current) {
      scrollContRef.current.scroll({
        left: scrollContRef.current.scrollLeft - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div ref={scrollContRef} className={styles.imgCont}>
          {images.map((i, idx) => {
            return <img style={{ display: "block" }} src={i} alt="food" />;
          })}
        </div>
        <div onClick={handleLeft} className={styles.leftArrowCont}>
          <div className={styles.leftArrow}></div>
        </div>
        <div onClick={handleRight} className={styles.rightArrowCont}>
          <div className={styles.rightArrow}></div>
        </div>
      </div>
    </>
  );
}

export default CarouselSmall;
