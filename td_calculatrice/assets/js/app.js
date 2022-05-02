let app = new Vue({

    el: "#monApp",

    data: {
        result: '',
        nb: 0,
        resultmemory: '',
        operationmemory: '',
    },
    methods: {
        // Fonction prenant en paramètre le charactère sélectioné par l'utilisateur et le rajoute 
        // à la fin de la variable result qui correspond à l'affichage
        addNumber(nb) {
            this.result = ''+this.result +'' + nb;
        },

        // Fonction prenant en paramètre l'opération' sélectioné par l'utilisateur, le garde en mémoire,
        // stocke result dans resultmemory et supprime la valeur de result
        operation(op) {
            if (this.result != 0) {
                this.operationmemory = op;
                this.resultmemory = this.result;
                this.result = '';
            }
        },

        // Fonction prenant en compte l'opération et les valeurs sélectionnée par l'utilisateur, effectue le calcul,
        // stocke sa valeur dans result et réinitialise resultmemory et operationmemory
        calcul() {
            if (this.operationmemory === '+') {
                this.result = parseFloat(this.result) + parseFloat(this.resultmemory);
            } else if (this.operationmemory === '-') {
                this.result =  parseFloat(this.resultmemory) - parseFloat(this.result);
            } else if (this.operationmemory === '*') {
                this.result = parseFloat(this.result) * parseFloat(this.resultmemory);
            } else if (this.operationmemory === '/') {
                this.result = parseFloat(this.result) / parseFloat(this.resultmemory);
            }

            this.operationmemory = '';
            this.resultmemory = '';
        },

        plusless() {
            this.result = this.result / 2;
        },

        // Réinitialise result, resultmemory et operationmemory
        clear() {
            this.result = '';
            this.resultmemory = '';
            this.operationmemory = '';
        },

        // Fonction rajoutant 2 zeros après la virgule
        purcent() {
            this.result = this.result.replace('.','');
            this.result = '0.0' + this.result;
            
        },
    }

})