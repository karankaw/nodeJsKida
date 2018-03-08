var QRCode = require('qrcode')

/*
 var opts = {
        errorCorrectionLevel: 'H',
        width: 200,
        type: 'svg',
        color: {
            dark: '#000000', // Foreground
            light: '#FFFFFF' // Background
        }
    }

QRCode.toString('http://www.google.com', opts, function (err, string) {
  if (err) throw err
  console.log(string)
})



QRCode.toString('http://www.google.com', opts, function (err, string) {
  if (err) throw err
  console.log(string)
})
*/



var svgFuncHolder = require('./svg')


svgFuncHolder.svg('https://www.google.com').then(svg => 
{
	console.log("GOOOGLE")
console.log(svg)
	

}
,
            err => console.log(err))
    .catch(err => {
        throw new Error(err)
    })
console.log("--------------------")	
svgFuncHolder.svg('https://www.yahoo.com').then(svg => {
	console.log("YAHOO")
	console.log(svg)
	},
            err => {
				console.log("HUAAA")
				console.log(err)})
    .catch(err => {
		console.log("BURRRA")
        throw new Error(err)
    })