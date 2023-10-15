import type { NextApiRequest, NextApiResponse } from "next";
import mailgun from "mailgun-js";

const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY!,
    domain: process.env.MAILGUN_DOMAIN!,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const {
            name,
            organization,
            isRequestingPerformance,
            performanceDate,
            message,
        } = req.body;

        const data = {
            from: "Your Sender Name <sender@example.com>", // Replace with your sender email
            to: "weschen1996@gmail.com", // Replace with your recipient email
            subject: `Performance Request from ${name}`,
            text: `
                Name: ${name}
                Organization: ${organization}
                Requesting Performance: ${isRequestingPerformance}
                Performance Date: ${performanceDate}
                Message: ${message}
            `,
        };

        mg.messages().send(data, function (error, body) {
            if (error) {
                console.error("Error sending email:", error);
                res.status(500).send("Error sending email.");
            } else {
                res.status(200).send("Message sent successfully.");
            }
        });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
};
