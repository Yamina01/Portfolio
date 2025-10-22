import React from "react";

import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="./assets/contact/email-icon.png"alt="Email icon" />
          <a href="mailto:yaminafarsaanaofficial@gmail.com">yaminafarsaanaofficial@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="./assets/contact/linkedin-icon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/yamina-farsaana-392082357">linkedin.com/Yamina</a>
        </li>
        <li className={styles.link}>
          <img src="./assets/contact/github-icon.png" alt="Github icon" />
          <a href="https://www.github.com/yamina01">github.com/Yamina</a>
        </li>
      </ul>
    </footer>
  );
};