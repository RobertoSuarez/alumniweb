import axios from 'axios'

export default axios.create({
	baseURL: 'https://alumniuteq.herokuapp.com/api/v1',
	headers: {}
})
