/*jshint esversion: 6 */
/* jshint -W097 */
/* jshint -W117 */
/*jslint devel: true */

'use strict';

const chess = {
    figures: [
        {name: 'p', color: 'w', pos: 'A2', simbol: '&#9817;'},
        {name: 'p', color: 'w', pos: 'B2', simbol: '&#9817;'},
        {name: 'p', color: 'w', pos: 'C2', simbol: '&#9817;'},
        {name: 'p', color: 'w', pos: 'D2', simbol: '&#9817;'},
        {name: 'p', color: 'w', pos: 'E2', simbol: '&#9817;'},
        {name: 'p', color: 'w', pos: 'F2', simbol: '&#9817;'},
        {name: 'p', color: 'w', pos: 'G2', simbol: '&#9817;'},
        {name: 'p', color: 'w', pos: 'H2', simbol: '&#9817;'},
        {name: 'r', color: 'w', pos: 'A1', simbol: '&#9814;'},
        {name: 'kn', color: 'w', pos: 'B1', simbol: '&#9816;'},
        {name: 'b', color: 'w', pos: 'C1', simbol: '&#9815;'},
        {name: 'q', color: 'w', pos: 'D1', simbol: '&#9813;'},
        {name: 'ki', color: 'w', pos: 'E1', simbol: '&#9812;'},
        {name: 'b', color: 'w', pos: 'F1', simbol: '&#9815;'},
        {name: 'kn', color: 'w', pos: 'G1', simbol: '&#9816;'},
        {name: 'r', color: 'w', pos: 'H1', simbol: '&#9814;'},
        {name: 'p', color: 'b', pos: 'A7', simbol: '&#9823;'},
        {name: 'p', color: 'b', pos: 'B7', simbol: '&#9823;'},
        {name: 'p', color: 'b', pos: 'C7', simbol: '&#9823;'},
        {name: 'p', color: 'b', pos: 'D7', simbol: '&#9823;'},
        {name: 'p', color: 'b', pos: 'E7', simbol: '&#9823;'},
        {name: 'p', color: 'b', pos: 'F7', simbol: '&#9823;'},
        {name: 'p', color: 'b', pos: 'G7', simbol: '&#9823;'},
        {name: 'p', color: 'b', pos: 'H7', simbol: '&#9823;'},
        {name: 'r', color: 'b', pos: 'A8', simbol: '&#9820;'},
        {name: 'kn', color: 'b', pos: 'B8', simbol: '&#9822;'},
        {name: 'b', color: 'b', pos: 'C8', simbol: '&#9821;'},
        {name: 'q', color: 'b', pos: 'D8', simbol: '&#9819;'},
        {name: 'ki', color: 'b', pos: 'E8', simbol: '&#9818;'},
        {name: 'b', color: 'b', pos: 'F8', simbol: '&#9821;'},
        {name: 'kn', color: 'b', pos: 'G8', simbol: '&#9822;'},
        {name: 'r', color: 'b', pos: 'H8', simbol: '&#9820;'},
    ]
};

const deskElement = document.getElementById('desk');
let indexY = 0;
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
for (let index = 0; index < 100; index++) {
    let deskInElement = document.createElement('div');
    deskInElement.setAttribute('class', 'deskBlock');
    if (index % 10 == 0 && index > 9) {
        indexY ++;
    }
    if (index > 9 && index % 10 != 0 && index % 10 != 9 && index < 90) {
        if (indexY % 2 != 0 && index % 2 == 0) {
            deskInElement.classList.toggle('black');
        } else if (indexY % 2 == 0 && index % 2 != 0) {
            deskInElement.classList.toggle('black');
        }
    }
    if (index > 0 && index < 9) {
        deskInElement.innerText = letters[index - 1];
        deskInElement.classList.toggle('text');
    } else if (index > 90 && index < 99){
        deskInElement.innerText = letters[index - 91];
        deskInElement.classList.toggle('text');
    }
    if (indexY > 0 && indexY < 9) {
        if (index % 10 == 0 || index % 10 == 9) {
            deskInElement.innerText = 9 - indexY;
            deskInElement.classList.toggle('text');
        }
    }
    if (index > 9 && index < 90 && index % 10 != 0 && index % 10 != 9) {
        let elemName = letters[index % 10 - 1] + (9 - indexY);
        deskInElement.setAttribute('name', elemName);
    }
    if (deskInElement.getAttribute('name')) {
        for (let index = 0; index < chess.figures.length; index++) {
            if (deskInElement.getAttribute('name') == chess.figures[index].pos) {
                deskInElement.innerHTML = chess.figures[index].simbol;
                deskInElement.classList.toggle('textFigure');
            }
        }
    }
    deskElement.appendChild(deskInElement);
}


console.log(deskElement);