'use strict';
var undeclaredVariable = 20;
// console.log(undeclaredVariable);

try {
    if (undeclaredVariable1) {}
} catch (exception) {
    console.log(exception.message);
    console.log(exception.name);
} finally {
    console.log('Inside Finally block');
}




