import axios from 'axios'
import store from '../store'

console.log(process.env.VUE_APP_API_URL)

export default axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	headers: {
		'Authorization': 'Bearer ' + store.state.token
	}
})
