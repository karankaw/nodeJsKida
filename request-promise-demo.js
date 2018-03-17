var rp = require('request-promise');
rp('http://www.google.c').then(function (htmlString) {
	console.log(htmlString)
}, function (error1) {
	console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;" + error1)
		//throw new Error('hmm')
}).catch(function (err) {
	console.log("*********************************************************************")
	console.log(err)
	console.log("----------------------------------------------------------------------")
});