<template>
	<div>
		<v-btn
			to="/login"
			elevation="0"
			class="ma-2"
		>
			Inciar sesión
		</v-btn>

		<v-btn
			to="/register"
			class="ma-2"
			outlined
			color="primary">
			Registrarse
		</v-btn>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'AlumniAuthButtons',
	computed: {
		...mapState(['token', 'user']),
		size () {
			const size = {xs:'x-small',sm:'small',lg:'large',xl:'x-large'}[this.$vuetify.breakpoint.name];
			return size ? { [size]: true } : {}
		}
	}
}
</script>

<style>

</style>
