import { useState } from "react";
import { Label } from "./Label";
import { 
    Center,
    Input,
    Box
 } from "@chakra-ui/react";

export const Login = () => {
    const [email, setEmail] = useState<string>('');
    
    return (
        <>
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
        </>
    );
}