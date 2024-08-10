import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Conta } from "./pages/Conta";
import { DetalhesConta } from "./pages/DetalhesConta";
import { useContext } from "react";
import { AppContext } from "./components/AppContext/AppContext";

export const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext);
    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/conta/:id" 
                    element={isLoggedIn ? <Conta /> : <Home /> } />
            <Route path="/detalhesconta" element={<DetalhesConta />} />
        </Routes>

    );
}