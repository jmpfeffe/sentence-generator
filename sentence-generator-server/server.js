const express = require('express');
const path = require('path');
const app = express();

const {
    PORT = 8080
} = process.env;

app.use(express.static(path.join(__dirname, '../sentence-generator-ui/dist')));

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../sentence-generator-ui/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});