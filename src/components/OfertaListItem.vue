<template>
	<v-card class="card_empleo my-3" elevation="2">

		<v-sheet class="d-flex">
			<div class="ml-4 mt-4" >
				<v-avatar size="80" rounded >
					<v-img src="/empresa.jfif" class="card_img"></v-img>
				</v-avatar>
			</div>

			<v-card-text class="my-0 py-0">
				<v-card-title class="primary--text text-h4" v-text="oferta.titulo"></v-card-title>
				<v-card-subtitle>
					<div class="text--primary text-h6">{{oferta.puesto}}</div>
					<div class="text--secondary">{{oferta.ciudad}}</div>
					<div class="text--secondary">Publicado: {{fechaRelativa}}</div>
				</v-card-subtitle>
				<v-card-text v-text="oferta.descripcion.substr(0, 400)+'...'"></v-card-text>
			</v-card-text>

		</v-sheet>


		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn color="primary" :to="{name: 'empleo', params: {idempleo: oferta.id}}">Saber más</v-btn>
		</v-card-actions>

	</v-card>

</template>

<script>
export default {
	name: 'OfertaListItem',
	mounted() {

	},
	props: {
		oferta: {
			type: Object,
			required: true,
		}
	},
	computed: {
		fechaRelativa() {
			if (!this.oferta.fecha) {
				return ""
			}

			const rtf = new Intl.RelativeTimeFormat("es-ES", {numeric: "auto"});
			const postDate = Date.parse(this.oferta.fecha)
			// convertimos todo a días
			const time = Number.parseInt((postDate - new Date()) / 1000 / 60 / 60 / 24)

			return rtf.format(time, "day")
		}
	}


}
</script>

<style scoped>

.card_empleo {
	border-left: 4px solid  !important;
	border-left-color: var(--v-primary-base) !important;
}

.card_img {

	border-radius: 8px;
}

</style>
