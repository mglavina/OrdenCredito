import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Detail from "../pages/detail/Detail.jsx";
import useGlobalContext from "../hooks/useGlobalContext.jsx";
import {APROBACION_URL} from "../constants/constant"
function AppRoutes() {
    const {global, setGlobal} = useGlobalContext()
    
    const renderRedirect = () => {
        let host = window.location.protocol + "//" + window.location.host;
        host = host.replace('localhost', "127.0.0.1")
        window.location.replace(APROBACION_URL + "/.auth/login/aad?post_login_redirect_uri="+ host)
        return null;
    }
    
    return (
        <>
            {
                
                (global?.error && global.error.statusCode === 401) 
                ?
                renderRedirect()
                :
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail/:orderId" element={<Detail />} />
                </Routes>
            }
        </>
    );
}

export default AppRoutes;