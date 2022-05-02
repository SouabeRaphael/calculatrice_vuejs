let app = new Vue({

    el: "#monApp",

    data: {
        result: 0,
        nb: 0,
        resultmemory: '0',
        operationmemory: '',
    },
    methods: {
        addNumber(nb) {
            this.result = ''+this.result +'' + nb;
        },
        operation(op) {
            if (this.result != 0) {
                this.operationmemory = op;
                this.resultmemory = this.result;
                this.result = '';
            }
        },
        calcul() {
            if (this.operationmemory === '+') {
                this.result = parseFloat(this.result) +parseFloat(this.resultmemory);
            } else if (this.operationmemory === '-') {
                this.result = parseFloat(this.result) - parseFloat(this.resultmemory);
            } else if (this.operationmemory === '*') {
                this.result = parseFloat(this.result) * parseFloat(this.resultmemory);
            } else if (this.operationmemory === '/') {
                this.result = parseFloat(this.result) / parseFloat(this.resultmemory);
            }

            this.operationmemory = '';
            this.resultmemory = '';
        },
        clear() {
            this.result = '0';
            this.resultmemory = '';
            this.operationmemory = '';
        },
        purcent() {
            this.result = this.result.replace('.','');
            this.result = '0.0' + this.result;
            
        },
    }

})