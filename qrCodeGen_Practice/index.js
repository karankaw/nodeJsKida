"use strict";

const QRCode = require('qrcode')
const util = require('util')
const promiseSVGStr = util.promisify(QRCode.toString);
const toHex = require('colornames')


function getQRCode(config) {
	
	
	if(config === undefined){
		throw new Error('Arguments Missing')
	}
	
	
	if(config.url === undefined){
		throw new Error('Invalid Arguments')
	}
	
	
    var opts = {
        errorCorrectionLevel: 'H',
        width: 200,
        type: 'svg',
        color: {
            dark: '#000000', // Foreground
            light: '#FFFFFF' // Background
        }
    }

    if (config.color) {
        //Invalid Color produces undefined and qrcode module falls back to Black color
        opts.color.dark = toHex(config.color)
    }
	console.log('===================== '+config.ur)
    return promiseSVGStr(config.url, opts)

/*
    return new Promise((resolve, reject) => {
        reject(new Error("Invalid Data"))
    })
*/

 
  /*  return new Promise((resolve, reject) => {
        throw "Error during Async operation"
    })*/


}

module.exports = {
    getQRCode: getQRCode
}


/**
 * References for documentation
 *
 * https://www.npmjs.com/package/qrcode#options-9
 * https://www.npmjs.com/package/colornames
 */
