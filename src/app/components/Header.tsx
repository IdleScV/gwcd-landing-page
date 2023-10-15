"use client";
import { pages } from "../optionSets";
import {
    Box,
    Container,
    HStack,
    Text,
    Image,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    IconButton,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { HiMenuAlt2 } from "react-icons/hi";
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
                <HStack
                    justify="space-between"
                    alignItems={{ base: "center", md: "end" }}
                >
                    <Image
                        width="200px"
                        my={-3}
                        src="https://gwcd-content.s3.amazonaws.com/GWCD+Dance/logo.png"
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
                    <HStack
                        spacing={{ base: 0.5, md: 1 }}
                        display={{ base: "none", md: "flex" }}
                    >
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
                    <Popover>
                        <PopoverTrigger>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                border="solid white 2px"
                                aria-label="Search database"
                                // get menu button from react icons
                                icon={<HiMenuAlt2 />}
                                variant="brandGhost"
                            />
                        </PopoverTrigger>
                        <PopoverContent
                            maxWidth="200px"
                            mt={3.5}
                            mr={2}
                            display={{ md: "none" }}
                            borderTopRadius={0}
                            textAlign={"center"}
                            boxShadow={"md"}
                            backgroundColor="brand.background"
                        >
                            <PopoverBody>
                                {Object.values(pages)
                                    .filter((page) => page.url !== "/")
                                    .map((page) => (
                                        <Box key={page.url}>
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
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </HStack>
            </Container>
        </Box>
    );
}

export default Header;
