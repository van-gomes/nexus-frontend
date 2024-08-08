import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Conta } from "./pages/Conta";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { DetalhesConta } from "./pages/DetalhesConta";
import { createContext } from "react";

interface IAppContext {
  user: string
}

export const AppContext = createContext({} as IAppContext);

const AppContextProvider = ({ children }: any) => {
  const user = 'Vânia';

  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  );
}

function App() {
  return (
      <BrowserRouter>
        <AppContextProvider>
          <ChakraProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/conta/:id" element={<Conta />} />
                <Route path="/detalhesconta" element={<DetalhesConta />} />
              </Routes>
            </Layout>
          </ChakraProvider>
        </AppContextProvider>
      </BrowserRouter>
  );
}

export default App;
