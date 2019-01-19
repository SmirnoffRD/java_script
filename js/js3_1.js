/*jshint esversion: 6 */
/* jshint -W097 */
/*jslint devel: true */

'use strict';

let i = 0;

do {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 == 0) {
        console.log(`${i} - это чётное число`);
    } else {
        console.log(`${i} - это нечётное число`);
    }
    i++;
} while (i < 11);