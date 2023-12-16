// MenuCard.jsx
import React from 'react';
import styles from '../styles/MenuCard.module.css';

export const MenuCard = () => {
    return (
        <div className={styles.card}>
            <img
                src="/assets/img/pizza.png"
                alt=""
                className={styles.image}
            />
            <div className={styles.cardContent}>
                <h1 className={styles.title}>FIORI DI ZUCCA</h1>
                <span className={styles.price}>$19.90</span>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    );
};

