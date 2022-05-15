import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
const NavSec = () => {
  return (
    <nav>
      <ul className={navStyles.nav}>
        <li className={navStyles.menuItem}>
          <Link href="/">Commercial</Link>
        </li>
        <li className={navStyles.menuItem}>
          <Link href="/">Tourers</Link>
        </li>
        <li className={navStyles.menuCenterItem}>
          <Link href="/">
            <>
              <div className={navStyles.firstLine}>
                planet<sup className={navStyles.sup}>TM</sup>
              </div>
              <div className={navStyles.secondLine}>caravans</div>
            </>
          </Link>
        </li>
        <li className={navStyles.menuItem}>
          <Link href="/">Our history</Link>
        </li>
        <li className={navStyles.menuItem}>
          <Link href="/">Get in touch</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavSec;
