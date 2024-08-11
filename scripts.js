const TodoApp = {

    data(){
        return {
            tasks: [],
            newTask:{
                isDone: false
            }
        }
    },
    methods:{
        addTask: function (){

            if(this.newTask.text){
                this.tasks.push(this.newTask);
                this.newTask = {
                    isDone: false
                };
            }else{
                alert("Todo text is required")
            }

        }
    }


};

Vue.createApp(TodoApp).mount('#app');
