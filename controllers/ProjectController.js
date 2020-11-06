const Project = require('../models/Project')

const store = async (req, res) => {
    let project = await Project.create(req.body)
    return res.status(201).json(project)
}
const get = async (req, res) => {
    let results = await Project.find()
        .populate('sprints')
    return res.status(201).json(results)
}
const getById = async (req, res) => {
    let results = await Project.findOne({ _id : req.params.id })
        .populate('sprints')
    return res.status(201).json(results)
}

module.exports = { store, get , getById}
