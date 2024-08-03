import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import styled from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Router } from "react-router-dom";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  background-color: blue;
`;

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={
          <ChakraProvider>
            <Layout>
              <Title>
                Styled Components
              </Title>
              <Login />
            </Layout>
          </ChakraProvider>
        } />
        <Route path="/conta" element={
          <h1>Conta</h1>
        }
      </Router>
    </BrowserRouter>
  );
}

export default App;
