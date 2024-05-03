import React, { useEffect } from "react";
import styles from "./about.module.css";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
function About() {
  useEffect(() => {
    window.scrollTo({ top: "0" });
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.caption}>
          {" "}
          <strong>Our Story</strong>{" "}
        </div>
        <div className={styles.story}>
          We started "Farmroots" with a simple dream: A business that would
          bring the bounty of India's diverse agricultural landscape to tables
          around the globe.
        </div>
        <div style={{ width: "95%", margin: "auto", fontSize: "1.2rem" }}>
          <strong>hello there!</strong>
        </div>
        <div className={styles.story}>
          We are Venkata, Anant and Khudiram. As retirees, we found ourselves
          yearning for a new adventure, something that would light up our days
          and ignite our souls. That's when the idea struck – why not combine
          our love for farming with our knack for business and bring the flavors
          of India's countryside to tables around the world? That's how it all
          began.
        </div>
        <div className={styles.story}>
          With expertise and connections from our previous professions, we set
          out to meet farmers from every corner of our beautiful country. Along
          our journey, a friend introduced us to Dr. Lakha (PhD. Biotochnology).
        </div>
        <div className={styles.story}>
          With her Ph.D. in biotechnology and her expertise in agricultural
          products, we scouted the countryside for the finest produce, selecting
          crops that not only taste great but are also packed with nutrients and
          grown using eco-friendly methods. Armed with crates of farm-fresh
          goodness, we set our sights on the global stage. Navigating the maze
          of international trade, we strive to bring the flavors of India to
          customers far and wide.
        </div>
        <div className={styles.story}>
          But our journey does not end here. Oh no, it is just the beginning.
          Through our business, we not only aim to connect farmers with the
          global markets but also sow the seeds of prosperity in rural
          communities across India
        </div>
        <div className={styles.story}>
          By supporting sustainable agriculture and fair trade practices, we are
          not just growing crops – we are growing the future. As we stand here,
          surrounded by fields ripe with promise, we invite you to join us on
          this incredible journey. Welcome to our Farmroots family – we are
          thrilled to have you along for the ride!
        </div>
        <div className={styles.caption}>
          <strong>Our Vision</strong>
        </div>
        <div className={styles.story}>
          Our vision is very simple, source ethically, promote sustainable
          agriculture, support small farmers, export good quality product while
          meeting the global standards and compliances.
        </div>
        <div className={styles.caption}>
          <strong>Our Founders</strong>
        </div>
        <div className={styles.foundersCont}>
          <div className={styles.founder}>
            <div className={styles.imgSection}>
              <img src={male} alt="male" />{" "}
            </div>
            <div className={styles.founderName}>Veera Venkata Ratna Sagar</div>
            <div className={styles.aboutFounder}>
              A retired government officer with a fervent interest in farming
              practices and agricultural exports. I understand that farming does
              not end at harvest and the need for it to take a longer journey
              across the borders. Through Farmroots I begin this journey with my
              fellow partners on exporting quality products sourced from farmers
              using best practices to grow.
            </div>
          </div>
          <div className={styles.founder}>
            <div className={styles.imgSection}>
              <img src={male} alt="male" />{" "}
            </div>
            <div className={styles.founderName}>Anantrao Kulkarni</div>
            <div className={styles.aboutFounder}>
              For most of my career, I worked as a banker, crunching numbers and
              navigating the world of finance. In the course of my professional
              life I witnessed the challenges faced by small-scale farmers.
              Despite producing top-notch goods, they were struggling to access
              global market. This struggle gave spark to the idea of “Farmroots”
              to bridge the gap between rural producers and global consumers and
              I along with my partners set out to streamline the export process
              for small-scale farmers, financially and logistically.
            </div>
          </div>
          <div className={styles.founder}>
            <div className={styles.imgSection}>
              <img src={female} alt="female" />{" "}
            </div>
            <div className={styles.founderName}>Dr. Lekha Pazhamala (Ph.D)</div>
            <div className={styles.aboutFounder}>
              I hold a doctorate in Biotechnology with over 12 years of
              experience in agricultural research. And I have worked as a
              scientist at the International Crops Research Institute for the
              Semi-Arid Tropics (ICRISAT) and Consultant at the International
              Rice Research Institute (IRRI). My focus revolved around elevating
              crop productivity, improving nutritional quality, and fostering
              sustainable agriculture. With my extensive knowledge, expertise,
              and interest in the field, I strive to deliver agricultural
              products with the highest scientific and ethical standards.
            </div>
          </div>
          <div className={styles.founder}>
            <div className={styles.imgSection}>
              <img src={male} alt="male" />{" "}
            </div>
            <div className={styles.founderName}>Khudiram Khatua</div>
            <div className={styles.aboutFounder}>
              As they say once a farmer, always a farmer at heart. I am one such
              person who cannot spend a day without being in the field. Taking
              care of plants and the land gives me immense pleasure. With that
              in my heart, I have always been keen on starting this business of
              exporting great quality products.
            </div>
          </div>
        </div>
        <div className={styles.caption}>
          <strong>Meet the Team</strong>
        </div>
        <div className={styles.teamCont}>
          <div className={styles.member}>
            <div className={styles.imgSection}>
              <img src={female} alt="female" />{" "}
            </div>
            <div className={styles.memberName}>Dr. Swarnika Vats</div>
            <div className={styles.aboutMember}>Communications Manager</div>
          </div>
          <div className={styles.member}>
            <div className={styles.imgSection}>
              <img src={female} alt="female" />{" "}
            </div>
            <div className={styles.memberName}>Madhusmita Dalai</div>
            <div className={styles.aboutMember}>House Manager</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
