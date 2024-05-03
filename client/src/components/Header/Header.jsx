import React, { useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/pisum-logo.png";
import drop from "../../assets/drop.png";
import { useNavigate } from "react-router-dom";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const navigate = useNavigate();

  const handleCategory = (e, type) => {
    e.stopPropagation();
    setShowProducts(false);
    setShowMenu(false);
    return navigate(`${type}`);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className={styles.navMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.navBar}>
            <div onClick={() => navigate("/")}>Home</div>
            <div
              onClick={() => {
                setShowMenu(false);
                navigate("about");
              }}
            >
              About Us
            </div>
            <div
              style={{ position: "relative" }}
              onClick={() => setShowProducts(!showProducts)}
            >
              Products <img src={drop} alt="drop-down" />
              {showProducts ? (
                <div className={styles.modalOptions}>
                  <div onClick={(e) => handleCategory(e, "spices")}>Spices</div>
                  <div onClick={(e) => handleCategory(e, "dry-fruits")}>
                    Dry Fruits
                  </div>
                  <div onClick={(e) => handleCategory(e, "pulses")}>Pulses</div>
                  <div onClick={(e) => handleCategory(e, "cereals")}>
                    Cereals
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                navigate("certificates");
              }}
            >
              Certificates
            </div>
            <div>Blogs</div>
            <div>Contact Us</div>
          </div>
        </div>
        {showMenu ? (
          <div className={styles.menu}>
            <div
              onClick={() => {
                setShowMenu(false);
                navigate("/");
              }}
              className={styles.menuItem}
            >
              {" "}
              Home{" "}
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                navigate("about");
              }}
              className={styles.menuItem}
            >
              {" "}
              About Us{" "}
            </div>
            <div
              onClick={() => setShowProducts(!showProducts)}
              className={styles.menuItem}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {" "}
              Products <span>{showProducts ? "-" : "+"}</span>
            </div>
            <div
              style={{ display: showProducts ? "block" : "none" }}
              className={styles.types}
            >
              <div
                onClick={(e) => handleCategory(e, "spices")}
                style={{ paddingLeft: "30px" }}
                className={styles.menuItem}
              >
                Spices
              </div>
              <div
                onClick={(e) => handleCategory(e, "dry-fruits")}
                style={{ paddingLeft: "30px" }}
                className={styles.menuItem}
              >
                Dry Fruits
              </div>
              <div
                onClick={(e) => handleCategory(e, "pulses")}
                style={{ paddingLeft: "30px" }}
                className={styles.menuItem}
              >
                Pulses
              </div>
              <div
                onClick={(e) => handleCategory(e, "cereals")}
                style={{ paddingLeft: "30px" }}
                className={styles.menuItem}
              >
                Cereals
              </div>
            </div>
            <div
              onClick={() => {
                setShowMenu(false);
                navigate("certificates");
              }}
              className={styles.menuItem}
            >
              {" "}
              Certificates{" "}
            </div>
            <div className={styles.menuItem}> Blogs </div>
            <div className={styles.menuItem}> Contact Us </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Header;
