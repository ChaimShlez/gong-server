const connection = require('./connection-wrapper');

async function createUserLog(userLog) {
    let sql = `INSERT INTO user_logs (sub_expense_category, expense_category,
     user_id, price, store_name) VALUES (?, ?, ?, ?, ?)`;
    

    let parameters = [
        userLog.selectedSubCategory ,
        userLog.category,
        //userLog.revenue_category,
        userLog.userID,
        userLog.price,
        userLog.storeName
    ];

    console.log(userLog, "  DB");
    console.log(parameters, "  DB");
    console.log(sql, "  DB");
    const userLOg= await connection.executeWithParameters(sql, parameters);
}

module.exports = {
   
    createUserLog
};
