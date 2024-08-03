import styled from "styled-components";
import { Login } from "../components/Login";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  background-color: blue;
`;

export const Home = () => {
    return (
        <>
             <Title>
                Styled Components
            </Title>
            <Login />
        </>
    );
}