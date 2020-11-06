const express = require('express')
const router = express.Router()

const ProjectController = require('../controllers/ProjectController')
const SprintController = require('../controllers/SprintController')


// projects
router.get('/projects', ProjectController.get)
router.post('/projects', ProjectController.store)
// router.get('/projects/:id', ProjectController.getProjectById)

// sprints
router.get('/sprints', SprintController.get)

router.get('/', (req, res) => { res.send('Hello World!') })

module.exports = router