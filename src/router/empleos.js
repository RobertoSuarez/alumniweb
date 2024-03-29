import EmpleoBuscador from '../pages/EmpleoBuscador'
import Main from '../layout/Main'
import Empresas from '../pages/BaseEmpresa'
import PublicarEmpleo from '../pages/PublicarEmpleo'
import EmpleoCompleto from '../pages/EmpleoCompleto'
import MisEmpleos from '../pages/MisEmpleos'
import EmpleosGuardados from '../components/EmpleosGuardados'
import EmpleosPublicados from '../components/EmpleosPublicados'
import EmpleoPublicadoDetalles from '../pages/EmpleoPublicadoDetalles'


// Definimos las rutas de empleos

const routes = [
    {
        path: '/empleos',
        component: Main,
        redirect: '/empleos/buscador',
        children: [
            {
                path: 'buscador',
                name: 'buscador',
                component: EmpleoBuscador
            },
            {
                path: 'empresas',
                name: 'empresas',
                component: Empresas,
            },
            {
                path: 'publicar_empleo',
                name: 'publicar empleo',
                component: PublicarEmpleo
            },
            {
                path: ':idempleo',
                name: 'empleo',
                component: EmpleoCompleto,
                props: true
            },
            {
                path: 'mis-empleos',
                name: 'mis-empleos',
                redirect: '/empleos/mis-empleos/guardados',
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
            },
            {
                path: ':id/publicado-detalles',
                name: 'publicado-detalles',
                component: EmpleoPublicadoDetalles
            }
        ]
    }
]

export const empleosRoutes = routes.map(route => {


    return {...route, meta: { requiresAuth: true}}
})