import { useEffect, useRef } from 'react';
import { addScrollEvent } from '../utils/addScrollEvent';
import Image from 'next/image';
import GoTo from '../modules/GoTo';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const section = useRef();
  const slider = useRef();

  useEffect(() => {
    addScrollEvent(section.current);
    addScrollEvent(slider.current);
  }, []);

  return (
    <section className={`${styles.hero} section`}>
      <div className={styles.content} ref={section}>
        <div className={styles.title}>
          <h1>
            <span className={styles.title_project}>project</span>
            <br />
            <span className={styles.title_nurtown}>nurtown</span>
          </h1>
        </div>
        {/* <div className={styles.slider_controls}>
          <div className={styles.arrows} />
          <div className={styles.number} />
        </div> */}
      </div>
      <div className={styles.slider} ref={slider}>
        <Image
          className={styles.image}
          src="/images/hero-img1.svg"
          alt="building"
          layout="fill"
        />
        <GoTo />
      </div>
    </section>
  );
}
