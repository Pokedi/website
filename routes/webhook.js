const { Router } = require("express");

const TopGG = require('@top-gg/sdk');
const webhook = new TopGG.Webhook(process.env.TOPGG)

const app = Router();

app.get("/", (req, res) => {
    res.json({ success: true });
});

app.post("/", webhook.listener((vote) => {
    console.log(vote);
}))

module.exports = app;