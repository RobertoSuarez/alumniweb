<template>
	<v-overlay @click="clickOverlay" :dark="false" :value="over">
		<TheLogin></TheLogin>
	</v-overlay>
</template>

<script>

import TheLogin from '../components/TheLogin.vue'

export default {
	name: 'Login',
	components: { TheLogin },
	data() {
		return {
			over: true
		}
	},
	methods: {
		clickOverlay(e) {
			if (e.target.className === 'v-overlay__scrim') {
				//this.over = false
				this.$router.push({
					name: 'inicio'
				})
			}

		}
	}
}
</script>

<style>

</style>
