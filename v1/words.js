const express = require('express');
const router = express.Router();
const app = express();

app.get('/words', (req, res) => {
   res.send.status(200)
 });

module.exports = router;
