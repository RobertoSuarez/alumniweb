import axios from 'axios'
import router from '../router/router'
import store from '../store/index'

console.log(process.env.VUE_APP_API_URL)

const axioshttp = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	// headers: {
	// 	'Authorization': 'Bearer ' + store.state.token
	// }
})

// interceptores
axioshttp.interceptors.request.use(function (config) {
    // Hacer algo antes de que se envíe la solicitud
	return config;
}, function (error) {
	
	// Hacer algo con el error de solicitud
	return Promise.reject(error);
})

axioshttp.interceptors.response.use(function(response) {
	// hace algo con los datos de respuesta
	console.log('intersector: ', response)
	
	return response
}, function (error) {
	// Cualquier código de estado que se encuentre fuera del rango de 2xx hace que esta función se active
	// Hacer algo con error de respuesta
	if (401 === error.response.status) {
		console.log('El token fallo, se debe cerrar todo')
		store.dispatch('signOut')
		router.push({name: 'inicio'})
	}


	return Promise.reject(error);
})


export default axioshttp