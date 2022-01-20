<template>
	<v-card elevation="3" class="my-5">
		<v-list-item three-line>
			<v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>

			<v-list-item-content>
				<div class="text-overline mb-4">
					Tipo de cuenta: {{ oferta.Usuario.tipoUsuario.tipo }}
				</div>
				<v-list-item-title class="text-h5 mb-1">
					{{ oferta.titulo }}
				</v-list-item-title>
				<v-list-item-subtitle>
					{{ oferta.descripcion }}
				</v-list-item-subtitle>
			</v-list-item-content>

		</v-list-item>

		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn outlined color="primary">Ver</v-btn>
		</v-card-actions>

	</v-card>
</template>

<script>
export default {
	name: 'OfertaListItem',
	props: {
		oferta: {
			type: Object,
			required: true,
		}
	}

}
</script>

<style>

</style>
