<template>
	<v-app>
		<v-app-bar
			app
			color="primary"
			elevate-on-scroll
		>
			<v-container class="d-flex align-center">
				<img src="../assets/logo2.png" width="100"/>
			
				<v-btn class="mx-1" text small color="white" @click="$vuetify.goTo('#noticias')">Noticias</v-btn>
				<v-btn class="mx-1" text small color="white" @click="$vuetify.goTo('#empleo')">Ofertas laborales</v-btn>
				<v-btn class="mx-1" text small color="white" @click="$vuetify.goTo('#empresa')">Empresas</v-btn>

				<v-spacer></v-spacer>

				<v-btn color="info" dark @click="$router.push({name: 'login'})">Inciar Sesión</v-btn>
			</v-container>


		</v-app-bar>


		<v-main>
			<router-view></router-view>
		</v-main>

		<TheFooter></TheFooter>
	</v-app>
</template>

<script>
import TheFooter from '../components/TheFooter.vue'

import { mapState } from 'vuex'

export default {
	components: { TheFooter },
	data() {
		return {
			overlay: false,
			modal: 'login',
		}
	},
	methods: {
		abrirModal(tipo) {
			this.modal = tipo
			this.overlay = true
		},
		cerrarModal() {
			this.overlay = false
			console.log('Modal cerrado')
		},
		clickOverlay(e) {
			if (e.target.className === 'v-overlay__scrim') {
				this.overlay = false
			}

		}
	},
	computed: {
		...mapState(['token'])
	}
}
</script>

<style>

</style>
