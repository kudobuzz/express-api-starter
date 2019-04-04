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

    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at '
    }
})

const model = mongoose.model('todos', toDoSchema)
module.exports = { model }

