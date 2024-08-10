// src/components/ImbalanceList.js


import {useState} from "react";
import ImbalaceItem from "./ImbalanceItem.jsx";

const ImbalanceList = ({ imbalances, selectedImbalances, toggleImbalance }) => {



    return (
        <div>
            <h2>Select Imbalances</h2>
            <ul>
            {imbalances.map((imbalance, index) => <ImbalaceItem key={index} imbalance={imbalance} selectedImbalances={selectedImbalances} toggleImbalance={toggleImbalance}/>)}
            </ul>
        </div>
    );
};

export default ImbalanceList;
