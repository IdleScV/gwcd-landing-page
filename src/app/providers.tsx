import { CacheProvider } from "@chakra-ui/next-js";
import {
    ChakraProvider,
    extendTheme,
    theme as baseTheme,
} from "@chakra-ui/react";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import "@fontsource/jost/200.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/700.css";

export function Providers({ children }: { children: React.ReactNode }) {
    const theme = extendTheme({
        fonts: {
            heading: `'jost', sans-serif`,
            body: `'jost', sans-serif`,
        },
        colors: {
            ...baseTheme.colors,
            brand: {
                background: "#E1DCEB",
                pageBackground: "#000000",
                headerFont: "#905FA1",
                bodyFont: "#FFFFFF",
                buttonColor: "#905FA1",
                buttonHover: "lighten(#905FA1, 10%)",
                bodyFontHover: "#905FA1",
                headerFontSelected: "#b726ff",
                cardBackgroundBlue: "#001B76",
                cardBackgroundLightBlue: "#96B9E296",
            },
        },
        components: {
            Button: {
                font: "heading",
                variants: {
                    brand: {
                        fontWeight: "400",
                        color: "brand.bodyFont",
                        bg: "brand.buttonColor",
                        _hover: {
                            bg: "brand.buttonHover",
                            color: "brand.bodyFontHover",
                        },
                    },
                    brandGhost: {
                        fontWeight: "400",
                        color: "brand.buttonColor",
                        bg: "transparent",
                        _hover: {
                            bg: "transparent",
                            color: "brand.buttonHover",
                        },
                    },
                },
            },
        },

        proTheme,
    });

    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}
