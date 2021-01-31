const express = require('express');
const mongoose = require("mongoose");
const verify = require('./verifyToken')
var moment = require('moment'); // require

const storyRoute = express.Router()
const Story = require('../models/Story')

//Create Story
// storyRoute.route('/add').post(verify,(req, res) => {
//     const story = new Story({
//         _id: new mongoose.Types.ObjectId(),
//         UserId: req.user._id,
//         userName: req.user.firstName + ' ' + req.user.lastName,
//         title: req.body.title,
//         body: req.body.body,
//         status: req.body.status,


//     });
//     return story.save()
//     .then(story =>{
//         console.log(story);
//         return res.status(200).json({
//             message:"Story was created",
//             story:story,
//             request:{
//                 type:"GET",
//                 story_url:"http://localhost:5000/stories/story/" + story._id
//             }
//         })
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({
//             error:err.message
//         });
//     });
// })


storyRoute.post('/add', verify, async(req, res) => {
    const story = new Story({
        _id: new mongoose.Types.ObjectId(),
        UserId: req.user._id,
        userName: req.user.firstName + ' ' + req.user.lastName,
        title: req.body.title,
        body: req.body.body,
        status: req.body.status
    });

    try {
        const savedStory = await story.save();
        // res.send(savedStory)
        res.status(200).json({
            Message: "Story was created",
            Story: savedStory,
            request: {
                type: "GET",
                story_url: "http://localhost:5000/api/stories/story/" + story._id
            }
        })
    } catch (err) {
        res.status(400).send(err)
    }
})



//Get All Stories
// storyRoute.route('/').get(verify, function(req, res) {
//     Story.find(function(err, story) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(story);
//         }
//     });
// });

storyRoute.get('/', async(req, res) => {
    try {
        const stories = await Story.find()
        res.status(200).send(stories);
    } catch {
        res.status(400).send('No Stories found!')
    }
})

//Get Stories by ID
// storyRoute.route('/story/:id').get(verify, (req, res, next) => {
//     Story.findById(req.params.id, function(err, story) {
//         if (err) {
//             res.status(500).json({
//                 message: "Story not found!"
//             })
//             console.log("Story not found!")
//         }
//         res.status(200).json({ story });
//     });
// });

storyRoute.get('/story/:id', async(req, res) => {
    try {
        const foundStory = await Story.findById({ _id: req.params.id })
        if (foundStory) return res.send(foundStory)
    } catch {
        res.status(400).json({ message: 'Story was not found' })
    }


})

//Delete Story
// storyRoute.delete('/story/:id', verify, (req, res, next) => {
//     Story.deleteOne({ _id: req.params.id })
//         .exec()
//         .then(result => {
//             res.status(200).json({
//                 message: 'Story deleted'
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });

storyRoute.delete('/story/:id', verify, async(req, res) => {

    try {
        const deletedStory = await Story.deleteOne({ _id: req.params.id })
        if (deletedStory) return res.status(200).json({ message: 'Story was deleted' })
    } catch (err) {
        res.status(400).json({ message: err })
    }

})


//Edit Story
// storyRoute.route('/edit/:id').put(verify, (req, res, next) => {
//     Story.findByIdAndUpdate({ _id: req.params.id }, {
//         $set: req.body
//     }, (error, data) => {
//         if (error) {
//             return next(error);
//             console.log(error)
//         } else {
//             res.json({
//                 message: "Data updated successfully!",
//                 story: data
//             })
//             console.log('Data updated successfully')
//         }
//     })
// })


storyRoute.put('/edit/:id', verify, async(req, res) => {
    try {
        const story = await Story.findByIdAndUpdate({ _id: req.params.id }, {
            $set: req.body
        })
        if (story) return res.status(200).json({
            message: "Data updated successfully!",
            story: story
        })
    } catch {
        res.status(400).json({ message: 'Story was not found' })
    }

})



module.exports = storyRoute;