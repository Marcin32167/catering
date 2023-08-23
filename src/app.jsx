import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/header.jsx';
import Footer from '../src/components/footer.jsx';
import Home from '../src/pages/home.jsx';
import About from '../src/pages/about.jsx';
import Logowanie from '../src/components/logowanie.jsx'
import KalkulatorBmi from '../src/pages/kalkulator-bmi.jsx';
import '../src/style/main.scss';

function App() {
    const [cartItemCount, setCartItemCount] = useState(0);

    const updateCartItemCount = () => {
        setCartItemCount(prevCount => prevCount + 1);
    };

    return (
        <Router>
            <div className="App">
                <Header cartItemCount={cartItemCount} />
                <Routes>
                    <Route path="/" element={<Home updateCartItemCount={updateCartItemCount} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logowanie" element={<Logowanie />} />
                    <Route path="/kalkulator-bmi" element={<KalkulatorBmi />} /> {/* Zmieniony element */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
