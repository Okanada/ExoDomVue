var instanceexo1 = new Vue({
    el: '#instanceexo1',
    data() {
        return {
            affichage: true
        }
    },

    methods: {
        test() {
            console.log("salut")
            this.affichage = false

        },
        test2() {
            console.log("test2")
        }
    }

});

