import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img src="./logo-white.svg" alt="logo" />
        <div className={styles.informations}>
          <h4 className={styles.title}>Informations</h4>
          <ul>
            <li>Accueil</li>
            <li>Galerie</li>
            <li>Projets</li>
            <li>Certificats</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h4 className={styles.title}>Contacts</h4>
          <ul>
            <li>
              <img src="./icons/localisation.svg" alt="" />
              <span>
                100000, République du Kazakhstan, Karaganda, st. Télévision 10
              </span>
            </li>
            <li>
              <img src="./icons/phone.svg" alt="" />
              <span> +7 (701) 77 76 811 </span>
            </li>
            <li>
              <img src="./icons/email.svg" alt="" />
              <span> Galym.sultanov@mail.ru </span>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <h4 className={styles.title}>Réseaux sociaux</h4>
          <ul>
            <li>
              <img src="./icons/facebook.svg" alt="facebook" />
            </li>
            <li>
              <img src="./icons/twitter.svg" alt="twitter" />
            </li>
            <li>
              <img src="./icons/linkedin.svg" alt="linkedin" />
            </li>
            <li>
              <img src="./icons/pininterest.svg" alt="pininterest" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
