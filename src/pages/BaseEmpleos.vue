<template>
		<v-container>
			<BuscadorBarra v-model="texto" @buscar="buscar" ></BuscadorBarra>
			<v-row class="mt-2">
				<v-col sm="12" md="3">
					<!-- Menu de opciones -->
					<div style="position: sticky; top: 76px">
						<p class="text-h6">Filtros</p>

						<v-list class="mb-5" elevation="4">

							<!-- Categorias -->
							<v-list-group
								:value="true"
								color="black"
							>
								<template v-slot:activator>
									<v-list-item-title>Categorias</v-list-item-title>
								</template>

								<v-list-item
									v-for="(ctg, index) in categorias"
									:key="index"
									dense
								>
									<v-checkbox
										dense
										hide-details
										v-model="categoriaSeleccionada"
										:label="ctg"
										:value="ctg">
									</v-checkbox>
								</v-list-item>
							</v-list-group>

							<!-- Ciudades -->
							<v-list-group
								:value="false"
								color="black"
							>
								<template v-slot:activator>
									<v-list-item-title>Ciudades</v-list-item-title>
								</template>

								<v-list-item
									v-for="(ciudad, index) in ciudades"
									:key="index"
									dense
								>
									<v-checkbox
										dense
										hide-details
										v-model="ciudadSeleccionada"
										:label="ciudad"
										:value="ciudad">
									</v-checkbox>
								</v-list-item>
							</v-list-group>

						</v-list>


						<v-btn color="primary" :to="{name: 'publicar empleo'}" block outlined>
							Publicar un empleo
						</v-btn>
          </div>

				</v-col>

				<v-col sm="12" md="9">
					<p class="text-h6">{{lenOfetas}} empleos encontrados</p>

					<OfertaList :ofertas="empleos.empleos"></OfertaList>

				</v-col>
			</v-row>


		</v-container>

</template>

<script>


import OfertaList from '../components/OfertaList.vue'
import { mapState, mapActions } from 'vuex'
import BuscadorBarra from '../components/BuscadorBarra.vue'

export default {
	name: 'BaseEmpleos',
	components: {  OfertaList, BuscadorBarra },
	mounted() {
		if (this.empleos.empleos.length < 1) {
			this.buscar()
		}
	},
	data() {
		return {
			categorias: ['Mecanica', 'backend', 'frontend', 'Legales'],
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
		buscar() {
			this.empleosBuscar({
				areas: this.categoriaSeleccionada,
				ciudades: this.ciudadSeleccionada,
				busquedad: this.texto
			})
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
