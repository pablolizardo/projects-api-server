require('dotenv').config()
const mongoose = require('mongoose')

const Project = require('../../models/Project')
const Sprint = require('../../models/Sprint')
const Task = require('../../models/Task')

const { projects, sprints } = require('./data')
const options = { 
    useNewUrlParser: true,  
    useUnifiedTopology: true  
}
mongoose.connect(process.env.MONGO_API_URL, options)
        .catch(e => { console.error('Connection error', e.message) })

const db = mongoose.connection
db.on('error', (error) => console.log(error))

db.once('open', () => {
    console.log('🗑 Truncate db...')
    Project.deleteMany({}, () => console.log('deleted all projects'))
    Sprint.deleteMany({}, () => console.log('deleted all sprints'))
    Task.deleteMany({}, () => console.log('deleted all sprints'))
    console.log('🐜 Seeding...')
    projects.map(project => Project.create({
        ...project,
        order: Math.floor(Math.random() * 10),
        priority: Math.floor(Math.random() * 10),
    }))
    let project = Project.findOne({ title: 'CUO' })
    sprints.map(sprint => Sprint.create({
        ...sprint,
        project: project._id
    }))
    return process.exit()

})