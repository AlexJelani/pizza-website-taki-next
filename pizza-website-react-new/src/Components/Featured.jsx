import React, { useState, useEffect } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/assets/img/featured.png",
        "/assets/img/featured2.png",
        "/assets/img/featured3.png",
    ];

    const handleArrow = (direction) => {
        if (direction === "l") {
            setIndex((prevIndex) => (prevIndex !== 0 ? prevIndex - 1 : 2));
        }
        if (direction === "r") {
            setIndex((prevIndex) => (prevIndex !== 2 ? prevIndex + 1 : 0));
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex !== 2 ? prevIndex + 1 : 0));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${styles.container} Featured`} id="home">
            <div
                className={styles.arrowContainer}
                style={{ left: 0 }}
                onClick={() => handleArrow("l")}
            >
                <img
                    src="/assets/img/arrowl.png"
                    alt=""
                    className={styles.arrowImage}
                />
            </div>
            <div
                className={styles.wrapper}
                style={{ transform: `translateX(${-100 * index}vw)` }}
            >
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <img src={img} alt="" className={styles.featuredImage} />
                    </div>
                ))}
            </div>
            <div
                className={styles.arrowContainer}
                style={{ right: 0 }}
                onClick={() => handleArrow("r")}
            >
                <img
                    src="/assets/img/arrowr.png"
                    alt=""
                    className={styles.arrowImage}
                />
            </div>
        </div>
    );
};

export default Featured;
