import axios from '../plugins/axios'
// Administramos todos los datos de los empleos para trabajar con la API REST

const empleos = {
	namespaced: true,
	state: () => ({
		contador: 5,
		empleos: [],
		page: 1,
		page_size: 10,
		titulo: '',
		ciudad: '',
		provincia_id: 0,
		publicados: [],
	}),
	mutations: {
		incrementar(state) {
			state.contador++
		},
		setEmpleos(state, payload) {
			//console.log("set empleos from api rest")
			state.empleos = payload
		},
		setParametros(state, { titulo, ciudad, page, provincia_id}) {
			state.titulo = titulo
			state.ciudad = ciudad
			state.page = page
			state.provincia_id = provincia_id
		},
		addPage(state) {
			state.page++
		},
		agregarEmpleos(state, payload) {
			const todosEmpleos = [...state.empleos, ...payload]
			//console.log('Todos los empleos', todosEmpleos)
			state.empleos = todosEmpleos
		},
		setPublicados(state, payload) {
			state.publicados = payload
		}
	},
	actions: {
		incrementarContador({ commit }) {
			commit('incrementar')
		},
		async buscarEmpleos({ state, commit, rootGetters }, { titulo, ciudad, provincia_id=1 }) {
			//console.log('Buscando empleo con la api', state.contador)
			//console.log(payload)
			// Establecemos los parametros de busquedad, que nos 
			// van a servir para agregar la siguientes paginas de busquedad
			commit('setParametros', {
				titulo,
				ciudad,
				page: 1,
				provincia_id
			})

			try {
				const params = new URLSearchParams()
				params.append('titulo', titulo)
				params.append('ciudad', ciudad)
				params.append('page', state.page)
				params.append('page_size', state.page_size)
				params.append('provincia_id', state.provincia_id)
				// params.append('ciudades', payload.ciudades)
				// params.append('areas', payload.areas)

				const response = await axios.get('/empleos', {
					headers: rootGetters.tokenHeader.headers,
					params: params
				})

				//console.log('Respuesta del api', response.status, response.data)
				
				commit('setEmpleos', response.data)
			} catch(e) {
				console.log(e)
			}

		},
		async masEmpleos({ state, commit, rootGetters }) {
			commit('addPage')

			try {
				const params = new URLSearchParams()
				params.append('titulo', state.titulo)
				params.append('ciudad', state.ciudad)
				params.append('page', state.page)
				params.append('page_size', state.page_size)

				const response = await axios.get('/empleos', {
					headers: rootGetters.tokenHeader.headers,
					params: params
				})

				commit('agregarEmpleos', response.data)
				//commit('setEmpleos', response.data)
			} catch(e) {
				console.log(e)
			}
		},
		async crearEmpleo({ rootGetters }, payload) {

			try {
				const response = await axios.post('/empleos', payload, rootGetters.tokenHeader)
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
		},
		async misEmpleosGuardados({ rootGetters }) {
			let empleos = []
			try {
				const response = await axios.get(`/empleos/guardados`, rootGetters.tokenHeader)
				if (response.status === 200) {
					empleos = response.data
				}
			} catch(err) {
				console.log(err)
			}
			return empleos
		},
		async misEmpleosAplicados({ rootGetters }) {
			let empleos = []
			try {
				const response = await axios.get(`/empleos/aplicar`, rootGetters.tokenHeader)
				if (response.status === 200) {
					empleos = response.data
				}
			} catch(err) {
				console.log(err)
			}
			return empleos
		},
		// Autocompletado para el buscador de empleos
		async autocompletar({rootGetters}, texto ) {
			let fraces = []

			try {
				const params = new URLSearchParams()
				params.append('titulo', texto)
				const response = await axios.get(`/empleos/autocompletado`, {
					headers: rootGetters.tokenHeader.headers,
					params: params
				})
				if (response.status === 200) {
					fraces = response.data
				}
			} catch(err) {
				console.log(err)
			}

			return fraces
		},

		// traer todas las provincias 
		async getProvincias({rootGetters}) {
			let provincias = []

			try {
				const response = await axios.get('/provincias', rootGetters.tokenHeader)
				if (response.status === 200) {
					provincias = response.data
				}
			} catch(err) {
				console.log(err)
			}
			return provincias
		},

		// traer ciudades en base a la provincia selecionada

		// Traer los empleos pubicados
		async getEmpleosPublicados({ commit, rootGetters}) {
			let publicados = []

			try {
				const response = await axios.get('/empleos/publicados', rootGetters.tokenHeader)
				if (response.status === 200) {
					publicados = response.data
				}
			} catch(err) {
				console.log(err)
			}
			
			commit('setPublicados', publicados)
		},

		// Traer un empleo por el id
		async getEmpleoEmpleoByID({rootGetters}, id) {
			let empleo = {}

			try {
				const response = await axios.get(`/empleos/${id}`, rootGetters.tokenHeader)
				if (response.status === 200) {
					empleo = response.data
				}
			} catch(err) {
				console.log(err)
			}
			
			return empleo
		}
	},
	getters: {

	}
}


export default empleos;
