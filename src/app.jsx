import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/header.jsx';
import Footer from '../src/components/footer.jsx';
import Home from '../src/pages/home.jsx';
import About from '../src/pages/about.jsx';
import Zamowienie from "../src/pages/zamowienie.jsx";
import Logowanie from '../src/components/logowanie.jsx';
import KalkulatorBmi from '../src/pages/kalkulator-bmi.jsx';
import '../src/style/main.scss';

function App() {
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartVisible, setCartVisible] = useState(false);

    const updateCartItemCount = () => {
        setCartItemCount(prevCount => prevCount + 1);
    };

    const toggleCart = () => {
        setCartVisible(!cartVisible);
    };

    return (
        <Router>
            <div className="App">
                <Header cartItemCount={cartItemCount} toggleCart={toggleCart} />
                <Routes>
                    <Route path="/" element={<Home updateCartItemCount={updateCartItemCount} cartVisible={cartVisible} toggleCart={toggleCart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/about" element={<Zamowienie />} />
                    <Route path="/logowanie" element={<Logowanie />} />
                    <Route path="/kalkulator-bmi" element={<KalkulatorBmi />} /> {/* Zmieniony element */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
