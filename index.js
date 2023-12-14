const information = require("./information");
const cowsay = require("cowsay");

console.log(
    cowsay.say({
        text: `Hello, I am ${information.name} and my campus is on ${information.campus}!`,
        e: "oO",
        T: "U"
    })
);