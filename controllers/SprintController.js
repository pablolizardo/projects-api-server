const Sprint = require('./../models/Sprint')

const get = async (req,res) => {
    const sprints = await Sprint.find({})
    return res.json(sprints)
}

module.exports = { get }