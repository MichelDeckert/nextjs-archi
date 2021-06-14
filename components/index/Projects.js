import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Projects.module.css';
import GoTo from '../../modules/GoTo';
import { addScrollEvent } from '../../utils/addScrollEvent';

export default function Projects({ projects }) {
  const title = useRef();
  const images = useRef();
  const [projectsToDisplay, setProjectsToDisplay] = useState([]);

  useEffect(() => {
    setProjectsToDisplay(projects.slice(0, 5));
  }, [projects]);

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
        {projectsToDisplay.map(({images, name}) => (
          <div className={styles.img}>
            <img src={images[0]} alt={name} />
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
