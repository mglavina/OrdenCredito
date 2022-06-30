import Header from "./components/header/Header.jsx";
import "./App.css"
import GlobalContext from "./context/GlobalContext.jsx";
import { useState } from "react";
import AppRoutes from "./routes/Routes.jsx";
import AuthHandler from "./components/authHandler/AuthHandler.jsx";

function App() {
  const [global, setGlobal] = useState(null) 
  return (
    <div className="App">
        <GlobalContext.Provider value={{global, setGlobal}}>
          <AuthHandler>
            <>
              <Header />
              <AppRoutes />
            </>
          </AuthHandler>
        </GlobalContext.Provider>
      </div>
  );
}

export default App;