import React from "react";

type GreetingProps = {
    name: string;
};

const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <h2>Hello, {name}Q</h2>
};

export default Greeting;