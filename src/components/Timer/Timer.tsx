import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(interval);
    }, []);

    return <div>Timer: {seconds}s</div>
};

export default Timer;