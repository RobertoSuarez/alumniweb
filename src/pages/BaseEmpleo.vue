<template>
	<v-container>
		<v-row class="mt-2">

			<v-col cols="12" md="8">

				<v-card elevation="4" :loading="cargando" :disabled="cargando">
					<v-card-title class="d-flex align-start">
						<v-avatar color="grey" size="100" tile>
							<v-img src="/empresa.jfif" class="card_img"></v-img>
						</v-avatar>
						<v-spacer></v-spacer>
						<v-btn class="my-0" outlined color="blue"><v-icon left>fas fa-share-alt</v-icon> Compartir</v-btn>
					</v-card-title>

					<v-card-text>
						<div class="text--primary font-weight-bold text-h4">{{empleo.titulo}}</div>
						<div class="text--primary font-weight-bold text-subtitle-1">{{ empleo.area}} · {{ empleo.subarea }}</div>
						<div class="text--secondary font-weight-regular text-subtitle-1">{{ empleo.jornada }}</div>
						<div class="text--secondary font-weight-regular text-subtitle-1">Publicado: {{ fecha }}</div>

					</v-card-text>
					<v-card-actions>
						<v-btn color="blue" text>Mas trabajos de esta empresa</v-btn>
					</v-card-actions>
					<v-card-actions>
						<v-btn class="ml-2" color="secondary" large>
							<v-icon left>fas fa-check</v-icon>
							Aplicar al trabajo
						</v-btn>
					</v-card-actions>

					<v-divider></v-divider>

					<v-card-text>
						<div class="text--primary font-weight-bold text-subtitle-1">Descripción</div>
						<div class="text--primary font-weight-regular text-body-1">{{ empleo.descripcion }}</div>
					</v-card-text>


				</v-card>
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


				<OfertaList :ofertas="empleos.empleos"></OfertaList>


			</v-col>
		</v-row>

	</v-container>
</template>

<script>

import OfertaList from '../components/OfertaList.vue'
import { mapState, mapActions } from 'vuex'
import axios from '../plugins/axios'
import helpers from '../helpers'

export default {
	name: 'Empleo',
	props: {
		idempleo: {
			type: [String, Number],
			required: true,
		}
	},
	components: { OfertaList },
	mounted() {

		this.estadoCargando(this.cargarTrabajo)
		if (this.empleos.empleos.length < 1) {
			this.empleosBuscar({
				areas: [],
				ciudades: [],
				busquedad: ''
			})
		}
		//console.log('montado con ' + this.idempleo)
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
			empleo: {},
			cargando: false,
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
		async estadoCargando(func) {
			this.cargando = true
			await func()
			this.cargando = false
		},
		async cargarTrabajo() {
			this.cargando = true
			//console.log(this.cargando)
			try {
				let response = await axios.get(`/ofertas/${this.idempleo}`)
				//console.log(response.data)
				this.empleo = response.data
			}catch(e) {
				console.log(e)
			} finally {
				this.cargando = false
			}

		},

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
		idempleo: function() {
			this.estadoCargando(this.cargarTrabajo)
		},
		tags: {
			handler: function(newValue) {
				let result = newValue.filter(tag => tag.activa)
				console.log(result)
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
