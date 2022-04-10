import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'
import empleos from './empleos'

Vue.use(Vuex)

const token = 'token'
const user = 'user'
const themedark = 'themedark'

export default new Vuex.Store({
  state: {
		themeDark: localStorage.getItem(themedark) || null,
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
		},
		set_theme(state, data) {
			console.log("Theme dark: " + data)
			state.themeDark = data
			localStorage.setItem(themedark, data)
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
		getURLAvatar() {
			//return axios.defaults.baseURL + '/users/avataraws/' + state.user.urlAvatar
			return 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
		}
	},
  modules: {
		empleos: empleos
  }
})
