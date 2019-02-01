
var post  = new Vue({
    el:"#post",
    data:{
       title:'ສົ່ງບົດໂຄງການຈົບຊັ້ນ',
       message: 'ລາຍງານຄວາມຄືບໜ້າ'
    }
});
var comment = new Vue({
    el:"#comment",
    data:{
        text:'ອາກາດດີຫຼາຍ'
     }
});
var likeSystem = new Vue({
    el:"#likeSystem",
    data:{
       like:false
     },
     methods:{
         changeLike:function(){
             console.log("Like");
             
         }
     }
})