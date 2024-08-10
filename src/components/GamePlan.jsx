// src/components/GamePlan.js

const GamePlan = ({ selectedImbalances, imbalances }) => {
    const plans = imbalances.filter(imbalance => selectedImbalances.includes(imbalance.name));

    return (
        <div>
            <h2>Game Plans</h2>
            {plans.map((imbalance, index) => (
                <div key={index}>
                    <h3 className={"imbalance-title"}>{imbalance.name}</h3>
                    <ul className={"gameplan-list"}>
                        <li className={"gameplan-item"}>
                            <h4>Opponent has the disadvantages</h4>
                            <ul>
                                {imbalance.planAgainst.map((plan, idx) => (
                                    <li key={idx}>{plan}</li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <h4>I have the disadvantages</h4>
                            <ul>
                                {imbalance.planWith.map((plan, idx) => (
                                    <li key={idx}>{plan}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>




                </div>
            ))}
        </div>
    );
};

export default GamePlan;
