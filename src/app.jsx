import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../src/components/header.jsx';
import Main from '../src/components/main.jsx';
import Footer from '../src/components/footer.jsx';
import Home from '../src/pages/home.jsx';
import About from '../src/pages/about.jsx';
import '../src/style/main.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
