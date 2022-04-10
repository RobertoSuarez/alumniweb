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
		async buscar({ commit, rootGetters }, payload) {
			//console.log('Buscando empleo con la api', state.contador)
			//console.log(payload)
			try {
				const params = new URLSearchParams()
				params.append('busquedad', payload.busquedad)
				params.append('ciudades', payload.ciudades)
				params.append('areas', payload.areas)

				const response = await axios.get('/empleos', rootGetters.tokenHeader)
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

		},
		async guardarEmpleoUsuario({ rootGetters }, id) {
			console.log('enviando para guardar', id)
			try {
				const resp = await axios.post(`/empleos/${id}/guardar`, {}, rootGetters.tokenHeader)
				console.log(resp.status)
			} catch (err) {
				console.log('Error', err)
			}

		},
		async eliminarEmpleoUsuario({ rootGetters }, id) {
			console.log(`Eliminar ${id} empleo en la API`)
			try {
				const resp = await axios.delete(`/empleos/${id}/guardar`, rootGetters.tokenHeader)
				console.log(resp)
			} catch (err) {
				console.log('Eliminar empleo errror: ', err)
			}
		},

		async verificarGuardadosUsuario({ rootGetters }, ids) {
			let data = null
			try {
				let response = await axios.post('/empleos/guardados-id', ids, rootGetters.tokenHeader)
				if (response.status === 200) {
					//console.log('guardados: ', response.data)
					data = response.data
				}
			} catch (err) {
				console.log(err)
			}

			return data
		},
		async aplicarEmpleo({rootGetters}, id) {
			let ok = false
			try {
				const response = await axios.post(`/empleos/${id}/aplicar`, {}, rootGetters.tokenHeader)
				if (response.status === 200) {
					console.log('Aplicado correctamente', response.data)
					ok = true
				}
			} catch(err) {
				console.log(err)
			}
			return ok
		},
		// Revisa el estado de un empleo si ya se aplico o no, enfocado al usuario
		async estadoEmpleo({ rootGetters }, id) {
			let estado = null
			try {
				const response = await axios.post(`/empleos/${id}/aplicar/estado`, {}, rootGetters.tokenHeader)
				if (response.status === 200) {
					estado = response.data
				}
			} catch(err) {
				console.log(err)
			}

			return estado
		},
		async removerAplicacion({ rootGetters }, id) {
			let ok = false
			try {
				const response = await axios.delete(`/empleos/${id}/aplicar`, rootGetters.tokenHeader)
				if (response.status === 200) {
					ok = true
				}
			} catch(err) {
				console.log(err)
			}
			return ok
		}
	},
	getters: {

	}
}


export default empleos;
