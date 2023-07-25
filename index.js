import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'




/* Rutas */

import authRoute from './src/routes/auth.js'
import empleadosRoute from './src/routes/empleados.js'
//import proyectosRoute from './src/routes/proyectos.js'
import tareasRoute from './src/routes/tareas.js'


const app = express()
const port = 3000
dotenv.config()



/* Connection to MongoDB */
const connect = async ()=>{
    try {
        const myConn =  await mongoose.connect(process.env.MONGODB_URI)  
        console.log("Conectado a mongo DB")
    } catch (error) {
        console.log(error)
    }
}
app.get('/',(req,res)=>{
    res.send(`${process.env.MONGODB_URI}`)
})



/* Middleware */
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Servidor no disponible"
    
    return res.status(errorStatus).json({
        message:errorMessage,
        success:false,
        status:errorStatus
    })
})
app.use(cookieParser())
app.use(express.json())
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/empleados",empleadosRoute);
//app.use("/api/v1/proyectos",proyectosRoute);
app.use("/api/v1/tareas",tareasRoute);

app.listen(port,()=>{
    connect()
    console.log(`Server running on port ${port}....`)
})