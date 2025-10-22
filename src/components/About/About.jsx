import React from 'react'
import styles from './About.module.css' 
export const About = () => {
  return (
    <div className={styles.about} id= "about">
        <h1 className={styles.title}>ABOUT</h1>

  <div className={styles.content}>
    <img src='./assets/about/arrowIcon.png' alt ="firstIcon"/>
    <div className={styles.text}>
        <h3 className={styles.head}>Frontend Developer</h3>
        <p>Frontend developer skilled in React, JavaScript, and modern CSS. Creating responsive, interactive user interfaces with focus on clean code and optimal user experience. </p>
    </div>
    </div> 

    <div className={styles.content} >
    <img src='./assets/about/backendIcon.png'  alt ="secondIcon"/>
    <div className={styles.text}>
        <h3 className={styles.head}>Backend Developer</h3>
        <p>Backend developer specializing in Java Spring Boot and MySQL. Building RESTful APIs, database systems, and robust server-side applications with security and scalability in mind. </p>
    </div>
    </div> 
    <div className={styles.content}>
    <img src='./assets/about/thirdIcon.png' alt ="thirdIcon"/>
    <div className={styles.text}>
        <h3 className={styles.head}>AI-Augmented Developer</h3>
        <p>Completed certification in ChatGPT Prompt Engineering from Great Learning, gaining skills in AI-assisted development and efficient prompt design for coding tasks. </p>
    </div>
    </div> 
   </div>
  )
}
