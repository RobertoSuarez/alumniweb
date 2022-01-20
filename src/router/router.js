import VueRouter from "vue-router";
import Main from '../layout/Main'
import Incio from '../pages/Inicio'
import Public from '../layout/Public'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Feed from '../pages/Feed'
import store from '../store'

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
									name: 'feed',
									component: Feed
							}
					]
			},
    ]
})

router.beforeEach((to, from, next) => {
	const { token } = store.state

	if (!to.matched.some(record => record.meta.requiresAuth) && token) {
		next({
			name: 'feed'
		})
	}


	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!token) {
			next({
				name: 'main'
			})
		} else{
			next()
		}
	} else {
		next()
	}

})

export default router
