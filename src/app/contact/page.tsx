"use client";
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
} from "@chakra-ui/react";
import { useState } from "react";

interface FormData {
    name: string;
    organization: string;
    isRequestingPerformance: string;
    performanceDate: string;
    message: string;
}

export default function ContactForm() {
    const toast = useToast(); // Initialize toast for showing popup
    const [formData, setFormData] = useState<FormData>({
        name: "",
        organization: "",
        isRequestingPerformance: "No",
        performanceDate: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false); // New state variable for loading status

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true at the start of submission

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok)
                throw new Error(
                    "Network response was not ok " + response.statusText
                );

            const data = await response.json();
            console.log(data);

            toast({
                // Show success popup
                title: "Success",
                description: "Your message has been sent!",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                // Optionally, show error popup
                title: "Error",
                description: "There was an error sending your message.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false); // Set loading to false after submission
        }
    };

    return (
        <>
            <Text
                p={8}
                fontSize="3xl"
                fontWeight={500}
                color="brand.bodyFont"
                textAlign={"center"}
            >
                Performance Request/Contact Form
            </Text>
            <Box
                maxWidth="400px"
                minHeight={"calc(100vh - 80px)"}
                margin="auto"
                padding="20px"
                bg="brand.pageBackground"
                color="white"
                borderRadius="md"
                as="form"
                onSubmit={handleSubmit}
            >
                <FormControl id="name" marginBottom="4" isDisabled={isLoading}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl
                    id="organization"
                    marginBottom="4"
                    isDisabled={isLoading}
                >
                    <FormLabel>Organization</FormLabel>
                    <Input
                        type="text"
                        placeholder="Organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl
                    as="fieldset"
                    marginBottom="4"
                    isDisabled={isLoading}
                >
                    <FormLabel as="legend">Requesting Performance?</FormLabel>
                    <VStack>
                        <RadioGroup
                            width={"100%"}
                            value={formData.isRequestingPerformance}
                            onChange={(val) =>
                                setFormData({
                                    ...formData,
                                    isRequestingPerformance: val,
                                })
                            }
                        >
                            <Radio value="Yes" mr={8}>
                                Yes
                            </Radio>
                            <Radio value="No">No</Radio>
                        </RadioGroup>
                    </VStack>
                </FormControl>

                <FormControl
                    display={
                        formData.isRequestingPerformance === "Yes"
                            ? "block"
                            : "none"
                    }
                    id="date"
                    marginBottom="4"
                >
                    <FormLabel>Performance Date</FormLabel>
                    <Input
                        type="date"
                        name="performanceDate"
                        value={formData.performanceDate}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl id="message" marginBottom="4">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        placeholder="Type your message here"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </FormControl>

                <Button
                    width="full"
                    colorScheme="purple"
                    type="submit"
                    isLoading={isLoading} // Show loading state on button
                >
                    Submit
                </Button>
            </Box>
        </>
    );
}
