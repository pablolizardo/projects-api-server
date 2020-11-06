require('dotenv').config()
const mongoose = require('mongoose')

const Project = require('../../models/Project')
const Sprint = require('../../models/Sprint')
const Task = require('../../models/Task')

const options = { 
    useNewUrlParser: true,  
    useUnifiedTopology: true  
}
mongoose.connect(process.env.MONGO_API_URL, options)
        .catch(e => { console.error('Connection error', e.message) })

const db = mongoose.connection
db.on('error', (error) => console.log(error))

db.once('open', () => {
    console.log('🗑\  Truncating db...')
    Project.deleteMany({}, () => console.log('deleted all projects'))
    Sprint.deleteMany({}, () => console.log('deleted all sprints'))
    Task.deleteMany({}, () => console.log('deleted all tasks'))
})
console.log('✅\  ok...')

return process.exit();