<template>
	<v-list elevation="1">
		<v-list-item link v-for="(link, index) in links" :key="index" :to="link.to">

			<v-tooltip bottom>
				<template v-slot:activator="{ on, attrs }">

					<v-list-item-avatar v-on="on" v-bind="attrs">
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-item-avatar>


					<v-list-item-content v-on="on" v-bind="attrs">
						<v-list-item-title>{{ link.titulo }}</v-list-item-title>
					</v-list-item-content>
				</template>

				<span>{{ link.titulo }}</span>
			</v-tooltip>


		</v-list-item>
	</v-list>
</template>

<script>
export default {
	name: 'MenuEmpleo',
	data() {
		return {
			links: [
				{
					titulo: 'Mis empleos',
					icon: 'fas fa-bookmark',
					to: { name: 'mis-empleos' }
				},
				// {
				// 	titulo: 'Mis aplicaciones',
				// 	icon: 'fas fa-thumbtack',
				// 	to: { name: 'noticias' }
				// },
				{
					titulo: 'Publicar un empleo',
					icon: 'fas fa-bullhorn',
					to: { name: 'publicar empleo' }
				},
				{
					titulo: 'Gestionar anuncios de empleos',
					icon: 'fas fa-briefcase',
					to: { name: 'noticias' }
				}
			]
		}
	}

}
</script>

<style>

</style>
