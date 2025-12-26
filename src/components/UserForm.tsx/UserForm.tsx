import React, { useState } from "react";
import Greeting from "../Greeting/Greeting";

const UserForm: React.FC = () => {
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    return (
        <div>
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                <input 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <button type="submit">Greet</button>
            </form>
            {submitted && <Greeting name={name}/>}
        </div>
    );
}

export default UserForm;