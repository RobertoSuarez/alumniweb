import axios from '../plugins/axios'
// Administramos todos los datos de los empleos para trabajar con la API REST

const empleos = {
	namespaced: true,
	state: () => ({
		contador: 5,
		empleos: [],
	}),
	mutations: {
		incrementar(state) {
			state.contador++
		},
		setEmpleos(state, payload) {
			console.log("set empleos from api rest")
			state.empleos = payload
		}
	},
	actions: {
		incrementarContador({ commit }) {
			commit('incrementar')
		},
		async buscar({ commit }) {
			//console.log('Buscando empleo con la api', state.contador)
			try {
				const response = await axios.get('/ofertas')
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
