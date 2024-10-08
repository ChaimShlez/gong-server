const router = require("express").Router()
let logsLogic=require("../logic/logs-logic")


router.post("/" , async (request ,response ,next) =>{
   
   let userLog= request.body;
   console.log(userLog  +  "controller")
 
try {
 await logsLogic.createUserLog(userLog);
 response.send("hello")
 
   
}
catch (error){
return next(error)
}
})

 module.exports=router;