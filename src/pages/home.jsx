import React from 'react';
import videoPath from '../assets/bg-video.webm';
import standardImage from '../assets/standard.jpeg';
import vegeImage from '../assets/vege.jpeg';
import activeImage from '../assets/active.jpeg';

const Home = () => {
    return (
        <div>
            <section className="hero-section">
                <h1 className="heading-main">Zasmakuj wygody z Naszym cateringiem</h1>
                <video autoPlay loop muted className="hero-video">
                    <source src={videoPath} type="video/webm" />
                </video>
            </section>
            <section>
                <div className="container box-padding">
                    <div className="heading-wrapper">
                        <h2 className="heading-second">Wybierz odpowiednią dietę dla Ciebie</h2>
                    </div>
                    <div className="box-wrapper">
                        <div className="box">
                            <img src={standardImage} alt="Standard" className="image-box" />
                            <div className={"box-desc"}>
                                <h3 className={"heading-desc"}>Standard</h3>
                                <p className={"p-box__desc"}>Zdrowa i w pełni zbilansowana dieta, bogata w niezbędne składniki mineralne, witaminy i błonnik pokarmowy.</p>
                                <div className={"btn-price__wrapper"}>
                                    <button className={"btn-buy"}>Zamawiam</button>
                                    <p className={"title-price"}>od 60 zł</p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <img src={vegeImage} alt="Vege" className="image-box" />
                            <div className={"box-desc"}>
                                <h3 className={"heading-desc"}>Vege</h3>
                                <p className={"p-box__desc"}>Zdrowa i w pełni zbilansowana dieta, bogata w niezbędne składniki mineralne, witaminy i błonnik pokarmowy.</p>
                                <div className={"btn-price__wrapper"}>
                                    <button className={"btn-buy"}>Zamawiam</button>
                                    <p className={"title-price"}>od 80 zł</p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <img src={activeImage} alt="Active" className="image-box" />
                            <div className={"box-desc"}>
                                <h3 className={"heading-desc"}>Active</h3>
                                <p className={"p-box__desc"}>Zdrowa i w pełni zbilansowana dieta, bogata w niezbędne składniki mineralne, witaminy i błonnik pokarmowy.</p>
                                <div className={"btn-price__wrapper"}>
                                    <button className={"btn-buy"}>Zamawiam</button>
                                    <p className={"title-price"}>od 100 zł</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
