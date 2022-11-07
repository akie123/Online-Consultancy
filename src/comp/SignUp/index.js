import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import S1 from './s1'
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
});

export default function SignUp() {
    return (
        <>
            <ChakraProvider>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <S1 />
            </ChakraProvider>
        </>
    );
}