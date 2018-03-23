function toyPromise(marks){
     data = require("fs").readFileSync( __dirname +"/test.csv")
     console.log(data)
    for(i =0; i<999999999;i++){

    }
    if(marks >= 100)
        return Promise.resolve("Toy train set")
    else
        return Promise.reject("No Toy, work harder next time!")
}

/*
toyPromise(100).then((toy) => console.log(toy))
              .catch((err) => console.log(err));
*/

async function canIgetAToy(){

      console.log("1");
      //result = await toyPromise(100); console.log(result)
      toyPromise(100).then((toy) => console.log(toy)).catch((err) => console.log(err));
      console.log("2");
}

canIgetAToy()
