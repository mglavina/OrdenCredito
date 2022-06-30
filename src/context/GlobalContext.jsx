import { createContext } from "react";

const globalState = createContext({global:{
    loadingUser:true,
    user:null,
    proovedor:null,
    error:null,
    userName:null
}, setGlobal : () => {}
})

export default globalState