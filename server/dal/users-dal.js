const connection = require('./connection-wrapper');



async function addUser(userRegister) {
    // Insert into client_users table
    let sql2 = `insert into client_users(name, phone) values(?,?)`;
   // console.log(sql2);
    let parameters2 = [userRegister.name, userRegister.phone];
   // console.log(parameters2);
    await connection.executeWithParameters(sql2, parameters2);

    // Get the client_user_id from the client_users table
    let userId = await getId(userRegister);

    if (userId === null) {
        throw new Error('Failed to retrieve user ID after inserting into client_users');
    }

    // Insert into user table with the retrieved client_user_id
    let sql1 = `insert into user(email,password,client_user_id) values(?,?,?)`;
   console.log(userRegister.password + "  DB");
    let parameters1 = [userRegister.email, userRegister.password, userId];
    await connection.executeWithParameters(sql1, parameters1);
}

async function getId(userRegister) {
    let sql = `SELECT id FROM client_users WHERE phone = ?`;
    let parameters = [userRegister.phone];
   
    let userData = await connection.executeWithParameters(sql, parameters);   
    
    if (!userData || userData.length === 0) {
        return null;
    }

    return userData[0].id;
}

async function login(user) {
    let sql = `
        SELECT u.id , u.password , c.name 
        FROM user u 
        JOIN client_users c  ON c.id = u.client_user_id
        WHERE u.email = ? `;
    
    let parameters = [user.email];
    
    let [userData] = await connection.executeWithParameters(sql, parameters);   
   
    if (!userData) {
        return null;
    }

    return userData;
}
async function isAlreadyExist(userRegister) {
    console.log(userRegister.email);
    const sql = `SELECT id FROM user WHERE email = ?`;
    let parameters = [userRegister.email];

    let [id] = await connection.executeWithParameters(sql, parameters);

    return id.length > 0; // Return true if email exists, false otherwise
}

module.exports = {
    addUser,
    login,
    isAlreadyExist
};
