const express = require('express')
const router = express.Router()

const ProjectController = require('../controllers/ProjectController')
const SprintController = require('../controllers/SprintController')
const TaskController = require('../controllers/TaskController')


// projects
router.get('/projects', ProjectController.get)
router.post('/projects', ProjectController.store)
router.get('/projects/:id', ProjectController.getById)

// sprints
router.get('/sprints', SprintController.get)
router.get('/sprints/:id', SprintController.getById)
router.post('/sprints', SprintController.store)

// tasks
router.get('/tasks', TaskController.get)
router.post('/tasks', TaskController.store)

router.get('/', (req, res) => { res.send('Hello World!') })

module.exports = router