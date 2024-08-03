import { Center, SimpleGrid } from "@chakra-ui/react"
import { CardInfo } from "../components/CardInfo";
import { useEffect, useState } from "react";
import { api } from "../service/api";

interface UserData {
    email: string
    password: string
    balance: number
 }

export const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>();

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data);
        }

        getData();
    }, []);

    console.log(userData);

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                <CardInfo text="Informações ..." />
                <CardInfo text="Informações 2 ..." />
                <CardInfo text="Informações 3 ..." />
            </SimpleGrid>
        </Center>
    );
}