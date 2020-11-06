const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title: { type : String, required: true},
    sprint: {
        type: Schema.Types.ObjectId,
        ref: "Sprint"
    }
})

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task