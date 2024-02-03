// import { Link, NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import { Link} from "react-scroll";
import styles from '../styles/Header.module.css'





function Header() {
    const headerStyle = {
        position: 'sticky',
        top: 0,
        backgroundColor: '#fffbf6',
        zIndex: 1000,

    };
    return (
        <header style={headerStyle} className={styles.header}>



            <ul className={styles.navbar}>
                {/* Use Link for each navigation item */}
                <div className={styles.phoneicon}>
                    <FontAwesomeIcon icon={faPhone} size="lg" style={{color: "#f29121"}} />
                    <p className={styles.phoneicon}>343-3323-2324</p>
                </div>
                <li>
                    <Link activeClass="active"
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                          activeclassname="selected"
                        >Home</Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        activeclassname="selected"
                    >About</Link>
                </li>
                {/* Use Link for the logo */}
                <Link activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration= {500}
                      activeclassname="selected" className="logo">
                <img
                    src="/assets/img/logo.png"
                    alt="logo"
                    className={styles.logo}/>
                </Link>

                <li>
                    <Link
                        activeClass="active"
                        to="menu"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        activeclassname="selected"
                        >Menu</Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        activeclassname="selected"
                    >Contact</Link>
                </li>
            </ul>

        </header>
    );
}

export default Header;
