var app = new Vue({
    el:"#view-App",
    data:{
        message: "Sinkerd Laos",
        name: "sinkerd",
        job: "developer",
        age: 20,
        status: false,
        website: 'https:www.smshopper.Com'
    },
    methods:{
         getName: function(){
             return this.name
         },
         setName: function(n){
            return this.name=n
         }
    }
})