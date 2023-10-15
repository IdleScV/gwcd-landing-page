import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        // Handle your form submission logic here
        // For now, we'll just send back the data we received
        res.status(200).json({ received: req.body });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
};
