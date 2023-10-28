import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { Webhook } from "@top-gg/sdk";
import axios from 'axios';

const webhook = new Webhook(process.env.TOPGG);

export default function handler(req: NextApiRequest, res: any, next: NextApiHandler) {
    if (req.method === 'POST') {
        console.log(req.query, req.body);
        // Process a POST request
        res.status(200).end();
        res.sendStatus = () => { };
        webhook.listener((vote) => { 
            axios.post("http://127.0.0.1:483/vote/topgg", vote);
         })(req, res, next);
    } else {
        console.log(req.query, req.body);
        // Handle any other HTTP method
        res.json({ success: false });
    }
}