
import React from 'react';
import styles from '../styles/Contact2.module.css';

function Contact2() {
    return (
        <section className={`${styles.greySection} ${styles.flexcontainer}`} id="contact">
            <div className={styles.item}>
                <h2 id="item" className={styles.titleSections}>
                    HOURS
                </h2>
                <div className={styles.sectionContent}>
                    <b>土日営業</b>
                    <b>Saturday - Sunday</b>
                    <br />
                    11:00 am – 19:00
                    <br />
                    <br />
                    <br />
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
                    <p>西馬相51 西浦町</p>
                    <p>Nishibasō-51 Nishiurachō</p>
                    <p>蒲郡市 愛知県 日本</p>
                    <p>Gamagori, Aichi 443-0105, Japan</p>
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
        </section>
    );
}

export default Contact2;
