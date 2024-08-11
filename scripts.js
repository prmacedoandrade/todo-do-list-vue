var tasks = [
    {
        "text": "Aprender HTML, CSS e Javascript",
        "isDone": true
    },
    {
        "text": "Aprender o básico de Vue JS",
        "isDone": false
    },
    {
        "text": "Completar o desafio de Vue JS com excelência",
        "isDone": false
    }
];

const TodoApp = {

    data(){
        return {
            tasks: window.tasks,
            newTask:{
                isDone: false
            }
        }
    },
    methods:{
        markAsDone(task){
            task.isDone = !task.isDone
        },
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
