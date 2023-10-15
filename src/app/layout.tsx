"use client";

import "./globals.css";

import Header from "./components/Header";
import { Providers } from "./providers";
import { Box, Flex, Fade } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import LogoAnimation from "./lottie.json";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowAnimation(false);
        }, 3400);
    }, []);

    const options = {
        animationData: LogoAnimation,
        loop: false,
        style: {
            width: "100%",
            height: "100%",
            margin: "auto",
        },
    };

    const { View } = useLottie(options);

    return (
        <html lang="en" style={{ scrollBehavior: "smooth" }}>
            <body>
                <Providers>
                    <Box position="relative" backgroundColor="black">
                        <Fade
                            in={showAnimation}
                            transition={{ exit: { duration: 1 } }}
                        >
                            <Box
                                //  make these full screen
                                height={"20vh"}
                                width={"98vw"}
                                backgroundColor={"brand.pageBackground"}
                                position="absolute"
                                zIndex={10}
                            >
                                <Flex
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    {View}
                                </Flex>
                            </Box>
                        </Fade>
                        <Fade
                            in={!showAnimation}
                            transition={{
                                enter: { duration: 0.7, delay: 0.1 },
                            }}
                        >
                            <Header />
                            <Box
                                pt="80px"
                                backgroundColor="brand.pageBackground"
                            >
                                {children}
                            </Box>
                        </Fade>
                    </Box>
                </Providers>
            </body>
        </html>
    );
}
