console.log(require('./index.js'))
console.log(require('./index.js')(20,3))

const {multiply}= require('./index.js')
console.log(multiply(5,6))
console.log(require('./index.js').multiply(7,7))


//const {subtract}= require('./index.js').subtract
//console.log(subtract(7,6))