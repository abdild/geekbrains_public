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

// class Hamburger {
//     constructor(size, stuffing, totalPrice=0, totalCal=0) {
//         this.size = size;
//         this.stuffing = stuffing;
//         this.totalPrice = totalPrice;
//         this.totalCal = totalCal;
//     }
//     // addTopping(topping) {    // Добавить добавку }

//     // }
//     // removeTopping(topping) { // Убрать добавку }

//     // }
//     // getToppings(topping) {   // Получить список добавок }

//     // }
//     getSize() {              // Узнать размер гамбургера }
//         let price;
//         let cal;
//         let arrSize = [];
//         // let arrSize = [];
//         this.selectSize = document.querySelector('.select-size');
//         this.selectSize.addEventListener('change', () => {
//             switch (this.selectSize.value) {
//                 case 'small': {
//                     price = 50;
//                     cal = 20;
//                     break;
//                 }
//                 case 'big': {
//                     price = 100;
//                     cal = 40;
//                     break;
//                 }
//                 case 'none': {
//                     price = 0;
//                     cal = 0;
//                     break;
//                 }
//             }
//             // console.log(`Стоимость: ${price} рублей. Калорийность: ${cal} калорий.`)
//             this.price = price;
//             // console.log(this.price);
//             arrSize = [price, cal];
//             console.log(arrSize);
//         });
//     }
//     // getStuffing() {          // Узнать начинку гамбургера }

//     // }
//     calculatePrice() {       // Узнать цену }
//         this.totalPrice = this.getSize();
//         console.log(this.totalPrice);
//     }
//     calculateCalories() {    // Узнать калорийность }
//         console.log(this.totalCal);
//     }
// }

class Hamburger {
    constructor(size, stuffing, totalPrice = 0, totalCal = 0) {
        this.size = size == undefined ? 'two' : size;
        this.stuffing = stuffing;
        this.totalPrice = totalPrice;
        this.totalCal = totalCal;
        this.check = 0;
    }
    // addTopping(topping) {    // Добавить добавку }

    // }
    // removeTopping(topping) { // Убрать добавку }

    // }
    // getToppings(topping) {   // Получить список добавок }

    // }

    increaseCheck() {
        this.check += 1;
    }

    getCheck() {
        return this.check;
    }

    setSize(size) {
        this.size = size;
    }
    getSize() {              // Узнать размер гамбургера }
        return this.size;
        // const sizeChecked = document.getElementsByName('sizeRadio');
        // console.log(sizeChecked);
    
    }
    // getStuffing() {          // Узнать начинку гамбургера }

    // }
    calculatePrice() {       // Узнать цену }

    }
    calculateCalories() {    // Узнать калорийность }

    }
}

const init = () => {
    const hamburgerChecked = new Hamburger();
    // alert(hamburgerChecked.getSize());

    document.querySelector('#select').addEventListener('change', (e) => {
        hamburgerChecked.increaseCheck();
        console.log(e.target.value);
        hamburgerChecked.size = e.target.value;
    });


    document.querySelector('#button1').addEventListener('click', (e) => {
        e.preventDefault();
        console.log(hamburgerChecked);
    });

    // const selectSize = document.querySelector('.select-size');
    // const size = selectSize.addEventListener('change', () => {
    //     switch (selectSize.value) {
    //         case 'small': {
    //             price = 50;
    //             cal = 20;
    //             break;
    //         }
    //         case 'big': {
    //             price = 100;
    //             cal = 40;
    //             break;
    //         }
    //         case 'none': {
    //             price = 0;
    //             cal = 0;
    //             break;
    //         }
    //     }
    //     // console.log(`Стоимость: ${price} рублей. Калорийность: ${cal} калорий.`)
    //     // this.price = price;
    //     // console.log(this.price);
    //     return arrSize = [price, cal];
    //     console.log(arrSize);
    // });

    // console.log(size);

    // var sel = 5;
    // selectSize = document.querySelector('.select-size');
    // let result = selectSize.addEventListener('change', function () { return sel = selectSize.value; console.log(sel); });
    // console.log(result);


    // const size = () => {
    //     selectSize = document.querySelector('.select-size');
    //     selectSize.addEventListener('change', () => {console.log(selectSize.value)});
    // };
    // console.log(size());
    // var size;
    // selectSize = document.querySelector('.select-size');
    // size = selectSize.value;
    // console.log(size);

    //    console.log(document.selectSizeForm.size.value);



    // selectSize.addEventListener('change', function select() {selectSize.value});
    // console.log(size);
    // var n = document.getElementById('selectSize').options.selectedIndex;
    // console.log(n);
    // function findOption(select) {
    //     const option = select.querySelector(`option[value="${select.value}"]`);
    //     console.log(option);
    //     // Действия над option
    //  }


    // const selectSize = document.querySelector('.select-size');
    // console.log(selectSize);
    // let size = selectSize.addEventListener('change', () => {selectSize.value});
    // console.log(size);
    // const hamburger = new Hamburger();
    // hamburger.getSize();
    // hamburger.calculatePrice();
}
window.onload = init;
