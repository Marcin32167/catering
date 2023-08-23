import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoSVG from '../assets/brand.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Sprawdzanie czy szerokość ekranu jest mniejsza niż 992px (przyjęta granica dla wersji mobilnej)
        const handleWindowSizeChange = () => {
            setIsMobile(window.innerWidth < 992);
        };

        // Wywołanie funkcji po załadowaniu komponentu i przy zmianie szerokości ekranu
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);

        // Oczyszczenie nasłuchiwania po odmontowaniu komponentu
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
                </ul>
            </nav>
            </div>
        </header>
    );
};

export default Header;
