// 3. * Некая сеть фастфуда предлагает несколько видов гамбургеров:
// ### Маленький(50 рублей, 20 калорий).
// ### Большой(100 рублей, 40 калорий).
// ### Гамбургер может быть с одним из нескольких видов начинок(обязательно):
// ### С сыром(+10 рублей, +20 калорий).
// ### С салатом(+20 рублей, +5 калорий).
// ### С картофелем(+15 рублей, +10 калорий).
// ### Дополнительно гамбургер можно посыпать приправой(+15 рублей, +0 калорий) и полить майонезом(+20 рублей, +5 калорий).
// ### Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
// Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.

class Hamburger {
    constructor(size = 'small', stuffing = 'cheese', components = [0, 0]) {
        this.size = size;
        this.stuffing = stuffing;
        this.components = components;
    }

    getSize() {
        document.querySelector('.select-size').addEventListener('change', (event) => {
            this.size = event.target.value;
        })
    }

    getStuffing() {
        document.querySelector('.stuffing').addEventListener('change', (event) => {
            this.stuffing = event.target.value;
        })
    }

    getComponents() {
        document.querySelector('.components').addEventListener('change', (event) => {
            if (event.target.checked && event.target.id == 'spice') {
                this.components[0] = 1;
            }
            if (event.target.checked && event.target.id == 'sauce') {
                this.components[1] = 1;
            }
            if (!event.target.checked && event.target.id == 'spice') {
                this.components[0] = 0;
            }
            if (!event.target.checked && event.target.id == 'sauce') {
                this.components[1] = 0;
            }
            console.log(this.components);
        })
    }

    finalCalc() {
        this.getSize();
        this.getStuffing();
        this.getComponents();

        let totalPrice = 0;
        let totalCal = 0;
        let order = {
            price: [],
            cal: []
        };

        switch (this.size) {
            case 'small': {
                order.price[0] = 50;
                order.cal[0] = 20;
                break;
            };
            case 'big': {
                order.price[0] = 100;
                order.cal[0] = 40;
                break;
            }
        }
        switch (this.stuffing) {
            case 'cheese': {
                order.price[1] = 10;
                order.cal[1] = 20;
                break;
            };
            case 'salad': {
                order.price[1] = 20;
                order.cal[1] = 5;
                break;
            }
            case 'potato': {
                order.price[1] = 15;
                order.cal[1] = 10;
                break;
            }
        }
        if (this.components[0] == 0) {
            order.price[2] = 0;
            order.cal[2] = 0;
        } else if (this.components[0] == 1) {
            order.price[2] = 15;
            order.cal[2] = 0;
        }

        if (this.components[1] == 0) {
            order.price[3] = 0;
            order.cal[3] = 0;
        } else if (this.components[1] == 1) {
            order.price[3] = 20;
            order.cal[3] = 5;
        }

        let calcPrice = order.price.reduce((previousValue, currentValue, index, array) => {
            return previousValue + currentValue;
        });
        let calcCal = order.cal.reduce((previousValue, currentValue, index, array) => {
            return previousValue + currentValue;
        });

        console.log(order);
        console.log(calcPrice);

        document.querySelector('.result').innerHTML = `
        Стоимость заказа составляет: ${calcPrice} рублей
        <br>
        Калорийность заказа составляет: ${calcCal} калорий
        `;
    }
}


const init = () => {
    const hamburgerChecked = new Hamburger();

    document.getElementById('calculate').addEventListener('click', (event) => {
        event.preventDefault();
        console.log(hamburgerChecked);
        hamburgerChecked.finalCalc();
    })
}
window.onload = init;