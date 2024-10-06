const connection = require('./connection-wrapper');



async function addUser(userRegister) {
    // Insert into client_users table
    let sql2 = `insert into client_users(name, phone) values(?,?)`;
   // console.log(sql2);
    let parameters2 = [userRegister.name, userRegister.phone];
   // console.log(parameters2);
   const id = await connection.executeWithParameters(sql2, parameters2);
        console.log(id)
    // Get the client_user_id from the client_users table
   

    

    // Insert into user table with the retrieved client_user_id
    let sql1 = `insert into user(email,password,client_user_id) values(?,?,?)`;
   console.log(userRegister.password + "  DB");
    let parameters1 = [userRegister.email, userRegister.password, id.insertId];
    await connection.executeWithParameters(sql1, parameters1);
}



async function login(user) {
    let sql = `
        SELECT u.id , u.password , c.name 
        FROM user u 
        JOIN client_users c  ON c.id = u.client_user_id
        WHERE u.email = ? `;
    
    let parameters = [user.email];
   
    let [userData] = await connection.executeWithParameters(sql, parameters);   
    console.log(userData)
    if (!userData) {
        return null;
    }

    return userData;
}
async function isAlreadyExist(userRegister) {
    console.log(userRegister.email);
    const sql = `SELECT id FROM user WHERE email = ?`;
    let parameters = [userRegister.email];

    let id = await connection.executeWithParameters(sql, parameters);
   if(id.length > 0){
    return true;
   }
    return false; // Return true if email exists, false otherwise
}
async function createUserLog(userLog) {
    let sql = `INSERT INTO user_logs (sub_expense_category, expense_category,
    revenue_category, user_id, price, store_name) VALUES (?, ?, ?, ?, ?, ?)`;
    
    // Replace empty strings with null
    let parameters = [
        userLog.sub_expense_category ,
        userLog.expense_category,
        userLog.revenue_category,
        userLog.user_id,
        userLog.price,
        userLog.store_name
    ];

    console.log(parameters, "  DB");
    
    return await connection.executeWithParameters(sql, parameters);
}



module.exports = {
    addUser,
    login,
    createUserLog,
    isAlreadyExist
};
