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

                localStorage.setItem("taks", JSON.stringify(this.tasks));


            }else{
                alert("Todo text is required")
            }

        }
    },
    beforeCreate(){
        console.log("BEFORE CREATE");
    },
    created(){
        console.log("created");
    },
    beforeUpdate(){
        console.log("BEFORE UPDATE");
    }



};

Vue.createApp(TodoApp).mount('#app');

