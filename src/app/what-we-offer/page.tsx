import { Stack, Box, Text, Image, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function WhatWeOffer() {
    return (
        <Stack backgroundColor="brand.pageBackground" alignItems={"center"}>
            <Stack width="100%" spacing={0}>
                <Box
                    position="absolute"
                    height="225px"
                    top="8%"
                    left={{
                        base: "35%",
                        md: "65%",
                    }}
                >
                    <Text
                        fontSize="3xl"
                        fontWeight={500}
                        textShadow={"1px 1px 1px black"}
                        color="brand.bodyFont"
                    >
                        WHAT WE OFFER
                    </Text>
                </Box>

                <Image
                    width="100%"
                    height={"500px"}
                    objectFit={"cover"}
                    src={"./off-1-5.jpg"}
                    alt="off-1"
                />
                <Box
                    width="100%"
                    p={{
                        base: 8,
                        md: 16,
                    }}
                    color="brand.bodyFont"
                    display={"flex"}
                    flexDir={"column"}
                    justifyContent={"space-between"}
                >
                    <Text
                        fontSize="xl"
                        fontWeight={500}
                        textShadow={"1px 1px 1px black"}
                    >
                        GWCD specializes in Chinese classical and folk dance.
                        For an in-depth explanation of the styles included in
                        this please continue reading.
                    </Text>
                    <Stack spacing={4} mt={32}>
                        <Text fontSize="4xl" fontWeight={600}>
                            Classical Chinese Dance
                        </Text>
                        <HStack
                            flexWrap={"wrap"}
                            textDecoration={"italic"}
                            as="i"
                            fontSize="2xl"
                            fontWeight={300}
                            spacing={{ base: 8, md: 16 }}
                        >
                            <Text>Dunhuang</Text>
                            <Text>Peking Opera</Text>
                            <Text>Han Tang</Text>
                        </HStack>
                        <Text fontSize="4xl" fontWeight={600}>
                            Chinese Ethnic/Folk Dance
                        </Text>
                        <HStack
                            flexWrap={"wrap"}
                            as="i"
                            fontSize="2xl"
                            fontWeight={300}
                            spacing={{ base: 8, md: 16 }}
                        >
                            <Text>Han</Text>
                            <Text>Dai</Text>
                            <Text>Inner Mongolian</Text>
                            <Text>Tibetan</Text>
                            <Text>Uyghur</Text>
                            <Text>Miao</Text>
                        </HStack>
                    </Stack>
                </Box>
            </Stack>
            <Stack
                height="1000px"
                width="100%"
                spacing={0}
                backgroundColor={"brand.cardBackgroundLightBlue"}
            >
                <section id="dunhuang">
                    <Box
                        display="flex"
                        flexDir={{ base: "column", md: "row" }}
                        height={{ md: "500px" }}
                        backgroundImage={"./off-2.jpeg"}
                        backgroundRepeat={"no-repeat"}
                        //   stretch background image to cover the entire container
                        backgroundSize={"cover"}
                    >
                        <Image
                            height={"500px"}
                            width={{
                                md: "calc(100% - 400px)",
                            }}
                            objectFit={"cover"}
                            src={"./off-3.jpeg"}
                            alt="wwe-3"
                            mx={{ base: 8, md: 0 }}
                            my={{ base: 8, md: 0 }}
                            ml={{
                                md: 16,
                            }}
                            borderRadius={{ base: "lg", md: 0 }}
                        />

                        <Box
                            width={{ base: "100%", md: "400px" }}
                            p={{ base: 8, md: 12 }}
                            color={"brand.bodyFont"}
                            fontWeight={500}
                            textShadow={"1px 1px 1px black"}
                        >
                            <Text
                                fontSize="3xl"
                                mb={4}
                                textAlign={{ base: "left", md: "left" }}
                            >
                                Dunhuang
                            </Text>
                            <Text textAlign={"left"}>
                                Inspired by ancient Buddhist cave paintings of
                                northwestern China, Dunhuang combines rhythmic
                                techniques with classical Chinese dance to
                                create a style that is invigorating, moving, and
                                awe-inspiring.
                            </Text>
                        </Box>
                    </Box>
                </section>
                <section id="peking">
                    <Box
                        display="flex"
                        flexDir={{ base: "column", md: "row-reverse" }}
                        height={{ md: "500px" }}
                        backgroundImage={"./off-4.jpeg"}
                        backgroundRepeat={"no-repeat"}
                        //   stretch background image to cover the entire container
                        backgroundSize={"cover"}
                    >
                        <Image
                            height={"500px"}
                            width={{
                                md: "calc(100% - 400px)",
                            }}
                            objectFit={"cover"}
                            src={"./off-1-5.jpg"}
                            alt="wwe-3"
                            mx={{ base: 8, md: 0 }}
                            my={{ base: 8, md: 0 }}
                            mr={{
                                md: 16,
                            }}
                            borderRadius={{ base: "lg", md: 0 }}
                        />

                        <Box
                            width={{ base: "100%", md: "400px" }}
                            p={{ base: 8, md: 12 }}
                            color={"brand.bodyFont"}
                            fontWeight={500}
                            textShadow={"1px 1px 1px black"}
                            textAlign={{ base: "left", md: "right" }}
                        >
                            <Text fontSize="3xl" mb={4}>
                                Peking Opera Inspired
                            </Text>
                            <Text>
                                This style honors the style and techniques of
                                Beijing Opera, one of China’s most recognizable
                                artistic treasures. These dances are typically
                                playful and vibrant and often utilize martial
                                arts and gymnastics skills
                            </Text>
                        </Box>
                    </Box>
                </section>
                <section id="hantang">
                    <Box
                        display="flex"
                        flexDir={{ base: "column", md: "row" }}
                        height={{ md: "500px" }}
                        backgroundImage={"./off-6.jpeg"}
                        backgroundRepeat={"no-repeat"}
                        //   stretch background image to cover the entire container
                        backgroundSize={"cover"}
                    >
                        <Image
                            height={"500px"}
                            width={{
                                md: "calc(100% - 400px)",
                            }}
                            objectFit={"cover"}
                            src={"./off-7.jpeg"}
                            alt="wwe-3"
                            mx={{ base: 8, md: 0 }}
                            my={{ base: 8, md: 0 }}
                            ml={{
                                md: 16,
                            }}
                            borderRadius={{ base: "lg", md: 0 }}
                        />

                        <Box
                            width={{ base: "100%", md: "400px" }}
                            p={{ base: 8, md: 12 }}
                            color={"brand.bodyFont"}
                            fontWeight={500}
                            textShadow={"1px 1px 1px black"}
                        >
                            <Text
                                fontSize="3xl"
                                mb={4}
                                textAlign={{ base: "left", md: "left" }}
                            >
                                Han Tang
                            </Text>
                            <Text textAlign={"left"}>
                                The Han Tang style comes from ancient Chinese
                                court dances. Pieces from this style often
                                depict real historical figures. Han Tang is
                                typically graceful, elegant, and charming.
                            </Text>
                        </Box>
                    </Box>
                </section>
                <section id="hanfolk">
                    <Box
                        display="flex"
                        flexDir={{ base: "column", md: "row-reverse" }}
                        height={{ md: "500px" }}
                        backgroundImage={"./hanfolkbg.jpeg"}
                        backgroundRepeat={"no-repeat"}
                        //   stretch background image to cover the entire container
                        backgroundSize={"cover"}
                    >
                        <Image
                            height={"500px"}
                            width={{
                                md: "calc(100% - 400px)",
                            }}
                            objectFit={"cover"}
                            src={"./handfolk.jpg"}
                            alt="wwe-3"
                            mx={{ base: 8, md: 0 }}
                            my={{ base: 8, md: 0 }}
                            mr={{
                                md: 16,
                            }}
                            borderRadius={{ base: "lg", md: 0 }}
                        />

                        <Box
                            width={{ base: "100%", md: "400px" }}
                            p={{ base: 8, md: 12 }}
                            color={"brand.bodyFont"}
                            fontWeight={500}
                            textShadow={"1px 1px 1px black"}
                            textAlign={{ base: "left", md: "right" }}
                        >
                            <Text fontSize="3xl" mb={4}>
                                Han Folk Dance
                            </Text>
                            <Text>
                                The Han people are the largest ethnic group in
                                China. Their folk dances often utilize fan and
                                handkerchief props to aid in the storytelling of
                                the piece.
                            </Text>
                        </Box>
                    </Box>
                </section>
                <section id="daifolk">
                    <Box
                        display="flex"
                        flexDir={{ base: "column", md: "row" }}
                        height={{ md: "500px" }}
                        backgroundImage={"./daifolkbg.jpeg"}
                        backgroundRepeat={"no-repeat"}
                        //   stretch background image to cover the entire container
                        backgroundSize={"cover"}
                    >
                        <Image
                            height={"500px"}
                            width={{
                                md: "calc(100% - 400px)",
                            }}
                            objectFit={"cover"}
                            src={"./daifolk.jpeg"}
                            alt="wwe-3"
                            mx={{ base: 8, md: 0 }}
                            my={{ base: 8, md: 0 }}
                            ml={{
                                md: 16,
                            }}
                            borderRadius={{ base: "lg", md: 0 }}
                        />

                        <Box
                            width={{ base: "100%", md: "400px" }}
                            p={{ base: 8, md: 12 }}
                            color={"brand.bodyFont"}
                            fontWeight={500}
                            textShadow={"1px 1px 1px black"}
                        >
                            <Text
                                fontSize="3xl"
                                mb={4}
                                textAlign={{ base: "left", md: "left" }}
                            >
                                Dai Folk Dance
                            </Text>
                            <Text textAlign={"left"}>
                                The Dai ethnic group is native to China’s Yunnan
                                province and can also be found throughout much
                                of Southeast Asia. Many audiences recognize Dai
                                dance for its aesthetic similarity to classical
                                Thai and Cambodian dance.
                            </Text>
                        </Box>
                    </Box>
                </section>
                <section id="mongolian">
                    <Box
                        display="flex"
                        flexDir={{ base: "column", md: "row-reverse" }}
                        height={{ md: "500px" }}
                        backgroundImage={"./mongolianbg.jpeg"}
                        backgroundRepeat={"no-repeat"}
                        //   stretch background image to cover the entire container
                        backgroundSize={"cover"}
                    >
                        <Image
                            height={"500px"}
                            width={{
                                md: "calc(100% - 400px)",
                            }}
                            objectFit={"cover"}
                            src={"./mongolian.jpeg"}
                            alt="wwe-3"
                            mx={{ base: 8, md: 0 }}
                            my={{ base: 8, md: 0 }}
                            mr={{
                                md: 16,
                            }}
                            borderRadius={{ base: "lg", md: 0 }}
                        />

                        <Box
                            width={{ base: "100%", md: "400px" }}
                            p={{ base: 8, md: 12 }}
                            color={"brand.bodyFont"}
                            fontWeight={500}
                            textShadow={"1px 1px 1px black"}
                            textAlign={{ base: "left", md: "right" }}
                        >
                            <Text fontSize="3xl" mb={4}>
                                Inner Mongolian Folk Dance
                            </Text>
                            <Text>
                                China’s Inner Mongolian province lies directly
                                between China and Mongolia and is heavily
                                populated by ethnic Mongolian people. Dances
                                from this region are highly spiritual with a
                                joyful and powerful undercurrent.
                            </Text>
                        </Box>
                    </Box>
                </section>
            </Stack>
        </Stack>
    );
}
