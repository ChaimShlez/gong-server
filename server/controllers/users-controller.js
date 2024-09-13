const router = require("express").Router()
 let usersLogic=require("../logic/users-logic")


router.post("/register" ,async (request,response,next) => {
   
    let userRegister=request.body;
   
    //console.log(userRegister);
    try {
        await usersLogic.addUser(userRegister);
        response.json();
       

    } 
    catch (error) {
       return next(error)
    }
});


 module.exports=router;