<template>
		<v-container>
			<v-row class="mt-2">

				<v-col sm="12" md="3">

					<!-- Menu de opciones -->
					<div style="position: sticky; top: 76px">
						<p class="text-h6">Filtros</p>
						<v-expansion-panels class="mb-2">
							<v-expansion-panel class="mb-1">
								<v-expansion-panel-header expand-icon="fa-angle-down">
									Área
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<v-radio-group mandatory v-model="categoriaSeleccionada">
										<v-radio v-for="(ctg, index) in categorias" :key="index" :label="ctg" :value="ctg"/>
									</v-radio-group>
								</v-expansion-panel-content>
							</v-expansion-panel>

							<v-expansion-panel class="mb-1">
								<v-expansion-panel-header expand-icon="fa-angle-down">
									Localidad
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<v-radio-group mandatory v-model="ciudadSeleccionada">
										<v-radio v-for="(ciudad, index) in ciudades" :key="index" :label="ciudad" :value="ciudad"/>
									</v-radio-group>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>

						<v-btn color="primary" :to="{name: 'publicar empleo'}" block outlined>
							Publicar un empleo
						</v-btn>
          </div>





				</v-col>

				<v-col sm="12" md="9">
					<p class="text-h6">Empleos encontrados: {{lenOfetas}} - Contador: {{ a.contador }}</p>

					<OfertaList :ofertas="empleos.empleos"></OfertaList>

				</v-col>
			</v-row>


		</v-container>

</template>

<script>


import OfertaList from '../components/OfertaList.vue'
import { mapState } from 'vuex'

export default {
	name: 'BaseEmpleos',
	components: {  OfertaList },
	data() {
		return {
			categorias: ['Todas', 'Ingenieria', 'Aquitectura', 'Diseña grafico', 'Legales'],
			categoriaSeleccionada: '',
			ciudades: ['Todas', 'Quevedo', 'Buena fe'],
			ciudadSeleccionada: ''
		}
	},
	computed: {
		...mapState({
			a: state => state.a,
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
