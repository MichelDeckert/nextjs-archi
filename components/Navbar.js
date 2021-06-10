import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="./assets/logo.svg" alt="logo" />
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <a href="#">ACCUEIL</a>
          </li>
          <li>
            <a href="#">GALERIE</a>
          </li>
          <li>
            <a href="#">PROJETS</a>
          </li>
          <li>
            <a href="#">CERTIFICATS</a>
          </li>
          <li>
            <a href="#">CONTACTS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
