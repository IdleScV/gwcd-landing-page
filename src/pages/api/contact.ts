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
        //    const emailContent = `
        //     <html>
        //         <head>
        //             <style>
        //                 body {font-family: Arial, sans-serif;}
        //                 .content {margin: auto; width: 50%; padding: 10px;}
        //             </style>
        //         </head>
        //         <body>
        //             <div class="content">
        //                 <h1>Performance Request from ${name}</h1>
        //                 <p><strong>Name:</strong> ${name}</p>
        //                 <p><strong>Organization:</strong> ${organization}</p>
        //                 <p><strong>Requesting Performance:</strong> ${isRequestingPerformance}</p>
        //                 <p><strong>Performance Date:</strong> ${performanceDate}</p>
        //                 <p><strong>Message:</strong></p>
        //                 <p>${message}</p>
        //             </div>
        //         </body>
        //     </html>
        // `;

        const data = {
            from: "GWCD Contact Page <help@gwcd.com>", // Replace with your sender email
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
