<template>
	<div>
		<div v-if="ofertas != []">
			<OfertaListItem v-for="(oferta, index) in ofertas" :key="index" :oferta="oferta"></OfertaListItem>
		</div>
		<div v-else>
			<p class="text-h4">No se encontraron ofertas laborales</p>
		</div>

	</div>
</template>

<script>
import OfertaListItem from './OfertaListItem.vue'


export default {
	name: 'OfertaList',
	components: { OfertaListItem },
	props: {
		ofertas: {
			type: Array,
			required: true,
		}
	},

}
</script>

<style>

</style>
