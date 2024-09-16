const validator = require('validator');
let usersDal = require("../dal/users-dal");


function validateEmail(email) {
    if (!email) {
        throw new Error( "Email is empty")
    }
    
    return validator.isEmail(email);
}

function validatePassword(password) {
    if (password.length < 5) {
        throw new Error("Password is too short");
    }
    
    const hasUppercaseOrSpecial = /[A-Z!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasUppercaseOrSpecial) {
        throw new Error("Password must contain at least one uppercase letter or special character");
    }
    
    return true;
}

async function isAlreadyExists(userRegister) {
    if(await usersDal.isAlreadyExist(userRegister)) {
        throw new Error("Email already exists");
    }
    return true;
}

module.exports = {
    validateEmail,
    validatePassword,
    isAlreadyExists
};