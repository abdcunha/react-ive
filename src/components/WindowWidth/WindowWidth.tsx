import React from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const WindowWidth: React.FC = () => {
    const width = useWindowWidth();
    return <div>Window width: {width}px</div>
};

export default WindowWidth;