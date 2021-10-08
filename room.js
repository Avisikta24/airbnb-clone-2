const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    room_type: {
        type: String,
        required: true
    },
    total_bathrooms: {
        type: Number,
        required: true
    },
    has_tv: {
        type: Boolean,
        required: true,
        default: false
    },
    has_internet: {
        type: Boolean,
        required: true,
        default: false
    },
    has_heating: {
        type: Boolean,
        required: true,
        default: false
    },
    has_airconditioner: {
        type: Boolean,
        required: true,
        default: false
    },
})
module.exports= mongoose.model('Room', roomSchema)