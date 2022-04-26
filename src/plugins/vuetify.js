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
				secondary: '#e94948',
				muted: '#F3F3F3',
				accent: '#ffc107',
				error: '#CC2872',
				info: '#0086E0',
				success: '#22B54B',
				warning: '#DD8706',
				background: colors.grey.lighten4,
			},
			dark: {
				primary: '#009549',
				secondary: '#406661',
				background: colors.grey.darken4
			}
		}
	}
});
