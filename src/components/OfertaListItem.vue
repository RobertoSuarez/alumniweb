<template>
	<v-sheet elevation="4" class="mb-2">
		<v-list-item three-line link :to="{name: 'empleo', params: {idempleo: oferta.id}}">
			<v-list-item-avatar tile size="60">
				<v-img src="/empresa.jfif"></v-img>
			</v-list-item-avatar>
			<v-list-item-content>
				<v-list-item-title class="text--primary font-weight-bold" v-text="oferta.titulo"></v-list-item-title>
				<v-list-item-subtitle class="text--primary">{{oferta.puesto}}</v-list-item-subtitle>
				<v-list-item-subtitle>{{oferta.ciudad}}</v-list-item-subtitle>
				<v-list-item-subtitle>Publicado: {{fechaRelativa}}</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>

	</v-sheet>

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
