import { useState } from "react";
import GlobalContext from "./GlobalContext";

const initialState = {
    loadingUser:true,
    user:null,
    proovedor:null,
    error:null,
    userName:null,
    userId:null
}

export default (props) => {
    
    const [global, setGlobal] = useState(initialState) 
    return (
    <GlobalContext.Provider value={{global, setGlobal}}>
        {props.children}
    </GlobalContext.Provider>
    )
}