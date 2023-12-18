const router = require("express").Router();
const bcrypt = require("bcrypt");
const users = [];
let counter = 0;

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", async (req, res) => {
    const {nickname, password, email} = req.body;

    if (!validateEmail(email)) {
        return res.status(400).send({status: 'error', message: 'Invalid email format' });
    }

    if (isEmailTaken(email)) {
        return res.status(400).send({ status: 'error', message: 'Email already in use' });
    }

    const passwordValidationResult = validatePassword(password);
    if (passwordValidationResult.error) {
        return res.status(400).send({error: passwordValidationResult.error});
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = { nickname, password: hashedPassword, email, id: ++counter };

        users.push(newUser);

        res.status(201).send({ status: 'success', data: newUser });
    } catch (error) {
        console.error("Error hashing password:", error);
        res.status(500).send({ status: 'error', message: 'Internal server error' });
    }
});

function validatePassword(password) {
    if (password.length < 8) {
        return {error: 'Password should be at least 8 characters long'};
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        return {error: 'Password should contain at least one lowercase and one uppercase letter'};
    }

    return {};
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isEmailTaken(email) {
    return users.some(user => user.email === email);
}

module.exports = router;