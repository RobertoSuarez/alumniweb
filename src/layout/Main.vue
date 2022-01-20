<template>
  <v-app>
		<v-app-bar
      app
      elevation="4"
    >
			<v-toolbar-title>
				<div class="d-flex align-center">
					<router-link :to="{name: 'feed'}">
						<v-img
							alt="UTEQ Logo"
							class="shrink mx-3"
							contain
							src="@/assets/uteqlogo.png"
							width="40"
						/>
					</router-link>
						<span class="text-h5 d-none d-md-flex">Universidad Técnica Estatal de Quevedo</span>
				</div>
			</v-toolbar-title>

			<v-spacer></v-spacer>


			<v-menu
				open-on-hover
				offset-y
			>
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						v-bind="attrs"
						v-on="on"
						small
						elevation="0"
					>
						Noticias y eventos<v-icon class="mx-2">fas fa-angle-down</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item link>
						<v-list-item-title>Noticias</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-btn
					small
					elevation="0"
				>
					Publicar un empleo<v-icon class="mx-2">fas fa-briefcase</v-icon>
			</v-btn>




			<div v-if="token != null">

				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn
							v-on="on"
							v-bind="attrs"
							elevation="2"
							fab
							small
							class="mx-2"
						>
							<v-icon>fas fa-user</v-icon>
						</v-btn>
					</template>

					<v-card width="400">

						<v-list>
							<v-list-item link>
								<v-list-item-avatar>
									<v-icon>fas fa-user</v-icon>
								</v-list-item-avatar>

								<v-list-item-content>
									<v-list-item-title>{{user.email}}</v-list-item-title>
									<v-list-item-subtitle>Ver Perfil</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</v-list>

						<!-- <v-card-text class="d-flex justify-center">
							<v-avatar
								color="grey"
							>
								<v-icon>fas fa-user</v-icon>
							</v-avatar>
						</v-card-text>

						<v-card-text>
							<p class="text-subtitle1 text-center">{{user.email}}</p>
						</v-card-text> -->

						<v-list>
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
			</div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

		<TheFooter/>
  </v-app>
</template>

<script>
import TheFooter from '../components/TheFooter.vue'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'Main',
	components: { TheFooter },
	data() {
		return {
			estaAutenticado: false
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
		...mapState(['token', 'user'])
	}
}
</script>

<style>

</style>
