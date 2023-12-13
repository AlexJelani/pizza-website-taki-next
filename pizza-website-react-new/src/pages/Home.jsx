import React from "react";
import HomeSection from "../Components/HomeSection.jsx";
import About from "../Components/About.jsx";
import Menu from "../Components/Menu.jsx";
import Contact from "../Components/Contact.jsx";
import Featured from "../Components/Featured.jsx";


function Home() {
    return (
        <>
           {/*hero-section*/}
            <Featured/>
            {/* about section */}
            <About/>
            {/*about menu*/}
            <Menu/>
            {/*about contact*/}
            <Contact/>
        </>
    );
}

export default Home;
