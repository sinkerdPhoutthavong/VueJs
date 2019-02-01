
var app = new Vue({
    el:"#employees_salary",
    data:{
        newData: {
            empName:'',
            salary: 0
        },
        empGroup:[
            {
                empName: "ສິນເກີດ",
                salary: "25000B"
            },
            {
                empName: "ມິຣິນດາ",
                salary: "28000B"
            }
        ]
    },
    methods:{
        addEmp:function(empName,salary){
            this.empGroup.push({
                empName: this.newData.empName,
                salary: this.newData.salary
            });
            // ຫຼັງຈາກປ້ອນແລ້ວ set default
            this.newData.empName='';
            this.newData.salary=0;
        }
    }
})