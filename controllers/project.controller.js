const Project = require('./../models/Project')

store = (req, res) => {
    const body = req.body
    const project = new Project(body)
    project
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: project._id,
                message: 'project created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'project not created!',
            })
        })
}
get = async (req, res) => {
    const results = await Project.find()
    return res.status(201).json(results)
}

module.exports = { store, get }
