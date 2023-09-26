// Komponent App
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/header.jsx';
import Footer from '../src/components/footer.jsx';
import Home from '../src/pages/home.jsx';
import About from '../src/pages/about.jsx';
import Zamowienie from '../src/pages/zamowienie.jsx';
import Logowanie from '../src/components/logowanie.jsx';
import KalkulatorBmi from '../src/pages/kalkulator-bmi.jsx';
import '../src/style/main.scss';
import WaterCalculator from "./pages/kalkulator-wody.jsx";

function App() {
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartVisible, setCartVisible] = useState(false);
    const [isDay, setIsDay] = useState(true);

    const updateCartItemCount = () => {
        setCartItemCount(prevCount => prevCount + 1);
    };

    const toggleCart = () => {
        setCartVisible(!cartVisible);
    };

    const checkTimeOfDay = () => {
        const now = new Date();
        const hours = now.getHours();
        setIsDay(hours >= 6 && hours < 18);
    };

    useEffect(() => {
        checkTimeOfDay();
        const interval = setInterval(checkTimeOfDay, 60000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Router>
            <div className="App">
                <Header cartItemCount={cartItemCount} toggleCart={toggleCart} />
                <Routes>
                    <Route
                        path="/"
                        element={<Home updateCartItemCount={updateCartItemCount} cartVisible={cartVisible} toggleCart={toggleCart} isDay={isDay} />}
                    />
                    <Route path="/about" element={<About isDay={isDay} />} />
                    <Route path="/zamowienie" element={<Zamowienie isDay={isDay} />} />
                    <Route path="/logowanie" element={<Logowanie isDay={isDay} />} />
                    <Route path="/kalkulator-bmi" element={<KalkulatorBmi isDay={isDay} />} />
                    <Route path="/kalkulator-wody" element={<WaterCalculator isDay={isDay} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
