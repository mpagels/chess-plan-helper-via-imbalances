import {useState} from "react";

export default function ImbalaceItem({imbalance,  selectedImbalances, toggleImbalance }) {
    const [indicatorIsOpen, setIndicatorIsOpen] = useState(false)

    function toggleIndicator() {
        setIndicatorIsOpen(prev => !prev)
    }
    return <li className={`imbalance-item ${selectedImbalances.includes(imbalance.name) ? "isSelectedImbalance" : ""}`}  >

        <strong>{imbalance.name}</strong>
        <button onClick={toggleIndicator}>{indicatorIsOpen ? "Close Indicators" : "Show Indicators"}</button>
        {indicatorIsOpen &&  <ul className={"indicator-list"}>
            {imbalance.indicators.map((indicator, idx) => (
                <li className={"indicator-items"} key={idx}>{indicator}</li>
            ))}
        </ul>}
        <input
            type="checkbox"
            checked={selectedImbalances.includes(imbalance.name)}
            onChange={() => toggleImbalance(imbalance.name)}
        />
    </li>
}