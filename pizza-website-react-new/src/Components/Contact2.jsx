// Contact2.js
import React from 'react';
import styles from '../styles/Contact2.module.css';

function Contact2() {
    return (
        <section id="contact" className={styles.sectionContact} >
        <div className={`${styles.greySection} ${styles.flexcontainer}`}>
            <div className={styles.item}>
                <h2 id="item" className={styles.titleSections}>
                    HOURS
                </h2>
                <div className={styles.sectionContent}>
                    <b>Saturday - Sunday</b>
                    <br />
                    11:00 am – 7:00 pm
                    <br />
                    <br />
                    <b>Saturday</b>
                    <br />
                    4:00 pm – 12:00 am
                </div>
            </div>
            <div className={styles.item}>
                <h2 id="item" className={styles.titleSections}>
                    Call US
                </h2>
                <div className={styles.sectionContent}>
                    <b> 090 1862 1728 </b>
                    <br />
                    <b>takipizza@gmail.com</b>
                </div>
            </div>

            <div className={styles.item}>
                <h2 id="findus" className={styles.titleSections}>
                    Find US
                </h2>
                <div className={styles.sectionContent}>
                    <p>121 Rock Street 21</p>
                    <p>Avenue, New York </p>
                    <p>NY 92103-9000</p>
                </div>
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13106.891644578469!2d137.16738579075835!3d34.78775026802187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004c1d438449c3d%3A0x521b2564a053c157!2staki%20pizza!5e0!3m2!1sen!2sjp!4v1702964560699!5m2!1sen!2sjp"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
        </section>
    );
}

export default Contact2;
