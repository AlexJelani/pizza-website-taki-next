import styles from "../styles/Navbar.module.css";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone"
import {  faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-scroll";
import {useState} from "react";


const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleSetActive = (to) => {
        setActiveLink(to);
    };
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div >
                    <FontAwesomeIcon icon={faPhone} size="2xl" style={{color: "black"}}></FontAwesomeIcon>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>090 1862 1728</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list} >
                    <Link
                        activeClass={styles.selected}
                        to="Featured"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onSetActive={() => handleSetActive('Featured')}
                        className={styles.listItem}>
                        Homepage
                    </Link>
                    <Link activeClass={styles.selected}
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                          onSetActive={() => handleSetActive('About')}
                        className={styles.listItem}>About</Link>
                    <Link activeClass="active"
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                          activeclassname="selected" className="logo">
                        <img src="/assets/img/logo.png" alt="" width="150" height="54" /></Link>
                    <Link activeClass={styles.selected}
                          to="menu"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                          onSetActive={() => handleSetActive('Menu')}
                        className={styles.listItem}>Menu</Link>
                    <Link activeClass={styles.selected}
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                          onSetActive={() => handleSetActive('Contact')}
                        className={styles.listItem}>Contact</Link>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.socialicons}>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
