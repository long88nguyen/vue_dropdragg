import { createRouter,createWebHistory } from "vue-router";

const routes = [

    {
        path:'/drop-and-drag',
        component:() => import('../drop-and-drag/Index.vue'),
        children:[
            {
                path:'game-1',
                component:() => import('../drop-and-drag/Game1.vue')
            },
            {
                path:'game-2',
                component:() => import('../drop-and-drag/Game2.vue')
            },
            {
                path:'game-3',
                component:() => import('../drop-and-drag/Game3.vue')
            },
            {
                path:'game-4',
                component:() => import('../drop-and-drag/Game4.vue')
            },
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router