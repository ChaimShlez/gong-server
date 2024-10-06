const router = require("express").Router()
let usersLogic=require("../logic/users-logic")


router.post("/" , async (request ,response ,next) =>{
   
   let userLog= request.body;
   console.log(request)
try {
 await usersLogic.createUserLog(userLog);
 response.send("hello")
   
}
catch (error){
return next(error)
}
})

 module.exports=router;