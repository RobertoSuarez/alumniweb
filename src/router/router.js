import VueRouter from "vue-router";
import Main from '../layout/Main'
import Incio from '../pages/Inicio'
import Public from '../layout/Public'
import Login from '../pages/Login'
import Register from '../pages/Register'
import store from '../store'
import BaseEmpleos from '../pages/BaseEmpleos'
import Noticias from '../pages/BaseNoticias'
import Empresas from '../pages/BaseEmpresa'
import Perfil from '../pages/BasePerfil'
import BasePublicarEmpleo from '../pages/BasePublicarEmpleo'

const router = new VueRouter({
    mode: 'history',
    routes: [
			{
				path: '/',
				component: Public,
				meta: {
					requiresAuth: false
				},
				children: [
					{
						path: '',
						name: 'main',
						component: Incio
					},
					{
						path: 'login',
						name: 'login',
						component: Login
					},
					{
						path: 'register',
						component: Register
					}
				]
			},
			{
					path: '/feed',
					component: Main,
					meta: {
						requiresAuth: true
					},
					children: [
							{
								path: '',
								name: 'Ofertas Laborales',
								component: BaseEmpleos
							},
							{
								path: 'noticias',
								name: 'noticias',
								component: Noticias,
							},
							{
								path: 'empresas',
								name: 'empresas',
								component: Empresas,
							},
							{
								path: '/perfil/:iduser',
								name: 'perfil',
								component: Perfil,
								props: true
							},
							{
								path: 'publicar_empleo',
								name: 'publicar empleo',
								component: BasePublicarEmpleo
							}
					]
			},
    ]
})

router.beforeEach((to, from, next) => {
	const { token } = store.state

	// si no requiere de autenticación y ya inicio sesion,
	// se lo redirige a la pagina princial donde esta las ofertas laborales
	if (!to.matched.some(record => record.meta.requiresAuth) && token) {
		next({
			name: 'Ofertas Laborales'
		})
	}

	// si se requiere autenticación y no tiene un token, se lo
	// redirige a la pagina de main, para ver el login, o registrarse
	if (to.matched.some(record => record.meta.requiresAuth) && !token) {
		next({
			name: 'main'
		})
	}

	// si todo va bien seguimos sin problema
	next()

})

export default router
