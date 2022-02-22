<template>
	<!-- buscador -->
	<v-form @submit.prevent="buscar" class="contenedor">
		<v-row align="center">
			<v-col  cols="10" md="10">
				<v-text-field
					v-model="texto"
					dense
					class="mx-1"
					label="Buscar Trabajo"
					prepend-inner-icon="fas fa-search"
					hide-details
					outlined
				>
				</v-text-field>
			</v-col>
			<v-col  cols="2" md="2" class="d-flex justify-center">
				<v-btn type="submit"  dark block>Buscar</v-btn>
			</v-col>
		</v-row>
	</v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'BuscadorBarra',
	mounted() {
		console.log(this.empleos.empleos === [])
		if (this.empleos.empleos.length < 1) {
			this.empleosBuscar()
		}
	},
	data() {
		return {
			texto: '',
		}
	},
	methods: {
		...mapActions({
			incrementar: 'a/incrementarContador',
			empleosBuscar: 'empleos/buscar'
		}),
		buscar() {
			this.empleosBuscar()

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
