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
				primary: '#009549',
				primaryL: '#60ad5e',
				primaryD: '#005005',
				secondary: '#69f0ae',
				secondaryL: '#9fffe0',
				secondaryD: '#2bbd7e',
				textP: '#ffffff',
				textS: '#1b5e20',
				muted: '#F3F3F3',
				accent: '#ffc107',
				error: '#CC2872',
				info: '#0086E0',
				success: '#22B54B',
				warning: '#DD8706',
				background: colors.grey.lighten2,
			},
			dark: {
				primary: '#009549',
				secondary: '#406661',
				background: colors.grey.darken4
			}
		}
	}
});
