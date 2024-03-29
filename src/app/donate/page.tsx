// donate/page.tsx

"use client";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    VStack,
    Text,
    useToast,
    Stack,
    Image,
    Flex,
    Select,
} from "@chakra-ui/react";
import { useState } from "react";

interface DonationData {
    donorName: string;
    email: string;
    amount: string;
    message: string;
    recurring: boolean; // New field to indicate if the donation is recurring
}

export default function DonateForm() {
    const toast = useToast(); // Initialize toast for showing popup
    const [donationData, setDonationData] = useState<DonationData>({
        donorName: "",
        email: "",
        amount: "",
        message: "",
        recurring: false, // Default to non-recurring donation
    });

    const [isLoading, setIsLoading] = useState(false); // New state variable for loading status

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        > // Include HTMLSelectElement in the union type
    ) => {
        setDonationData({
            ...donationData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // The payload now needs to include the 'recurring' field
        const payload = {
            ...donationData,
            recurring: donationData.recurring,
        };

        try {
            // Your API endpoint might differ based on whether it's a one-time or recurring donation
            const endpoint = donationData.recurring
                ? "/api/subscribe"
                : "/api/donate";

            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(
                    "Network response was not ok " + response.statusText
                );
            }

            toast({
                title: "Thank you for your donation!",
                description: donationData.recurring
                    ? "Welcome to our recurring donation program!"
                    : "We greatly appreciate your support.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "Donation error",
                description:
                    "There was a problem processing your donation. Please try again.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box minH="calc(100vh - 80px)">
            <Stack width="100%" spacing={0}>
                <Image
                    maxWidth={"1020px"}
                    // make center
                    margin="auto"
                    width="100%"
                    height={{ base: "175px", md: "250px" }}
                    objectFit="cover"
                    objectPosition="bottom"
                    src="https://gwcd-content.s3.amazonaws.com/GWCD+Dance/_C4A9834.jpg"
                    alt="off-1"
                />
                <Box position="absolute" height="100px" width="100%">
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
                            Make a Donation
                        </Text>
                    </Flex>
                </Box>
            </Stack>

            <Box>
                <Box
                    maxWidth="400px"
                    margin="auto"
                    padding="20px"
                    bg="brand.pageBackground"
                    color="white"
                    borderRadius="md"
                    as="form"
                    onSubmit={handleSubmit}
                >
                    <FormControl
                        id="donorName"
                        marginBottom="4"
                        isDisabled={isLoading}
                    >
                        <FormLabel>Donor Name</FormLabel>
                        <Input
                            required
                            type="text"
                            placeholder="Your Name"
                            name="donorName"
                            value={donationData.donorName}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl
                        id="email"
                        marginBottom="4"
                        isDisabled={isLoading}
                    >
                        <FormLabel>Email</FormLabel>
                        <Input
                            required
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={donationData.email}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl id="recurring" marginBottom="4">
                        <FormLabel>Donation Type</FormLabel>
                        <Select
                            name="recurring"
                            value={
                                donationData.recurring
                                    ? "recurring"
                                    : "one-time"
                            }
                            onChange={(e) =>
                                setDonationData({
                                    ...donationData,
                                    recurring: e.target.value === "recurring",
                                })
                            }
                            backgroundColor={"white"}
                            color={"black"}
                        >
                            <option value="one-time">One-Time</option>
                            <option value="recurring">Recurring</option>
                        </Select>
                    </FormControl>

                    <FormControl
                        id="amount"
                        marginBottom="4"
                        isDisabled={isLoading}
                    >
                        <FormLabel>Donation Amount</FormLabel>
                        <Select
                            placeholder="Select amount"
                            name="amount"
                            value={donationData.amount}
                            onChange={handleChange}
                            backgroundColor={"white"}
                            color={"black"}
                        >
                            {/* Update these options based on your requirements */}
                            <option value="25">$25</option>
                            <option value="50">$50</option>
                            <option value="100">$100</option>
                            <option value="other">Other</option>
                        </Select>
                    </FormControl>

                    {/* Optional message field */}
                    <FormControl id="message" marginBottom="4">
                        <FormLabel>Message (Optional)</FormLabel>
                        <Textarea
                            placeholder="Any message for us?"
                            name="message"
                            value={donationData.message}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <Button
                        width="full"
                        colorScheme="green"
                        type="submit"
                        isLoading={isLoading}
                    >
                        Donate Now
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
