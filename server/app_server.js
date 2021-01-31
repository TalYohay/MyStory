const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    userRoute = require('./routes/user.route');
const storyRoute = require('./routes/story.route');
const path = require('path');
require('dotenv').config();






// connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPW}@cluster0.ymewz.mongodb.net/MyStory?retryWrites=true&w=majority`, { useNewUrlParser: true }).then(() => { console.log('Database is connected!') },
    err => { console.log('Can not connect to DB' + err) }
);
// mongodb://127.0.0.1/MyStory
const app = express();
app.use(bodyParser.json());
app.use(cors());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS, PUT"
    );

    next();
});

app.use('/api/', userRoute);
app.use('/api/stories', storyRoute);



app.use(express.static('../dist/my-story'));

app.get('/*', function(req, res) {
    res.sendFile(path.join('../dist/my-story/index.html'));
});
let port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log('Listening to port ' + port);
});