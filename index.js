const express = require('express')
const app = express()
//___________________________(Requirements)
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
const foods = ['Rice', 'turkey', 'peaches', "pizza", "tomato", "steak", "chicken", "fries", "ranch", "pork"];
//______________________(Middleware)
const PORT = 3001
app.listen(PORT, (req, res)=>{
    console.log(`Server is now listening on Port 3001`)
})

app.get('/:indexOfFoodsArray',(req, res)=>{
    res.send(foods[req.params.indexOfFoodsArray])
})
