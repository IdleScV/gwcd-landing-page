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
    const [formData, setFormData] = useState<FormData>({
        name: "",
        organization: "",
        isRequestingPerformance: "No",
        performanceDate: "",
        message: "",
    });

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
        console.log("hitting here", formData);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error submitting form:", error);
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
                <FormControl id="name" marginBottom="4">
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl id="organization" marginBottom="4">
                    <FormLabel>Organization</FormLabel>
                    <Input
                        type="text"
                        placeholder="Organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl as="fieldset" marginBottom="4">
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

                <Button width="full" colorScheme="purple" type="submit">
                    Submit
                </Button>
            </Box>
        </>
    );
}
