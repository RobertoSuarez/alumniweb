<template>
		<v-container>
			<BuscadorBarra v-model="texto" @buscar="buscar" :cargando="cargando"></BuscadorBarra>
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
import { mapState, mapActions } from 'vuex'
import BuscadorBarra from '../components/BuscadorBarra.vue'
import MenuEmpleo from '../components/MenuEmpleo.vue'

export default {
	name: 'EmpleoBuscador',
	components: {  EmpleoList, BuscadorBarra, MenuEmpleo },
	mounted() {
		if (this.empleos.empleos.length < 1) {
			this.buscar()
		}

		this.obtenerCategorias()
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
		...mapActions({
			empleosBuscar: 'empleos/buscar'
		}),
		async buscar() {
			this.cargando = true
			await this.empleosBuscar({
				areas: this.categoriaSeleccionada,
				ciudades: this.ciudadSeleccionada,
				busquedad: this.texto
			})
			//console.log('Completado')
			this.cargando = false
		},
		async obtenerCategorias() {
			try {
				const response = await this.axios.get('/areas')
				//console.log(response.data)
				this.categorias = response.data.map(cat => cat.titulo)
				//console.log(this.categorias)
			} catch (err) {
				console.log(err)
			}
		}
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
