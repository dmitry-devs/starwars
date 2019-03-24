const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {
    res.sendfile('public/index.html');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});