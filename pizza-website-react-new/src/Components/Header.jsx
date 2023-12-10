// import { Link, NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPizzaSlice} from "@fortawesome/free-solid-svg-icons/faPizzaSlice";
import { Link} from "react-scroll";




function Header() {
    const headerStyle = {
        position: 'sticky',
        top: 0,
        backgroundColor: '#fffbf6',
        zIndex: 1000,

    };
    return (
        <header style={headerStyle}>

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
                    style={{ marginLeft: "40px" }}                />
            </Link>
            <ul className="navbar">
                {/* Use Link for each navigation item */}
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
            <div className="pizza-icon">
                <FontAwesomeIcon icon={faPizzaSlice} size="2xl" style={{color: "#f29121", marginRight:"40px"}} />
            </div>
        </header>
    );
}

export default Header;
