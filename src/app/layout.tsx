"use client";

import "./globals.css";

import Header from "./components/Header";
import { Providers } from "./providers";
import { Box, Flex, Fade } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import LogoAnimation from "./lottie.json";
import { Analytics } from "@vercel/analytics/react";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowAnimation(false);
        }, 3000);
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
                            transition={{ exit: { duration: 0.5 } }}
                        >
                            <Box
                                backgroundColor={"brand.pageBackground"}
                                position="absolute"
                                width="100%"
                                height="100dvh"
                                zIndex={10}
                                m={"auto"}
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <Flex height="500px" width={"500px"}>
                                    {View}
                                </Flex>
                            </Box>
                        </Fade>
                        <Fade
                            in={!showAnimation}
                            transition={{
                                enter: { duration: 1, delay: 1 },
                            }}
                        >
                            <Header />
                            <Box
                                display={showAnimation ? "none" : "block"}
                                pt="80px"
                                backgroundColor="brand.pageBackground"
                            >
                                {children}
                            </Box>
                        </Fade>
                        <Analytics />
                    </Box>
                </Providers>
            </body>
        </html>
    );
}
