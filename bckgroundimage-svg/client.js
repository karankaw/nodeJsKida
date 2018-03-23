var qrcodeGen = require('./index.js')

var config = {
    url: 'https://www.google.com',
    color: 'green'
}

qrcodeGen.getQRCode({
        url: 'https://www.google.com',
        color: 'green'
    }).then(svg => console.log(svg),
            err => console.log(err))
    .catch(err => {
        throw new Error(err)
    })



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
