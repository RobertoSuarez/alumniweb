<template>
	<div>
			<EmpleoListItem
				v-for="(oferta, index) in ofertas"
				:key="index"
				:oferta="oferta"
				:guardado="verificarGuardado(oferta.id)"
				@guardar="guardar(oferta)"
				@eliminar="eliminar(oferta)"
			>
			</EmpleoListItem>

			<v-snackbar
				v-model="snack"
				left
				light
				class="ml-5 mb-10"
			>
				<div class="d-flex align-baseline">
					<v-icon color="primary" size="20" class="mr-2">fas fa-check</v-icon>
					<span class="text-subtitle-2">{{ msg }}</span>
				</div>
			</v-snackbar>
	</div>
</template>

<script>
import EmpleoListItem from './EmpleoListItem.vue'
import axios from '../plugins/axios'
import { mapActions } from 'vuex'


export default {
	name: 'EmpleoList',
	components: { EmpleoListItem },
	props: {
		ofertas: {
			type: Array,
			required: true,
		}
	},
	data() {
		return {
			empleosGuardados: [],
			snack: false,
			msg: ''
		}
	},
	methods: {
		...mapActions('empleos', ['guardarEmpleoUsuario', 'eliminarEmpleoUsuario', 'verificarGuardadosUsuario']),
		// revisa si los empleos que se muestran ya estan guardado por el usuario
		async Guardados(ids) {
			try {
				let response = await axios.post('/empleos/guardados-id', ids)
				if (response.status === 200) {
					console.log('guardados: ', response.data)
					this.empleosGuardados = response.data
				}
			} catch (err) {
				console.log(err)
			}
		},
		verificarGuardado(id) {
			return this.empleosGuardados.some(e => e === id)
		},
		async guardar(empleo) {
			this.msg = 'Has guardado este empleo'
			this.snack = true
			// guarda el empleo en la api
			await this.guardarEmpleoUsuario(empleo.id)
			// verifica los empleos guardados en la api
			this.empleosGuardados = await this.verificarGuardadosUsuario(this.ofertas.map(o => o.id))
		},
		async eliminar(empleo) {
			this.msg = 'Este empleo ya no esta guardado'
			this.snack = true
			await this.eliminarEmpleoUsuario(empleo.id)
			this.empleosGuardados = await this.verificarGuardadosUsuario(this.ofertas.map(o => o.id))
		}
	},
	watch: {
		ofertas: {
			async handler(newOfertas) {
				let ids = newOfertas.map(o => o.id)
				//this.Guardados(ids)
				this.empleosGuardados = await this.verificarGuardadosUsuario(ids)
			},
			immediate: true,
		}
	}

}
</script>

<style>

</style>
