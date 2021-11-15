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
        ]
    }
});