import React from 'react'
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h3 className={styles.greeting}>Hi , I'm</h3>
            <h1 className={styles.title}>Yamina Farsaana</h1>
            <p className={styles.description}>I'm an Aspiring full-stack developer with hands-on experience building projects using Java, React, and modern web technologies. Strong foundation in both frontend and backend development with a focus on clean, efficient code.</p>
            <a href='mailto: yaminafarsaanaofficial@gmail.com'
            className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src ="/assets/nav/bluegirl.jpeg" alt='hero image of me' className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
