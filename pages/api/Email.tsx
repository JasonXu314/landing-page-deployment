// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextPage, GetStaticProps, InferGetStaticPropsType, NextApiRequest, NextApiResponse } from 'next';
import clientPromise from "../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("pickhacks_2024");
        const body = req.query;

        const post = await db.collection("MailingList").insertOne({
            email: body.email,
        });

        console.log(post)
        
        res.json(post)
    } catch (e) {
        console.error(e);
    }

}
