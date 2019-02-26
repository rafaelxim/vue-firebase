new Vue({
    el: '#app',
    data: {
        title: 'Vue training',
        name: 'Rafael',
        url: "https://vuejs.org/v2/guide/installation.html",
        classes: ['one', 'two'],
        wage: 10, 
        coords :{
            x: 0,
            y: 0
        }
    }, 
    methods:{
        greet(time){
            
            return `Olá testando vue, este é o titulo da página: ${this.title}, ainda é ${time}, meu nome é ${this.name}`;
        }, 
        changeWage(amount){
            this.wage += amount ;
        },
        logEvent(e){
            console.log(e);
        }, 
        logCoords(e){
            this.coords.x = e.offsetX ;
            this.coords.y = e.offsetY ;
        }
    }
})