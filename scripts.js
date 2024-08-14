const TodoApp = {

    data() {
        return {
            tasks: [],
            newTask: {
                isDone: false
            }
        }
    },
    methods: {
        addTask: function () {

            if (this.newTask.text) {
                this.tasks.push(this.newTask);
                this.newTask = {
                    isDone: false
                };
                localStorage.setItem("tasks", JSON.stringify(this.tasks));
            } else {
                alert("Todo text is required")
            }

        },
        storeTasks(){
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        }
    },
    created() {
        this.tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : this.tasks;
    }
};

Vue.createApp(TodoApp).mount('#app');

