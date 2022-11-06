const app = Vue.createApp({
    data() {
        return {
            number: 0,
        }
    },
    methods: {
        addNumber(num) {
            this.number = this.number + num;
        }
    },
    computed: {
        result() {
            if (this.number < 37) {
                return 'Not there yet!';
            } else if (this.number === 37) {
                return this.number;
            } else {
                return 'Too much!';
            }
        },
    },
    watch: {
        result() {
            console.log('Watcher executing...')
            const that = this;
            setTimeout(function() {
                console.log('Reseting number...')
                that.number = 0;
            }, 5000);
        }
    },
});

app.mount('#assignment');