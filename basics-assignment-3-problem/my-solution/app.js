const app = Vue.createApp({
    data() {
        return {
            numSum: 0,
            result: 0,
            desiredNum: 37,
        }
    },
    methods: {
        btnAdd(addedValue) {
            this.numSum = this.numSum + addedValue;
        },
    },
    watch: {
        numSum() {
            if (this.numSum < this.desiredNum) {
                this.result = 'Not there yet!';

                setTimeout(() => {
                    this.result = 0;
                }, 4000);
            } else if (this.numSum > this.desiredNum) {
                this.result = 'Too much!';

                setTimeout(() => {
                    this.result = 0;
                }, 4000);
            } else {
                this.result = this.numSum;
            }

            if (this.result == this.desiredNum) {
                this.result = `${this.numSum}. You win!`;
            }
        }
    },
});

app.mount('#assignment');