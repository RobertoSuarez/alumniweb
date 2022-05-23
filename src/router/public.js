import Public from '../layout/Public'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Inicio from '../pages/Inicio'

// agregamos todas las rutas publcias, como por ejemplo login, register, pagina de inicios


export const publicRoutes = [
    {
        path: '/',
        component: Public,
        meta: {
            requiresAuth: false
        },
        children: [
            {
                path: '',
                name: 'inicio',
                component: Inicio,
                children: [
                    {
                        path: 'login',
                        name: 'login',
                        component: Login
                    },
                    {
                        path: 'register',
                        name: 'register',
                        component: Register
                    }
                ]
            },
            
        ]
    },
]