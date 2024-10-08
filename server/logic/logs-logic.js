
let logsDal = require("../dal/logs-dal");



async function createUserLog(userLog) {
    return  await logsDal.createUserLog(userLog);
 }


module.exports = {
    
    createUserLog
};
