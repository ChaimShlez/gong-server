
let logsDal = require("../dal/logs-dal");

async function getActivities(userID) {
    try {
      
      let activities= await logsDal.getActivities(userID);
      console.log(activities  +    " logic")
      return activities; 
    } catch (error) {
      throw new Error("Failed to retrieve activities: " + error.message);
    }
  }

async function createUserLog(userLog) {
    let log= await logsDal.createUserLog(userLog);
    return log;
 }

 


module.exports = {
    
    createUserLog,
    getActivities
};
