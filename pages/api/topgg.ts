import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import TopGG from "@top-gg/sdk";

const webhook = new TopGG.Webhook(process.env.TOPGG);

export default function handler(req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) {
    // if (req.method === 'POST') {
    console.log(req.query, req.body);
    // Process a POST request
    // res.json({ success: true });
    webhook.listener((vote) => { console.log(vote, "VOTE") })(req, res, next);
    // } else {
    //     console.log(req.query, req.body);
    //     // Handle any other HTTP method
    //     res.json({ success: false });
    // }
}