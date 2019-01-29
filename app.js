Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
  })


var app = new Vue({
    el:"#view-App",
    data:{
        message: "Sinkerd Laos",
        name: "sinkerd",
        job: "",
        age: 20,
        status: false,
        count:0,
        website: 'https:www.smshopper.Com',
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ],
        foods:[

            
        ],
        gender: " "
    },
    methods:{
         getName: function(){
             return this.name
         },
         setName: function(n){
            return this.name=n
         },
         addAge:function(){
            this.age++;
            console.log(this.age);
         },
         SubstractAge:function(){
             this.age--;
            console.log(this.age);
            
         },
         AddCount:function(){
             this.count++;
             console.log(this.count);
             
         }
    }
})