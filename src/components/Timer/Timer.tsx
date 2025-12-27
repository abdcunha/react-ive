import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState(0);

    // space bar to pause the number
    // and if the number hits a logic then there should be confetti shower
    useEffect(() => {
        const interval = setInterval(() => setSeconds(Math.floor(Math.random() * (10000 - 0 + 1)) + 0), 250);
        return () => clearInterval(interval);
    }, []);

    return <div>Timer: {seconds}s</div>
};

export default Timer;