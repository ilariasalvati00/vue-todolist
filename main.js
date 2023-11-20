const {createApp} = Vue;
const options = {
    data: function(){
        return {
            todolist: [
                {
                    text: 'Fare la spesa',
                    done: false
                },

                {
                    text: 'Stirare',
                    done: false
                },

                {
                    text: 'Portare a spasso il cane',
                    done: true
                }
            ]
        }
    },
    methods: {
        sbarra: function(elem){
            if (elem.done == true){
                return "sbarrato"
            }
            else{
                return ""
            }
        },
        remove: function(index){
            this.todolist.splice(index, 1);
        },
        add: function(){
            this.todolist.push({text: this.todo, done: false})
        }
    }
}

createApp(options).mount("#app");