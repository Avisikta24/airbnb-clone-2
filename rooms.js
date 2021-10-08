const express = require('express')
const router = express.Router()
const Room = require('./models/room')


router.get('/', (req, res) => {
    Room.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
router.get('/:id', (req, res) => {
    Room.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});


router.post('/', (req, res) => {
    const room = new Room({
        price: req.body.price,
        room_type: req.body.room_type,
        total_bathrooms: req.body.total_bathrooms,
        has_tv: req.body.has_tv,
        has_internet: req.body.has_internet,
        has_heating: req.body.has_heating,
        has_airconditioner: req.body.has_airconditioner
    });
    room.save((err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Room Added Successfully', addRoom: data})
        } else {
           console.log(err);
        }
    });
});


router.patch('/:id', (req, res) => {


    const room = {
        has_tv: req.body.has_tv
    };
    Room.findByIdAndUpdate(req.params.id, {$set: room},{new: true}, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Room Updated Successfully', updateRoom: data})
        } else {
            console.log(err);
        }
    });
});


router.delete('/:id', (req, res) => {

    Room.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({message: 'Room deleted', deleteRoom: data})
        } else {
            console.log(err);
        }
    });
});


module.exports= router;