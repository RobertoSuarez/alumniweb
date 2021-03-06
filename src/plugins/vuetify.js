import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
			iconfont: 'fa',
	},
	theme: {
		themes: {
			light: {
				primary: '#4caf50',
				secondary: '#ff9800',
				accent: '#ffc107',
				error: '#e91e63',
				info: '#3f51b5',
				success: '#03a9f4',
				warning: '#ffeb3b',
			}
		}
	}
});
