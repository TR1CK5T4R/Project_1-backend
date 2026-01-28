// require('dotenv').config({ path: './.env' });
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
dotenv.config({ path: './.env' })
import app from "./app.js";

const envPort = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(envPort, () => {
            console.log(`Server is running on port: ${envPort}`);
        })
        app.on('error', (error) => {
            console.log("Error from App instance", error);
            throw error;
        })
    })
    .catch((error) => {
        console.log("Mongo DB connection error", error);
    })



// first approach:
// import express from "express";


// const app= express()


// ; (async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_Name}`)
//        app.on("error",(error)=>{
// console.log("error: ", error);
// throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`app is listening on port ${process.env.PORT}`)
//        })
//     }
//     catch (error) {
//         console.log("Error: ", error)
//         throw error
//     }
// })()