import { createContext,useContext } from "react";

export const DarkModeContext = createContext(null) // el null es para que no tenga dato al inicio

export const UseDarkMode = ()=>{  // es una funcion
    return useContext(DarkModeContext)
}