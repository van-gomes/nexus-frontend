import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import "./Header/Header.css";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const logout = () => {
        setIsLoggedIn(false);
        navigate('/');
    }

    return (
        <div className="container_header">
            <img className="container_header__logo"
             src="#" alt="Logo Banco Nexus" />
            <h1 className="container_header__title"></h1>
        </div>

        /*
        <Flex>
                <Box></Box>
            {
                isLoggedIn && (
                    <>
                    <Spacer />
                    <Button
                        onClick={() => logout()}
                    >
                        Sair
                    </Button>
                    </>
                )
            }
        </Flex>
       */
    );
}