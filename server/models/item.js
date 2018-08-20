const mongoose = require('mongoose')
const Schema   = mongoose.Schema

let itemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'please input item name']
    },
    price:{
        type: Number,
        required: [true, 'please input item price']
    },
    image: {
        type: String,
        required: [true, 'please input item image']
    },
    category: {
        type: String,
        required: [true, 'please input category of this item']
    },
    desc: {
        type: String,
        required: [true, 'please input item description']
    }
},{timestamps: true})

let Item =mongoose.model('Item', itemSchema)

module.exports = Item