import { Box } from "@chakra-ui/react";

interface ICardInfo {
    text: string
}

export const CardInfo = ({ text }: ICardInfo) => {
    return (
        <Box width={100} minHeight={80}>
            {text}
        </Box>
    );
}