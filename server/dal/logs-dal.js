const connection = require('./connection-wrapper');

async function createUserLog(userLog) {
    let sql = `INSERT INTO user_logs (sub_expense_category, expense_category,
     user_id, price, store_name,payment_method) VALUES (?, ?, ?, ?, ?,?)`;
    

    let parameters = [
        userLog.selectedSubCategory ,
        userLog.category,
        //userLog.revenue_category,
        userLog.userID,
        userLog.price,
        userLog.storeName,
       userLog.paymentMethod
    ];

    console.log(userLog, "  DB");
    console.log(parameters, "  DB");
    console.log(sql, "  DB");
    const userLOg= await connection.executeWithParameters(sql, parameters);
}

async function getActivities(userID) {
    let sql = `
    SELECT
       cu.name As user_name,
       sc.name AS sub_category_name,
       ul.price,
       ul.revenue_category,
       ul.store_name,
       ul.date,
       ul.payment_method
    FROM user_logs ul
    JOIN user u ON ul.user_id = u.id
    JOIN client_users cu ON u.client_user_id = cu.id
    JOIN sub_expense_category sc ON sc.id = ul.sub_expense_category  WHERE u.id=?`;
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
