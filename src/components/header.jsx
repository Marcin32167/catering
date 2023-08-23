import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logoSVG from '../assets/brand.svg';
import cartSVG from '../assets/cart-bag.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleWindowSizeChange = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className={"container-header"}>
                <Link to="/" className="logo">
                    {/*<img src={logoSVG} alt="Catering" />*/}
                    <p className={"company-brand"}>Company brand</p>
                </Link>
                <nav className={`navigation ${isMobile && menuOpen ? 'open' : ''}`}>
                    <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                        <li className="nav-item">
                            <Link to="/" onClick={toggleMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" onClick={toggleMenu}>About</Link>
                        </li>
                        <Link to="/logowanie" onClick={toggleMenu}>
                            <button className={"btn-client"}>panel klienta</button>
                        </Link>
                        <button className={"btn-cta"}>zamów online</button>
                        {/* Przycisk koszyka jako div */}
                        <div className="cart-icon">
                            <img src={cartSVG} alt="Cart"/>
                            <p className={"cart-title"}>koszyk</p>
                            <p className={"cart-counter"}>0</p>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
