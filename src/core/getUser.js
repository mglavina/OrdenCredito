import axios from "axios"
import {APROBACION_URL}from "../constants/constant"
const getUser = async () => {
        let res = await axios.get(APROBACION_URL + "/.auth/me",{ 
            headers:{"Content-Type": "application/json"},withCredentials: true})
        console.log(res.data)
        return res
    }

export default getUser