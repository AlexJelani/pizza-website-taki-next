import React from 'react'
import styles from "../styles/MenuCard.module.css"

export const MenuCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <img src="/assets/img/pizza.png" alt="" width="500" height="500" />
                <h1 className={styles.title}>FIORI DI ZUCCA</h1>
                <span className={styles.price}>$19.90</span>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    )
}
