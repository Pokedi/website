const express = require("express");
const cors = require("cors");

const next = require("next");

const dotenv = require('dotenv');
dotenv.config();

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

// Routes
const webhook = require('./routes/webhook.js')

app.prepare().then(x => {
    
    const nextServer = express();
    nextServer.use(cors());
    
    nextServer.use('/topgg', webhook);

    nextServer.get('*', (req, res) => {
        return handle(req, res)
    });

    nextServer.listen(8000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:8000')
    });

});