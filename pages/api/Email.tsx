// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextPage, GetStaticProps, InferGetStaticPropsType, NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'
import { MongoClient } from 'mongodb'

type Email = {
    email: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
    const mongoClient = new MongoClient(
        `mongodb+srv://${process.env.username}:${process.env.password}@pickhacks.mlm2kz9.mongodb.net/${process.env.database}?retryWrites=true&w=majority`
    );

    const data = await mongoClient.db().collection('MailingList').find({}).toArray();

    console.log('!!!', data);

    const result = await axios.get<{
        emails: Email[];
    }>('url');
    console.log(result.data.emails);

    return {
        props: {
            emails: result.data.emails,
        },
        revalidate: 60
    }
}

