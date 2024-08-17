import styled from "styled-components";
import { Login } from "../components/Login/Login";
import { Center, Input } from "@chakra-ui/react";
import { Label } from "../components/Label";
import { useContext, useState } from "react";
import { login } from "../service/login";
import { AppContext } from "../components/AppContext/AppContext";
import { useNavigate } from "react-router-dom";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  background-color: blue;
`;


export const Home = () => {
    const [email, setEmail] = useState<string>('');
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const validateUser = async (email: string) => {
        const loggedIn = await login(email);

        if(!loggedIn) {
            return alert('Email inválido');
        }

        setIsLoggedIn(true);
        navigate('/conta/1');
    }

    return (
        <>
            <Login>
                    <Title>
                        Style components
                    </Title>
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
                            <button onClick={() => validateUser(email)}>Entrar</button>
                        </div>
                    </Center>
            </Login>
        </>
    );
}