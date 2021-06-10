import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

export default function Hero({ addScrollEvent }) {
  const section = useRef();

  useEffect(() => {
    addScrollEvent(section.current);
  }, [addScrollEvent]);

  return (
    <section ref={section} className={`${styles.hero} section hidden-down`}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>
            <span className={styles.title_project}>project</span>
            <span className={styles.title_nurtown}>nurtown</span>
          </h1>
        </div>
        <div className={styles.slider_controls}>
          <div className={styles.arrows} />
          <div className={styles.number} />
        </div>
      </div>
      <div className={styles.slider}>
        <Image
          className={styles.image}
          src="/images/hero-img1.svg"
          alt="building"
          layout="fill"
        />
        <div className="goto">
          <span>VOIR</span>
          <img src="/icons/arrow-2-right-long.svg" alt="arrow left" />
        </div>
      </div>
    </section>
  );
}
