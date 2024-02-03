// Contact.js
import React from 'react';
import styles from "../styles/Contact.module.css";

function Contact() {
    return (
        <section className={`${styles.uAlignCenter} ${styles.uClearfix} ${styles.uContainerAlignCenter} ${styles.uImage} ${styles.uShading} ${styles.uSection8}`} id="carousel_c2d1">
            <div className={`${styles.uClearfix} ${styles.uSheet} ${styles.uValignMiddle} ${styles.uSheet1}`}>
                <div className={`${styles.uList} ${styles.uList1}`}>
                    <div className={`${styles.uRepeater} ${styles.uRepeater1}`}>
                        <div className={`${styles.uContainerAlignCenter} ${styles.uContainerStyle} ${styles.uListItem} ${styles.uRadius25} ${styles.uRepeaterItem} ${styles.uShapeRound} ${styles.uWhite} ${styles.uListItem1}`}>
                            <div className={`${styles.uContainerLayout} ${styles.uSimilarContainer} ${styles.uContainerLayout1}`}>
                                <h5 className={`${styles.uAlignCenter} ${styles.uCustomItem} ${styles.uText} ${styles.uText1}`}>Find Us</h5>
                                <p className={`${styles.uAlignCenter} ${styles.uCustomItem} ${styles.uText} ${styles.uText2}`}>121 Rock Street, 21 Avenue, New York, NY 92103-9000</p>
                            </div>
                        </div>
                        <div className={`${styles.uContainerAlignCenter} ${styles.uContainerStyle} ${styles.uListItem} ${styles.uRadius25} ${styles.uRepeaterItem} ${styles.uShapeRound} ${styles.uWhite} ${styles.uListItem2}`}>
                            <div className={`${styles.uContainerLayout} ${styles.uSimilarContainer} ${styles.uContainerLayout2}`}>
                                <h5 className={`${styles.uAlignCenter} ${styles.uCustomItem} ${styles.uText} ${styles.uText3}`}>Hours</h5>
                                <p className={`${styles.uAlignCenter} ${styles.uCustomItem} ${styles.uText} ${styles.uText4}`}>
                                    <span style={{ fontWeight: 700 }}>Monday – Saturday </span>
                                    <br />9am – 7pm
                                    <br /><span style={{ fontWeight: 700 }}>Sunday </span>
                                    <br />10am – 6pm
                                </p>
                            </div>
                        </div>
                        <div className={`${styles.uContainerAlignCenter} ${styles.uContainerStyle} ${styles.uListItem} ${styles.uRadius25} ${styles.uRepeaterItem} ${styles.uShapeRound} ${styles.uWhite} ${styles.uListItem3}`}>
                            <div className={`${styles.uContainerLayout} ${styles.uSimilarContainer} ${styles.uContainerLayout3}`}>
                                <h5 className={`${styles.uAlignCenter} ${styles.uCustomItem} ${styles.uText} ${styles.uText5}`}>Call Us</h5>
                                <p className={`${styles.uAlignCenter} ${styles.uCustomItem} ${styles.uText} ${styles.uText6}`}>
                                    <a href="https://nicepage.com/k/interactive-website-templates" className={`${styles.uActiveNone} ${styles.uBorder1} ${styles.uBorderActiveBlack} ${styles.uBorderHoverBlack} ${styles.uBorderNoLeft} ${styles.uBorderNoRight} ${styles.uBorderNoTop} ${styles.uBorderPalette2Base} ${styles.uBtn} ${styles.uButtonLink} ${styles.uButtonStyle} ${styles.uHoverNone} ${styles.uNone} ${styles.uTextActiveBlack} ${styles.uTextHoverBlack} ${styles.uTextPalette2Base} ${styles.uBtn1}`}>1 (234) 567-891</a>
                                    <br /><br />
                                    <a href="https://nicepage.me" className={`${styles.uActiveNone} ${styles.uBorder1} ${styles.uBorderActiveBlack} ${styles.uBorderHoverBlack} ${styles.uBorderNoLeft} ${styles.uBorderNoRight} ${styles.uBorderNoTop} ${styles.uBorderPalette2Base} ${styles.uBtn} ${styles.uButtonLink} ${styles.uButtonStyle} ${styles.uHoverNone} ${styles.uNone} ${styles.uTextActiveBlack} ${styles.uTextHoverBlack} ${styles.uTextPalette2Base} ${styles.uBtn2}`}>2 (345) 333-897</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={`${styles.uAlignCenter} ${styles.uText} ${styles.uTextDefault} ${styles.uText7}`}>Image from <a href="https://freepik.com/" className={`${styles.uActiveNone} ${styles.uBorder1} ${styles.uBorderActiveGrey10} ${styles.uBorderHoverGrey10} ${styles.uBorderNoLeft} ${styles.uBorderNoRight} ${styles.uBorderNoTop} ${styles.uBorderWhite} ${styles.uBtn} ${styles.uButtonLink} ${styles.uButtonStyle} ${styles.uHoverNone} ${styles.uNone} ${styles.uTextBodyAltColor} ${styles.uBtn3}`}>Freepik</a></p>
            </div>
        </section>
    );
}


export default Contact;
