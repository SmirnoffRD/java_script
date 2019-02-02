/*jshint esversion: 6 */
/* jshint -W097 */
/* jshint -W117 */
/*jslint devel: true */

'use strict';

const products = {
    dog: {
        cost: 1999,
        imgSrc: 'images/gallery/dog.jpg',
    },
    cat: {
        cost: 999,
        imgSrc: 'images/gallery/cat.jpg',
    },
    snake: {
        cost: 2999,
        imgSrc: 'images/gallery/snake.jpg',
    },
};


const basket = {
    settings: {
        basket_class: 'basket_block',
        basket_product: 'basket_product',
        priceBlock: 'price_and_count',
        listOfProducts: products,
        summ: 0,
    },
    init(userSettings = {}) {

        Object.assign(this.settings, userSettings);
        
        const basketObj = this.getBasketObj();

        this.renderBasket(basketObj);
    },
    getBasketObj() {
        return document.querySelector(`.${this.settings.basket_class}`);
    },
    /**
     * 
     * @param {HTMLobject} basketObj 
     */
    renderBasket(basketObj) {
        for (const product in this.settings.listOfProducts) {
            const productBlock = document.createElement('DIV');
            productBlock.setAttribute('class', `${this.settings.basket_product}`);
            basketObj.appendChild(this.renderProduct(product, productBlock));
        }
        console.log(document.querySelector(`.${this.settings.priceBlock}`));
        document.querySelector(`.${this.settings.priceBlock}`).innerText = `Всего = ${this.settings.summ}`;
    },
    renderProduct(productObj, productBlock) {
        const img = document.createElement('IMG');
        const text = document.createElement('DIV');
        this.buttonRender(productObj, productBlock);
        

        img.src = this.settings.listOfProducts[productObj].imgSrc;
        text.innerText = this.settings.listOfProducts[productObj].cost;

        productBlock.appendChild(img);
        productBlock.appendChild(text);
        return productBlock;
    },
    buttonRender(productObj, productBlock) {
        const button = document.createElement('DIV');
        button.innerText = 'click sTo Add';
        button.addEventListener('click', (event) => {
            this.settings.summ += this.settings.listOfProducts[productObj].cost;
            this.basketSummRender();
        });
        productBlock.appendChild(button);
    },
    basketSummRender() {
        const summ = document.querySelector(`.${this.settings.priceBlock}`);
        summ.innerText = `Всего = ${this.settings.summ}`;
    }
};

basket.init();