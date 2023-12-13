import styles from "../styles/Featured.module.css";
import { useState } from "react";

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/assets/img/featured.jpg",
        "/assets/img/featured2.jpg",
        "/assets/img/featured3.jpg",
        // Photo by <a href="https://unsplash.com/@kkalerry?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Klara Kulikova</a> on <a href="https://unsplash.com/photos/person-holding-sliced-pizza-with-red-sauce-jvWZYnxBDlQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

        ];

    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
                <img src="/assets/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
            </div>
            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <img src={img} alt="" layout="fill" objectFit="contain" />
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
                <img src="/assets/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
            </div>
        </div>
    );
};

export default Featured;