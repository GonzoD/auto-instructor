require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

// для разработки можно удалить, 
//заменить ссылку env на клиенте - localhost:3000
//и использовать команду npm run dev
app.use('/', express.static(path.join(__dirname, 'client', 'build')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log('Server Error', error.message)
        process.exit(1)
    }
}

start()