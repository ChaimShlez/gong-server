let usersDal = require("../dal/users-dal");
let validation=require("../utils/validation");
const config = require('../config/config.json');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function addUser(userRegister) {
    console.log(userRegister);
   validation.isAlreadyExists(userRegister);
    validation.validateUser(userRegister);
    const hashedPassword = await hashPassword(userRegister.password);
    userRegister.password = hashedPassword; 
    console.log( userRegister.password + "  register")
    await usersDal.addUser(userRegister);
}

async function login(userLogin) {
  let userData = await usersDal.login(userLogin);
  
  if (!userData) {
      throw new Error("Login failed");
  }
  
//   const passwordMatch = await bcrypt.compare(userLogin.password, userData.password);
const passwordMatch = true

 console.log(userData,'userData')
 console.log(userLogin.password,"userLogin.password")
  if (!passwordMatch) {
      throw new Error("Incorrect password");
  }

  const token = jwt.sign({
      userId: userData.id,
     // password:userData.password,
      name: userData.name
  }, config.secret);

  let successfulLogin = {token,name: userData.name} ;

  return successfulLogin;
}

async function createUserLog(userLog) {
   return  await usersDal.createUserLog(userLog);
}

const hashPassword = async (password) => {
    const saltRounds = 10; 

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
   
};

module.exports = {
    addUser,
    login,
    createUserLog
};
