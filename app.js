const express =  require('express');
const cors = require('cors');
const userRouter = require("./router/router.js")
const db = require("./connection/dbConfig.js")
var app = express();

app.use(cors());
app.use(express.urlencoded({expanded:true}));
app.use(express.json());

app.use("/to_do",userRouter);

app.listen(3001,()=>{
    console.log("Server Connection Successfull");
    
});