import Vue from '../src/assets/vue';

// 引入TodoList
import Todolist from './components/Todolist.vue';

// 引入bootstrap样式
import '../../12-03/assets/bootstrap/css/bootstrap.css';

new Vue({
    el:'#app',
    template:`<Todolist/>`,
    components:{
        Todolist
    }
});