<template>
	<!-- buscador -->
	<v-form @submit.prevent="buscar" class="contenedor">
		<v-row align="center">
			<v-col cols="8" sm="10">
				<v-text-field
					v-bind:value="value"
					@input="$emit('input', $event)"
					dense
					class="mx-1"
					label="Buscar Trabajo"
					prepend-inner-icon="fas fa-search"
					hide-details
					outlined
				>
				</v-text-field>
			</v-col>

			<v-col  cols="4" sm="2" class="d-flex justify-center">
				<v-btn type="submit" dark block>Buscar</v-btn>
			</v-col>
		</v-row>
	</v-form>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'BuscadorBarra',
	props: ['value'],
	data() {
		return {
			texto: '',
		}
	},
	methods: {
		buscar() {
			//this.empleosBuscar()
			this.$emit('buscar')

			//this.$store.dispatch('a/incrementarContador')
		}
	},
	computed: {
		...mapState({
			a: state => state.a,
			empleos: state => state.empleos
		}),
	}

}
</script>

<style scoped>
	.contenedor {
		width: 100%;
	}
</style>
