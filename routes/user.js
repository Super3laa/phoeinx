const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const users = require('../services/user')
const jwt = require('jsonwebtoken')
router.post('/adminLogin', auth.signInValidation, async (req, res) => {
    const userdb = req.userdb;
    jwt.sign(
        { user: userdb.dataValues},
        "blahblah",
        { expiresIn: "1d" } ,
        (err, token) => {
            res.status(200).json(token);
        });
});
router.post('/SignUp', async (req, res) => {
    const user = await users.addUser(req.body.user)
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(500).send('error')
    }
});
module.exports = router;