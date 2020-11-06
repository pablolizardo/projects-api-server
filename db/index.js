const mongoose = require('mongoose')
const options = { 
    useNewUrlParser: true,  
    useUnifiedTopology: true  
}
mongoose.connect(process.env.MONGO_API_URL, options)
        .catch(e => { console.error('Connection error', e.message) })

const db = mongoose.connection

module.exports = db