import React, { useState, useEffect } from 'react';
import '../style/_woda.scss';

const WaterCalculator = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male'); // Domyślnie ustawione na 'male'
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [recommendedWater, setRecommendedWater] = useState(0);
    const [isCalculated, setIsCalculated] = useState(false);
    const [inputNotEmpty, setInputNotEmpty] = useState(true);

    useEffect(() => {
        setInputNotEmpty(true);
        setIsCalculated(false);
    }, [age, gender, height, weight]);

    function calculateWater() {
        if (!age || !height || !weight) {
            setInputNotEmpty(false);
            setIsCalculated(true);
            return;
        }

        let waterAmount = 0;

        if (gender === 'male') {
            waterAmount = (weight * 0.03 + height * 0.02) * 10;
        } else if (gender === 'female') {
            waterAmount = (weight * 0.025 + height * 0.015) * 10;
        }

        setRecommendedWater(waterAmount);

        setInputNotEmpty(true);
        setIsCalculated(true);
    }

    return (
        <div className="container box-padding">
            <div className="water-calculator-holder">
                <div className="water-calculator-wrapper">
                    <h1 className="heading-title__water-calculator">Kalkulator Wody</h1>
                    <p className="water-calculator-desc">
                        Oblicz zalecaną ilość spożycia wody na podstawie wieku, płci, wzrostu i wagi.<br />
                        Wprowadź swoje dane poniżej:
                    </p>

                    <div className="area-input">
                        <input
                            value={age}
                            type="text"
                            placeholder="Wiek"
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <select className="select-water" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="male">Mężczyzna</option>
                            <option value="female">Kobieta</option>
                        </select>

                        <input
                            value={height}
                            type="text"
                            placeholder="Wzrost (w cm)"
                            onChange={(e) => setHeight(e.target.value)}
                        />
                        <input
                            value={weight}
                            type="text"
                            placeholder="Waga (w kg)"
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        <button onClick={calculateWater}>
                            Oblicz
                        </button>
                    </div>
                    {isCalculated && inputNotEmpty && (
                        <h2 className="water-calculator-answer">
                            Zalecana ilość wody do spożycia: {recommendedWater.toFixed(2)} ml dziennie
                        </h2>
                    )}
                    {!inputNotEmpty && (
                        <p className="empty-input-message">Wprowadź wszystkie dane i kliknij w przycisk oblicz.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WaterCalculator;
