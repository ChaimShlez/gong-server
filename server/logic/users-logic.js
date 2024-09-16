let usersDal = require("../dal/users-dal");
let validation=require("../utils/validation");
const config = require('../config/config.json');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function addUser(userRegister) {
    console.log(userRegister);
  //   validation.isAlreadyExists(userRegister);
    const hashedPassword = await hashPassword(userRegister.password);
    userRegister.password = hashedPassword; 
    console.log( userRegister.password + "  register")

    validateUser(userRegister);
    await usersDal.addUser(userRegister);
}


async function login(userLogin) {
  // Retrieve user data from the database using the email/username
  let userData = await usersDal.login(userLogin);
  
  if (!userData) {
      throw new Error("Login failed");
  }

  
  const passwordMatch = await bcrypt.compare(userLogin.password, userData.password);
  
  
  if (!passwordMatch) {
      throw new Error("Incorrect password");
  }

  const token = jwt.sign({
      userId: userData.id,
     // password:userData.password,
      name: userData.name
  }, config.secret);

  let successfulLogin = { token };
  return successfulLogin;
}


const hashPassword = async (password) => {
    const saltRounds = 10; 

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
   
};


function validateUser(userRegister) {
   
    // if (password.length < 5) {
    //     throw new Error("Password is too short");
    // }
    
    // const hasUppercaseOrSpecial = /[A-Z!@#$%^&*(),.?":{}|<>]/.test(password);
    // if (!hasUppercaseOrSpecial) {
    //     throw new Error("Password must contain at least one uppercase letter or special character");
    // }
}
  

module.exports = {
    addUser,
    login
};
