import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <header id="top">
      <nav>
        <ul className={styles.nav}>
          <li className={`${styles.nav_list_item}`}>
            <Link href="#top">
              <a className={`${styles.nav_links}  ${styles.nav_home_btn}`}>
                Home
              </a>
            </Link>
          </li>
          <li className={`${styles.nav_list_item} `}>
            <Link href="#top">
              <a className={`${styles.nav_links} ${styles.nav_donate_btn}`}>
                Donate
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
