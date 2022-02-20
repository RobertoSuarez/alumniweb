import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'
import empleos from './empleos'

Vue.use(Vuex)

const token = 'token'
const user = 'user'

export default new Vuex.Store({
  state: {
		token: localStorage.getItem(token) || null,
		user: JSON.parse(localStorage.getItem(user)) || null,
		nameApp: 'Alumni UTEQ'
  },
  mutations: {
		set_token_user(state, data) {
			state.token = data.token
			state.user = data.usuario

			localStorage.setItem(token, state.token)
			localStorage.setItem(user, JSON.stringify(state.user))
		},
		clear_token_user(state) {
			state.token = null
			state.user = null
			localStorage.removeItem(token)
			localStorage.removeItem(user)

		}
  },
  actions: {
		async signIn({ commit }, credenciales) {
			try {
				let response = await axios.post('/auth/login', credenciales)
				commit('set_token_user', response.data)
				return true
			} catch(e) {
				console.log(e)
				return false
			}
		},
		signOut({ commit }) {
			commit('clear_token_user')
		}
  },
	getters: {
		getURLAvatar(state) {
			return axios.defaults.baseURL + '/users/avataraws/' + state.user.urlAvatar
		}
	},
  modules: {
		empleos: empleos
  }
})
