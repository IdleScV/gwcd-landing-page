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
            phone,
            email,
        } = req.body;

        const emailContent = `
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            color: #333;
                            margin: 0;
                            padding: 0;
                        }
                        .content {
                            background-color: #ffffff;
                            margin: auto;
                            width: 60%;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0,0,0,0.1);
                            margin-top: 50px;
                        }
                        h1 {
                            color: #2C3E50;
                            margin-bottom: 20px;
                        }
                        p {
                            margin-bottom: 10px;
                        }
                        .label {
                            font-weight: bold;
                            color: #2C3E50;
                        }
                    </style>
                </head>
                <body>
                    <div class="content">
                        <h1>Performance Request from ${name}</h1>
                        <p><span class="label">Name:</span> ${name}</p>
                        <p><span class="label">Organization:</span> ${organization}</p>
                        <p><span class="label">Requesting Performance:</span> ${isRequestingPerformance}</p>
                        <p><span class="label">Performance Date:</span> ${performanceDate}</p>
                        <p><span class="label">Phone:</span> ${phone}</p>
                        <p><span class="label">Email:</span> ${email}</p>
                        <p><span class="label">Message:</span></p>
                        <p>${message}</p>
                    </div>
                </body>
            </html>
        `;

        const data = {
            from: "GWDC Contact Page <mailgun@sandbox-123.mailgun.org>", // Replace with your sender email
            to: "weschen1996@gmail.com", // Replace with your recipient email
            subject: `Performance Request from ${name}`,
            text: "test",
            html: emailContent,
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
