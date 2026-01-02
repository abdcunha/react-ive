import React, { useEffect, useState } from "react";

const LiveClock: React.FC = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    });

    return <div>{now.toLocaleDateString()}</div>;
};

export default LiveClock;