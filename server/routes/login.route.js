const express = require('express');
const loginRoute = express.Router();

const mongoose = require("mongoose");
const {ensureAuth, ensureGuest } = require('../middleware/auth')

loginRoute.route('/login', ensureGuest).get((req,res) => {
    res.send('Login')
})



module.exports = loginRoute;