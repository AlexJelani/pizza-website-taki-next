// Contact.js
import React from 'react';
import styles from "../styles/Contact.module.css";

function Contact() {
    return (
        <>
            <div className="google-map-code">
                <iframe
                    src="https://www.google.com/maps/embed?pb=@34.7877281,137.1776592,4z/data=!4m22!1m15!4m14!1m6!1m2!1s0x6004c1d438449c3d:0x521b2564a053c157!2z5oSb55-l55yM6JKy6YOh5biC6KW_5rWm55S66KW_6aas55u477yV77yRIHRha2kgcGl6emE!2m2!1d137.1776647!2d34.7877274!1m6!1m2!1s0x30635ff06b92b791:0xd78c4fa1854213a6!2sIndia!2m2!1d78.96288!2d20.593684!3m5!1s0x6004c1d438449c3d:0x521b2564a053c157!8m2!3d34.7877507!4d137.1776641!16s%2Fg%2F11slq768l5?"
                    width="600" height="450" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false"
                    tabIndex="0"></iframe>
            </div>
        </>
    );
}

export default Contact;
