import React, { useMemo, useState } from "react";

const ExpensiveCalculation: React.FC = () => {
    const [num, setNum] = useState(1);

    const factorial = useMemo(() => {
        let result = 1;
        for (let i = 1; i <= num; i++) result *= i;
        return result;
    }, [num]);

    return (
        <div>
            <input
                type="number"
                value={num}
                min={1}
                onChange={(e) => setNum(Number(e.target.value))}
            />
            <p>Factorial: {factorial}</p>
        </div>
    );
};

export default ExpensiveCalculation;