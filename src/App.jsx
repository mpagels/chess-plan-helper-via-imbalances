// src/App.js

import React, { useState } from 'react';
import imbalances from './imbalances';
import ImbalanceList from './components/ImbalanceList';
import GamePlan from './components/GamePlan';
import './App.css';

const App = () => {
    const [selectedImbalances, setSelectedImbalances] = useState([]);

    const toggleImbalance = (name) => {
        setSelectedImbalances(prev =>
            prev.includes(name) ? prev.filter(imb => imb !== name) : [...prev, name]
        );
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Chess Plan Helper <span className={"title-small"}>(find via Imbalances)</span></h1>
            </header>
            <ImbalanceList
                imbalances={imbalances}
                selectedImbalances={selectedImbalances}
                toggleImbalance={toggleImbalance}
            />
            <GamePlan selectedImbalances={selectedImbalances} imbalances={imbalances} />
        </div>
    );
};

export default App;
