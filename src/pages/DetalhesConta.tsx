import { Link } from "react-router-dom";

export const DetalhesConta = () => {
    return (
        <>
            <p>Detalhes da conta</p>

            <Link to={'/conta/1'}>
                <p>Conta</p>
            </Link>
        </>
    );
}