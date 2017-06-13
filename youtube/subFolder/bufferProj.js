let fs = require('fs');
let callback = function (err) {
    if (err) {
        console.log("Error occurred!");
    }
    console.log("File written sucessfully!");
}


var pathStr = require('path').normalize("../subFolder/message.txt") 
var pathObj = require('path')  
console.log(typeof pathStr)
console.log(typeof pathObj)

const base64buf = Buffer.from('YWJj', 'base64');
console.log("****** ", base64buf);

// fs.writeFile("message.txt", "YWJj", "base64", callback);
fs.writeFile("message.txt", base64buf, callback); // Same as line above!

fs.readFile(require('path').normalize("../subFolder/message.txt"),"base64", function(err, data){
	console.log(data);//Prints Byte in Hexadecimal Format
	console.log(data.toString("utf8"));
    console.log(data.toString("base64"));
});

fs.readFile(require('path').normalize("../subFolder/message.txt"), function(err, data){
	console.log(data);//Prints Byte in Hexadecimal Format
	console.log(data.toString("utf8"));
    console.log(data.toString("base64"));
});

fs.readFile(require('path').normalize("../subFolder/message.txt"),"utf8", function(err, data){
	console.log(data);//Prints Byte in Hexadecimal Format
	console.log(data.toString("utf8"));
    console.log(data.toString("base64"));
});

// fs.writeFileSync(path, data, options);
// fs.WriteStream(path, options);
// fs.FileWriteStream(path, options);
// fs.createWriteStream(path, options);



// fs.open(path, flags, mode, callback_);