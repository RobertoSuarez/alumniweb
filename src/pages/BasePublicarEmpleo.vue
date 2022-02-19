<template>

		<v-container>
			<v-row  justify="center">
				<v-col cols="10" md="7">
					<p class="text-h3 mb-10 font-weight-bold">Publicar un empleo</p>


							<v-form @click.prevent="crearEmpleo">
								<v-text-field
									background-color="white"
									label="Titulo de tu oferta laboral"
									outlined
									v-model="empleo.titulo"
								></v-text-field>
								<v-textarea
									v-model="empleo.descripcion"
									background-color="white"
									label="Descripción"
									outlined
									hide-details
								></v-textarea>
								<v-checkbox
									v-model="empleo.postulanteDiscapacidad"
									label="Este trabajo es apto para personas con discapacidad.">
								</v-checkbox>

								<v-row class="">
									<v-col cols="6">
										<v-text-field
											v-model="empleo.area"
											background-color="white"
											label="Aréa de empleo"
											outlined
										></v-text-field>

									</v-col>

									<v-col cols="6">
										<v-text-field
											v-model="empleo.subarea"
											background-color="white"
											label="Subárea de empleo"
											outlined
										></v-text-field>
									</v-col>

									<v-col cols="6">
										<v-text-field
											v-model="empleo.provincia"
											background-color="white"
											label="Provincia"
											outlined
										></v-text-field>

									</v-col>
									<v-col cols="6">
										<v-text-field
											v-model="empleo.ciudad"
											background-color="white"
											label="Ciudad"
											outlined
										></v-text-field>

									</v-col>
								</v-row>

								<v-text-field
									v-model="empleo.puesto"
									background-color="white"
									label="Puesto"
									outlined
								></v-text-field>

								<v-text-field
									v-model="empleo.tipoEmpleo"
									background-color="white"
									label="Tipo de Empleo"
									outlined
								></v-text-field>


								<v-text-field
									v-model="empleo.sueldo"
									background-color="white"
									label="sueldo"
									outlined
								></v-text-field>

								<v-text-field
									v-model="empleo.tiempoExperiencia"
									background-color="white"
									label="tiempoExperiencia"
									outlined
								></v-text-field>

								<v-text-field
									v-model="empleo.jornada"
									background-color="white"
									label="jornada"
									outlined
								></v-text-field>

								<v-text-field
									v-model="empleo.tipoContrato"
									background-color="white"
									label="tipoContrato"
									outlined
								></v-text-field>

								<div class="d-flex">
									<v-spacer></v-spacer>
									<v-btn text>Cancelar</v-btn>
									<v-btn color="primary" @click.prevent="crearEmpleo" class="ml-3" >Publicar Empleo</v-btn>

								</div>

							</v-form>




				</v-col>

				<!-- <v-col cols="4">
					<v-sheet height="400px" class="panelimagen">
						sdf
					</v-sheet>
				</v-col> -->

			</v-row>
		</v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'BaseFeed',
	components: { },
	data() {
		return {
			paso: 1,
			empleo: {
				titulo: '',
				descripcion: '',
				profesion: '',
				puesto: '',
				tipoEmpleo: '',
				area: '',
				sueldo: '',
				tiempoExperiencia: '',
				jornada: '',
				tipoContrato: '',
				conocimientosAdicionales: '',
				ciudad: '',
				postulanteDiscapacidad: false,

			},
		}
	},
	methods: {
		...mapActions({
			empleosCrear: 'empleos/crearEmpleo'
		}),
		async crearEmpleo() {
			const data = await this.empleosCrear(this.empleo)
			if (data) {
				console.log('Empleo creado correctamente')
				this.empleo = {}
				this.$router.push({
					name: 'Ofertas Laborales'
				})
			} else {
				console.log('Parece que fallo algo')
			}


		},
		siguiente() {
			this.paso++
		},
		atras() {
			this.paso--
		}
	}
}
</script>

<style scoped>

.panelimagen {
	position: sticky;
	top: 75px;
	margin-top: 6em;
}
</style>
