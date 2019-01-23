/*jshint esversion: 6 */
/* jshint -W097 */
/*jslint devel: true */

'use strict';


const questions = [
    {question: 'Как правильно закончить пословицу: «Не откладывай на завтра то, что можно…»?\n' +
    'a:сделать сегодня, b: сделать послезавтра, c: сделать через месяц, d:никогда не делать',
    rightAnswer: 'a'},
    {question: 'Что говорит человек, когда замечает нечто необычное?\n' +
    'a: попало в лоб, b: залетело в рот, c: накапало в уши, d: бросилось в глаза',
    rightAnswer: 'd'},
    {question: 'Что помогает туристу ориентироваться в незнакомом городе\n' +
    'a: путепровод, b: путеукладчик, c: путеводитель, d: путеводная звезда',
    rightAnswer: 'c'},
    {question: 'Какой наряд прославил баснописец Крылов?\n' +
    'a: тришкин кафтан, b: ивашкин армяк, c: прошкин зипун, d: машкин сарафан',
    rightAnswer: 'a'},
    {question: 'Как звали старшую сестру императора Петра Первого?\n' +
    'a: Вера, b: Надежда, c: Любовь, d: Софья',
    rightAnswer: 'd'}
];

const wAnswers = ['a', 'b', 'c', 'd'];

const game = {
    wAnswers,
    questions,
    points: 0,
    lvl: 0,
    /**
     * Инициализация нового раунда
     */
    init() {
        this.points = 0;
        this.lvl = 0;
    },
    /**
     * Запрос ответа
     * @param {int} lvl 
     * @returns {string}
     */
    ask (lvl) {
        return prompt(`Вопрос № ${lvl + 1}:\n${this.questions[lvl].question}\nвведите правильный ответ его индексом(a-d)\n"exit" для выхода`);
    },
    /**
     * Запуск цикла с игрой, автоматический перезапуск.
     */
    run () {
        this.init();
        let answer = "";
        while (true){
            answer = this.ask(this.lvl);
            if (this.questions[this.lvl].rightAnswer === answer) {
                this.points++;
                this.lvl++;
            } else if (answer === 'exit') {
                alert('Пока');
                break;
            } else if (!this.wAnswers.includes(answer)) {
                alert('Некрректный ответ');
                continue;
            } else {
                this.lvl++;
            }
            if (this.lvl === 5) {
                alert(`Вы закончили игру со счётом ${this.points}/5\nИгра перезапуститься автоматически`);
                this.init();
            }
        }
    }
};


// запуск игры
game.run();


