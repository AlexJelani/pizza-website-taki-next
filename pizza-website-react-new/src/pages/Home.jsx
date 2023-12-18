import React from "react";
import HomeSection from "../Components/HomeSection.jsx";
import About from "../Components/About.jsx";
import Menu from "../Components/Menu.jsx";
import Contact from "../Components/Contact.jsx";
import Featured from "../Components/Featured.jsx";
import {MenuList} from "../Components/MenuList.jsx";
import Contact2 from "../Components/Contact2.jsx";


function Home() {
    return (
        <>
           {/*hero-section*/}
            <Featured/>
            {/* about section */}
            <About/>
            {/*about menu*/}
            <MenuList/>
            {/*about contact*/}
            <Contact2/>
        </>
    );
}

export default Home;
