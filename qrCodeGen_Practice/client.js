var qrcodeGen = require('./index.js')

try{
promise1 = qrcodeGen.getQRCode({
        url: 'https://www.yahoo.com',
        color: 'green'
    })
promise1.then(svg => {
	console.log("Yahoo")
	console.log(svg)
	},


            err => {
				console.log("Yahoo Error")
				console.log(err)})
    .catch(err => console.log(err))




/*
//cyan svg can't be decoded as white background and cyan have less contrast difference

qrcodeGen.getQRCode({
    url: 'https://www.google.com',
    color: 'cyan'
}).then(svg => console.log(svg),
        err => throw new Error(err))
  .catch(err => console.log(err))
*/


/*
//Wrong Color code will result in black Font color of image, Fallback Mechanism

qrcodeGen.getQRCode({
    url: 'https://www.google.com',
    color: 'cyan'
}).then(svg => console.log(svg),
        err => throw new Error(err))
  .catch(err => console.log(err))
*/


/*
//No Color code passed,then Fallback Mechanism of black font color gets activated

qrcodeGen.getQRCode({
    url: 'https://www.google.com'
}).then(svg => console.log(svg),
            err => console.log(err))
    .catch(err => console.log(err))
*/


///*
//No Arg Passed
console.log('--------------------------------------------')
promise4 = qrcodeGen.getQRCode()

promise4.then(svg => {
	console.log("Google")
	console.log(svg)
	},


            err => {
				console.log("Google Error")
				console.log(err)
				throw err
			})
    .catch(err => console.log(err))
}catch(err){
	console.log(err)
}
//*/