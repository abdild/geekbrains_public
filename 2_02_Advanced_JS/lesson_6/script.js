window.onload = () => {
    const app = Vue.createApp({
        data() {
            return {
                API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
                catalogURL: '/catalogData.json',
                goods: [],
                filteredGoods: [],
                basketGoods: [],
                searchLine: '',
                imgCatalog: 'https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png',
                isVisibleCart: false
            }
        },
        methods: {
            async getProducts(url) {
                const response = await fetch(url);
                if (response.ok) {
                    const catalogItems = await response.json();
                    this.goods = catalogItems;
                    this.filteredGoods = catalogItems;
                } else {
                    alert('Ошибка при соединении с сервером');
                }
            },
            filterGoods(searchLine) {
                const regExp = new RegExp(searchLine, 'i');
                this.filteredGoods = this.goods.filter(good => regExp.test(good.product_name));
            },
            addProduct(good) {
                console.log(good)
                console.log(good.id_product)
            }
            // async getJSON(url) {
            //     try {
            //         const response = await fetch(url);
            //         const result = await response.json();
            //         return result;
            //     }
            //     catch (error) {
            //         console.log(`Ошибка ${error}`);
            //     }
            // },
            // addProduct(el) {
            //     console.log(el)
            //     console.log(el.id_product)
            // }
        },
        async mounted() {
            await this.getProducts(`${this.API + this.catalogURL}`)
            // this.getJSON(`${this.API + this.catalogURL}`)
            //     .then(data => {
            //         for (let el of data) {
            //             this.goods.push(el)
            //         }
            //     })
        }
    })

    app.component('goods-list', {
        props: ['goods'],
        template: `
        <div class="goods-list">
            <goods-item v-for="goodEntity in goods" :goodProp="goodEntity" :key="goodEntity.id_product"> </goods-item>
        </div>
        `
    })

    app.component('goods-item', {
        props: ['goodProp', 'imgCatalog'],
        template: `
        <div class="goods-item">
            <img :src="imgCatalog" :alt="goodProp.product_name">
            <h3 class="title">{{ goodProp.product_name }}</h3>
            <p>Цена: {{ goodProp.price }}</p>
            <button class="add-button" type="button" @click="addProduct(goodProp)">Добавить в корзину</button>
    </div>
        `
    })

    app.component('search-block', {
        props: ['searchLine'],
        // methods: {
        //     filterGoods(searchLine) {
        //         const regExp = new RegExp(searchLine, 'i');
        //         this.filteredGoods = this.goods.filter(good => regExp.test(good.product_name));
        //     }
        // },
        template: `
            <div>
                <input v-model.lazy="searchLine" type="text" class="goods-search" />
                <button @click="filterGoods(searchLine)" class="search-button" type="button">Найти</button>
            </div>
        `
    })

    app.component('basket-block', {
        template: `
        <div v-show="isVisibleCart" class="basket">
                <div class="basket-header">
                    Корзина
                    <svg @click="isVisibleCart =!isVisibleCart" class="close-icon" id="closeBasket" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="basket-list"></div>
            </div>
        `
    })

    app.mount('#app');
}