const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var app = express();
// const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://kuer:Chenfujunku1@ds139342.mlab.com:39342/augmentedreality');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('success connecting!');
});


const Schema = mongoose.Schema;

const flagSchema = mongoose.Schema({
    name: String,
    position: {
        x: Number,
        y: Number,
        z: Number,
    },
    rotation: {
        x: {
            type: Number,
            default: 0
        },
        y: {
            type: Number,
            default: 0
        },
        z: {
            type: Number,
            default: 0
        },
    },
    maxRGB: {
        r: Number,
        g: Number,
        b: Number,
    },
    minRGB: {
        r: Number,
        g: Number,
        b: Number,
    },

});

const Flags = mongoose.model('flags', flagSchema);

// var flag = new Flags({name: 'jack'});
// const 
// flag.save((err)=> {
//     if(err) throw err;
//     console.log('flag saved successfully ');
// });

//get all flags
app.get('/flags', async (req, res) => {
    try {
        await Flags.find({}, (err, flags) => {
            if (err) throw err;
            res.json(flags);
        });

    } catch (err) {
        res.status(400).send(err.message);
    }
});

//add a flag

// app.post('/flag')
app.post('/flags', async (req, res) => {
    try {
        console.log(req.body);
        const newFlag = new Flags(req.body);

        newFlag.save((err) => {
            if (err) throw err;

            res.status(200).send("save successfully");
        });

    } catch (err) {
        res.status(400).send(err.message);
    }
});


//delete a flag by id
app.delete('/flags/:id', async (req, res) => {
    try {
        await Flags.findByIdAndRemove(req.params.id, (err, flag) => {
            res.json(flag);
            console.log(req.params.id, "flag removed!");
        });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// update a flag by id
app.patch('/flags/:id', (req, res) => {
    try {
        Flags.findByIdAndUpdate(req.params.id, {
           
        });
        console.log('patch');
    } catch (err) {
        res.status(400).send(err.message);
    }
});
// get a flag by id
app.get('/flags/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        // console.log(id);
        await Flags.findById(req.params.id, (err, flag) => {
            res.json(flag);
        });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.listen(3000);
module.exports = Flags;