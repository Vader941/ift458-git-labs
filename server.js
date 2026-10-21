/*
 * Name: Nathan Able
 * Student ID: 1232647522
 * Date: October 21, 2026
 * Course: IFT 458
 * Purpose: Run an Express server with request logging middleware.
 */

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const port = 3000;

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('IFT 458: Logger middleware is working.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});