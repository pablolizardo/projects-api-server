require('dotenv').config()
const Project = require('../../models/Project')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_API_URL, { useNewUrlParser: true,  useUnifiedTopology: true  })
        .catch(e => { console.error('Connection error', e.message) })

const db = mongoose.connection

db.on('error',(error)=>console.log(error))

const data  = [
    { title: 'CUO', color: 'yellow' },
    { title: 'Home', color: 'teal' },
    { title: 'Projects', color: 'blue' },
    { title: 'TVF App', color: 'green' },
    { title: 'Datacenter', color: 'pink' },
    { title: 'Welcome', color: 'cyan' },
    { title: 'Cover', color: 'purple' },
]
db.once('open', ()=>{
    console.log('🗑 Truncate db...')
    Project.deleteMany({}, ()=>console.log('deleted all'))
    console.log('🐜 Seeding...')
    data.map( project => Project.create({
        ...project, 
        order: Math.floor(Math.random()*10),
        priority: Math.floor(Math.random()*10),
    }) )
    console.log('✅ Done! ')    
})