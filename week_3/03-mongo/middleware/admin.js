import {Admin} from '../db/index.js';

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;

    if (!username || !password) {
        res.status(401).send('Unauthorized');
        return;
    }

    const user = await Admin.findOne({
        username: username,
        password: password
    })
    if (!user) {
        res.status(401).send('Unauthorized');
        return;
    }

    next();
}

export default adminMiddleware;