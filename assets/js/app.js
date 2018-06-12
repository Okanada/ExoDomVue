import "./exo1.js";
import "./exo2.js";
import "./exo3.js";
import "./exo4.js";
import "./exo5.js";
import "./exo6.js";
import "./exo7.js";


var instancebtn = new Vue({
    el: '#instance',
    data: {
        isActive: 1
    },

    methods: {
        clickBtn(event) {
            this.isActive = event.target.dataset.position;
            console.log("app.js")


        }
    }


});

