import React from 'react';
import styles from '../styles/About.module.css'; // Import the CSS module

import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src="/assets/img/a.png" alt="" />
            </div>
            <div className="about-text">
                <h2>
                    Welcome To
                    <br /> Taki Pizza
                </h2>
                {/*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsum?<br></br></p>*/}
                <div className={styles['about-inner']}>
                    <h5>
                        <i className="fas fa-arrow-alt-circle-right" style={{color:"red"}}></i>Good Quality
                    </h5>
                    <h5>
                        <i className="fas fa-arrow-alt-circle-right" style={{color:"red"}}></i>Fresh Vegetables
                    </h5>
                    <h5>
                        <i className="fas fa-arrow-alt-circle-right" style={{color:"red"}}></i>Homemade crust
                    </h5>
                    <h5>
                        <i className="fas fa-arrow-alt-circle-right" style={{color:"red"}}></i>Best Price
                    </h5>
                    <h5>
                        <i className="fas fa-arrow-alt-circle-right" style={{color:"red"}}></i>Best Quality
                    </h5>
                </div>
            </div>
        </section>
    );
}

export default About;
