import { useState } from 'react';

function ColorShifter() {
    const [color, setColor] = useState("white");

    return (
        <div className="color-box" style={{ backgroundColor: color }}>
            <h3>🎨 Changed camelion armor</h3>
            <p>Current Color: {color}</p>
            <div className="buttons">
                <button onClick={() => setColor("#ff6b6b")}>Red Mode</button>
                <button onClick={() => setColor("#4d96ff")}>Blue Mode</button>
                <button onClick={() => setColor("#6bcb77")}>Stealth (Green)</button>
            </div>
        </div>
    );
}

export default ColorShifter;
