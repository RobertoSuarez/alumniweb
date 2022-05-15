import VueRouter from "vue-router";
import store from '../store'
import { empleosRoutes } from './empleos'
import { publicRoutes } from './public'
import { usuariosRoutes } from './usuario'

const router = new VueRouter({
    mode: 'history',
    routes: [
			...publicRoutes,
			...empleosRoutes,
			...usuariosRoutes
    ]
})

router.beforeEach((to, from, next) => {
	const { token } = store.state

	// si no requiere de autenticación y ya inicio sesion,
	// se lo redirige a la pagina princial donde esta las ofertas laborales
	if (!to.matched.some(record => record.meta.requiresAuth) && token) {
		next({
			name: 'buscador'
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
