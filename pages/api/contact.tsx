import type { NextApiRequest, NextApiResponse } from "next";
import { z, ZodError } from "zod";
import nodemailer from "nodemailer";

const FormData = z.object({
	name: z.string(),
	email: z.string().email(),
	message: z.string(),
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const result = await processData(req.body);
	res.status(200).json(result);
}

async function processData(
	data: any
): Promise<{ success: boolean; errors: any }> {
	try {
		const result = FormData.parse(data);
		await sendMail(result);
	} catch (error) {
		if (error instanceof ZodError) {
			return { success: false, errors: error.errors };
		}
		throw error;
	}
	return { success: true, errors: null };
}

async function sendMail(data: any) {
	try {
		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_ADDRESS,
				pass: process.env.GMAIL_PASSWORD,
			},
		});

		let myMailOptions = {
			from: process.env.EMAIL_ADDRESS,
			to: process.env.EMAIL_ADDRESS,
			subject: `New Contact from website`,
			html: `<h2>You Have a new connection</h2> 
      <p>Name: ${data.name}</p> 
      <p>Email: ${data.email}</p> 
      <p>Message: ${data.message}</p>`,
		};

		let theirMailOptions = {
			from: process.env.EMAIL_ADDRESS,
			to: `${data.email}`,
			subject: `Thanks for stopping by`,
			html: `<h2>Hope you had a great time</h2> `,
		};

		transporter.sendMail(myMailOptions);
		transporter.sendMail(theirMailOptions);
	} catch (error) {
		console.log("error", error);
		throw error;
	}
}
