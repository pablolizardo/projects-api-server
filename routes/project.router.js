const ProjectController = require('../controllers/project.controller')
const express = require('express')
const router = express.Router()

router.post('/projects', ProjectController.store)
router.get('/projects', ProjectController.get)
// router.put('/projects/:id', ProjectController.updateProject)
// router.delete('/projects/:id', ProjectController.deleteProject)
// router.get('/projects/:id', ProjectController.getProjectById)

module.exports = router