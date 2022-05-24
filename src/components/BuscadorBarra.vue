<template>
	<!-- buscador -->
	<v-form @submit.prevent="buscar" class="contenedor">
		<v-row align="end">
			<v-col cols="6">
				<v-menu offset-y v-model="mostrar" :close-on-content-click="false">
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
							@keyup="handleCambio"
						>
						</v-text-field>

					</template>
					<!-- Menu que se abre al hacer focus en el buscador -->
					<v-card>
						<v-card-subtitle class="pb-1">Busquedas recientes</v-card-subtitle>
						<!-- Busquedas recientes -->
						<v-list dense class="py-0">
							<v-list-item
								v-for="(palabra, index) in palabras"
								:key="index"
								link
								@click="texto = palabra"
							>
								<v-list-item-title >{{ palabra }}</v-list-item-title>
							</v-list-item>
						</v-list>

					</v-card>

				</v-menu>
			</v-col>

			<!-- selecion de ciudad -->
			<v-col cols="4">
				<v-select 
					v-model="provincia"
					label="Provincia"
					outlined 
					hide-details
					dense 
					:items="provincias"
					item-text="Nombre"
					return-object
				>
				</v-select>
			</v-col>

			<v-col cols="2" class="d-flex justify-center">
				<v-btn 
					type="submit" 
					:loading="cargando" 
					block 
					color="secondaryD"
					class="textP--text"
					elevation="1"
				>
					Buscar
				</v-btn>
			</v-col>
		</v-row>
	</v-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'BuscadorBarra',
	props: ['value'],
	data() {
		return {
			texto: '',
			ciudad: '',
			provincia: {
				ID: 0,
				Nombre: 'Todas las provincias',
				ciudades: null
			},
			provincias: [],
			palabras: ['Programador', 'Golang', 'JavaScript'],
			cargando: false,
			mostrar: false,
		}
	},
	mounted() {
		this.buscarEmpleos({
			titulo: this.texto,
			ciudad: this.ciudad,
			provincia_id: 1,
		})
		
		const pro = async () => {
			this.provincias = await this.getProvincias()
			this.provincias.unshift({ID: 0, Nombre: 'Todas las provincias', ciudades: null})
			this.provincia = this.provincias[0]
			//this.provincias = data //data.map(p => p.Nombre)
			//console.log(this.provincias)
		}
		
		pro()
		
	},
	methods: {
		...mapActions('empleos', ['buscarEmpleos', 'autocompletar', 'getProvincias']),
		async buscar() {
			this.cargando = true
			//console.log('Buscar empleo en la api rest')	
			await this.buscarEmpleos({
				titulo: this.texto,
				ciudad: this.ciudad,
				provincia_id: this.provincia.ID,
			})
			this.cargando = false

			
		},
		async handleCambio(e) {
			const { value } = e.target
			
			// si no hay texto, que no muestre nada
			if (value.length < 1) {
				//console.log('No mostrar nada')
				this.mostrar = false
				return
			}

			this.mostrar = true
			this.palabras = await this.autocompletar(value)
		},
		handleSeleccion(palabra) {
			this.texto = palabra
		}
	},
	computed: {

	}

}
</script>

<style scoped>
	.contenedor {
		width: 100%;
	}
</style>
