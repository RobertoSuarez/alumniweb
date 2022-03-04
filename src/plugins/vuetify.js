import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
			iconfont: 'fa',
	},
	theme: {
		dark: false,
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: '#3BB873',
				secondary: '#406661',
				muted: '#F3F3F3',
				accent: '#ffc107',
				error: '#e91e63',
				info: '#3f51b5',
				success: '#03a9f4',
				warning: '#ffeb3b',
				background: colors.grey.lighten4,
			},
			dark: {
				primary: '#3BB873',
				secondary: '#406661',
				background: colors.grey.darken4
			}
		}
	}
});
