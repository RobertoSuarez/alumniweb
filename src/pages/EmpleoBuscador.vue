<template>
		<v-container>
			<BuscadorBarra></BuscadorBarra>
			<v-row class="mt-2">
				<v-col sm="12" md="3">
					<!-- Menu de opciones -->
					<div style="position: sticky; top: 76px">
						<MenuEmpleo/>
					</div>
				</v-col>

				<v-col sm="12" md="9">
					<p class="text-h6">{{lenOfetas}} empleos encontrados</p>

					<EmpleoList v-if="empleos.empleos.length > 0" :ofertas="empleos.empleos"></EmpleoList>
					<p v-else class="text-center">No hay empleos de ese tipo</p>

				</v-col>
			</v-row>


		</v-container>

</template>

<script>


import EmpleoList from '../components/EmpleoList.vue'
import { mapState } from 'vuex'
import BuscadorBarra from '../components/BuscadorBarra.vue'
import MenuEmpleo from '../components/MenuEmpleo.vue'

export default {
	name: 'EmpleoBuscador',
	components: {  EmpleoList, BuscadorBarra, MenuEmpleo },
	mounted() {
	},
	data() {
		return {
			cargando: false,
			categorias: [],
			categoriaSeleccionada: [],
			ciudades: ['Los Angeles', 'Buena fe'],
			ciudadSeleccionada: [],
			texto: ''
		}
	},
	methods: {
	},
	computed: {
		...mapState({
			empleos: state => state.empleos
		}),
		lenOfetas() {
			return this.empleos.empleos.length
		}
	}
}
</script>

<style scoped>
</style>
