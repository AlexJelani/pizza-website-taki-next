import React from "react";
import HomeSection from "../Components/HomeSection.jsx";
import About from "../Components/About.jsx";
import Menu from "../Components/Menu.jsx";
import Contact from "../Components/Contact.jsx";
import Featured from "../Components/Featured.jsx";
import {MenuList} from "../Components/MenuList.jsx";
import menuData from "../data/menuData.jsx";
import Contact2 from "../Components/Contact2.jsx";
import Footer from "../Components/Footer.jsx";
import ScrollToTop from "../Components/ScrollToTop.jsx";


function Home() {
    return (
        <>
            <ScrollToTop />
           {/*hero-section*/}
            <Featured/>
            {/* about section */}
            <About/>
            {/*about menu*/}
            <MenuList menuData={menuData} id="menu"/>
            {/*about contact*/}
            <Contact2/>
            {/*footer*/}
            <Footer/>
        </>
    );
}

export default Home;
