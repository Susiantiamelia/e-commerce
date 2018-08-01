const mongoose = require('mongoose')
const Schema   = mongoose.Schema

let transactionSchema = new Schema({
    Item: {
        type: Schema.Types.ObjectId,
        ref: 'Item'
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    Qty: {
        type: Number,
        required: 'Please input total item'
    },
    Price: Number
}, {timestamps: true})

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction