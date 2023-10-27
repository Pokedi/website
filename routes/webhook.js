import { Router } from "express";

import TopGG from "@top-gg/sdk";

const webhook = new TopGG.Webhook(process.env.TOPGG)

const app = Router();

app.get("/", (req, res) => {
    console.log(req);
});

app.post("/", webhook.listener((vote) => {
    console.log(vote);
}))

export default app;