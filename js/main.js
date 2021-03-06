// Partire dalla definizione di un array con 3 oggetti ( i todo).
// Ogni oggetto todo avrà le seguenti proprietà:
// - text, una stringa che indica il testo del todo
// - completed, un booleano (true/false) che indica se il todo è stato completato oppure no
// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà completed è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco di ogni todo una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


const app = new Vue ({
    el: '#app',
    data : {
        todos : [
            {
                text: 'terminare Web App',
                completed: false,
            },
            {
                text: 'fare la spesa',
                completed: false,
            },
            {
                text: 'fare il bucato',
                completed: true,
            },
        ],
        newTodo: '',
    },
    methods : {
        RemoveTodo(index) {
            this.todos.splice(index, 1);
        },

        addTodo() {
            if (this.newTodo !== '') {
                this.todos.unshift({
                    text: this.newTodo,
                    completed: false,});
                
                this.newTodo = '';
            }
        },
    
    }
}); 