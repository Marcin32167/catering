import React, { useState, useEffect } from 'react';

const Logowanie = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginValidationMessage, setLoginValidationMessage] = useState('');

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
        setLoginValidationMessage('');
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setLoginValidationMessage('');
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        if (!login || !password) {
            setLoginValidationMessage('Wypełnij wszystkie pola powyżej, aby sie zalogować.');
        } else {
            setLoginValidationMessage('');
            localStorage.setItem('loggedLogin', login);
            console.log('Zalogowano:', login);
        }
    };

    useEffect(() => {
        const savedLogin = localStorage.getItem('loggedLogin');
        if (savedLogin) {
            console.log('Zalogowano:', savedLogin);
        }
    }, []);

    return (
        <div className="page">
            <div className={"logowanie-bg"}>
                <div className="logowanie-overlay"></div>
                <div className={"container box-padding"}>
                    <div className={"form-wrapper"}>
                        <div className={"form-holder"}>
                            <h2 className="login-title">Cześć, <br></br> Miło Cię widzieć.</h2>
                            <form className="login-form" onSubmit={handleLoginSubmit}>
                                <div className="form-group">
                                    <label className={"login-label"} htmlFor="login">Login:</label>
                                    <input
                                        type="text"
                                        id="login"
                                        placeholder="Wpisz login"
                                        value={login}
                                        onChange={handleLoginChange}
                                        className={"login-input"}
                                        onClick={() => setLoginValidationMessage('')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className={"password-label"} htmlFor="password">Hasło:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Wpisz hasło"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className={"password-input"}
                                        onClick={() => setLoginValidationMessage('')}
                                    />
                                </div>
                                <button className={"login-submit"} type="submit">Zaloguj</button>
                                {loginValidationMessage && (
                                    <p className={"login-validation-message"}>{loginValidationMessage}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logowanie;
