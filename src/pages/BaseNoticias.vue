<template>
	<v-container>

		<v-row class="my-5">
			<v-col sm="3" >
				<v-expansion-panels>

					<v-expansion-panel>

						<v-expansion-panel-header expand-icon="fa-angle-down">
							Filtros
						</v-expansion-panel-header>

						<v-expansion-panel-content>
							<v-radio-group :mandatory="true" v-model="seleccionado">
								<v-radio v-for="(opcion, index) in opciones" :key="index" :label="opcion" :value="index"/>
							</v-radio-group>
						</v-expansion-panel-content>
					</v-expansion-panel>

				</v-expansion-panels>
			</v-col>

			<v-col sm="9" lg="7">
				Cards of news
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'BaseNoticias',
	data() {
		return {
			opciones: ['Todas', 'Nuevas', 'Mas relevantes', 'Politica', 'Cronica Roja'],
			seleccionado: 0,
		}
	}

}
</script>

<style>

</style>
