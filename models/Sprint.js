const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SprintSchema = new Schema({
    title: { type : String, required: true},
    type: { type : String, default : 'dev'},
})

const Sprint = mongoose.model('Sprint', SprintSchema)
module.exports = Sprint