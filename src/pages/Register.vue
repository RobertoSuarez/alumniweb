<template>
	<v-overlay @click="clickOverlay" :dark="false" v-model="over">
		<TheRegister></TheRegister>
	</v-overlay>
</template>

<script>
import TheRegister from '../components/TheRegister.vue'

export default {
	name: 'Register',
	components: { TheRegister },
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
