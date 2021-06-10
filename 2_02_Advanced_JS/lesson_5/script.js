window.onload = () => {
    const App = {
        data() {
            return {
                API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
                catalogURL: '/catalogData.json',
                products =[],
                img = 'https://ericson-lab.com/wp-content/uploads/2017/08/nophoto.png'
            }
        },
        methods: {
            // getJSON(url) {
            //     return fetch(url ? url : `${this.API + this.catalogURL}`)
            //         .then(result => result.json)
            // },
            async fetchGoods(url) {
                // const response = await fetch(`${this.API + this.url}`);
                // const data = await response.json();
                // this.goods = data;
                // console.log(this.goods);
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    this.goods = data;
                }
                catch(error) {
                    console.log(`Ошибка ${error}`)
                }
            }
        },
        mounted() {
            this.fetchGoods(`${this.API + this.catalogURL}`)
            console.log(this.goods)
        }
    }

    Vue.createApp(App).mount('#app')
}