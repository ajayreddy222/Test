const express = require('express');
const http = require('http');
const cors = require('cors');
require('dotenv').config();
const sendMail = require('./send-email/send-email');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

const port = process.env.PORT || 3030;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

/**
 * Sends mail.
 * @property {string} body.from - Mail from.
 * @property {string} body.to - Mail to.
 * @property {string} body.subject - Mail subject.
 * @property {string} body.html - HTML string with message.
 */

app.post('/api/send-email', (req, res) => {
    sendMail(req, res);
});
