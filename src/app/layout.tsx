"use client";

import "./globals.css";

import Header from "./components/Header";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" style={{ scrollBehavior: "smooth" }}>
            <body>
                <Providers>
                    <Header />
                    <Box pt="80px" backgroundColor="brand.pageBackground">
                        {children}
                    </Box>
                </Providers>
            </body>
        </html>
    );
}
