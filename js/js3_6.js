/*jshint esversion: 6 */
/* jshint -W097 */
/*jslint devel: true */

'use strict';

let arrRevers = [];
let arrLast = [1, 2, 3, 4, true, "false", 1232, ["a", "r"]];

for (let index = arrLast.length - 1; index >= 0; index--) {
    arrRevers.push(arrLast[index]);
    console.log(arrLast[index]);
}
console.log(arrRevers);