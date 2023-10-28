import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log(req.query, req.body);
        // Process a POST request
        res.json({ success: true });
    } else {
        console.log(req.query, req.body);
        // Handle any other HTTP method
        res.json({ success: false });
    }
}