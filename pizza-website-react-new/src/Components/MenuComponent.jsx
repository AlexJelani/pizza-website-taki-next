import React, { useState } from 'react';
import '../styles/MenuComponent.css'
import MenuCard from '../Components/MenuCard';
import Categories from '../Components/Categories.jsx';
import items from '../data/data.js';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function MenuComponent() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <MenuCard items={menuItems} />
            </section>
        </main>
    );
}

export default MenuComponent;
