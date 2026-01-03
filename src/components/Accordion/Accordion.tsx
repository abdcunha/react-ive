import React, { useState } from "react";

const Accordion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(o => !o)}>{title}</button>
            {open && <div>{children}</div>}
        </div>
    );
};

export default Accordion;