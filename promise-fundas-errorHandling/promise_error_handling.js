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

/*
For exception handling, go with 
promise(resolved, rejected) thing 
or 
promise(resolved).catch(); 
for non-chained Promise, both are same, its like if a promise is not handled it will go next in chain
and adding a catch should always be done at end for chained promises.
*/

