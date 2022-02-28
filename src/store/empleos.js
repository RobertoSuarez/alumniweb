import axios from '../plugins/axios'
// Administramos todos los datos de los empleos para trabajar con la API REST

const empleos = {
	namespaced: true,
	state: () => ({
		contador: 5,
		empleos: [],
		query: {
			area: [],
			ciudades: [],
			busquedad: '',
		},
	}),
	mutations: {
		incrementar(state) {
			state.contador++
		},
		setEmpleos(state, payload) {
			//console.log("set empleos from api rest")
			state.empleos = payload
		}
	},
	actions: {
		incrementarContador({ commit }) {
			commit('incrementar')
		},
		async buscar({ commit }, payload) {
			//console.log('Buscando empleo con la api', state.contador)
			console.log(payload)
			try {
				const params = new URLSearchParams()
				params.append('busquedad', payload.busquedad)
				params.append('ciudades', payload.ciudades)
				params.append('areas', payload.areas)

				const response = await axios.get('/ofertas', { params })
				commit('setEmpleos', response.data)
			} catch(e) {
				console.log(e)
			}

		},
		async crearEmpleo(_, payload) {

			try {
				const response = await axios.post('/ofertas', payload)
				return response.data

			}catch(e) {
				console.log(e)
				return null
			}

		}
	},
	getters: {

	}
}


export default empleos;
