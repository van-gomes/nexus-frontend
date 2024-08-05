import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { CardInfo } from "../components/CardInfo";
import { useEffect, useState } from "react";
import { api } from "../service/api";

interface UserData {
    name: string
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

    const actualData = new Date();

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (
                        <Spinner />
                    ) :
                    (
                        <>
                            <CardInfo 
                            mainContent={`Bem vindo ${!userData?.name}`} 
                            content={`${actualData?.getDay()}/${actualData?.getMonth()}/${actualData?.getFullYear()}
                            ${actualData?.getHours()}:${actualData?.getMinutes()}`}/>
                            <CardInfo
                            mainContent="Saldo:"
                            content={`R$ ${!userData?.balance}`}
                            />
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
    );
}