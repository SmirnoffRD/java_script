/*jshint esversion: 6 */
/* jshint -W097 */
/*jslint devel: true */

'use strict';

let objNumb = {};

let numberForObj = prompt('Введите число, максимум трёхзначное');

if (numberForObj >= 0 && numberForObj % 1 === 0 && numberForObj < 1000) {
    objNumb['firstDigit'] = numberForObj[0];
    if (numberForObj[1] === undefined) {
        objNumb['secondDigit'] = 0;
    } else {
        objNumb['secondDigit'] = numberForObj[1];
    }
    if (numberForObj[2] === undefined) {
        objNumb['thirdDigit'] = 0;
    } else {
        objNumb['thirdDigit'] = numberForObj[2];
    }
    console.log(objNumb);
} else {
    console.log(objNumb);
}

