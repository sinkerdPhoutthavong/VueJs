
var app = new Vue({
    el:"#vue-app",
    data:{
        newData:{
            empName:'',
            salary:0
        },
        empGroup:[
            {
                empName: "ສິນເກີດ",
                salary: "25000"
            },
            {
                empName: "ມິຣິນດາ",
                salary: "28000"
            }
        ]
    },
    methods:{
        // ເມັດຕອດສາມາດຮັບຄ່າໄດ້
        addEmp:function(empName,salary){
            this.empGroup.push({
                empName: this.newData.empName,
                salary: this.newData.salary
            });
            // ຫຼັງຈາກປ້ອນແລ້ວ set default
            this.newData.empName='';
            this.newData.salary=0;
        },
        showMessage:function(){
            console.log("sending data to firebase....");
        }
    },
    computed:{
            //ແຍກມາຈັດການດ້ານການຄໍານວນ
            summation: function(){
                var sum = this.empGroup.reduce(function(value,data){
                    return value + Number(data.salary);
                    //0+5000=5000
                    //5000+4000 = 9000
                },0);
                return sum;
            },
            Average: function(){
                var sum = this.empGroup.reduce(function(value,data){
                    return value + Number(data.salary);
                    //0+5000=5000
                    //5000+4000 = 9000
                },0);
                // console.log(this.empGroup);
                // console.log(this.empGroup.length); //ສະແດງພະນັກງານພາຍໃນ  empGroup ມີຈັກຄົນ
                // console.log(sum/this.empGroup.length);
                return sum/this.empGroup.length;
            }
        },
        watch:{
            //ຫຼັງຈາກ summation ສໍາເລັດ
            summation:function(){
                //ທຳອະໄຣ
                 this.showMessage();
            }
        }
})