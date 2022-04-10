<template>
  <v-app>
		<v-app-bar
					app
					color="white"
					flat
				>

					<v-tabs
						centered
						class="ml-n9"
						color="grey darken-1"
					>
						<v-tab
							v-for="(item, index) in menu"
							:key="index"
							:to="{ name: item.pagina, params: item.params }"
						>
							{{ item.titulo }}
						</v-tab>
					</v-tabs>

				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn icon v-on="on" v-bind="attrs">
							<v-avatar size="32" color="grey darken-1 shrink" >
								<v-img :src="getURLAvatar"></v-img>
							</v-avatar>
						</v-btn>
					</template>

					<v-card width="400">

						<v-list>
							<v-list-item link :to="{name: 'perfil', params: { iduser: user.id} }">
								<v-list-item-avatar>
									<v-img :src="getURLAvatar"></v-img>
								</v-list-item-avatar>

								<v-list-item-content>
									<v-list-item-title>{{user.email}}</v-list-item-title>
									<v-list-item-subtitle>Ver Perfil</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

							<v-list-item>
								<v-list-item-icon>
									<v-icon>fas fa-adjust</v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title>Modo oscuro</v-list-item-title>
								</v-list-item-content>
								<v-list-item-action>
									<v-switch
										persistent-hint
										inset
									></v-switch>

								</v-list-item-action>
							</v-list-item>

							<v-list-item link @click="cerrarSesion">
								<v-list-item-icon>
									<v-icon>fas fa-sign-out-alt</v-icon>
								</v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title>Cerrar sesión</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-card>
				</v-menu>

    </v-app-bar>

		<v-main class="grey lighten-3">
			<router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
	name: 'Main',
	// components: { TheFooter, TheNavBar },
	mounted()  {
		//console.log(this.user)
		this.menu = [
			{
				titulo: 'Empleos',
				pagina: 'Ofertas Laborales',
				params: { }
			},
			{
				titulo: 'Perfil',
				pagina: 'perfil',
				params: { iduser: this.user.id }
			},
			{
				titulo: 'Noticias',
				pagina: 'noticias'
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
			user: state => state.user
		}),
		...mapGetters(['getURLAvatar']),
	}
}
</script>

<style scoped>
.fondo {
	background: var(--v-background-base) !important;

}
</style>
