<template>
	<v-container>
		<v-row>
			<v-col cols="12" sm="12" md="8">

				<!-- Datos principales del usuario -->
				<v-card v-if="perfil" class="mb-5 pb-5" style="position: relative;">
					<v-img src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg" height="13em" class="mb-13">
					</v-img>

					<v-avatar size="150" class="p-avatar avatar">
						<v-img
							alt="usuario"
							:src="getURLAvatar"
						>
						</v-img>
					</v-avatar>

					<v-card-text class="black--text">
						<p class="my-0 text-h4">{{ fullName }}</p>
						<div class="">Correo: {{ perfil.email }}</div>
						<div class="">Telofono: {{ perfil.phone }}</div>
						<div class="">Genero: {{ perfil.genero }}</div>
						<div>{{ perfil.identificacionTipo }}: {{ perfil.numeroIdentificacion}}</div>
						<div>Nivel Academico: {{ perfil.nivelAcademico}}</div>
						<div>Nacimiento: {{ formatoFecha(perfil.nacimiento) }}</div>
						<div>Fecha de graduación: {{ formatoFecha(perfil.fechaGraduacion) }}</div>
					</v-card-text>

					<v-card-actions>
						<UsuarioEditInfo v-if="perfil" :usuario="perfil"/>
					</v-card-actions>
				</v-card>
				<v-skeleton-loader v-else type="card">

				</v-skeleton-loader>

				<!-- panel de descripción -->
				<PerfilDescripcion v-if="perfil" :perfil="perfil" @guardar="perfil.descripcion = $event"/>

				<v-card class="mb-5">
					<v-card-title>
						Historial de trabajos
						<v-spacer></v-spacer>
						<v-btn text plain color="primary">Añadir trabajo</v-btn>
					</v-card-title>


					<v-list >
						<v-list-item
							two-line
							v-for="(trabajo, index) in perfil.trabajos"
							:key="index">
								<v-list-item-content>
									<v-list-item-title>Cargo: {{ trabajo.cargo }}</v-list-item-title>
									<v-list-item-subtitle>Area: {{ trabajo.area }}</v-list-item-subtitle>
									<v-list-item-content>
										<div class="text-body-2">Descripción del trabajo</div>
									</v-list-item-content>
								</v-list-item-content>
								<v-list-item-action>
									<v-btn text plain color="primary">Editar</v-btn>
									<v-btn text plain>Eliminar</v-btn>
								</v-list-item-action>
						</v-list-item>
					</v-list>

				</v-card>

				<v-card class="mb-5">
					<v-card-title>
						Educación
						<v-spacer></v-spacer>
						<v-btn color="secondary">Añadir más</v-btn>
					</v-card-title>
				</v-card>


				<v-card class="mb-5">
					<v-card-title>Licencias y certificaciones</v-card-title>
				</v-card>


				<v-card class="mb-5">
					<v-card-title>Habilidades</v-card-title>
				</v-card>


				<v-card class="mb-5">
					<v-card-title>Idiomas</v-card-title>
				</v-card>

				<v-card class="mb-5">
					<v-card-title>Hoja de vida en formato PDF</v-card-title>
				</v-card>

				<v-card class="mb-5">
					<v-card-title>Sobre su proximo trabajo</v-card-title>
				</v-card>

			</v-col>

			<v-col cols="12" sm="12" md="4">
				<v-card>
					<v-card-title>Sugeriancias</v-card-title>
					<v-card-subtitle>Esta es la sección de sugerencia</v-card-subtitle>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import UsuarioEditInfo from '../components/UsuarioEditInfo.vue'
import PerfilDescripcion from '../components/PerfilDescripcion.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
//import format from 'date-fns/format'
//import esLocale from 'date-fns/locale/es'

export default {
	name: 'BaseFeed',
	components: { UsuarioEditInfo, PerfilDescripcion },
	props: ['iduser'],
	data() {
		return {
			perfil: null,
			id: null,
			editdescripcion: false,
		}
	},
	methods: {
		...mapActions('usuarios', ['getPerfil']),
		formatoFecha(date) {
			return date.substring(0, 10)
		}
	},
	computed: {
		...mapState(['token', 'user']),
		...mapGetters(['getURLAvatar']),
		fullName() {
			return `${this.perfil.nombres} ${this.perfil.apellidos}`
		}
	},
	watch: {
		'$route.params': {
			async handler({ iduser }) {
				const perfil = await this.getPerfil(iduser)
				//console.log(perfil)
				this.perfil = perfil
				this.id = iduser
			},
			immediate: true,
		}
	}
}
</script>

<style scoped>

.avatar {
	border: solid 4px white;
}

.p-avatar {
	position: absolute;
	top: 7em;
	left: 1em;
}
</style>
