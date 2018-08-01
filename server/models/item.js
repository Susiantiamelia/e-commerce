const mongoose = require('mongoose')
const Schema   = mongoose.Schema

let itemSchema = new Schema({
    Name: {
        type: String,
        required: 'Please input item name'
    },
    stock: {
        type: Number,
        required: 'Please input item stock'
    },
    price: {
        type: Number,
        required: 'Please input item price'
    } ,
    Desc: {
        type: String,
        required: 'Please input item description'
    },
    image: {
        type: String,
        required: 'Please input item image'
    },
    item: [{
        type: String
    }]
},{timestamps: true})

let Item = mongoose.model('Item', itemSchema)

module.exports = Item