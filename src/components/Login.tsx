import { useEffect, useState } from "react";
import { Label } from "./Label";
import { 
    ChakraProvider,
    Center,
    Input,
    Box
 } from "@chakra-ui/react";
import { api } from "../service/api";

 interface UserData {
    email: string
    password: string
 }

export const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [userData, setUserData] = useState<null | UserData>();

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data);
        }

        getData();
    });

    console.log(userData);
    
    return (
        <>
            <ChakraProvider>
                <Box minHeight='100vh'>
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
                </Box>
            </ChakraProvider>
        </>
    );
}