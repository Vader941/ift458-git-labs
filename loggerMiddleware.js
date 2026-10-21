/*
 * Name: Nathan Able
 * Student ID: 1232647522
 * Date: October 21, 2026
 * Course: IFT 458
 * Purpose: Log incoming HTTP requests.
 */

function loggerMiddleware(req, res, next) {
    console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
    next();
}

module.exports = loggerMiddleware;