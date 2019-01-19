/*jshint esversion: 6 */
/* jshint -W097 */
/*jslint devel: true */

'use strict';



const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
  ];

let max = 0;
let summ;
let indexDZ;
let arrValue;
let value;


for (value of arr) {
    summ = 0;
    for (arrValue of value) {
        summ = summ + arrValue;
    }
    if (summ > max) {
        max = summ;
        indexDZ = arr.indexOf(value);
    }
}

console.log(indexDZ);