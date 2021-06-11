// 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров.
// Продумайте, какие методы понадобятся для работы с этими сущностями.
// Выполнено.


// 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров
// Выполнено.

class goodsItem {
    constructor(title = "Неизвестный товар", price, img = "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png") {
        this.title = title,
            this.price = price,
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
            </div>
        `
    };
}

class goodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, img: "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png" },
            { price: 50, img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ef79a61-af5f-4582-8877-8d362cdd5998/everyday-cushioned-crew-socks-svxXz9.png" },
            { title: 'Jacket', price: 350, img: "https://cdn.shopify.com/s/files/1/1684/8129/products/Men_s-Cloudburst-Jacket---Mandarin-Front_2000x.jpg?v=1608228061" },
            { title: 'Shoes', img: "http://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_BTY_10b4c383-7fc6-4b58-8b3f-6d05cef0369c_600x600.png?v=1610061677" },
            { title: 'Boots', price: 270 }
        ];
    }

    renderList() {
        let listGoods = '';

        this.goods.forEach(good => {
            const goodItem = new goodsItem(good.title, good.price, good.img);
            listGoods += goodItem.renderItem();
        })

        document.querySelector('.goods-list').innerHTML = listGoods;
    }

    countCostAllGoods() {
        // Вариант 1.
        // let countSum = 0;
        // this.goods.forEach(good => {
        //     const goodItem = new goodsItem(good.title, good.price, good.img);
        //     (goodItem.price !== undefined) ? countSum += goodItem.price : countSum = countSum;
        // });
        // // console.log(`Сумма: ${countSum}`);

        // return countSum;
        
        // Вариант 2.
        return this.goods.reduce((sum, item) => (item.price != undefined) ? sum += item.price : sum = sum, 0);
    }
}

class Basket {
    constructor() {

    }

    // Подсчет количества товаров
    countItems() { }
    // Подсчет суммы заказов
    countSum() { }
    // Удаление всех товаров из корзины
    clearBasket() { }
    // Оформление заказа
    execOrder() {}
    // Отправка заказа
    sendOrder() {}
}

class basketItem extends goodsItem {
    constructor(title = "Неизвестный товар", price, img = "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png") {
        super(title, price, img);
    }

    // Увеличение количества товара
    addItem() {

    }
    // Уменьшение количества товара
    addItem() {

    }
    // Удаление товара
    deleteItem() {

    }
}

const init = () => {
    const list = new goodsList();
    list.fetchGoods();
    list.renderList();
    console.log(`Общая сумма: ${list.countCostAllGoods()}`);
}

window.onload = init;