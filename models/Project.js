const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        color : { type: String , default:'gray'},
        order : { type: Number ,default : 0},
        type : { type: String },
        priority : { type: Number , default: 0}, 
        active: { type: Number, default : 1}
    },
    { timestamps: true },
)

module.exports = mongoose.model('Project', ProjectSchema)