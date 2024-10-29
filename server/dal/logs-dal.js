const connection = require('./connection-wrapper');

async function createUserLog(userLog) {
    let sql;
    let parameters;

    if (userLog.storeName != null) {
        // SQL and parameters for an expense log
        sql = `INSERT INTO user_logs 
               (sub_expense_category, expense_category, user_id, price, store_name, payment_method)
               VALUES (?, ?, ?, ?, ?, ?)`;
        
        parameters = [
            userLog.selectedSubCategory,
            userLog.category,
            userLog.userID,
            userLog.price,
            userLog.storeName,
            userLog.paymentMethod
        ];
    } else {
        // SQL and parameters for an income log
        sql = `INSERT INTO user_logs 
               (user_id, payment_method, price, revenue_category)
               VALUES (?, ?, ?, ?)`;
        
        parameters = [
            userLog.userID,
            userLog.incomeManner,
            userLog.incomeAmount,
            userLog.incomeSource
        ];
    }

    console.log(userLog, "  DB");
    console.log(parameters, "  DB");
    console.log(sql, "  DB");

    let userLogResult = await connection.executeWithParameters(sql, parameters);
    return userLogResult;
}



  
async function getActivities(userID) {
    let sql = `
     SELECT
       sc.name ,
       ul.price,
        rc.name ,
       ul.store_name,
       ul.date,
       ul.payment_method,
       rc.name as revenue_name
    FROM user_logs ul
     left JOIN sub_expense_category sc ON sc.id = ul.sub_expense_category 
      left JOIN revenue_categorys rc ON rc.id = ul.revenue_category
    WHERE ul.user_id=?`;
    let parameters=[userID];
    let userLogs = await connection.executeWithParameters(sql, parameters);   
    console.log(userLogs)
    console.log(parameters)
    if (!userLogs) {
        return null;
    }
    return userLogs; 
}
 
module.exports = {
   
    createUserLog,
    getActivities
};
