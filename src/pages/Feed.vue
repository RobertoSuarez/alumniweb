<template>
	<v-container>
		<v-row>

			<v-col cols="12">
				<p class="text-h3">super buscador</p>
			</v-col>

			<!-- <v-col cols="12" md="3" >
				<div class="contenido blue">Opciones</div>
			</v-col> -->

			<v-col cols="12" md="9" >
				<!-- <div class="contenido green">Resultados</div> -->
				<OfertaList :ofertas="ofertas"/>
			</v-col>

			<!-- <v-col cols="12" md="3" >
				<div class="contenido red"></div>
			</v-col> -->
		</v-row>
	</v-container>
</template>

<script>
import OfertaList from '../components/OfertaList.vue'


export default {
	name: 'feed',
	components: { OfertaList },
	data() {
		return {
			ofertas: []
		}
	},
	async mounted() {
		try {
			const response = await this.axios.get('/ofertas')
			this.ofertas = response.data
		} catch(e) {
			console.log('Error en la api' + e)
		}
	}
}
</script>

<style>

.contenido {
	height: 500px;
}
</style>
