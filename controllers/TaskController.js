const Task = require('../models/Task')

const get = async (req,res) => {
    const tasks = await Task.find({})
    return res.status(201).json(tasks)
}
const store = async (req,res) => {
    let task = await Task.create(req.body)
    return res.status(201).json(task)
}

module.exports = { get , store }