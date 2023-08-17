const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://jaya:jaya_db@cluster0.dkuc0.mongodb.net/car-go' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose