import React, { useEffect } from "react";
import styles from "./certificates.module.css";
// import gst from "../../assets/GST.pdf"
function Certificates() {
  useEffect(() => {
    window.scrollTo({ top: "0" });
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div>
          <iframe
            src="https://myfarmroots.vercel.app/assets/GST.pdf"
            title="GST"
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://myfarmroots.vercel.app/assets/Udyam.pdf"
            title="Udyam"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Certificates;
