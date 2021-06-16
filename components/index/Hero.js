import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import GoTo from '../../modules/GoTo';
import styles from '../../styles/Hero.module.css';

export default function Hero({ projects, isLoading, setIsLoading }) {
  const slider = useRef();
  const [slideToShow, setSlideToShow] = useState(null);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  function handleSlideSwitchClick(direction) {
    if (direction === 'right') {
      if (slideToShow === projects.length - 1) setSlideToShow(0);
      else setSlideToShow(slideToShow + 1);
    } else if (direction === 'left') {
      if (slideToShow === 0) setSlideToShow(projects.length - 1);
      else setSlideToShow(slideToShow - 1);
    }
  }

  function checkComplete() {
    const completed = [...slider.current.children]
      .filter(child => child.firstChild.className.includes('slide'))
      .map(child => child.firstChild)
      .every(img => img.complete === true);
    if (completed) setAreImagesLoaded(true);
  }

  useEffect(() => {
    if (areImagesLoaded) {
      setSlideToShow(0);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  }, [areImagesLoaded]);

  useEffect(() => {
    checkComplete();
  }, []);

  return (
    <section
      className={`${styles.hero} section`}
      style={{ visibility: `${!isLoading ? 'visible' : 'hidden'}` }}
    >
      <div className={styles.content}>
        {projects.map(({ id, name, city }, idx) => (
          <h2
            key={id}
            className={`${styles.title} ${
              idx === slideToShow ? styles.shown : styles.hidden
            }`}
          >
            <span className={styles.project_name}>{name}</span>
            <br />
            <span className={styles.project_city}>{city}</span>
          </h2>
        ))}
        <div className={styles.slider_info}>
          <div className={styles.slider_controls}>
            <div
              className={`${styles.arrow_previous} ${styles.slider_arrow}`}
              onClick={handleSlideSwitchClick.bind(null, 'left')}
            >
              <img src="/icons/arrow-2-right-long.svg" alt="previous slide" />
            </div>
            <div
              className={`${styles.arrow_next} ${styles.slider_arrow}`}
              onClick={handleSlideSwitchClick.bind(null, 'right')}
            >
              <img src="/icons/arrow-2-right-long.svg" alt="next slide" />
            </div>
          </div>
          <div className={styles.slider_counter}>
            <h4 className={styles.current_slide}>
              {slideToShow + 1 < 10 ? `0${slideToShow + 1}` : slideToShow + 1}
            </h4>
            <img src="./icons/slash.svg" alt="slash" />
            <h4 className={styles.total_slides}>
              {projects.length < 10 ? `0${projects.length}` : projects.length}
            </h4>
          </div>
        </div>
      </div>
      <div className={styles.slider} ref={slider}>
        {projects.map(({ id, name, images, city }, idx) => (
          <div
            key={id}
            className={`${styles.slide} ${
              idx === slideToShow ? styles.shown : styles.hidden
            }`}
          >
            <Image
              className={styles.slide_image}
              id={idx}
              src={images[0].path}
              alt={`${name} - ${city}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              quality={30}
              priority={true}
              onLoad={checkComplete}
            />
            <GoTo text="voir" subclass={styles.goto} />
          </div>
        ))}
      </div>
    </section>
  );
}
