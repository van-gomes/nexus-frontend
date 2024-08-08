import styled from "styled-components";
import { Login } from "../components/Login";
import { Center, Input } from "@chakra-ui/react";
import { Label } from "../components/Label";
import { useState } from "react";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  background-color: blue;
`;

export const Home = () => {
    const [email, setEmail] = useState<string>('');

    return (
        <>
             <Title>
                Styled Components
            </Title>
            <Login>
                    <Center>
                        <h1>Nexus</h1>
                        <div>
                            <Label text="Email" htmlFor="email" />
                            <Input
                             placeholder='email'
                             value={email}
                             onChange={(event) => setEmail(event.target.value)} />
                            <input id="email" type="email" />
                            <Label text="Senha" htmlFor="username" />
                            <input id="senha" type="password" />
                            <button>Entrar</button>
                        </div>
                    </Center>
            </Login>
        </>
    );
}