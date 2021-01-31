const express = require('express');
const userRoute = express.Router();
let User = require('../models/User');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken');
const Story = require('../models/Story');
require('dotenv').config();



//Sign up
// userRoute.post("/register", (req, res) => {
//     User.findOne({ email: req.body.email })
//         .exec()
//         .then(user => {
//             if (!user) {
//                 bcrypt.hash(req.body.password, 10, (err, hash) => {
//                     const user = new User({
//                         _id: new mongoose.Types.ObjectId(),
//                         firstName: req.body.firstName,
//                         lastName: req.body.lastName,
//                         email: req.body.email,
//                         password: hash
//                     })
//                     user.save()
//                         .then(result => {
//                             console.log(result);
//                             res.status(201).json({
//                                 success: true,
//                                 message: "User created!"
//                             })
//                         })
//                         .catch(err => {
//                             console.log(err);
//                             res.status(500).json({
//                                 error: err
//                             })
//                         })
//                 })
//             } else {
//                 return res.status(409).json({
//                     message: "Mail already exists!"
//                 })
//             }
//         })
// })

userRoute.post('/register', async(req, res) => {
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send('Email already exists')

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);



    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    })

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err)
    }

})


//Login
// userRoute.post("/", (req, res) => {
//     User.findOne({ email: req.body.email })
//         .exec()
//         .then(user => {
//             if (user) {
//                 bcrypt.compare(req.body.password, user.password, (err, result) => {
//                     if (result) {
//                         const token = jwt.sign({
//                                 _id: user._id,
//                                 firstName: user.firstName,
//                                 lastName: user.lastName,
//                                 email: user.email
//                             },
//                             process.env.JWT_KEY, {
//                                 expiresIn: "1h"
//                             },
//                         )
//                         return res.status(200).json({
//                             message: "Login succesful!",
//                             token: token,
//                             user: {
//                                 _id: user._id,
//                                 firstName: user.firstName,
//                                 lastName: user.lastName,
//                                 email: user.email
//                             }
//                         })
//                     } else {
//                         return res.status(401).json({
//                             message: "Login failed!",
//                             user
//                         });
//                     }
//                 })
//             } else {
//                 return res.status(401).json({
//                     message: "Email not found!"
//                 })
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 message: 'Auth failed'
//             });
//         });
// })

userRoute.post("/login", async(req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Email or password is wrong');
    const validPass = await bcryptjs.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Email or password is wrong')
    const token = jwt.sign({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }, process.env.JWT_KEY);
    // res.header('auth-token', token).send(token)
    // res.send('Logged In')
    return res.status(200).json({
        message: "Login succesful!",
        token: token,
        user: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }
    })



})


//User Profile
userRoute.get('/profile', verify, (req, res) => {
    res.json({
        message: 'Auth successful',
        user: req.user
    });
});

// User Profile (stories)
// userRoute.get('/profile/mystories', verify, (req, res) => {
//     Story.find({ UserId: req.user._id })
//         .then(stories => {
//             res.status(200).json({
//                 Stories: stories
//             });
//         });
// });

userRoute.get('/profile/mystories', verify, async(req, res) => {
    const stories = await Story.find({ UserId: req.user._id })
    if (stories[0] == null) return res.send('No stories yet');
    return res.status(200).send(stories)
})




//Get User by ID

// userRoute.route('/user/:id').get(verify, (req, res, next) => {
//     User.findById(req.params.id, function(err, user) {
//         if (err) {
//             res.status(500).json({
//                 message: "User not found!"
//             })
//             console.log("User not found!")
//         }
//         res.status(200).json({ user });
//     });
// });

userRoute.get('/user/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(500).send('User not found!')
        return res.status(200).send(user)
    } catch (err) {
        return res.status(400).send('User not found!')
    }

})

module.exports = userRoute