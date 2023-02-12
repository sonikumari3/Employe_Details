const express= require('express')

const mongoose= require('mongoose')
//const bodyParser = require('body-parser')
require('dotenv').config()

const app= express()
app.use(express.json())
//app.use(bodyParser.json())



mongoose.connect('mongodb+srv://Soni:ASj7w5ibygF7H8hy@cluster0.vjzcsaj.mongodb.net/E_D',{
    useNewUrlParser:true
})

.then(() => console.log('mongoDB is connect'))
.catch(()=> console.log(error))

app.listen(process.env.PORT || 3000,function(){
    console.log(`Server is running at ${process.env.PORT || 3000}`)
})