'use strict'

//exports are just convenient shortcuts which have to be assigned to module.exports
//exports don't return anything
//exports are used to add methods, Check below
//module.exports does return - It can be pointed to a custom 'DEFAULT' function or an object
exports = module.exports =  function add(a, b) {
    return a+b
}
//exports = module.exports =  {}

exports.multiply = (a,b) => {
    return a*b
}

function subtract(a,b){
    return a-b
}

exports.subtract = subtract

/*
* References
* https://medium.freecodecamp.org/node-js-module-exports-vs-exports-ec7e254d63ac
*
* It uses Node 'CommonJs' way
*
* All the methods are added to custom Function Object, i.e the Whole trick!
*
*/