var rp = require('request-promise-native');

function wrapper() {
	//throw Error("Pehlaaaaaaaa")
	return rp('http://www.google.c');
}
wrapper().then(function (htmlString) {
	console.log(htmlString)
}, function (error1) {
	console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;" + error1)
		//throw new Error('hmm')
}).catch(function (err) {
	console.log("*********************************************************************")
	console.log(err)
	console.log("----------------------------------------------------------------------")
});