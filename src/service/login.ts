import { useContext } from "react";
import { api } from "./api"
import { AppContext } from "../components/AppContext/AppContext";

export const login = async (email: string): Promise<void> => {
    const context = useContext(AppContext);
    const data: any = await api

    if(email != data.email) {
        return alert('Email inválido!');
    }

    alert(`Bem vindo ${email}`);
}