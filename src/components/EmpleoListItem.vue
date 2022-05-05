<template>
	<v-card
		elevation="1"
		class="mb-2"
		:to="{name: 'empleo', params: {idempleo: oferta.id}}"
		active-class="card_empleo"
		link
	>

		<v-list-item three-line link>
			<v-list-item-avatar tile size="60">
				<v-img src="/empresa.jfif"></v-img>
			</v-list-item-avatar>
			<v-list-item-content>
				<v-list-item-title 
					class="text--black text--bold card_titulo text-uppercase font-weight-bold">
					{{oferta.titulo}}
				</v-list-item-title>

				<v-list-item-subtitle 
					class="text--secondary"
				>
					{{oferta.puesto}}
				</v-list-item-subtitle>

				<v-list-item-subtitle>
					{{oferta.ciudad.Nombre ? oferta.ciudad.Nombre: 'No se especifico'}}
				</v-list-item-subtitle>
				<v-list-item-subtitle>
					<span class="text--primary">Area: </span> {{oferta.area.titulo}} 
					<span class="text--primary">Subarea: </span> {{oferta.subarea.titulo}}
				</v-list-item-subtitle>
				<!-- <v-list-item-subtitle>{{oferta.subarea.titulo}}</v-list-item-subtitle> -->
				<v-list-item-subtitle>
					Publicado: {{fechaRelativa }}
				</v-list-item-subtitle>
			</v-list-item-content>
			<v-list-item-action>
				<v-btn v-if="guardado" icon color="secondaryD" @click.prevent="$emit('eliminar')">
					<v-icon>fas fa-bookmark</v-icon>
				</v-btn>
				<v-btn v-else icon :color="guardado ? 'primary' : ''" @click.prevent="$emit('guardar')">
					<v-icon>far fa-bookmark</v-icon>
				</v-btn>
			</v-list-item-action>
		</v-list-item>

	</v-card>

</template>

<script>

export default {
	name: 'EmpleoListItem',
	mounted() {

	},
	props: {
		oferta: {
			type: Object,
			required: true,
		},
		guardado: {
			type: Boolean
		}
	},
	computed: {
		fechaRelativa() {
			if (!this.oferta.CreatedAt) {
				return ""
			}

			const rtf = new Intl.RelativeTimeFormat("es-ES", {numeric: "auto"});
			const postDate = Date.parse(this.oferta.CreatedAt)
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

.card_titulo:hover {
	color: var(--v-primary-base) !important;
	/* text-decoration: underline 1px; */
}

</style>
