import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "../styles/ResponNavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons.jsx";
//TODO delete the top margin
function ResponNavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <HashLink exact to="/#home" className="nav-logo">
                        <span >TAKI PIZZA</span>
                        {/* <i className="fas fa-code"></i> */}
                        <span className="icon">
              {/*<CodeIcon />*/}
            </span>
                    </HashLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <HashLink
                                exact
                                smooth to="/#home"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink
                                exact
                                smooth to="/#about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink
                                exact
                                smooth to="/#menu"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Menu
                            </HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink
                                exact
                                smooth to="/#contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </HashLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

                        {click ? (
                            <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
                        ) : (
                            <span className="icon">
                <HamburgetMenuOpen />
              </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default ResponNavBar;