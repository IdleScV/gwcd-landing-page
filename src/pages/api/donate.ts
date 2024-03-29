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
        try {
            const {
                donorName,
                email,
                amount,
                message,
                recurring,
            }: {
                donorName: string;
                email: string;
                amount: number;
                message?: string;
                recurring: boolean;
            } = req.body;

            // Create a Stripe Customer
            const customer = await stripe.customers.create({
                email,
                name: donorName,
                description: message,
            });

            if (recurring) {
                // For recurring donations, create a subscription
                const subscription = await stripe.subscriptions.create({
                    customer: customer.id,
                    items: [{ plan: "your-plan-id" }], // Replace 'your-plan-id' with your actual plan ID
                    expand: ["latest_invoice.payment_intent"],
                });
                res.status(200).json({
                    success: true,
                    subscriptionId: subscription.id,
                });
            } else {
                // For one-time donations, create a payment intent instead of a direct charge
                const paymentIntent = await stripe.paymentIntents.create({
                    amount: amount * 100, // Convert amount to cents
                    currency: "usd",
                    customer: customer.id,
                    description: message,
                });
                res.status(200).json({
                    success: true,
                    paymentIntentId: paymentIntent.id,
                });
            }
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
