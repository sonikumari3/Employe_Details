const { Employee } = require("../Model/Employee")


const fnAddEmployee = async (req, res, next) => {
   
        const {name, email, number, designation, gender} = req.body

        if(!name){
            res.json({
                code: 0,
                message: "Enter Employee Name"
            })
        }
        if(!email){
            res.json({
                code: 0,
                message: "Enter Employee Email"
            })
        }
        if(!number){
            res.json({
                code: 0,
                message: "Enter Employee Number"
            })
        }
        if(!designation){
            res.json({
                code: 0,
                message: "Enter Employee Designation"
            })
        }
        if(!gender){
            res.json({
                code: 0,
                message: "Enter Employee Gender"
            })
        }
      
        try{
            const data = await new Employee({
                name: name,
                email: email,
                number: number,
                designation: designation,
                gender: gender

            })
        
            data.save()
            
            res.json({
                code: 1,
                message: "Success",
               data: data
            })
            
        }catch(err){
            res.json({
                code: 0,
                message: "Error",
                data: err
            })
        }
}
const fnGetEmployee = async (req, res, next) => {
    try {
        const data = await Employee.find({})

        res.json({
            code: 1,
            message: "Success",
            data: data
        })
            
        }catch(err){
            res.json({
                code: 0,
                message: "Error",
                data: err
            })
        }

   
}

const fnUpdateEmployee = async (req, res, next) => {
    const id = req.query.id
    const {name, email, number, designation, gender} = req.body
    try {
    
        const user = await Employee.findOneAndUpdate(
            {_id:id},
            {
                "$set": {
                name: name,
                email: email,
                number: number,
                designation: designation,
                gender: gender
    
                }
            },
            {new: true}) 
        
            if(user){
                res.json({
                    code: 1,
                    message: "Success",
                    data: user
                }) 

            }else{
                res.json({
                  code: 0,
                  message: "User Not Found",
                  data: user
            })  

        }
                  
        }catch(err){
            res.json({
                code: 0,
                message: "Error",
                data: err
            })
        }

   
}

const fnDeleteEmployee = async (req, res, next) => {
    const id = req.query.id
   
    try {
    
        const user = await Employee.findByIdAndRemove({_id:id}) 

        if(user){
            res.json({
                code: 1,
                message: "Deleted",
               data: user
            })  

        }else{
            res.json({
                code: 0,
                message: "User Not Found",
               data: user
            })  

        }
  
                 
        }catch(err){
            res.json({
                code: 0,
                message: "Error",
                data: err
            })
        }

   
}



module.exports = {
    fnAddEmployee,
    fnGetEmployee,
    fnUpdateEmployee,
    fnDeleteEmployee
}