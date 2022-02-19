import axios from 'axios'
import store from '../store'

export default axios.create({
	baseURL: 'https://alumniuteq.herokuapp.com/api/v1',
	headers: {
		'Authorization': 'Bearer ' + store.state.token
	}
})
