<template>
	<v-container>
		<div class="my-5">
			<div class="text-h3 text--primary">Publicar un empleo</div>
			<div class="text-h5 text--secondary">Publica un empleo de forma sencilla</div>
		</div>

		<v-row>
			<v-col md="6">
				<v-text-field
					label="Titulo"
					placeholder="Titulo del empleo"
					outlined
					dense
				>
				</v-text-field>
				<v-textarea
					label="Descripción"
					placeholder="Descripción del empleo"
					outlined
					dense
				>
				</v-textarea>
				<v-row>
					<v-col md="6">
						<v-text-field
							label="Profesión"
							outlined
							dense
						></v-text-field>
					</v-col>
					<v-col md="6">
						<v-text-field
							label="Puesto"
							outlined
							dense
						></v-text-field>
					</v-col>
				</v-row>
				<v-text-field
					label="Tipo de empleo"
					outlined
					dense
				></v-text-field>
				<v-row>
					<v-col md="6">
						<v-select
							label="Area"
							outlined
							dense
						></v-select>
					</v-col>
					<v-col md="6">
						<v-select
							label="Subarea"
							outlined
							dense
						></v-select>
					</v-col>
				</v-row>
			</v-col>
			<v-col md="6">
				<v-row>
					<v-col md="6" class="pb-0">
						<v-text-field
							label="Sueldo"
							outlined
							dense
						></v-text-field>
					</v-col>
					<v-col md="6" class="pb-0">
						<v-text-field
							label="Tiempo de experiencia"
							outlined
							dense
						></v-text-field>
					</v-col>
					<v-col md="6" class="py-0">
						<v-text-field
							label="Jornada"
							outlined
							dense
						></v-text-field>
					</v-col>
					<v-col md="6" class="py-0">
						<v-text-field
							label="Tipo de contrato"
							outlined
							dense
						></v-text-field>
					</v-col>

					<v-col md="6" class="pt-2">
						<v-select
							label="Provincia"
							outlined
							dense
						></v-select>
					</v-col>
					<v-col md="6" class="pt-2">
						<v-select
							label="Ciudad"
							outlined
							dense
						></v-select>
					</v-col>
					
				</v-row>
				
				<v-select
					label="Empresa"
					outlined
					dense
				></v-select>

				<v-checkbox
					label="¿Este trabajo es apto para personas con discapacidad?"
				></v-checkbox>

				
			</v-col>
		</v-row>

		<div class="d-flex align-center">
			<v-spacer></v-spacer>
			<v-btn
				color="red"
				text
				large
				class="mr-3"
			>
				Cancelar
			</v-btn>
			<v-btn
				color="success"
				large
			>
				Publicar empleo
			</v-btn>
		</div>


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
