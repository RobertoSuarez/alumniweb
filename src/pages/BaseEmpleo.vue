<template>
	<v-container>
		<v-row class="mt-2">

			<v-col cols="12" md="8">
				<v-card elevation="4">
					<v-card-title class="d-flex align-start">
						<v-avatar color="grey" size="100" tile>
							<v-img src="/empresa.jfif" class="card_img"></v-img>
						</v-avatar>
						<v-spacer></v-spacer>
						<v-btn class="my-0" outlined color="blue"><v-icon left>fas fa-share-alt</v-icon> Compartir</v-btn>
					</v-card-title>

					<v-card-text>
						<div class="text--primary font-weight-bold text-h4">Software developer</div>
						<div class="text--primary font-weight-bold text-subtitle-1">Area · Subarea</div>
						<div class="text--secondary font-weight-regular text-subtitle-1">Full time</div>
						<div class="text--secondary font-weight-regular text-subtitle-1">Publicado: hace 1 hora</div>

					</v-card-text>
					<v-card-actions>
						<v-btn color="blue" text>Mas trabajos de esta empresa</v-btn>
					</v-card-actions>
					<v-card-actions>
						<v-btn class="ml-2" color="primary">
							<v-icon left>fas fa-check</v-icon>
							Aplicar
						</v-btn>
						<v-btn outlined color="primary">
							<v-icon left>fas fa-save</v-icon>
							Guardar
						</v-btn>
					</v-card-actions>

					<v-divider></v-divider>

					<v-card-text>
						<div class="text--primary font-weight-bold text-subtitle-1">Descripción</div>
						<div class="text--primary font-weight-regular text-body-1">Permanent Full-Time role based in Waikato, Hamilton, New Zealand
Great opportunity to join a Global Animal Health organisation as an integral member of the automation team
Be part of a friendly, collaborative team, where you will be fully supported

Your role is responsible for providing the Companies Animal Health automation team with specialised and highly skilled capabilities for system/application design, development, and business system integration.
</div>
					</v-card-text>


				</v-card>
			</v-col>

			<v-col cols="12" md="4">
				<div class="mb-2">
					<v-chip
						class="mr-2"
						color="primary"
					>
						Software
					</v-chip>
					<v-chip
						class="mr-2"
						color="primary"
						outlined
					>
						Backend
					</v-chip>
					<v-chip
						class="mr-2"
						color="primary"
						outlined
					>
						Javascript
					</v-chip>
				</div>
				<v-list three-line elevation="4">
					<template  v-for="(sugerencia, index) in sugerencias">
						<v-list-item :key="index" link>
							<v-list-item-avatar tile size="60">
								<v-img src="/empresa.jfif"></v-img>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="text--primary font-weight-bold" v-text="sugerencia"></v-list-item-title>
								<v-list-item-subtitle class="text--primary">Area · Subarea</v-list-item-subtitle>
								<v-list-item-subtitle>Full time</v-list-item-subtitle>
								<v-list-item-subtitle>Publicado: hace 1 hora</v-list-item-subtitle>

							</v-list-item-content>

						</v-list-item>
						<v-divider v-if="index < sugerencias.length -1" :key="index"></v-divider>
					</template>
				</v-list>


			</v-col>
		</v-row>

	</v-container>
</template>

<script>
export default {
	name: 'Empleo',
	props: {
		idempleo: {
			type: String,
			required: true,
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
				]
		}
	}
}
</script>

<style scoped>

</style>
