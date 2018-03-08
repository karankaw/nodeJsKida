var QRCode = require('qrcode')
const util = require('util')
const promiseSVGStr = util.promisify(QRCode.toString);
	
function svg(data){
	return promiseSVGStr(data)
}

module.exports = {
	svg
}