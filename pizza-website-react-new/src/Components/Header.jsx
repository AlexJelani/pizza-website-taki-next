import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            {/* Use Link for the logo */}
            <Link to="/" className="logo">
                <img src="/assets/img/logo.png" alt="logo" />
            </Link>

            {/* Hamburger Icon */}
            <div id="menu-icon" onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </div>

            {/* Navigation Menu */}
            <ul className={`navbar ${isMenuOpen ? "open" : ""}`}>
                {/* Use Link for each navigation item */}
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;
