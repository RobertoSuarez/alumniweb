<template>
	<div>
			<OfertaListItem v-for="(oferta, index) in ofertas" :key="index" :oferta="oferta"></OfertaListItem>


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
