import React from 'react';
import styles from '../styles/About.module.css'; // Import the CSS module

import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {
    const aboutStyle = {
        backgroundColor:"#1f5156",
        backgroundSize: 'cover', // You can adjust these properties based on your design needs
        backgroundRepeat: 'no-repeat',
    };
    return (
        <section className="about" id="about" style={aboutStyle}>
            <div className="about-img">
                <img src="/assets/img/a.png" alt="" />
            </div>
            <div className={styles.aboutBox}>
                <h2>
                    OUR VISION
                </h2>
                {/*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsum?<br></br></p>*/}
                <p>
                    {/* Dummy text goes here */}
                    At Taki Pizza, we don’t just make pizza. We make people happy.
                    Taki Pizza was built on the belief that pizza night should be special, and we carry that belief into everything we do.
                    With more than 15 years of experience under our belts, we understand how to best serve our customers through
                    tried and true service principles:
                    We create food we’re proud to serve and deliver it fast, with a smile.<br></br>
                    {/* Add any additional text as needed */}
                </p>
                <button className="btn">Our Menu</button>

            </div>
        </section>
    );
}

export default About;
