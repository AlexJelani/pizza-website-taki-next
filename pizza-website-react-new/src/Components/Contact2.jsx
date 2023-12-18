// Contact.js
import React from 'react';
import styles from "../styles/Contact2.module.css";

function Contact2() {
    return (
        <section className={`${styles.greySection} ${styles.flexcontainer}`}>
            <div className={styles.item}>
                <h2 id="findus" className={styles.titleSections}>
                    Find US
                </h2>{" "}
                <div className={styles.sectionContent}>
                    {" "}
                    <p>121 Rock Street 21</p>
                    <p>Avenue, New York </p>
                    <p>NY 92103-9000</p>
                </div>
            </div>
            <div className={styles.item}>
                <h2 id="item" className={styles.titleSections}>
                    HOURS
                </h2>{" "}
                <div className={styles.sectionContent}>
                    {" "}
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
                </h2>{" "}
                <div className={styles.sectionContent}>
                    {" "}
                    <b> 090 1862 1728 </b>
                    <br />
                    <b>takipizza@gmail.com</b>
                </div>
            </div>
        </section>
    );
}

export default Contact2;



