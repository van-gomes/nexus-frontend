import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Conta } from "./pages/Conta";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { DetalhesConta } from "./pages/DetalhesConta";
import { AppContextProvider } from "./components/AppContext/AppContext";
import { MainRoutes } from "./routes";

function App() {
  return (
      <BrowserRouter>
        <AppContextProvider>
          <ChakraProvider>
            <Layout>
              <MainRoutes />
            </Layout>
          </ChakraProvider>
        </AppContextProvider>
      </BrowserRouter>
  );
}

export default App;
