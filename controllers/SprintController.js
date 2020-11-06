const Sprint = require('./../models/Sprint')

const get = async (req,res) => {
    const sprints = await Sprint.find()
        .populate('tasks')
        .populate('project')
    return res.status(201).json(sprints)
}

const getById = async (req,res) => {
    const sprint = await Sprint.findOne({_id:req.params.id})
        .populate('tasks')
        .populate('project')
    return res.status(201).json(sprint)
}

const store = async (req,res) => {
    let sprint = await Sprint.create(req.body)
    return res.status(201).json(sprint)
}

module.exports = { get , getById, store }