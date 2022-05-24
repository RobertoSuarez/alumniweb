<template>
  <v-app>
		<v-app-bar
			app
			color="primary"
			flat
			dark
			dense
		>
				<v-container class="py-0 fill-height">

					<v-toolbar-title class="d-flex mr-3">
						<router-link to="/" v-slot="{ navigate }" custom>
							<img src="../assets/logo2.png" @click="navigate" width="100" style="cursor: pointer;"/>
						</router-link>

					</v-toolbar-title>
					<v-btn
						plain
						v-for="(item, index) in menu"
						:key="index"
						:to="item.to"
						text
						>
						{{ item.titulo }}
					</v-btn>

					<v-spacer></v-spacer>

					<Notificaciones/>

					<!-- avatar del usuario -->
					<MenuUsuario/>

				</v-container>



		</v-app-bar>

	<v-main class="grey lighten-4">
		<router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
import MenuUsuario from '../components/MenuUsuario.vue'
import Notificaciones from '../components/Notificaciones.vue'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
	name: 'Main',
	// components: { TheFooter, TheNavBar },
	components: { MenuUsuario, Notificaciones },
	mounted()  {
		//console.log(this.user)
		this.menu = [
			{
				titulo: 'Empleos',
				to: { name: 'buscador', params: {}}
			},
			{
				titulo: 'Perfil',
				to: { name: 'perfil', params: { iduser: this.user.id } }
			}
		]
	},
	data() {

		return {
			estaAutenticado: false,
			drawer: true,
			menu: []
		}
	},
	methods: {
		...mapActions(['signOut']),
		cerrarSesion() {
			this.signOut()
			this.$router.push({
				name: 'main'
			})
		}
	},
	computed: {
		...mapState({
			user: state => state.user,
			nameApp: state => state.nameApp
		}),
		...mapGetters(['getURLAvatar']),
	}
}
</script>

<style scoped>
.fondo {
	background: var(--v-background-base) !important;
}

.btn-active {
	color: black !important;
}
</style>
