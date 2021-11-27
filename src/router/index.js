import vue from "vue"
import Router from "vue-router"
import registrasi from "@/components/register.vue"
import login from "@/components/login.vue"
import home from "@/components/beranda.vue"
import profilAdmin from "@/components/profilAdmin.vue"
import profilUser from "@/components/ProfilUser.vue"
import custamer from "@/components/custamer.vue"
import custamer1 from "@/components/custamer1.vue"


vue.use(Router)

function configRoutes() {
    return [
        
        {
            path: '/register',
            name: 'registrasi',
            component: registrasi
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/profilAdmin',
            name: 'profilAdmin',
            component: profilAdmin
        },
        {
            path: '/profilUser',
            name: 'profilUser',
            component: profilUser
        },
        {
            path: '/custamer',
            name: 'custamer',
            component: custamer
        },
        {
            path: '/custamer1',
            name: 'custamer1',
            component: custamer1
        }
    ]
}
const link = new Router({
    mode: "history",
    routes: configRoutes(),
})
export default link