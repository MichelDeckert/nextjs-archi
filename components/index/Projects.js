import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Projects.module.css';
import GoTo from '../../modules/GoTo';
import { addScrollEvent } from '../../utils/addScrollEvent';

export default function Projects({ projects }) {
  const title = useRef();
  const images = useRef();

  useEffect(() => {
    addScrollEvent(title.current);
    addScrollEvent(images.current);
  }, []);

  return (
    <section className={`${styles.section} section`}>
      <h2 ref={title} className={`${styles.title} secondary-title`}>
        Nos projets
      </h2>
      <div ref={images} className={styles.images}>
        {projects.map(({ images, name }, id) => (
          <div className={styles.img} key={id}>
            <Image
              src={images[0].path}
              alt={name}
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              quality={30}
            />
            <div className={styles.overlay}>
              <h3>{name}</h3>
              <div className={styles.link}>
                <span>LIRE</span>
                <img
                  src="./icons/arrow-2-right-long-white.svg"
                  alt="arrow left"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <GoTo
        theme="dark"
        subclass={styles.goto}
        animate={true}
        text="tous nos projets"
      />
      {/* <div className="goto">
				<span>TOUS LES PROJETS</span>
				<img src="./icons/arrow-2-right-long-white.svg" alt="arrow left" />
			</div> */}
    </section>
  );
}
