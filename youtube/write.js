var fs = require('fs');

var events = require('events');
var eventEmitter = new events.EventEmitter();

function fireAlarm() {
    console.log('beep beep!');
}
eventEmitter.on('Fire', fireAlarm);
eventEmitter.addListener('Fire', function(){
	console.log("Another Event Handler");
});
eventEmitter.emit('Fire');
console.log(eventEmitter.listeners('Fire'));

if (!fs.existsSync('./subFolder')) {
    fs.mkdirSync("./subFolder");
}
console.log('__dirname ' + __dirname);
fs.writeFile(__dirname + "/subFolder/ok.txt", "Hi, I met my fate!", "utf8", function(err, success ){
	console.log('Error occurred : '+err)
	console.log(success);
});

/*fs.writeFile(__dirname + "/subFolder1/ok.txt", "Hi, I met my fate!", "utf8", function(err, success ){
	console.log('Error occurred : '+err)
	console.log(success);
});
*/
