
import vue from 'vue';
import app from './app';


import router from './router';
//实例化一个vue
new Vue({
    el:'#box',
    render:h=>h(app),
    //注入router实例到vue的实例中
    router
})