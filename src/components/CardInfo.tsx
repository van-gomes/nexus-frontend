import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
    mainContent: string
    content: string
}

export const CardInfo = ({ mainContent, content }: ICardInfo) => {
    return (
        <Box width={100} minHeight={80}>
            <Text>
                { mainContent }
            </Text>
            <Text>
                { content }
            </Text>
        </Box>
    );
}