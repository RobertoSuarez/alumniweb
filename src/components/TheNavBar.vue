<template>
	<div>

	<!-- barra de navegación -->
	<v-app-bar
			app
			elevation="4"
			elevate-on-scroll
			color="white"
			dark
		>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title class="mr-3">
				<router-link :to="{name: 'Ofertas Laborales'}" custom v-slot="{ navigate }">
					<a @click="navigate" class="white--text">{{ nameApp }}</a>
				</router-link>
				<span class="text-overline ml-4">{{ getCurrentNamePage }}</span>
			</v-toolbar-title>

			<v-divider vertical></v-divider>



			<v-spacer></v-spacer>
			<v-toolbar-items class="d-none d-sm-flex">

				<v-btn text :to="{name: 'Ofertas Laborales'}">
					<v-icon left>fas fa-briefcase</v-icon>
					Trabajos
				</v-btn>
				<v-btn text :to="{name: 'noticias'}">
					<v-icon left>far fa-newspaper</v-icon>
					Noticias
				</v-btn>

			</v-toolbar-items>

			<div class="ml-5">

				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn icon v-on="on" v-bind="attrs">
							<v-avatar >
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
										v-model="isDark"
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
			</div>
		</v-app-bar>

		<!-- Menu desplegable -->
		<v-navigation-drawer
			v-model="drawer"
			absolute
			temporary
		>

			<!-- <v-list>
				<v-list-item link :to="{name: 'perfil', params: { iduser: user.id } }">
					<v-list-item-avatar>
						<v-img :src="getURLAvatar"></v-img>
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title class="text-h6">{{user.nombres}}</v-list-item-title>
						<v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-list> -->

			<v-list>
				<v-list-item>
					<v-list-item-title class="text-h5">{{nameApp}}</v-list-item-title>
				</v-list-item>
			</v-list>

			<v-divider></v-divider>

			<v-list dense>
				<v-list-item-group
					v-model="select"
					mandatory
				>

					<v-list-item
						v-for="(op, i) in menuOpciones"
						:key="i"
						link
						@click.stop="() => {irA (op.nameComponent, i)}"
					>
						<v-list-item-icon>
							<v-icon>{{op.icon}}</v-icon>
						</v-list-item-icon>
						<v-list-item-title>{{op.titulo}}</v-list-item-title>
					</v-list-item>

				</v-list-item-group>




			</v-list>

		</v-navigation-drawer>

	</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'


export default {
	name: 'TheNavBar',
	components: {  },
	mounted() {

		this.isDark = localStorage.getItem('themedark') === 'true'
	},
	data() {
		return {
			drawer: false,
			isDark: false,
			select: 0,
			seleccionado: 0,
			menuOpciones: [
				{
					titulo: 'Ofertas laborales',
					nameComponent: 'Ofertas Laborales',
					icon: 'fas fa-briefcase',
					textAction: '5',
				},
				{
					titulo: 'Noticias',
					nameComponent: 'noticias',
					icon: 'far fa-newspaper',
					textAction: '1',
				},
				{
					titulo: 'Empresas',
					nameComponent: 'empresas',
					icon: 'far fa-building',
					textAction: '2',
				}
			]
		}
	},
	methods: {
		...mapActions(['signOut']),
		cerrarSesion() {
			this.signOut()
			this.$router.push({
				name: 'main'
			})
		},
		irA(name, position) {

			if (this.$route.name === name) {
				return
			}

			this.$router.push({
				name: name
			})

			this.seleccionado = position
			this.drawer = false

		},

		nombreComponente() {
			return this.menuOpciones[this.seleccionado].nameComponent
		},
		cambiarTheme() {

		}
	},
	computed: {
		...mapState(['token', 'user', 'nameApp']),
		...mapGetters(['getURLAvatar']),
		getCurrentNamePage() {
			return this.$route.name;
		},
		tituloPagina() {
			return this.menuOpciones[this.seleccionado].titulo
		}
	},
	watch: {
		isDark(value) {
			localStorage.setItem('themedark', value)
			this.$vuetify.theme.dark = value
		}
	}
}
</script>

<style scoped>


</style>
