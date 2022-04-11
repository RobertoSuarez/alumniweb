<template>
	<!-- buscador -->
	<v-form @submit.prevent="buscar" class="contenedor">
		<v-row align="center">
			<v-col cols="8" sm="10">
				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-text-field
							v-on="on"
							v-bind="attrs"
							v-model="texto"
							dense
							class="mx-1"
							label="Buscar Trabajo"
							prepend-inner-icon="fas fa-search"
							hide-details
							outlined
						>
						</v-text-field>

					</template>
					<!-- Menu que se abre al hacer focus en el buscador -->
					<v-card>
						<v-card-subtitle>Busquedas recientes</v-card-subtitle>
						<!-- Busquedas recientes -->
						<v-list dense>
							<v-list-item
								v-for="(reciente, index) in recientes"
								:key="index"
								link
								@click="texto = reciente"
							>
								<v-list-item-title >{{ reciente }}</v-list-item-title>
							</v-list-item>
						</v-list>

					</v-card>

				</v-menu>
			</v-col>

			<v-col  cols="4" sm="2" class="d-flex justify-center">
				<v-btn type="submit" :loading="cargando" block color="secondary">Buscar</v-btn>
			</v-col>
		</v-row>
	</v-form>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'BuscadorBarra',
	props: ['value', 'cargando'],
	data() {
		return {
			texto: '',
			recientes: ['Programador', 'Golang', 'JavaScript']
		}
	},
	methods: {
		buscar() {
			//this.empleosBuscar()
			this.$emit('buscar')

			//this.$store.dispatch('a/incrementarContador')
		}
	},
	computed: {
		...mapState({
			a: state => state.a,
			empleos: state => state.empleos
		}),
	}

}
</script>

<style scoped>
	.contenedor {
		width: 100%;
	}
</style>
