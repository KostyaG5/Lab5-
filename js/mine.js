import Vue from 'vue'
import VueRouter from 'vue-router';
import LoginComponent from './components/LoginComponent.vue';
import NotesComponent from './components/NotesComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';  

Vue.use(VueRouter);

const routes = [
    //{path: '/', name: 'LoginComponent', component: LoginComponent},
    //{path: '/', name: 'RegisterComponent', component: RegisterComponent},
    //{path: '/', name: 'NotesComponent', component: NotesComponent},

    {path: '/', name: 'LoginComponent', component: LoginComponent},
    {path: '/register', name: 'RegisterComponent', component: RegisterComponent},
    {path: '/user/:uid', name: 'NotesComponent', component: NotesComponent},
];

const router = new VueRouter({ routes });

const app = new Vue({ router }).$mount('#app');
