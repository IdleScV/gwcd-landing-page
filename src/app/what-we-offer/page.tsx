import { Stack, Box, Text, Image, HStack } from "@chakra-ui/react";

const sections = [
    {
        id: "dunhuang",
        header: "Dunhuang",
        bgImage: "./off-2.jpeg",
        imgSrc: "./off-3.jpeg",
        content:
            "Inspired by ancient Buddhist cave paintings of northwestern China, Dunhuang combines rhythmic techniques with classical Chinese dance to create a style that is invigorating, moving, and awe-inspiring.",
    },
    {
        id: "peking",
        header: "Peking Opera Inspired",
        bgImage: "./off-4.jpeg",
        imgSrc: "./off-1-5.jpg",
        imagePosition: "bottom",
        content:
            "This style honors the style and techniques of Beijing Opera, one of China’s most recognizable artistic treasures. These dances are typically playful and vibrant and often utilize martial arts and gymnastics skills.",
    },
    {
        id: "hantang",
        header: "Han Tang",
        bgImage: "./off-6.jpeg",
        imgSrc: "./off-7.jpeg",
        imagePosition: "50% 70%",
        content:
            "The Han Tang style comes from ancient Chinese court dances. Pieces from this style often depict real historical figures. Han Tang is typically graceful, elegant, and charming.",
    },
    {
        id: "hanfolk",
        header: "Han Folk Dance",
        bgImage: "./hanfolkbg.jpeg",
        imgSrc: "./hanfolk.jpg",
        imagePosition: "50% 25%",
        content:
            "The Han people are the largest ethnic group in China. Their folk dances often utilize fan and handkerchief props to aid in the storytelling of the piece.",
    },
    {
        id: "daifolk",
        header: "Dai Folk Dance",
        bgImage: "./daifolkbg.jpeg",
        imgSrc: "./daifolk.jpeg",
        imagePosition: "50% 58%",
        content:
            "The Dai ethnic group is native to China’s Yunnan province and can also be found throughout much of Southeast Asia. Many audiences recognize Dai dance for its aesthetic similarity to classical Thai and Cambodian dance.",
    },
    {
        id: "mongolian",
        header: "Inner Mongolian Folk Dance",
        bgImage: "./mongolianbg.jpeg",
        imgSrc: "./mongolian.jpeg",
        imagePosition: "50% 40%",
        content:
            "China’s Inner Mongolian province lies directly between China and Mongolia and is heavily populated by ethnic Mongolian people. Dances from this region are highly spiritual with a joyful and powerful undercurrent.",
    },
];

// Reusable Section component
const Section = ({
    header,
    bgImage,
    imgSrc,
    content,
    imageOnLeft,
    imagePosition,
}) => (
    <section id={header.toLowerCase().replace(/\s+/g, "-")}>
        <Box
            display="flex"
            flexDir={{
                base: "column",
                md: imageOnLeft ? "row-reverse" : "row",
            }}
            height={{ md: "500px", lg: "600px" }}
            backgroundImage={bgImage}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
        >
            <Image
                height={{ md: "500px", lg: "600px" }}
                width={{ md: "calc(100% - 400px)" }}
                objectFit="cover"
                objectPosition={imagePosition || "center"}
                src={imgSrc}
                alt={`wwe-${header}`}
                mx={{ base: 8, md: 0 }}
                my={{ base: 8, md: 0 }}
                mr={{ md: imageOnLeft ? 16 : 0 }}
                ml={{ md: imageOnLeft ? 0 : 16 }}
                borderRadius={{ base: "lg", md: 0 }}
            />

            <Box
                width={{ base: "100%", md: "400px" }}
                p={{ base: 8, md: 12 }}
                color="brand.bodyFont"
                fontWeight={500}
                textShadow="1px 1px 1px black"
                textAlign={{ base: "left", md: imageOnLeft ? "right" : "left" }}
            >
                <Text fontSize="3xl" mb={4}>
                    {header}
                </Text>
                <Text>{content}</Text>
            </Box>
        </Box>
    </section>
);

export default function WhatWeOffer() {
    return (
        <Stack backgroundColor="brand.pageBackground" alignItems="center">
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
                        textShadow="1px 1px 1px black"
                        color="brand.bodyFont"
                    >
                        WHAT WE OFFER
                    </Text>
                </Box>

                <Image
                    width="100%"
                    height="500px"
                    objectFit="cover"
                    src="./off-1-5.jpg"
                    alt="off-1"
                />
                <Box
                    width="100%"
                    p={{
                        base: 8,
                        md: 16,
                    }}
                    color="brand.bodyFont"
                    display="flex"
                    flexDir="column"
                    justifyContent="space-between"
                >
                    <Text
                        fontSize="xl"
                        fontWeight={500}
                        textShadow="1px 1px 1px black"
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
                            flexWrap="wrap"
                            textDecoration="italic"
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
                            flexWrap="wrap"
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
                backgroundColor="brand.cardBackgroundLightBlue"
            >
                {sections.map((section) => (
                    <Section
                        key={section.id}
                        header={section.header}
                        bgImage={section.bgImage}
                        imgSrc={section.imgSrc}
                        content={section.content}
                        imageOnLeft={sections.indexOf(section) % 2 === 0}
                        imagePosition={section.imagePosition}
                    />
                ))}
            </Stack>
        </Stack>
    );
}
