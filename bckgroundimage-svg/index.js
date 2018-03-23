"use strict";

const QRCode = require('qrcode')
const util = require('util')
const promiseSVGStr = util.promisify(QRCode.toString);

//NOTES: Removed since scalar is being used to convert values
//const toHex = require('colornames')


function getQRCode(config) {
    var opts = {
        errorCorrectionLevel: 'H',
		/*NOTES
		    1. Missing option for size {height or width}
		    2. Since only width is available I changed the API from {height or width}
		       to just a size: Int for the "Image width (px)" option
		*/
        width: config.size || 200,
        type: 'svg',

		/*NOTES
			1. Added scale option
		*/
        scale: config.scale || 1,
        color: {
			/*NOTES
                1. RGBA + HEX are supported.
                2. Added a scalar to schema QRColorCode to convert rgb values to hex.
                3. Added background option for the "color.light" for the image
            */
            dark: config.color || '#000000', // Foreground
            light: config.background || '#FFFFFF' // Background
        }
    }

    /*NOTES
        if (config.color) {
            //Invalid Color produces undefined and qrcode module falls back to Black color
            opts.color.dark = toHex(config.color)
        }
    */

    return promiseSVGStr(config.url, opts)

}


/*NOTES
    From details of task:
        1. Create independent package that exports a single function.

    Perhaps I should have phrased it different. Would this have made more sense?
        1. Create node package that exports package/main as function.

    Your export:
    module.exports = {
        getQRCode: getQRCode
    }
*/
module.exports = getQRCode



/**
 * References for documentation
 *
 * https://www.npmjs.com/package/qrcode#options-9
 * https://www.npmjs.com/package/colornames
 */
