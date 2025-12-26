import { useState } from 'react';

function EnergyCounter() {
    const [energy, setEnergy] = useState(0);

    return (
        <div className="energy-station">
            <h3>⚡ Energy Level: {energy}</h3>
            <button onClick={() => setEnergy(energy + 10)}>Charge Up (+10)</button>
            <button onClick={() => setEnergy(0)}>Discharge (Reset)</button>
            {energy >= 50 && <p className="success">⚡ FULL POWER! ⚡</p>}
        </div>
    );
}

export default EnergyCounter;
