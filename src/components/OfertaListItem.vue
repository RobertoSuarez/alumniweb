<template>
	<v-hover v-slot="{ hover }">
		<v-card :elevation="hover ? 10 : 2" class="my-3 transition-swing">
			<v-list-item three-line>

				<v-list-item-avatar
						tile
						size="80"
						color="grey"
				>
					<v-img src="/empresa.jfif"></v-img>
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title class="text-h6 mb-1">
						<router-link class="text-decoration-none" :to="{name: 'oferta', params: { idoferta: '1' }}">{{oferta.titulo}}</router-link>
					</v-list-item-title>
					<v-list-item-subtitle>{{oferta.usuario.nombres}}</v-list-item-subtitle>
					<v-list-item-subtitle>{{oferta.ciudad}} ({{oferta.tipoEmpleo}} - {{oferta.jornada}})</v-list-item-subtitle>

				</v-list-item-content>

			</v-list-item>
		</v-card>
	</v-hover>
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
