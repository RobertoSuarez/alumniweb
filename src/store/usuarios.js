import axios from '../plugins/axios'


const usuarios = {
	namespaced: true,
	state: {

	},
	mutations: {

	},
	actions: {
		// con esto traemos todo el perfil del usuario
		async getPerfil({ rootGetters }, id) {
			let perfil = null
			try {
				const response = await axios.get(`/usuarios/${id}`, rootGetters.tokenHeader)
				if (response.status === 200) {
					perfil = response.data
				}
			} catch(err) {
				console.log(err)
			}

			return perfil
		},

		// Actualizar los datos del usuario en la API REST
		async actualizarDatos({ rootGetters } , {id, datos}) {
			console.log(id, datos)
			let ok = false
			try {
				const response = await axios.put(`/usuarios/${id}/datos`, datos, rootGetters.tokenHeader)
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


export default usuarios
