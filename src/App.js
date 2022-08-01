import Header from "./components/header/Header.jsx";
import "./App.css"
import GlobalContextProvider from "./context/GlobalContextProvider";
import { useState } from "react";
import AppRoutes from "./routes/Routes.jsx";
import AuthHandler from "./components/authHandler/AuthHandler.jsx";

function App() {
  
  return (
    <div className="App">
        <GlobalContextProvider>
          <AuthHandler>
            <>
              <Header />
              <AppRoutes />
            </>
          </AuthHandler>
        </GlobalContextProvider>
      </div>
  );
}

export default App;