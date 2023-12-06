import React from "react";


function Home() {
    return (
        <>
                {/* home section */}
                <section className="home" id="home">
                    <div className="home-text">
                        <h1>
                            <span>Welcome</span> to The world of Tasty &amp; Fresh Pizza
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing. <br /> Lorem ipsum
                            dolor sit amet consectetur adipisicing.
                        </p>
                        <a href="#" className="btn">
                            Choose a Pizza
                        </a>
                    </div>
                    <div className="home-img">
                        <img src="/assets/img/home.png" alt="home" />
                    </div>
                </section>
                {/* about section */}
                <section className="about" id="about">
                    <div className="about-img">
                        <img src="/assets/img/a.png" alt="" />
                    </div>
                    <div className="about-text">
                        <h2>
                            The Delicious Food
                            <br /> For a Good Mood
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsum?
                            <br />
                            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Deleniti, dolore pariatur! Enim inventore excepturi laudantium
                            necessitatibus placeat mollitia, incidunt consequatur.
                        </p>
                        <a href="#" className="btn">
                            Choose a Pizza
                        </a>
                    </div>
                </section>
                <section className="menu" id="menu">
                    <div className="main-text">
                        <h2>Most Popular Pizza</h2>
                        <p>
                            We have selected for You
                            <br /> the most exquisite tastes around the world
                        </p>
                    </div>
                    <div className="menu-content">
                        <div className="row">
                            <img src="/assets/img/m1.jpg" alt="main-product1" />
                            <div className="menu-text">
                                <div className="menu-left">
                                    <h4>Margarita</h4>
                                </div>
                                <div className="menu-right">
                                    <h5>$17.00</h5>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
                                magnam.
                            </p>
                            <div className="star">
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <img src="/assets/img/m2.jpg" alt="main-product2" />
                            <div className="menu-text">
                                <div className="menu-left">
                                    <h4>Montanara</h4>
                                </div>
                                <div className="menu-right">
                                    <h5>$17.00</h5>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
                                magnam.
                            </p>
                            <div className="star">
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <img src="/assets/img/m3.jpg" alt="main-product3" />
                            <div className="menu-text">
                                <div className="menu-left">
                                    <h4>Con Carne</h4>
                                </div>
                                <div className="menu-right">
                                    <h5>$17.00</h5>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
                                magnam.
                            </p>
                            <div className="star">
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <img src="/assets/img/m4.jpg" alt="main-product4" />
                            <div className="menu-text">
                                <div className="menu-left">
                                    <h4>Pepperoni</h4>
                                </div>
                                <div className="menu-right">
                                    <h5>$17.00</h5>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
                                magnam.
                            </p>
                            <div className="star">
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                                <a href="#">
                                    <i className="bx bxs-star" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default Home;
