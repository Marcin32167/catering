import React, { useState } from 'react';
import checkBox from '../assets/check-box-order.svg';
import iconMenu from '../assets/icon-step-2.svg';
import menuStandard from '../assets/standard-menu.jpg';
import menuVege from '../assets/vege-menu.jpg';
import menuActive from '../assets/active-menu.jpg';
import leftArrowSvg from '../assets/arrow-left.svg';
import rightArrowSvg from '../assets/arrow-right.svg';


const Calendar = ({ selectedDate, onChange, isNextMonth }) => {
    const currentDate = new Date();
    const initialDisplayedDate = isNextMonth
        ? new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
        : selectedDate;

    const [displayedDate, setDisplayedDate] = useState(initialDisplayedDate);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const daysInMonth = new Date(displayedDate.getFullYear(), displayedDate.getMonth() + 1, 0).getDate();
    const startDay = new Date(displayedDate.getFullYear(), displayedDate.getMonth(), 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const prevMonth = () => {
        setDisplayedDate(new Date(displayedDate.getFullYear(), displayedDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setDisplayedDate(new Date(displayedDate.getFullYear(), displayedDate.getMonth() + 1, 1));
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button className="calendar-nav-btn" onClick={prevMonth}>
                    <img src={leftArrowSvg} alt="Previous Month" />
                </button>
                <h3>{displayedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
                <button className="calendar-nav-btn" onClick={nextMonth}>
                    <img src={rightArrowSvg} alt="Next Month" />
                </button>
            </div>
            <div className="days">
                <div className="day day-header">Pon.</div>
                <div className="day day-header">Wt.</div>
                <div className="day day-header">Śr.</div>
                <div className="day day-header">Czw.</div>
                <div className="day day-header">Pt.</div>
                <div className="day day-header">Sb.</div>
                <div className="day day-header">Niedz.</div>
                {Array.from({ length: startDay }, (_, i) => <div key={`empty-${i}`} className="empty-day"></div>)}
                {days.map(day => {
                    const isPastDay =
                        displayedDate.getMonth() === currentMonth && displayedDate.getFullYear() === currentYear && day < currentDay;
                    return (
                        <div
                            key={day}
                            className={`day ${day === selectedDate.getDate() && displayedDate.getMonth() === selectedDate.getMonth() ? 'selected' : ''} ${isPastDay ? 'past-day' : ''}`}
                            onClick={() => !isPastDay && onChange(new Date(displayedDate.getFullYear(), displayedDate.getMonth(), day))}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Zamowienie = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [selectedCalories, setSelectedCalories] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDate2, setSelectedDate2] = useState(new Date());

    // const [isButtonSelected, setIsButtonSelected] = useState(false);

    const handleCitySelection = (city) => {
        localStorage.setItem('selectedCity', city);
        setSelectedCity(city);
        setCurrentStep(2);
        console.log(`Wybrane miasto: ${city}`);
    };

    const handleProgramMenuSelection = (program) => {
        localStorage.setItem('selectedProgram', program);
        setSelectedProgram(program);
        setCurrentStep(3);
        console.log(`Wybrany program: ${program}`);
    };

    const handleMenuSelection = (menu) => {
        localStorage.setItem('selectedMenu', menu);
        setSelectedMenu(menu);
        setCurrentStep(4);
        console.log(`Wybrane menu: ${menu}`);
    };

    const handleCaloriesSelection = (calories) => {
        localStorage.setItem('selectedCalories', calories);
        setSelectedCalories(calories);
        setCurrentStep(5);
        console.log(`Wybrana kaloryczność: ${calories}`);
    };

    // const handleNextStep = () => {
    //     setCurrentStep(currentStep + 1);
    // };


    const renderStep = (stepNumber) => {
        switch (stepNumber) {
            case 1:
                return (
                    <div className="step">
                        <div className={"checkbox-order"}>
                            <img src={checkBox} alt="Standard" className="checkbox-image"/>
                        </div>
                        <h2 className={"step-title"}>wybierz miasto</h2>
                        <div className={"btns-wrapper__first-step"}>
                            <button
                                className={`btn-city ${selectedCity === 'Warszawa' ? 'active' : ''}`}
                                onClick={() => handleCitySelection('Warszawa')}>warszawa
                            </button>
                            <button
                                className={`btn-city ${selectedCity === 'Gdańsk' ? 'active' : ''}`}
                                onClick={() => handleCitySelection('Gdańsk')}>gdańsk
                            </button>
                            <button
                                className={`btn-city ${selectedCity === 'Kraków' ? 'active' : ''}`}
                                onClick={() => handleCitySelection('Kraków')}>kraków
                            </button>
                            <button
                                className={`btn-city ${selectedCity === 'Bielsk Podlaski' ? 'active' : ''}`}
                                onClick={() => handleCitySelection('Bielsk Podlaski')}>bielsk podlaski
                            </button>
                            <button
                                className={`btn-city ${selectedCity === 'Klejniki' ? 'active' : ''}`}
                                onClick={() => handleCitySelection('Klejnik')}>Klejniki
                            </button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="step">
                        <div className={"checkbox-order"}>
                            <img src={checkBox} alt="Standard" className="checkbox-image"/>
                        </div>
                        <h2 className={"step-title"}>wybierz rodzaj menu</h2>
                        <div className={"menu-option-wrapper"}>
                            <div className={"menu-col1"}>
                                <img src={iconMenu} alt="Standard" className="menu-option-image"/>
                                <p className={"menu-desc"}>Wybór menu</p>
                                <p className={"menu-p__desc line"}>- Kilka dań do wyboru w ramach posiłku <br></br> -
                                    Możliwość zmiany przy zamówieniu i w
                                    każdym momencie w panelu klienta <br></br> - Darmowe wymiany w cenie</p>
                                <button
                                    className={`btn-zamow ${selectedProgram === 'Wybór menu' ? 'active' : ''}`}
                                    onClick={() => handleProgramMenuSelection('Wybór menu')}>
                                    {selectedProgram === 'Wybór menu' ? 'wybrany' : 'wybierz program'}
                                </button>
                            </div>
                            <div className={"menu-col1"}>
                                <img src={iconMenu} alt="Standard" className="menu-option-image"/>
                                <p className={"menu-desc"}>Standardowe menu</p>
                                <p className={"menu-p__desc"}>- NOWOŚĆ! Lunch - pełnowartościowe gotowe do podgrzania
                                    posiłki z dostawą prosto pod Twoje drzwi <br></br> - Aż 17 zbilansowanych diet do
                                    wyboru <br></br> - Diety przygotowane przez najlepszych dietetyków SuperMenu</p>
                                <button
                                    className={`btn-zamow ${selectedProgram === 'Standardowe menu' ? 'active' : ''}`}
                                    onClick={() => handleProgramMenuSelection('Standardowe menu')}>
                                    {selectedProgram === 'Standardowe menu' ? 'wybrany' : 'wybierz program'}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="step">
                        <div className={"checkbox-order"}>
                            <img src={checkBox} alt="Standard" className="checkbox-image"/>
                        </div>
                        <h2 className={"step-title"}>wybierz swoją dietę</h2>
                        <div className={"menu-option-wrapper"}>
                            <div className={"menu-col1"}>
                                <img src={menuStandard} alt="Standard" className="menu-image"/>
                                <p className={"menu-desc"}>Standard</p>
                                <p className={"menu-p__desc line-clamp"}>Dieta Standard to 5 jakościowych i
                                    zbilansowanych
                                    posiłków w super cenie! Jeśli chcesz utrzymać piękną sylwetkę i jednocześnie zdrowo
                                    się odżywiać to dieta idealna dla Ciebie!</p>
                                <button
                                    className={`btn-zamow ${selectedMenu === 'Standard' ? 'active' : ''}`}
                                    onClick={() => handleMenuSelection('Standard')}>
                                    {selectedMenu === 'Standard' ? 'wybrany' : 'wybierz'}
                                </button>
                                <a className={"menu-more__desc"}>zobacz menu i opis</a>
                            </div>
                            <div className={"menu-col1"}>
                                <img src={menuVege} alt="Standard" className="menu-image"/>
                                <p className={"menu-desc"}>Vege</p>
                                <p className={"menu-p__desc line-clamp"}>Dieta wegańska charakteryzuje się wykluczeniem
                                    wszystkich
                                    produktów pochodzenia zwierzęcego – nie tylko mięsa i ryb, ale również nabiału oraz
                                    jajek. Komponowana jest w oparciu o roślinne źródła białka, takie jak soja i
                                    przetwory sojowe (np. tofu), soczewicę, ciecierzycę, groch i fasolę. Coraz więcej
                                    osób decyduje się na rezygnację z mięsa zamawiając dietę wegetariańską, ale weganizm
                                    również zaczyna być bardzo popularnym sposobem odżywiania.</p>
                                <button
                                    className={`btn-zamow ${selectedMenu === 'Vege' ? 'active' : ''}`}
                                    onClick={() => handleMenuSelection('Vege')}>
                                    {selectedMenu === 'Vege' ? 'wybrany' : 'wybierz'}
                                </button>
                                <a className={"menu-more__desc"}>zobacz menu i opis</a>
                            </div>
                            <div className={"menu-col1"}>
                                <img src={menuActive} alt="Standard" className="menu-image"/>
                                <p className={"menu-desc"}>Active</p>
                                <p className={"menu-p__desc line-clamp"}>Cateringi dietetyczne stworzyły specjalną opcję
                                    dla osób,
                                    które są aktywne fizycznie. Dzięki prawidłowemu odżywieniu możliwe jest osiąganie
                                    lepszych wyników sportowych, bardziej efektywnej regeneracji mięśni i utrzymaniu
                                    odpowiedniej sylwetki. Gdy podejmujemy się intensywnego wysiłku, takiego jak np.
                                    ciężkie treningi siłowe, długodystansowy bieg, czy wielogodzinna jazda na rowerze,
                                    to warto przygotować swój organizm, abyśmy byli w stanie wykonać swoje cele z dobrym
                                    samopoczuciem.</p>
                                <button
                                    className={`btn-zamow ${selectedMenu === 'Active' ? 'active' : ''}`}
                                    onClick={() => handleMenuSelection('Active')}>
                                    {selectedMenu === 'Active' ? 'wybrany' : 'wybierz'}
                                </button>
                                <a className={"menu-more__desc"}>zobacz menu i opis</a>
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="step">
                        <div className={"checkbox-order"}>
                            <img src={checkBox} alt="Standard" className="checkbox-image"/>
                        </div>
                        <h2 className={"step-title"}>wybierz kaloryczność</h2>
                        <div className={"btns-wrapper__first-step"}>
                            <button className={"btn-calories"} onClick={() => handleCaloriesSelection('1250')}>1250
                            </button>
                            <button className={"btn-calories"} onClick={() => handleCaloriesSelection('1500')}>1500
                            </button>
                            <button className={"btn-calories"} onClick={() => handleCaloriesSelection('1750')}>1750
                            </button>
                            <button className={"btn-calories"} onClick={() => handleCaloriesSelection('2000')}>2000
                            </button>
                            <button className={"btn-calories"} onClick={() => handleCaloriesSelection('2500')}>2500
                            </button>
                            <button className={"btn-calories"}
                                    onClick={() => handleCaloriesSelection('Dopasuj!')}>dopasuj!
                            </button>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="step">
                        <div className={"checkbox-order"}>
                            <img src={checkBox} alt="Standard" className="checkbox-image"/>
                        </div>
                        <h2 className={"step-title"}>Szczegóły zamówienia</h2>
                        <p className={"oder-desc"}>W sobotę dostarczamy 2 diety - na sobotę i niedzielę.</p>
                        <p className={"oder-desc__test"}>Dodatkowe funkcjonalności kalendarza.</p>
                        <div className={"btns-wrapper__first-step"}>
                            <div className="calendar-wrapper">
                                <Calendar selectedDate={selectedDate} onChange={setSelectedDate}/>
                                <Calendar selectedDate={selectedDate2} onChange={setSelectedDate2} isNextMonth={true}/>
                                <div>
                                <button className="btn-go__next">Przejdź dalej</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const steps = [];
    for (let i = 1; i <= currentStep; i++) {
        steps.push(renderStep(i));
    }

    return (
        <div className="page">
            <section className="section-padding">
                <div className="container box-padding">
                    <div className="order-main__wrapper">
                        <h1 className="order-title">Zamówienie</h1>
                        {steps.map((step, index) => (
                            <div key={index} className="step-wrapper">
                                {step}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Zamowienie;