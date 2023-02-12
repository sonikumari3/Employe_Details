const mongoose = require('mongoose');


const employeeSchema = mongoose.Schema({
  
    name:{
        type: String,
        maxLenght: 100,
    },
    email:{
        type: String,
        maxLenght: 100,
    },
    number:{
        type: Number,
        maxLenght: 100,
    },
    designation:{
        type: String,
        maxLenght: 100,
    },
    gender:{
        type: String,
        maxLenght: 100,
    }
},{
    timeStamps: true 
})

const Employee = mongoose.model('Employee',employeeSchema)

module.exports={Employee}