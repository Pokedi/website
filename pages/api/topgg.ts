import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { Webhook } from "@top-gg/sdk";

const webhook = new Webhook(process.env.TOPGG);

export default function handler(req: NextApiRequest, res: any, next: NextApiHandler) {
    if (req.method === 'POST') {
        console.log(req.query, req.body);
        // Process a POST request
        // res.json({ success: true });
        res.sendStatus = res.status;
        webhook.listener((vote) => { console.log(vote, "VOTE") })(req, res, next);
    } else {
        console.log(req.query, req.body);
        // Handle any other HTTP method
        res.json({ success: false });
    }
}