import { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16",
});

export default async (
    req: VercelRequest,
    res: VercelResponse
): Promise<void> => {
    if (req.method === "POST") {
        const { email, planId }: { email: string; planId: string } = req.body;

        try {
            // Check if the customer already exists
            let customer = (await stripe.customers.list({ email })).data[0];

            // If not, create a new customer
            if (!customer) {
                customer = await stripe.customers.create({
                    email,
                });
            }

            // Create the subscription
            const subscription = await stripe.subscriptions.create({
                customer: customer.id,
                items: [{ plan: planId }],
                expand: ["latest_invoice.payment_intent"],
            });

            res.status(200).json({
                success: true,
                subscriptionId: subscription.id,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: error.message });
        }
    } else {
        // Handle non-POST requests
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
