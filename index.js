const express = require('express')

const morgan = require("morgan")

const cors = require("cors")

require("dotenv").config()


//handles uncaught errors
process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    console.log('UNCAUGHT EXCEPTION! Shutting Down....')
    process.exit(1);
})


const app = express()



app.use(morgan("dev"))

app.use(express.json({ limit: '10kb' }));
app.use(cors()) 

 app.use('/', async(req, res)=>{
    res.status(200).json({
        slackUsername: 'vik maamaa',
        backend: true,
        age: 22,
        bio: 'I am a developer that loves problem solving, dedicated and love to help others'
})
 });


//connection port 
const port = process.env.PORT || 8000

 app.listen(port, ()=>console.log(`Server is running on port ${port}`))


