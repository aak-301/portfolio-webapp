import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aakash</h1>
        <p className={styles.description}>
          I'm full-stack developer and have experience in React.js, Node.js and
          Flutter.
        </p>
        <a
          href="mailto:aakashshivanshu5@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <div style={{
        // height:"40%",
        // width:"35%",
        // borderRadius:"50%",
        // backgroundColor:"red",

      }}>
      <img
        src={getImageUrl("about/a0.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
