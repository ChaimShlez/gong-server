const router = require("express").Router()
 let usersDal=require("../dal/users-dal")


router.post("/register" ,async (request,response,next) => {
    console.log("jyrggffg");
    let userRegister=request.body;
   
    console.log(userRegister);
    try {
        await usersDal.addUser(userRegister);
        response.json();
       

    } 
    catch (error) {
       return next(error)
    }
});


 module.exports=router;