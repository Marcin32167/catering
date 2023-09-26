import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoSVG from '../assets/brand.svg';
import cartSVG from '../assets/cart-bag.svg';

const Header = (props) => {
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

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className={"container__header"}>
                <Link to="/" className="logo">
                    <p className={"company-brand"}>Brand</p>
                </Link>
                <div className="wrapper__nav">
                    <div className="wrapper__btns--nav">
                        <Link to="/logowanie">
                            <button className={"btn__secondary"} onClick={closeMenu}>panel klienta</button>
                        </Link>
                        <Link to="/zamowienie">
                            <button className={"btn__main"}>zamawiam</button>
                        </Link>
                        <button className="btn__cart" onClick={props.toggleCart}>
                            <img className="img__cart" src={cartSVG} alt="Cart"/>
                            <p className={"cart__title"}>koszyk</p>
                            <p className={"cart__counter"}>{props.cartItemCount}</p>
                        </button>
                    </div>
                    <nav className={`navigation ${isMobile && menuOpen ? 'open' : ''}`}>
                        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                            <li className="nav-item">
                                <NavLink to="/" onClick={closeMenu}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about"  onClick={closeMenu}>
                                    About
                                </NavLink>
                            </li>
                            <Link to="/logowanie">
                                <button className={"btn__secondary"} onClick={closeMenu}>panel klienta</button>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
