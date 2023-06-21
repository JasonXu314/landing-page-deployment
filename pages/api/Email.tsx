// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextPage, GetStaticProps, InferGetStaticPropsType, NextApiRequest, NextApiResponse } from 'next';
import clientPromise from "../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("pickhacks_2024")

        const emails = await db
            .collection("MailingList")
            .find({})
            .limit(10)
            .toArray();
        
        res.json(emails)
    } catch (e) {
        console.error(e);
    }

}
