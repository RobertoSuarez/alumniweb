<template>
  <v-app>
		<TheNavBar></TheNavBar>

    <v-main class="fondo">
      <router-view></router-view>
    </v-main>

		<TheFooter/>
  </v-app>
</template>

<script>
import TheFooter from '../components/TheFooter.vue'
import TheNavBar from '../components/TheNavBar.vue'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'Main',
	components: { TheFooter, TheNavBar },
	data() {
		return {
			estaAutenticado: false,
			drawer: true,
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

<style scoped>
.fondo {
	background: #F4F4F4;

}
</style>
