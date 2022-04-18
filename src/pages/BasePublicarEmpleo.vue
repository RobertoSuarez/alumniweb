<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="10" md="6">
				<div class="text-h4 text-center my-5">Creando un empleo</div>
				<v-stepper
					v-model="paso"
					vertical
				>
					<v-stepper-step
						:complete="paso > 1"
						step="1"
					>
						Datos principales
					</v-stepper-step>

					<v-stepper-content step="1">
						<v-card>
							<v-card-text>
								<v-text-field label="Título" v-model="empleo.titulo"></v-text-field>
								<v-textarea label="Descripción del empleo" v-model="empleo.descripcion"></v-textarea>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn @click="siguiente" color="primary" text>Siguiente</v-btn>
							</v-card-actions>
						</v-card>
					</v-stepper-content>

					<v-stepper-step
						:complete="paso > 2"
						step="2"
					>
						Infomración del empleo
					</v-stepper-step>
					<v-stepper-content step="2">
						<v-card>
							<v-card-text>
								<v-text-field label="Profesión" v-model="empleo.profesion"></v-text-field>
								<v-text-field label="Puesto" v-model="empleo.puesto"></v-text-field>
								<v-text-field label="Tipo de empleo" v-model="empleo.tipoEmpleo"></v-text-field>
								<v-row>
									<v-col cols="6">
										<v-select 
											:items="[1,2]"
											label="Area" 
											v-model="empleo.areaid">
										</v-select>
									</v-col>
									<v-col cols="6">
										<v-select 
											:items="[1,2]"
											label="Subarea" 
											v-model="empleo.subareaid">
										</v-select>
									</v-col>
								</v-row>
								<v-text-field label="Sueldo" v-model="empleo.sueldo"></v-text-field>
								<v-text-field label="Tiempo de experiencia" v-model="empleo.tiempoExperiencia"></v-text-field>
								<v-select 
									v-model="empleo.jornada"
									label="Jornada" 
									:items="['Completa', 'Medio tiempo']">
								</v-select>
								<v-select 
									v-model="empleo.tipoContrato"
									label="Tipo de contrato" 
									:items="['Remoto', 'Presencial']">
								</v-select>
								<v-text-field 
									v-model="empleo.conocimientosAdicionales"
									label="Conociminetos adicionales">
								</v-text-field>
								<v-select 
									v-model="empleo.ciudad"
									label="Ciudad" 
									:items="['Quevedo', 'Valencia']">
								</v-select>
								<v-checkbox 
									v-model="empleo.postulanteDiscapacidad"
									label="Trabajo apto para personas con discapacidad">
								</v-checkbox>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn @click="atras" text>Atras</v-btn>
								<v-btn @click="siguiente" color="primary" text>Siguiente</v-btn>
							</v-card-actions>
						</v-card>
					</v-stepper-content>

					<v-stepper-step
						:complete="paso > 3"
						step="3"
					>
						Infomración de la empresa
					</v-stepper-step>

					<v-stepper-content step="3">
						<v-card>
							<v-card-text>
								<v-select label="Empresa" :items="['Coca cola', 'Micronet']"></v-select>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn @click="atras" text>Atras</v-btn>
								<v-btn @click="crear" color="primary">Crear publicación</v-btn>
							</v-card-actions>
						</v-card>
					</v-stepper-content>

				</v-stepper>
			</v-col>
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
				areaid: 0,
				subareaid: 0,
				sueldo: '',
				tiempoExperiencia: '',
				jornada: '',
				tipoContrato: '',
				conocimientosAdicionales: '',
				ciudad: '',
				postulanteDiscapacidad: false,
				empresaid: 1,

			},
		}
	},
	methods: {
		...mapActions('empleos', ['crearEmpleo']),
		async crear() {
			let data = this.crearEmpleo(this.empleo)
			if (data) {
				console.log('Creado con exito')
				this.$router.push({ name: 'Ofertas Laborales'})
			} else {
				console.log('Fatal no se creo nada')
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
