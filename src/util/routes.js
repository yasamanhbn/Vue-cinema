import Overview from "../component/Overview.vue";
import Detail from "../component/MoviesSection/Detail.vue";
export const routes =[
    {path:'/',  component:Overview, name:'home'},
    {path:'/movie',component: Detail,name:'movie'},
    {path: '*',redirect:{name:'home'}}
]