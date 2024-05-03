import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.products}>
            <div className={styles.caption}>Products</div>
            <div className={styles.links}>
              <div>
                <Link className={styles.link} to={"spices"}>
                  &gt; Spices
                </Link>
              </div>
              <div>
                <Link className={styles.link} to={"dry-fruits"}>
                  &gt; Dry Fruits
                </Link>
              </div>
              <div>
                <Link className={styles.link} to={"pulses"}>
                  &gt; Pulses
                </Link>
              </div>
              <div>
                <Link className={styles.link} to={"cereals"}>
                  &gt; Cereals
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.address}>
            <div className={styles.caption}>Stay Connected</div>
            <div>Rigestered address:</div>
            <div>
              33/15, Prashant Bunglow, <br />
              Opp. Garware College,
              <br />
              Karve Road, Pune 411004 India
            </div>
            <div>Phone Numbers:</div>
            <div>9765758899 / 7219115858</div>
            <div>Email: </div>
            <div>inquiry@pisumfoods.com</div>
          </div>
        </div>
        <div className={styles.middle}></div>
        <div className={styles.bottom}></div>
      </div>
    </>
  );
}

export default Footer;
