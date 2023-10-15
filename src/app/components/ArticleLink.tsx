import {
    LinkBox,
    Text,
    Box,
    Heading,
    LinkOverlay,
    Image,
} from "@chakra-ui/react";

const ArticleLink = ({ imageUrl, altText, heading, text, date, linkUrl }) => {
    return (
        <LinkBox>
            <Box shadow="md" bg="gray.900" color="white" borderRadius={"md"}>
                <Image borderRadius={"md"} src={imageUrl} alt={heading} />
                <Box p="4">
                    <Heading size="md" mb={2} color="white">
                        {heading}
                    </Heading>
                    <Text color="brand.bodyFont">{text}</Text>
                    <Text color="gray.400">{date}</Text>
                    <LinkOverlay href={linkUrl} isExternal></LinkOverlay>
                </Box>
            </Box>
        </LinkBox>
    );
};

export default ArticleLink;
