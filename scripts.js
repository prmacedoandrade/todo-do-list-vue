var tasks = [
    {
        "name": "Aprender HTML, CSS e Javascript",
        "isDone": true
    },
    {
        "name": "Aprender o básico de Vue JS",
        "isDone": false
    },
    {
        "name": "Completar o desafio de Vue JS com excelência",
        "isDone": false
    }
];

const TodoList = {

    data(){
        return {
            tasks: window.tasks
        }
    }

};

Vue.createApp(TodoList).mount('#app');
