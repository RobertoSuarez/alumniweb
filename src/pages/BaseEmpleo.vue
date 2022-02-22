<template>
	<v-container>
		<h1>Empleo: {{idempleo}}</h1>

	</v-container>
</template>

<script>
export default {
	name: 'Empleo',
	props: {
		idempleo: {
			type: Number,
			required: true,
		}
	},
}
</script>

<style scoped>

</style>
