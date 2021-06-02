// 1.	Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
// Выполнено.


// 2.	Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?
// Выполнено.


// 3.	* Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
// Это происходит из-за того, что goods - это массив и при его выводе появляются запятые.
// Исправлено с помощью добавления к goodsList метода join('').



const goods = [
    { title: 'Shirt', price: 150, img: "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png" },
    { price: 50, img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ef79a61-af5f-4582-8877-8d362cdd5998/everyday-cushioned-crew-socks-svxXz9.png" },
    { title: 'Jacket', price: 350, img: "https://cdn.shopify.com/s/files/1/1684/8129/products/Men_s-Cloudburst-Jacket---Mandarin-Front_2000x.jpg?v=1608228061" },
    { title: 'Shoes', img: "http://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_WL_RN_SF_PDP_Natural_Grey_BTY_10b4c383-7fc6-4b58-8b3f-6d05cef0369c_600x600.png?v=1610061677" },
    { title: 'Boots', price: 270}
];

const renderGoodsItem = ({title = "Неизвестный товар", price = 0, img = "https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png"}) => {
    // Проверка на наличие нулевой цены
    const checkPrice = (price) => {
        let result;
        if (price === 0) {
            result = "Товар закончился"
        } else result = price;
        return result;
    };
    return `
    <div class="goods-item">
        <h3 class="title">${title}</h3>
        <img src="${img}" alt=""${title}>
        <p>Цена: ${checkPrice(price)}</p>
    </div>`
}

const renderGoodsList = list => {
    document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item)).join('');
}

// --start-- Для активации данного файла после загрузки всего html файла
const init = () => {
    renderGoodsList(goods);
};
window.onload = init;
// --end--

