const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// import moment from 'moment';
const moment = require('moment'); // require
const Story = new Schema({

    _id: mongoose.Schema.Types.ObjectId,

    title:{
        type: String,
        required:true,
        trim:true
    },
    body:{
        type:String,
        required:true
    },
    status:{
        type: String, 
        default: 'public',
        enum: ['public', 'private']       
    },
   
    UserId:{
        type: String
    },
    userName:{
        type: String
    },
    
    createdAt: {
        type: String,
        default:moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
    },

},
    {
        collection: 'stories'
    }
)

module.exports = mongoose.model('Story', Story)