<template>
	<v-container>
		<v-row>
			<v-col cols="12" sm="12" md="8">
				<v-card class="mb-5 pb-5" style="position: relative;">
					<v-img src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg" height="13em" class="mb-13">

					</v-img>


					<v-avatar size="150" class="p-avatar avatar">
						<v-img
							alt="usuario"
							:src="getURLAvatar"
						>
						</v-img>
					</v-avatar>



					<v-card-text class="black--text pl-10">
						<p class="my-0 text-h4">{{ usuario.nombres }} {{ user.apellidos}}</p>
						<p class="my-0 ">{{ usuario.roleCuenta}}</p>
						<p class="">{{ usuario.email }} - {{ usuario.whatsapp}}</p>

						<p class="text-h6 black--text">Sobre mí</p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, quae rerum nisi sed laboriosam necessitatibus possimus, totam dolor nihil veritatis ad ut deserunt! Non labore, libero delectus inventore accusantium nisi?
					</v-card-text>

					<v-card-actions class="pl-10">
						<!-- <v-btn color="secondary">Tengo interes en ...</v-btn> -->
					</v-card-actions>

				</v-card>

				<v-card class="pa-5">
					<v-card-title>
						Educación
						<v-spacer></v-spacer>
						<v-btn color="secondary">Añadir más</v-btn>
					</v-card-title>

					<v-card-text v-for="(edu, index) in educacion" :key="index">
							<p class="text-h6 black--text">{{edu.instituacionEducativa}}</p>
							<p class="text-subtitle-1">{{edu.descripcion}}</p>
							<v-divider></v-divider>
					</v-card-text>
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

import { mapState } from 'vuex'

export default {
	name: 'BaseFeed',
	components: {  },
	props: ['iduser'],
	async mounted() {
		console.log(this)
		console.log(this.axios.defaults.baseURL)
		try {
			const response = await this.axios.get('/users/'+ this.iduser)
			console.log(response.data)
			this.usuario = response.data
		} catch(e) {
			console.log('Error en la api' + e)
		}

		try {
			const response = await this.axios.get('/educacion/'+ this.iduser)
			console.log(response.data)
			this.educacion = response.data
		} catch(e) {
			console.log('Error en la api' + e)
		}
	},
	data() {
		return {
			usuario: {},
			educacion: [],
		}
	},
	computed: {
		...mapState(['token', 'user']),
		getURLAvatar() {
			return this.axios.defaults.baseURL+'/users/avataraws/'+ this.usuario.urlAvatar
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
	left: 2.5em;
}
</style>
