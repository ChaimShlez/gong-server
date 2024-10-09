
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
    return  await logsDal.createUserLog(userLog);
 }


module.exports = {
    
    createUserLog,
    getActivities
};
