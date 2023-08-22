import React, { useState, useEffect } from 'react';

const KalkulatorBmi = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [message, setMessage] = useState('');
    const [bmiValue, setBMIValue] = useState('');
    const [isCalculated, setIsCalculated] = useState(false);
    const [inputNotEmpty, setInputNotEmpty] = useState(true);

    useEffect(() => {
        setInputNotEmpty(true);
        setIsCalculated(false);
    }, [weight, height]);

    function calculateBMI() {
        if (!weight || !height) {
            setInputNotEmpty(false);
            setIsCalculated(true);
            return;
        }

        const h = height / 100;
        const bmi = weight / (h * h);

        if (bmi < 16) {
            setMessage('Znacząca niedowaga.<br />Twój wskaźnik BMI wynosi');
            setBMIValue(bmi.toFixed(2));
        } else if (bmi >= 16 && bmi < 17) {
            setMessage('Umiarkowana niedowaga.<br />Twój wskaźnik BMI wynosi');
            setBMIValue(bmi.toFixed(2));
        } else if (bmi >= 17 && bmi < 18.5) {
            setMessage('Lekka niedowaga.<br />Twój wskaźnik BMI wynosi');
            setBMIValue(bmi.toFixed(2));
        } else if (bmi >= 18.5 && bmi < 25) {
            setMessage('Prawidłowa masa ciała.<br />Twój wskaźnik BMI wynosi');
            setBMIValue(bmi.toFixed(2));
        } else if (bmi >= 25 && bmi < 30) {
            setMessage('Nadwaga.<br />Twój wskaźnik BMI wynosi');
            setBMIValue(bmi.toFixed(2));
        } else if (bmi >= 30 && bmi < 35) {
            setMessage('Otyłość I stopnia.<br />Twój wskaźnik BMI wynosi');
            setBMIValue(bmi.toFixed(2));
        } else if (bmi >= 35 && bmi < 40) {
            setMessage('Otyłość II stopnia.<br />Twój wskaźnik BMI wynosi');
            setBMIValue(bmi.toFixed(2));
        } else if (bmi >= 40) {
            setMessage('Otyłość III stopnia.<br />Twój wskaźnik BMI wynosi');
            setBMIValue(bmi.toFixed(2));
        }

        setInputNotEmpty(true);
        setIsCalculated(true);
    }

    return (
        <div className={"container box-padding"}>
            <div className={"bmi-holder"}>
                <div className="bmi-wrapper">
                    <h1 className={"heading-title__bmi"}> Kalkulator BMI</h1>
                    <p className={"bmi-desc"}>Oblicz swój wskaźnik masy ciała.<br />Wprowadź wartości poniżej:</p>

                    <div className="area-input">
                        <input
                            value={weight}
                            type="text"
                            placeholder="Waga (w kg)"
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        <input
                            value={height}
                            type="text"
                            placeholder="Wzrost (w cm)"
                            onChange={(e) => setHeight(e.target.value)}
                        />
                        <button onClick={calculateBMI}>
                            Oblicz
                        </button>
                    </div>
                    {isCalculated && inputNotEmpty && (
                        <h2 className={"bmi-answer"}>
                            <p className="bmi-message" dangerouslySetInnerHTML={{ __html: message }} />
                            <p className="bmi-value">{bmiValue}</p>
                        </h2>
                    )}
                    {!inputNotEmpty && (
                        <p className="empty-input-message">Wypełnij wszystkie pola i kliknij w przycisk oblicz.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default KalkulatorBmi;