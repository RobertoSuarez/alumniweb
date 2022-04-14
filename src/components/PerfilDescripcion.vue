<template>
	<v-card class="mb-5">
		<v-card-title>
			Resumen Persona
			<v-spacer></v-spacer>
			<v-btn text plain color="primary" @click="editando = !editando">Editar</v-btn>
		</v-card-title>

		<v-card-text v-if="!editando">
			<Editor
				:outline="false"
				v-model="perfil.descripcion"
				mode="viewer"/>

		</v-card-text>

		<div v-else>
			<!-- editar descripción -->
			<v-tabs v-model="tab">
				<v-tab>Edición</v-tab>
				<v-tab>Vista previa</v-tab>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item>
					<v-card-text>
						<Editor
							:emoji="false"
							:image="false"
							:outline="false"
							v-model="descripcion"
							mode="editor"/>
					</v-card-text>
				</v-tab-item>
				<v-tab-item>
					<v-card-text>
						<Editor
							:outline="false"
							v-model="descripcion"
							mode="viewer"/>
					</v-card-text>
				</v-tab-item>
			</v-tabs-items>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn text color="primary" :loading="cargando" @click="guardar">Actualizar</v-btn>
				<v-btn text @click="editando = false">Cancelar</v-btn>
			</v-card-actions>
		</div>
	</v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { Editor } from 'vuetify-markdown-editor'

export default {
	name: 'PerfilDescripcion',
	props: ['perfil'],
	components: { Editor },
	data() {
		return {
			descripcion: '',
			editando: false,
			tab: null,
			cargando: false,
		}
	},
	mounted() {
		this.descripcion = this.perfil.descripcion
	},
	methods: {
		...mapActions('usuarios', ['actualizarDescripcion']),
		async guardar() {
			// en esta parte se llama a la api para guardar la descripción
			let payload = {
				id: this.perfil.id,
				dato: {
					descripcion: this.descripcion
				}
			}
			this.cargando = true
			const ok = await this.actualizarDescripcion(payload)
			console.log('Datos actualizados? ', ok)
			this.$emit('guardar', this.descripcion)
			this.editando = false
			this.cargando = false
		}
	}

}
</script>

<style>

</style>
