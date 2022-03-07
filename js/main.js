const vm = Vue.createApp({
        data(){
            return{
                name :'008JS'
            }
        }
    });

var vmi;
$(document).ready(()=>{
    
    vmi = vm.mount('#app');
})
function s(){
    // vm.$data.name = 'cccc';
    vmi.$data.name = 'cc';
}