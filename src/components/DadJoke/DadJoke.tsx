import React, { useState } from "react";

const DadJoke: React.FC = () => {
    const [joke, setJoke] = useState<string>("");

    const fetchJoke = async () => {
        const res = await fetch("https://icanhazdadjoke.com/");
        const data = await res.json();
        setJoke(data.joke);
    }

    return (
        <>
            <button onClick={fetchJoke}>Hye, Dad</button>
            <p>{joke}</p>
        </>
    )
};

export default DadJoke;