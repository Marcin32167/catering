import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import '../style/slider.scss';
import imageSliderOne from '../assets/pic1.jpeg';
import imageSliderTwo from '../assets/pic2.jpeg';

const HeroSlider = () => {
    const swiperContainerRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperContainerRef.current) {
            swiperRef.current = new Swiper(swiperContainerRef.current, {
                loop: true,
                speed: 1000,
                parallax: true,
                autoplay: {
                    delay: 6500,
                    disableOnInteraction: false,
                },
                watchSlidesProgress: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
            });
        }
    }, []);

    const handleNextButtonClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <section className="hero-slider hero-style">
            <div className="swiper-container" ref={swiperContainerRef}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${imageSliderOne})` }}>
                        <div className="container">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>GUITAR CLASSES FOR KIDS</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Want to see your kid become more expressive?</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <a href="#" className="theme-btn-s2">
                                        Register now
                                    </a>
                                    <a href="#" className="theme-btn-s3">
                                        <i className="fas fa-chevron-circle-right"></i> Get Info
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${imageSliderTwo})` }}>
                            <div className="container">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>GUITAR CLASSES FOR KIDS</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Want to see your kid become more expressive?</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <a href="#" className="theme-btn-s2">
                                        Register now
                                    </a>
                                    <a href="#" className="theme-btn-s3">
                                        <i className="fas fa-chevron-circle-right"></i> Get Info
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="swiper-pagination"></div>
                <div className="swiper-button-next" onClick={handleNextButtonClick}></div>
                <div className="swiper-button-prev"></div>
            </div>
        </section>
    );
};

export default HeroSlider;
