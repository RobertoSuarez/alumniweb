<template>
	<v-menu
		ref="menu"
		v-model="menu"
		:close-on-content-click="false"
		offset-y
		min-width="auto"
	>
		<template v-slot:activator="{ on, attrs }">
			<v-text-field
			v-model="fecha"
			:label="label"
			readonly
			v-bind="attrs"
			v-on="on"
			></v-text-field>
		</template>

		<v-date-picker
			v-model="fecha"
			locale="es"
			:active-picker.sync="activePicker"
			:max="max"
			min="1950-01-01"
			@change="save"
		></v-date-picker>

	</v-menu>
</template>

<script>
import format from 'date-fns/format'

export default {
	name: 'FechaSelector',
	props: ['label', 'date', 'max'],
	mounted() {
		this.fecha = format(new Date(this.date), "yyyy-MM-d")
	},
	data() {
		return {
			activePicker: null,
			menu: false,
			fecha: null
		}
	},
	methods: {
		save(date) {
			this.$refs.menu.save(date)
			this.$emit('fecha', new Date(date).toISOString())
		}
	},
	watch: {
		menu(val) {
			val && setTimeout(() => (this.activePicker = 'YEAR'))
		}
	},
	computed: {
		fechaString() {
			return this.date.toLocaleString()
		}
	}

}
</script>

<style>

</style>
