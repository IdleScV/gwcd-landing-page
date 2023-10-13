"use client";
import { pages } from "../optionSets";
import { Box, Container, HStack, Text, Image, Button } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";

function Header() {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <Box
            py="4"
            backgroundColor="brand.background"
            width="100%"
            alignContent={"center"}
            alignItems={"center"}
            justifyContent={"center"}
            display="flex"
            position="fixed"
            zIndex={1}
            height="85px"
        >
            <Container maxW={"1580px"}>
                <HStack justify="space-between" alignItems={"end"}>
                    <Image
                        width="200px"
                        my={-3}
                        src="./logo.png"
                        alt="Logo"
                        alignContent={"center"}
                        objectFit={"cover"}
                        objectPosition={"center"}
                        ml={-4}
                        onClick={() => {
                            router.push(pages.Home.url);
                        }}
                        cursor={"pointer"}
                    />

                    <HStack spacing={{ base: "2", md: "4" }}>
                        {/* map through each page and display a nav button, don't link home */}
                        {Object.values(pages)
                            .filter((page) => page.url !== "/")
                            .map((page) => (
                                <Box key={page.url} mb={-3}>
                                    <Button variant="brandGhost">
                                        <Text
                                            onClick={() => {
                                                router.push(page.url);
                                            }}
                                            key={page.url}
                                            aria-label={page.title}
                                            cursor={"pointer"}
                                            fontWeight={400}
                                            color={
                                                pathname === page.url
                                                    ? "brand.headerFontSelected"
                                                    : "brand.headerFont"
                                            }
                                        >
                                            {page.title}
                                        </Text>
                                    </Button>
                                </Box>
                            ))}
                    </HStack>
                </HStack>
            </Container>
        </Box>
    );
}

export default Header;
