// 1. Добавьте в соответствующие классы методы добавления товара в корзину,
// удаления товара из корзины и получения списка товаров корзины
// Добавить кнопку "Добавить в корзину" для товаров из каталога,
// чтобы при нажатии ваш товар попадал в корзину.

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
    constructor(title = "Неизвестный товар", price, id, img = "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png") {
        this.title = title,
            this.price = price,
            this.id = id,
            this.img = img
    }

    checkPrice = function (price) {
        return ((price === 0 || price === undefined) ? "Товар закончился" : price);
    };

    renderItem() {
        return `
            <div class="goods-item">
                <h3 class="title">${this.title}</h3>
                <img src="${this.img}" alt=""${this.title}>
                <p>Цена: ${this.checkPrice(this.price)}</p>
                <button class="add-button" type="button" id="${this.id}">В корзину</button>
            </div>
        `
    };
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    async fetchGoods() {
        const response = await fetch(`${API_URL}/catalogData.json`);
        const data = await response.json();
        this.goods = data;
        console.log(this.goods);
    }

    renderList() {
        let listGoods = '';

        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price, good.id_product, good.img);
            listGoods += goodItem.renderItem();
        })

        document.querySelector('.goods-list').innerHTML = listGoods;
    }

    countCostAllGoods() {
        return this.goods.reduce((sum, item) => (item.price != undefined) ? sum += item.price : sum = sum, 0);
    }
}

class BasketItem {
    constructor(title, price, id, img) {
        this.title = title,
            this.price = price,
            this.id = id,
            this.img = img
    };

    renderBasketItem() {
        return `
            <div class="basket-item">
                <img class="basket-img" src="${this.img}" alt="" ${this.title}>
                <div class="basket-content">
                    <div class="basket-title">${this.title}</div>
                    <div>${this.price}</div>
                </div>
            </div>
        `
    };

    // Увеличение количества товара
    addItem() {

    }
    // Уменьшение количества товара
    removeItem() {

    }
    // Удаление товара
    deleteItem() {

    }
}

class BasketList {
    constructor() {
        this.goodsListInBasket = [];
    }

    async visibilityBasket() {
        const basketEl = document.querySelector('.basket');
        const closeBasket = document.getElementById('closeBasket').addEventListener('click', (event) => {
            console.log(event.target);
            if (basketEl.style.display == 'block') {
                basketEl.style.display = 'none';
            }
        });
        const toggleBasket = document.querySelector('.cart-button').addEventListener('click', (event) => {
            console.log(event.target);
            if (basketEl.style.display == 'block') {
                basketEl.style.display = 'none';
            } else {
                basketEl.style.display = 'block';
            }
        });
    }

    // Добавление товара в корзину
    addItem(title = "Неизвестный товар", price, id, img = "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png") {
        const itemToBasket = new BasketItem(title, price, id, img);
        console.log(itemToBasket);
        this.goodsListInBasket.push(itemToBasket);
        console.log(this.goodsListInBasket);
    }

    renderBasketList() {
        let listBasketGoods = '';

        this.goodsListInBasket.forEach(good => {
            const goodItem = new BasketItem(good.title, good.price, good.id, good.img);
            listBasketGoods += goodItem.renderBasketItem();
        })

        document.querySelector('.basket-list').innerHTML = listBasketGoods;
    }
    // Удаление товара из корзины

    // Подсчет количества товаров
    countItems() { }
    // Подсчет суммы заказов
    countSum() { }
    // Удаление всех товаров из корзины
    clearBasket() { }
    // Оформление заказа
    execOrder() { }
    // Отправка заказа
    sendOrder() { }
}


window.onload = async () => {
    const list = new GoodsList();
    await list.fetchGoods();
    list.renderList();
    // console.log(`Общая сумма: ${list.countCostAllGoods()}`);

    const listBasket = new BasketList();
    listBasket.visibilityBasket();

    const addItemButtons = document.querySelectorAll('.add-button');
    for (let button of addItemButtons) {
        // console.log(button);
        button.addEventListener('click', (event) => {
            console.log(event.target.id);
            for (let good of list.goods) {
                if (good.id_product == event.target.id) {
                    console.log(good.img);
                    // console.log(good.product_name, good.price, good.id_product, good.img);
                    listBasket.addItem(good.product_name, good.price, good.id_product, good.img);
                }
            }
            // console.log(listBasket);
            listBasket.renderBasketList();
        });
    }

}