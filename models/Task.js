const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title: { type : String, required: true},
})

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task