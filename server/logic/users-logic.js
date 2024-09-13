let usersDal = require("../dal/users-dal");
let validation=require("./validation");
const bcrypt = require('bcrypt');

async function addUser(userRegister) {
    console.log(userRegister);
     validation.isAlreadyExists(userRegister.email);
    const hashedPassword = await hashPassword(userRegister.password);
    userRegister.password = hashedPassword; 

    validateUser(userRegister);
    await usersDal.addUser(userRegister);
}

const hashPassword = async (password) => {
    const saltRounds = 10; 
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (err) {
        console.error('Error hashing password:', err);
        throw err;
    }
};


function validateUser(userRegister) {
   
    if (!validation.validateEmail(userRegister.email)) {
        console.log("The email is not valid:", userRegister.email);
        throw new Error('Invalid email address');
    }
}
  

module.exports = {
    addUser,
};
