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
router.post("/income" , async (request ,response ,next) =>{
   
  let userLog= request.body;
  console.log(userLog  +  "controller")

try {
await logsLogic.createIncome(userLog);
response.send("hello")

}
catch (error){
return next(error)
}
})


router.get("/:id", async (request, response, next) => {
  try {
   let userId = request.params.id; 
    let activities = await logsLogic.getActivities(userId);
    response.send(activities);
  } catch (error) {
    return next(error);
  }
});


 module.exports=router;