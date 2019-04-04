'use strict'

const mongoose = require('mongoose')
const toDoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    },

    created_at: {
        type: Date,
        required:true,
        default: Date.now
    },

    updated_at: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const model = mongoose.model('todos', toDoSchema)
module.exports = { model }

