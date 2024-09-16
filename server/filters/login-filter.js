const  expressjwt = require("express-jwt"); 
const config = require("../config/config.json");
const { secret } = config;

function loginFilter() {
    return expressjwt({ secret, algorithms: ["HS256"] }).unless({
        path: [
            { url: "/users/register", methods: ["POST"] },
            { url: "/users/login", methods: ["POST"] }
        ]
    });
}

module.exports = loginFilter;

