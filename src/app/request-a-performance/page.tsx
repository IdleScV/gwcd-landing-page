import { Stack, Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function RequestAPerformance() {
    return (
        <Stack
            backgroundColor="brand.pageBackground"
            alignItems={"center"}
            spacing={16}
        >
            <Stack width="100%" spacing={0}>
                <Box
                    position="absolute"
                    height="225px"
                    maxWidth="800px"
                    left="50%"
                    top="35%"
                    transform="translate(-50%, -15vh)"
                    width="100%"
                >
                    <Box
                        borderRadius={2}
                        border="solid white 1px"
                        backgroundColor={"brand.cardBackgroundBlue"}
                        height="100%"
                        p={2}
                        mx={8}
                    >
                        <Stack
                            height="100%"
                            border="solid white 1px"
                            p={4}
                            flexDir={{
                                base: "column",
                                md: "row",
                            }}
                            alignItems={"center"}
                            borderRadius={2}
                            justify={"space-around"}
                            textShadow={"1px 1px 1px black"}
                        >
                            <Text fontSize="xl" color="brand.bodyFont">
                                <Link href="#community">Community Events</Link>
                            </Text>
                            <Text fontSize="xl" color="brand.bodyFont">
                                <Link href="#workshops">Workshops</Link>
                            </Text>
                            <Text fontSize="xl" color="brand.bodyFont">
                                <Link href="#educational">
                                    Educational Programming
                                </Link>
                            </Text>
                        </Stack>
                    </Box>
                </Box>
                <Box position="absolute" height="225px" top="8%" left="5%">
                    <Text
                        fontSize="3xl"
                        fontWeight={300}
                        textShadow={"1px 1px 1px black"}
                        color="brand.bodyFont"
                    >
                        Request a Performance
                    </Text>
                </Box>

                <Image
                    width="100%"
                    height={"500px"}
                    objectFit={"cover"}
                    src={
                        "https://gwcd-content.s3.amazonaws.com/GWCD+Dance/wwe-1.jpeg"
                    }
                    alt="wwe-1"
                />
                <Box width="100%" height="150px"></Box>
            </Stack>
            <Stack
                height="1000px"
                width="100%"
                spacing={0}
                backgroundColor={"brand.cardBackgroundLightBlue"}
            >
                <Box height={"500px"}>
                    <Image
                        width="100%"
                        height={"500px"}
                        objectFit={"cover"}
                        src={
                            "https://gwcd-content.s3.amazonaws.com/GWCD+Dance/wwe-2.jpeg"
                        }
                        alt="wwe-2"
                    />

                    <Box
                        position={"absolute"}
                        height={"500px"}
                        width={"100%"}
                        textShadow={"1px 1px 1px black"}
                        p={8}
                        margin="0 auto"
                        color="brand.bodyFont"
                        top="44%"
                        display="flex"
                        flexDir={"row"}
                        justifyContent={"center"}
                    >
                        <Box
                            width={"100%"}
                            height="100%"
                            maxWidth={"1200px"}
                            display="flex"
                            flexDir={"column"}
                            justifyContent={"space-between"}
                        >
                            <Text
                                fontSize="xl"
                                fontWeight={500}
                                textAlign={"right"}
                            >
                                GWCD is proud to offer customizable Chinese
                                dance programs in three main areas
                            </Text>
                            <Text>Please contact us for more info </Text>
                        </Box>
                    </Box>
                </Box>
                <section id="educational">
                    <Box
                        display="flex"
                        flexDir={{ base: "column", md: "row" }}
                        height={{ md: "500px" }}
                    >
                        <Image
                            height={"500px"}
                            width={{ base: "100%", md: "calc(100% - 400px)" }}
                            objectFit={"cover"}
                            src={
                                "https://gwcd-content.s3.amazonaws.com/GWCD+Dance/wwe-3.jpeg"
                            }
                            alt="wwe-3"
                        />

                        <Box
                            width={{ base: "100%", md: "400px" }}
                            backgroundColor={"brand.cardBackgroundLightBlue"}
                            p={{ base: 8, md: 12 }}
                        >
                            <Text fontSize="3xl" mb={4}>
                                Educational Programs
                            </Text>
                            <Text>
                                Designed for K-12 audiences as an introduction
                                to China’s culture, language, and history
                                through its dance. Our educational programs are
                                highly customizable to match the themes,
                                curriculum, and interactivity desired by each
                                school. To request an educational showcase click
                                here
                            </Text>
                        </Box>
                    </Box>
                </section>
                <section id="community">
                    <Box
                        display="flex"
                        flexDir={{ base: "column-reverse", md: "row" }}
                        height={{ md: "500px" }}
                    >
                        <Box
                            width={{ base: "100%", md: "400px" }}
                            backgroundColor={"brand.cardBackgroundLightBlue"}
                            p={{ base: 8, md: 12 }}
                        >
                            <Text fontSize="3xl" mb={4}>
                                Community Events
                            </Text>
                            <Text>
                                Celebrate Lunar New Year, AAPI Heritage Month,
                                and more with a spectacular Chinese dance
                                showcase by GWCD. We have partnered with
                                countless community venues around the greater DC
                                area to produce one-of-a-kind programs including
                                interactive dance sections and informative
                                spoken presentations To request a community
                                showcase click here
                            </Text>
                        </Box>
                        <Image
                            height={"500px"}
                            width={{ base: "100%", md: "calc(100% - 400px)" }}
                            objectFit={"cover"}
                            src={
                                "https://gwcd-content.s3.amazonaws.com/GWCD+Dance/wwe-4.jpeg"
                            }
                            alt="wwe-4"
                        />
                    </Box>
                </section>
                <section id="workshops">
                    <Box
                        display="flex"
                        flexDir={{ base: "column", md: "row" }}
                        height={{ md: "500px" }}
                    >
                        <Image
                            height={"500px"}
                            width={{ base: "100%", md: "calc(100% - 400px)" }}
                            objectFit={"cover"}
                            src={
                                "https://gwcd-content.s3.amazonaws.com/GWCD+Dance/wwe-5.jpeg"
                            }
                            alt="wwe-5"
                        />
                        <Box
                            width={{ base: "100%", md: "400px" }}
                            backgroundColor={"brand.cardBackgroundLightBlue"}
                            p={{ base: 8, md: 12 }}
                        >
                            <Text fontSize="3xl" mb={4}>
                                Workshops
                            </Text>
                            <Text>
                                A once in a lifetime opportunity for both
                                dancers and non-dancers to learn from GWCD’s
                                masterful instructors. Participants in our
                                workshops learn the basic technique of one or
                                more classical or ethnic Chinese dance styles.
                                To request a Chinese dance workshop click here
                                To see a list of upcoming workshops click here
                            </Text>
                        </Box>
                    </Box>
                </section>
            </Stack>
        </Stack>
    );
}
