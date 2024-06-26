// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const client = await clientPromise;
		const db = client.db('pickhacks_2025');

		const post = await db.collection('MailingList').insertOne({
			email: req.body.email
		});

		res.json(post);
	} catch (e) {
		console.error(e);
	}
};

