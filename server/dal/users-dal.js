const connection = require('./connection-wrapper');



async function addUser (userRegister){
    let sql1 =`insert into user(email,password)` +
    `values(?,?)`;
   console.log(sql1)
    let parameters1 =[userRegister.email, userRegister.password];

    let sql2 =`insert into client_users(name, phone)` +
    `values(?,?)`;
   console.log(sql2)
    let parameters2 =[userRegister.name, userRegister.phone];
    
    console.log(parameters)
    await connection.executeWithParameters(sql2, parameters2);
}



module.exports = {
    addUser
};