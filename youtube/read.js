

let fs = require('fs');
fs.readFile("subFolder/ok.txt", "utf8", function(error, data) {
    if (error) {
        console.log("Reading Error : "+ error.code);
    } else {
        console.log(data);
    }
});

if (fs.existsSync("./subFolder/ok.txt")) {
    var content = fs.readFileSync("./subFolder/ok.txt", 'utf8');
    console.log(content);

    fs.unlinkSync("./subFolder/ok.txt", function() {
    console.log('delete kiya maine');
    fs.rmdirSync("./subFolder");
    console.log('Deleted subFolder');
});
}


