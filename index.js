const express = require("express");
const cors = require("cors");
const next = require("next");
const server = express();
const dotenv = require('dotenv');
dotenv.config();

server.use(cors());

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare().then(x => {

    const nextServer = express();

    nextServer.get("/hello", (req, res) => {
        return res.json({ success: false, msg: "You got here" });
    });

    nextServer.get('*', (req, res) => {
        return handle(req, res)
    });

    nextServer.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    });

});