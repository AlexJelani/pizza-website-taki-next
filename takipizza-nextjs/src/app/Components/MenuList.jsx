import React from 'react'
import styles from '../styles/MenuList.module.css'
export const MenuCard = ({ data }) => {
    const { imageUrl, title, price, description } = data;

    return (
        <div className={styles.card}>
            <img
                src={imageUrl}
                alt=""
                className={styles.image}
            />
            <div className={styles.cardContent}>
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.price}>{price}</span>
                <p className={styles.desc}>{description}</p>
            </div>
        </div>
    );
};

export const MenuList = ({ menuData }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
                in pretium molestie.
            </p>
            <div className={styles.wrapper}>
                {menuData.map((menuItem, index) => (
                    <MenuCard key={index} data={menuItem} />
                ))}
            </div>
        </div>
    );
};
