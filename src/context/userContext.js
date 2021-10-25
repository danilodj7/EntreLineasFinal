import { createContext,useContext } from "react";

export const UserContext = createContext(null) // el null es para que no tenga dato al inicio


export const useUser = ()=>{  // es una funcion
    return useContext(UserContext)
}