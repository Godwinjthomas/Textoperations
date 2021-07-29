const routes=[
    {path:'/home',component:home},
    {path:'/text/:id',name:'text',component:text},
    {path:'/file',component:Files},
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')