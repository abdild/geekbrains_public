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
                <button class="add-button" type="button" id="${this.id}">Добавить в корзину</button>
            </div>
        `
    };
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.filteredGoods = [];
    }

    async fetchGoods() {
        const response = await fetch(`${API_URL}/catalogData.json`);
        if (response.ok) {
            const data = await response.json();
            this.goods = data;
            this.filteredGoods = data;
        } else {
            alert('Ошибка соединения с сервером');
        }

        // console.log(this.goods);
    }

    filterGoods(value) {
        console.log(value);
        const regExp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good => regExp.test(good.product_name));
        this.renderList();
    }

    renderList() {
        let listGoods = '';

        this.filteredGoods.forEach(good => {
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
                <button class="removeItem-button" type="button" id="${this.id}">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                
                </button>                
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
        this.countBasket = 0;
        this.countSum = 0;
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
        this.goodsListInBasket.push(itemToBasket);
        // Подсчет количества товаров в корзине
        this.countBasket += 1;
        // Подсчет суммы всех товаров в корзине
        this.countSum += itemToBasket.price;
    }

    renderBasketList() {
        let listBasketGoods = '';

        this.goodsListInBasket.forEach(good => {
            const goodItem = new BasketItem(good.title, good.price, good.id, good.img);
            listBasketGoods += goodItem.renderBasketItem();
        });
        listBasketGoods += `
            Товаров: ${this.countBasket}
            Сумма: ${this.countSum}
        `;

        document.querySelector('.basket-list').innerHTML = listBasketGoods;
    }
    // Удаление товара в корзине
    removeItem() {
        const removeItemButtons = this.goodsListInBasket;
        alert(removeItemButtons);
    }

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
                    listBasket.addItem(good.product_name, good.price, good.id_product, good.img);
                }
            }
            listBasket.renderBasketList();
            console.log(listBasket.goodsListInBasket);
        });
    }
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.goods-search');
    searchButton.addEventListener('click', () => {
        list.filterGoods(searchInput.value);
    });
}