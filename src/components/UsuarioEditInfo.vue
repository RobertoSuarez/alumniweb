<template>
	<v-menu
		offset-y
		:close-on-content-click="false"
		v-model="menu"
	>
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				v-on="on"
				v-bind="attrs"
				text
				color="primary"
			>
				Editar información
			</v-btn>
		</template>
		<v-card width="600">
			<v-card-title>Editando información del usuario</v-card-title>
			<v-card-text>
				<v-row>
					<v-col cols="6">
						<v-text-field label="Nombres" v-model="usuario.nombres"></v-text-field>
					</v-col>
					<v-col cols="6">
						<v-text-field label="Apellidos" v-model="usuario.apellidos"></v-text-field>
					</v-col>
				</v-row>
				<v-text-field label="Teléfono" v-model="usuario.phone"></v-text-field>

				<v-row>
					<v-col cols="6">
						<v-select
							:items="['Cédula', 'Pasaporte']"
							label="Tipo de Identificación"
							v-model="usuario.identificacionTipo">
						</v-select>
					</v-col>
					<v-col cols="6">
						<v-text-field label="Numero de Identificación" v-model="usuario.numeroIdentificacion"></v-text-field>
					</v-col>
				</v-row>

				<FechaSelector
					label="Fecha de nacimiento"
					:max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
					:date="usuario.nacimiento"
					@fecha="usuario.nacimiento = $event"
				/>

				<v-select
					:items="['Masculino', 'Femenino', 'Otro']"
					label="Genero"
					v-model="usuario.genero">
				</v-select>
				<v-row>
					<v-col cols="6">
						<!-- <v-text-field label="Fecha Graduación" v-model="usuario.fechaGraduacion"></v-text-field> -->
						<FechaSelector
							label="Fecha Graduación"
							:date="usuario.fechaGraduacion"
							@fecha="usuario.fechaGraduacion = $event"/>
					</v-col>
					<v-col cols="6">
						<v-text-field label="Nivel Academico" v-model="usuario.nivelAcademico"></v-text-field>
					</v-col>
				</v-row>
				<v-checkbox label="¿Tiene alguna discapacidad?" v-model="usuario.esDiscapacitado"></v-checkbox>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn text color="primary" @click="actualizar" :loading="cargando">Actualizar</v-btn>
				<v-btn text @click="cerrar">Cancelar</v-btn>
			</v-card-actions>
		</v-card>
	</v-menu>
</template>

<script>
import { mapActions } from 'vuex'
import FechaSelector from '../components/FechaSelector.vue'
export default {
	name: 'UsuarioEditInfo',
	components: { FechaSelector },
	props: {
		usuario: Object
	},
	data() {
		return {
			menu: false,
			cargando: false,
			date: null,
			menudate: false,
			activePicker: null
		}
	},
	mounted() {
		//this.convertirFecha(this.usuario.nacimiento)
	},
	methods: {
		...mapActions('usuarios', ['actualizarDatos']),
		cerrar() {
			this.menu = false
		},
		async actualizar() {
			console.log('Actualizando los datos')
			let datos = {
				identificacionTipo: this.usuario.identificacionTipo,
				numeroIdentificacion: this.usuario.numeroIdentificacion,
				nombres: this.usuario.nombres,
				apellidos: this.usuario.apellidos,
				nacimiento: this.usuario.nacimiento,
				phone: this.usuario.phone,
				genero: this.usuario.genero,
				fechaGraduacion: this.usuario.fechaGraduacion,
				nivelAcademico: this.usuario.nivelAcademico,
				esDiscapacitado: this.usuario.esDiscapacitado,
			}
			this.cargando = true
			let ok = await this.actualizarDatos({ id: this.usuario.id, datos: datos})
			this.cargando = false
			console.log(ok)
			this.menu = false
		},
		save(date) {
			console.log(date)
			this.$refs.menu.save(date)
		}
	},
	watch: {
		menudate(val) {
			val && setTimeout(() => (this.activePicker = 'YEAR'))
		}
	}

}
</script>

<style>

</style>
