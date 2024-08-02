import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import styled from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  background-color: blue;
`;

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Title>
          Styled Components
        </Title>
        <Login />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
