import React, { createContext, useState } from "react";

const SideNavContext = createContext();

const SideNavContextProvider = ({ children }) => {
    const [activeInfo, setActiveInfo] = useState(null);

    return <SideNavContext.Provider value={{ activeInfo, setActiveInfo }}>{children}</SideNavContext.Provider>
}

export { SideNavContext, SideNavContextProvider };