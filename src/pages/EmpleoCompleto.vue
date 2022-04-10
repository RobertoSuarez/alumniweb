<template>
	<v-container>
		<v-row class="mt-2">

			<v-col cols="12" md="8">

				<v-card v-if="empleo" elevation="4" :loading="cargando" :disabled="cargando">
					<v-card-title class="d-flex align-start">
						<v-avatar color="grey" size="100" tile>
							<v-img src="/empresa.jfif" class="card_img"></v-img>
						</v-avatar>
						<v-spacer></v-spacer>
						<v-btn class="my-0" outlined color="blue"><v-icon left>fas fa-share-alt</v-icon> Compartir</v-btn>
					</v-card-title>

					<v-card-text>
						<div class="">{{empleo.titulo}}</div>
						<div class="">Area: {{empleo.area.titulo}} · Subarea: {{empleo.subarea.titulo}}</div>
						<div class="">{{ empleo.jornada }}</div>
						<div class="">Publicado: {{ fecha }}</div>
						<div class="text-h6" v-if="aplicado">Aplicación enviada</div>

					</v-card-text>
					<!-- <v-card-actions>
						<v-btn color="blue" text>Mas trabajos de esta empresa</v-btn>
					</v-card-actions> -->
					<v-card-actions>
						<!-- Aplicar al trabajo -->
						<v-btn v-if="!aplicado" class="ml-2" color="secondary" large @click="aplicar">
							<v-icon left>fas fa-check</v-icon>
							Aplicar al trabajo
						</v-btn>

						<v-btn v-else text @click="deshacer">
							Deshacer aplicación
						</v-btn>
					</v-card-actions>

					<v-divider></v-divider>

					<v-card-text>
						<div class="text--primary font-weight-bold text-subtitle-1">Descripción</div>
						<div class="text--primary font-weight-regular text-body-1">{{ empleo.descripcion }}</div>
					</v-card-text>



				</v-card>

				<v-skeleton-loader
					v-else
					type="card"
				></v-skeleton-loader>

			</v-col>

			<v-col cols="12" md="4">
				<div class="mb-2">
					<v-chip
						v-for="(tag, index) in tags"
						:key="index"
						class="mr-2"
						link
						@click=" tag.activa = !tag.activa"
						:color="tag.activa ? 'primary': ''"
					>
						{{ tag.name }}
					</v-chip>
				</div>


				<EmpleoList :ofertas="empleos.empleos"></EmpleoList>


			</v-col>
		</v-row>

	</v-container>
</template>

<script>

import EmpleoList from '../components/EmpleoList.vue'
import { mapState, mapActions } from 'vuex'
import axios from '../plugins/axios'
import helpers from '../helpers'

export default {
	name: 'EmpleoCompleto',
	props: {
		idempleo: {
			type: [String, Number],
			required: true,
		}
	},
	components: { EmpleoList },
	mounted() {
		if (this.empleos.empleos.length < 1) {
			this.empleosBuscar({
				areas: [],
				ciudades: [],
				busquedad: ''
			})
		}

	},
	data() {
		return {
			sugerencias: [
				'Desarrollador de juegos',
				'Desarrollador Backend',
				'Ingeniero en alimentos',
				'Ingeniero en telematica',
				'Ingeniero en software',
				],
			empleo: null,
			id: null,
			cargando: false,
			aplicado: false,
			tags: [
				{name: 'Backend', activa: false},
				{name: 'Frontend', activa: false},
				{name: 'Mecanica', activa: false}
			],
		}
	},
	methods: {
		...mapActions({
			empleosBuscar: 'empleos/buscar'
		}),
		...mapActions('empleos', ['aplicarEmpleo', 'estadoEmpleo', 'removerAplicacion']),
		async cargarEmpleo(id) {
			this.cargando = true
			try {
				let response = await axios.get(`/empleos/${id}`)
				//console.log(response)
				this.empleo = response.data
			}catch(e) {
				//console.log(e)
			} finally {
				this.cargando = false
			}

			let { estado } = await this.estadoEmpleo(this.empleo.id)
			this.aplicado = estado

		},
		async aplicar() {
			let ok = await this.aplicarEmpleo(this.empleo.id)
			this.aplicado = ok
			console.log('Aplicación de empleo: ', ok)
		},
		async deshacer() {
			let ok = await this.removerAplicacion(this.empleo.id)
			// como se removio la aplicación del empleo, entonces se quita que este aplicado
			if (ok) {
				this.aplicado = false
			}

			console.log(`Deshacer aplicación al trabajo ${this.empleo.id}`)

		}

	},
	computed: {
		...mapState({
			empleos: state => state.empleos
		}),
		fecha() {
			return helpers.fechaRelativa(this.empleo.fecha)
		}
	},
	watch: {
		'$route.params': {
			handler(newValue) {
				const { idempleo } = newValue
				//console.log(idempleo)
				this.cargarEmpleo(idempleo)
			},
			immediate: true
		},
		tags: {
			handler: function(newValue) {
				let result = newValue.filter(tag => tag.activa)
				//console.log(result)
				this.empleosBuscar({
					areas: result.map(tag => tag.name),
					ciudades: [],
					busquedad: ''
				})
			},
			deep: true
		}
	}
}
</script>

<style scoped>

</style>
