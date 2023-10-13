import {
    Box,
    Button,
    HStack,
    Stack,
    Text,
    Image,
    VStack,
    Flex,
} from "@chakra-ui/react";

import { VideoPlayer } from "./components/VideoPlayer";

export default function Home() {
    return (
        <HStack
            backgroundColor="brand.pageBackground"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={8}
            spacing={16}
        >
            <Box maxWidth="880px" display="flex">
                <VideoPlayer videoUrl="./landing.mp4" />

                <Box
                    display={"flex"}
                    flexGrow={1}
                    flexDir={"column"}
                    backgroundImage={"./landingside.jpg"}
                    backgroundPosition={"35%"}
                    backgroundSize={"cover"}
                    width="600px"
                    p={4}
                    textAlign={"center"}
                >
                    <Text fontSize="lg" color="brand.bodyFont">
                        Updates
                    </Text>
                    <Text fontSize="small" color="brand.bodyFont">
                        Setup API connection here with a CMS
                    </Text>
                </Box>
            </Box>

            <Stack
                textAlign={"center"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={8}
            >
                <Text
                    fontSize="2xl"
                    fontWeight={700}
                    color="brand.headerFont"
                    letterSpacing={"0.05em"}
                >
                    ABOUT GWCD
                </Text>
                <Text fontSize="md" color="brand.bodyFont" maxWidth={"600px"}>
                    Greater Washington Chinese Dance (GWCD) was established in
                    2022 as the non-profit affiliate of Xuejuan Dance Ensemble
                    (XDE). Its aim is to bring the art of Chinese dance to
                    diverse audiences in America. XDE (xjdance.org) has been
                    dedicated to the education and performance of Chinese dance
                    for 14 years. Based in Herndon, VA, XDE offers varied,
                    rigorous, and comprehensive training in the ethnic,
                    contemporary, and classical genres of Chinese dance. The
                    ensemble provides training in technique and repertoire to
                    young children, pre-teens, teens, and adults through a
                    diverse curriculum. GWCD was established to complement and
                    enhance the work of XDE. Its mission is to focus on
                    community outreach in order to promote cross-cultural
                    understanding and appreciation.
                </Text>
                <Button variant={"brand"}>
                    <Text> Learn More </Text>
                </Button>
            </Stack>
            <Box>
                <HStack alignItems={"center"} spacing={16}>
                    <Image
                        width="300px"
                        height="200px"
                        objectFit={"contain"}
                        src={"./venues/Capital.png"}
                        alt="capital-one"
                    />
                    <Image
                        width="200px"
                        height="200px"
                        objectFit={"contain"}
                        src={"./venues/Kennedy.png"}
                        alt="kennedy-center"
                    />
                    <Image
                        width="300px"
                        height="150px"
                        objectFit={"contain"}
                        src={"./venues/Wolftrap.png"}
                        alt="wolftrap"
                    />
                </HStack>
                <Text color="brand.bodyFont" textAlign="right" mt={-4}>
                    Proudly performing on DC’s stages for 14 years
                </Text>
            </Box>
        </HStack>
    );
}
