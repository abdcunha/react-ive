import React, { useState } from "react";
import "./Counter.css";

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-wrapper">
            <button onClick={() => setCount(count - 1)}> - </button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}> + </button>
        </div>
    );
};

export default Counter;