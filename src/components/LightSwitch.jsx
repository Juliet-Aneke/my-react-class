import { useState } from "react";

function LightSwitch() {
    const [isOn, setIsOn] = useState(false);

    function toggleLight() {
        setIsOn(!isOn);
    }

    return (
        <div>
            <h2>
                The light is {isOn ? "ON" : "OFF"}
            </h2>

            <button 
            className="bg-amber-300 px-8 cursor-pointer font-bold"
            onClick={toggleLight}>
                {isOn ? "Turn OFF" : "Turn ON"}
            </button>
        </div>
    );
}

export default LightSwitch;