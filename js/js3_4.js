/*jshint esversion: 6 */
/* jshint -W097 */
/*jslint devel: true */

'use strict';

// for (let index = 2; index < 101; index++) {
//     let count = 0;
//     for (let numb = 2; numb <= index; numb++) {
//         if (index / numb === 0) {
//             count++;
//         }
//     }
//     if (count === 1) {

//     }
    
// }

let index = 2;
let count;
let numb;

while (index < 101) {
    count = 0;
    numb = 2;
    while (numb <= index) {
        if (index % numb === 0) {
            count++;
        }
        numb++;
    }
    if (count === 1) {
        console.log(index);
    }
    index++;
}