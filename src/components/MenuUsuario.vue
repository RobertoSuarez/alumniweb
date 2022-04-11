<template>
	<v-menu offset-y left>
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
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	name: 'MenuUsuario',
	methods: {
		...mapActions(['signOut']),
		cerrarSesion() {
			this.signOut()
			this.$router.push({
				name: 'incio'
			})
		}
	},
	computed: {
		...mapState({
			user: state => state.user
		}),
		...mapGetters(['getURLAvatar'])
	}
}
</script>

<style>

</style>
