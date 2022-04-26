import VueRouter from "vue-router";
import Main from '../layout/Main'
import Incio from '../pages/Inicio'
import Public from '../layout/Public'
import Login from '../pages/Login'
import Register from '../pages/Register'
import store from '../store'
import Noticias from '../pages/BaseNoticias'
import Empresas from '../pages/BaseEmpresa'
import Perfil from '../pages/BasePerfil'
import BasePublicarEmpleo from '../pages/BasePublicarEmpleo'
import EmpleoBuscador from '../pages/EmpleoBuscador'
import EmpleoCompleto from '../pages/EmpleoCompleto'
import MisEmpleos from '../pages/MisEmpleos'
import EmpleosGuardados from '../components/EmpleosGuardados'
import EmpleosPublicados from '../components/EmpleosPublicados'

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
						name: 'incio',
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
					path: '/',
					redirect: 'empleos',
					component: Main,
					meta: {
						requiresAuth: true
					},
					children: [
							{
								path: '/empleos',
								name: 'Ofertas Laborales',
								component: EmpleoBuscador
							},
							{
								path: '/noticias',
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
							},
							{
								path: '/empleo/:idempleo',
								name: 'empleo',
								component: EmpleoCompleto,
								props: true
							},
							{
								path: '/mis-empleos',
								name: 'mis-empleos',
								redirect: '/mis-empleos/guardados',
								component: MisEmpleos,
								children: [
									{
										path: 'guardados',
										name: 'empleos-guardados',
										component: EmpleosGuardados,
									},
									{
										path: 'publicados',
										name: 'empleos-publicados',
										component: EmpleosPublicados,
									},
								]
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
			name: 'incio'
		})
	}

	// si todo va bien seguimos sin problema
	next()

})

export default router
