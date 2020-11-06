require('dotenv').config()
const Project = require('../../models/Project')
const mongoose = require('mongoose')
const Sprint = require('../../models/Sprint')

mongoose.connect(process.env.MONGO_API_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => { console.error('Connection error', e.message) })

const db = mongoose.connection

db.on('error', (error) => console.log(error))

const projects = [
    { title: 'CUO', color: 'yellow' },
    { title: 'Home', color: 'teal' },
    { title: 'Projects', color: 'blue' },
    { title: 'TVF App', color: 'green' },
    { title: 'Datacenter', color: 'pink' },
    { title: 'Welcome', color: 'cyan' },
    { title: 'Cover', color: 'purple' },
]


const sprints = [
    { title: 'dev' },
    { title: 'design' },
    { title: 'brainstorming' },
    { title: 'dev' },
    { title: 'deploy' },
    { title: 'support' },
    { title: 'docs' },
]



db.once('open', () => {
    console.log('🗑 Truncate db...')
    Project.deleteMany({}, () => console.log('deleted all projects'))
    Sprint.deleteMany({}, () => console.log('deleted all sprints'))
    console.log('🐜 Seeding...')
    projects.map(project => Project.create({
        ...project,
        order: Math.floor(Math.random() * 10),
        priority: Math.floor(Math.random() * 10),
    }))
    Project.findOne({ title: 'CUO' }, (err, docs) => {
        // console.warn('project', docs)
        sprints.map(sprint => Sprint.create({
            ...sprint,
            project: docs._id
        }))
    }
    )
    console.log('✅ Done! ')

})