function resolved(result) {
  console.log('Resolved');
}

function rejected1(result) {
  console.log("rejected1 "+result);
}

function rejected2(result) {
  console.log("rejected2 "+result);
}

//using node.js native support
var promise1 = Promise.reject(new Error('fail'))
var promise2 = Promise.reject(new Error('fail'))

promise1.then(resolved, rejected1).catch(function(error) {
  console.log(1+error);
});
//Observe the difference in error handlers, see attaching point of handlers
promise2.then(resolved, rejected2);
promise2.catch(function(error) {
  console.log(2+error);
});

