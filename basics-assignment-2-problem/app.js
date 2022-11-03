const app = Vue.createApp({
    data() {
        return {
            text: '',
            textSubmited: '',
        }
    },
    methods: {
        showAlert() {
            return alert('Why did you pressed me dude? 😤')
        },
        printInput(e) {
            this.text = e.target.value;
        },
        printSubmitedText(e) {
            this.textSubmited = e.target.value;
            e.target.value = '';
        },
    },
});

app.mount('#assignment');