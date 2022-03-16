const express = require('express')
const mongoose = require('mongoose')
const morgan = require("morgan")
const path = require("path")
const cors = require("cors")
const {readdirSync} = require("fs")
const { Server } = require('http')
require("dotenv").config()


//handles uncaught errors
process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    console.log('UNCAUGHT EXCEPTION! Shutting Down....')
    process.exit(1);
})


const app = express()

// database connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
       
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB CONNECTION ERR", err));

app.use(morgan("dev"))
//Body Parser, reading data from body into req.body 
app.use(express.json({ limit: '10kb' }));
app.use(cors()) 
//readdirSync("./routes").map((r)=> app.use("/api", require("./routes/"+r)))
 //app.use('/api', authRoutes);
readdirSync('./routes').map((r) => app.use("/api", require('./routes/' + r)))

//connection port 
const port = process.env.PORT || 8000

 app.listen(port, ()=>console.log(`Server is running on port ${port}`))

/*process.on('unhandledRejection', err=>{
    console.log(err.name, err.message)
    console.log('UNHANDLE REJECTION! Shutting Down....')
    server.close(()=>{
        process.exit(1)
    })
})

process.on('SIGTERM', ()=>{
    console.log('SIGTERM RECEIVED. Shutting Down gracefully')
    server.close(()=>{
        console.log('Process terminated!')
    })
})*/
