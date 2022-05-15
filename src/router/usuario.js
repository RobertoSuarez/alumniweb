import Main from '../layout/Main'
import Perfil from '../pages/BasePerfil'

const routes = [
    {
        path: '/usuarios',
        component: Main,
        children: [
            {
                path: ':iduser',
                name: 'perfil',
                component: Perfil,
                props: true
            },
        ],
    }
]

export const usuariosRoutes = routes.map(route => {
    return {...route, meta: { requiresAuth: true }}
})