new Vue({
    el: '#app',
    data: {
        title: 'Vue training',
        name: 'Rafael',
        url: "https://vuejs.org/v2/guide/installation.html",
        classes: ['one', 'two']
    }, 
    methods:{
        greet(time){
            
            return `Olá testando vue, este é o titulo da página: ${this.title}, ainda é ${time}, meu nome é ${this.name}`;
        }
    }
})