const app = Vue.createApp({
    data() {
        return {
            name: 'GiovanniBot',
            currAge: 21,
            randNum: Math.floor(Math.random() * 10),
            imageURL: 'https://live.staticflickr.com/3314/3525213113_98e621def1_c.jpg',
            imageAlt: 'Dachshunds can fly!',
        }
    },
    methods: {
        agePlusFive() {
            return this.currAge + 5;
        }
    },
});

app.mount('#app');