/*jshint esversion: 6 */
/* jshint -W097 */
/*jslint devel: true */

'use strict';

// объяснить выполнение кода

let a = 1, b = 1, c, d;     // происходит объявление переменных a, b, c и присваивание значения переменным a и b

c = ++a;                    // присваивание значения переменной c значения переменной a увеличенной на единицу
alert(c);                   // 2

d = b++;                    // значение переменной b увеличивается после присванивания
alert(d);                   // 1

c = 2 + (++a);                // справа налево, ++, + и после =
alert(c);                   // 5

d = 2 + b++;                // сначала + и =, потом ++ 
alert(d);                   // 4

alert(a);                   // 3, дважды ++
alert(b);                   // 3, дважды ++

// объяснить выполнение кода и последовательность действий

let f = 2;
let x = 1 + (f *= 2);       // присваение f значения f умноженного на 2, затем + и =

// двум переменным задать два произвольных целочисленных значения и написать скрипт для работы с ними

let aa = 4;
let bb = -2;

if (aa >= 0 && bb >= 0) {
    console.log(aa - bb);
} else if (aa < 0 && bb < 0) {
    console.log(aa * bb);
} else if (aa < 0 && bb >= 0 || aa >= 0 && bb < 0) {
    console.log(aa+ bb);
}

// реализовать основные 4 арифметические операции (+, -, /, *) в виде функций

/**
 * складывает две переменных.
 * @param {number} x первая переменная
 * @param {number} y вторая переменная
 * @returns {number} возвращает сумму
 */

function summ(x, y) {
    return x + y;
}

/**
 * складывает две переменных.
 * @param {number} x первая переменная
 * @param {number} y вторая переменная
 * @returns {number} возвращает разницу
 */

function subtraction(x, y) {
    return x - y;
}

/**
 * складывает две переменных.
 * @param {number} x первая переменная
 * @param {number} y вторая переменная
 * @returns {number} возвращает результат умножения
 */

function  multiplication(x, y) {
    return x * y;
}

/**
 * складывает две переменных.
 * @param {number} x первая переменная
 * @param {number} y вторая переменная
 * @returns {number} возвращает результат деления
 */

function devide(x, y) {
    return x / y;
}

// реализовать функцию с тремя параметрами

/**
 * простой калькулятор для двух переменных
 * @param {number} arg1 первая переменная
 * @param {number} arg2 вторая переменная
 * @param {string} operation операнд для вычисления
 * @returns возвращает результат математической операции над переменными
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return summ(arg1, arg2);
        case '-':
            return subtraction(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/':
            return devide(arg1, arg2);
        default:
            alert('некорректный операнд');
            break;
    }
}

alert(mathOperation(prompt('введите х'), prompt('введите y'), prompt('введите операнд')));

// вывод сообщения о вводе денег

/**
 * выводит в лог консоли выражение с правильным окончанием слова рубль в зависимости от введённой суммы
 * @param {*} money сумма денег введённая в аппарат
 */

function terminalAnswer(money) {
    let endsWith = money % 10;
    if (endsWith > 1 && endsWith < 5) {
        console.log(`Ваша сумма в ${money} рубля успешно зачислена.`);
    } else if (endsWith == 1) {
        console.log(`Ваша сумма в ${money} рубль успешно зачислена.`);
    } else if (endsWith > 4 || endsWith == 0) {
        console.log(`Ваша сумма в ${money} рублей успешно зачислена.`);
    }
}

terminalAnswer(prompt('Введите сумму'));