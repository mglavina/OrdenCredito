import Header from "./components/header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Detail from "./pages/detail/Detail.jsx";
import "./App.css"
import ProveedorContext from "./context/ProveedorContext.jsx";
import { useState } from "react";

function App() {
  const [proveedor, setProveedor] = useState(null) 
  return (
    <div className="App">
        <ProveedorContext.Provider value={{proveedor,setProveedor}}>
          <Header> </Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:orderId" element={<Detail />} />
          </Routes>
        </ProveedorContext.Provider>
      </div>
  );
}

export default App;
