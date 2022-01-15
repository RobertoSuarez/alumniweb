import VueRouter from "vue-router";
import Main from '../layout/Main'
import Incio from '../pages/Inicio'
import Auth from '../layout/Auth'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
            children: [
                {
                    path: '',
                    component: Incio
                }
            ]
        },
				{
					name: 'auth',
					path: '/auth',
					component: Auth,
					children: [
						{
							path: 'login',
							component: Login
						},
						{
							path: 'register',
							component: Register
						}
					]
				}
    ]
})
