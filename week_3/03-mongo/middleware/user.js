import User from '../db/index.js'

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    if (!username || !password) {
        res.status(401).send('Send Correct Data');
        return;
    }

    const user = await User.findOne({
        username: username,
        password: password
    })

    if (!user) {
        res.status(401).send('Unauthorized');
        return;
    }

    next();

}

export default userMiddleware;