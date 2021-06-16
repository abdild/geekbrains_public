Vue.component('some-component', {
    props: ['name','surname'],
    template: '<h1>My name is {{ name }} and my surname is {{ surname }}</h1>'
})

const app = new Vue({
    el: '#app',
    data: {
        myName: 'Ildar',
        mySurName: 'Abdullin'
    }
})

// window.onload = () => {
//     const App = {
//         data() {
//             return {
//                 API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
//                 catalogURL: '/catalogData.json',
//                 goods: [],
//                 filteredGoods: [],
//                 searchLine: '',
//                 imgCatalog: 'https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png',
//                 isVisibleCart: false
//             }
//         },
//         methods: {
//             async getProducts(url) {
//                 const response = await fetch(url);
//                 if (response.ok) {
//                     const catalogItems = await response.json();
//                     this.goods = catalogItems;
//                     this.filteredGoods = catalogItems;
//                 } else {
//                     alert('Ошибка соединения с сервером');
//                 }
//             },
//             filterGoods(searchLine) {
//                 const regExp = new RegExp(searchLine, 'i');
//                 this.filteredGoods = this.goods.filter(good => regExp.test(good.product_name));
//             },
//             addProduct(good) {
//                 console.log(good)
//                 console.log(good.id_product)
//             }
//             // async getJSON(url) {
//             //     try {
//             //         const response = await fetch(url);
//             //         const result = await response.json();
//             //         return result;
//             //     }
//             //     catch (error) {
//             //         console.log(`Ошибка ${error}`);
//             //     }
//             // },
//             // addProduct(el) {
//             //     console.log(el)
//             //     console.log(el.id_product)
//             // }
//         },
//         async mounted() {
//             await this.getProducts(`${this.API + this.catalogURL}`)
//             // this.getJSON(`${this.API + this.catalogURL}`)
//             //     .then(data => {
//             //         for (let el of data) {
//             //             this.goods.push(el)
//             //         }
//             //     })
//         }
//     }

//     Vue.createApp(App).mount('#app');
// }