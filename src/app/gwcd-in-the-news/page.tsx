import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Textarea,
    VStack,
    Text,
    useToast,
    Stack,
    Image,
    HStack,
    Flex,
    LinkBox,
    Grid,
    LinkOverlay,
    Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import ArticleLink from "../components/ArticleLink";
import articles from "../articles.json";
export default function GWCDInTheNews() {
    return (
        <>
            <Stack width="100%" spacing={0} position="relative">
                <Image
                    // make center
                    margin="auto"
                    width="100%"
                    height={{ base: "350px", md: "450px" }}
                    objectFit="cover"
                    objectPosition="bottom"
                    src="https://gwcd-content.s3.amazonaws.com/GWCD+Dance/_C4A9503.jpeg"
                    alt="off-1"
                />

                <Box
                    position="absolute"
                    height="100px"
                    top={{ lg: "16%", base: "35%" }}
                    width="100%"
                >
                    <Flex
                        width="100%"
                        height="100%"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text
                            fontSize="3xl"
                            fontWeight={500}
                            textShadow="1px 1px 1px black"
                            color="brand.bodyFont"
                        >
                            GWCD IN THE NEWS
                        </Text>
                    </Flex>
                </Box>
            </Stack>
            <Stack
                width="100%"
                spacing={0}
                position="relative"
                height={{ base: "70px", md: "150px" }}
                backgroundColor={"black"}
            >
                <Box height="100%" width="100%">
                    <Flex
                        width="100%"
                        height="100%"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text
                            fontSize="3xl"
                            fontWeight={500}
                            textShadow="1px 1px 1px black"
                            color="brand.bodyFont"
                        >
                            Highlight of our work
                        </Text>
                    </Flex>
                </Box>
            </Stack>
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                }}
                gap={4}
                p={4}
            >
                {articles.map((article, index) => (
                    <ArticleLink key={index} {...article} />
                ))}
            </Grid>
        </>
    );
}
