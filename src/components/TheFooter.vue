<template>
	<v-footer dark class="pa-15">
		<v-container>

			<v-row>
				<!-- Logo de la universidad -->
				<v-col cols="12" md="4" >
						<v-img src="../assets/uteqlogo.png" width="9em" class="mx-auto mx-md-0"></v-img>
						<p class="text-body-1 font-weight-light text-center text-md-left mt-3">© 2022 Universidad Técnica Estatal de Quevedo derechos reservados</p>
				</v-col>

				<v-col cols="12" md="6" offset-md="2" class="white--text">
					<v-row>
						<v-col cols="12" md="4">
							<p class="text-h6">Servicios</p>

							<p v-for="(t, index) in servicios" :key="index" class="text-body-1 font-weight-light ma-0 mt-3">
								<a>{{t}}</a>
							</p>

						</v-col>

						<v-col cols="12" md="4">
							<p class="text-h6">Enlaces de interés</p>
							<p v-for="(enlace, index) in enlaces" :key="index" class="text-body-1 font-weight-light ma-0 mt-3">
								<a>{{enlace}}</a>
							</p>
						</v-col>

						<v-col cols="12" md="4">
							<p class="text-h6">Contactos</p>
							<div class="text-body-1 font-weight-light mt-3">prueba@uteq.edu.ec</div>
							<div class="text-body-1 font-weight-light mt-3">+590 0123456789</div>
							<div class="mt-3">
								<v-btn icon large><v-icon>fab fa-facebook</v-icon></v-btn>
								<v-btn icon large><v-icon>fab fa-linkedin</v-icon></v-btn>
							</div>
						</v-col>
					</v-row>
				</v-col>
			</v-row>

		</v-container>



	</v-footer>
</template>

<script>
export default {
	name: 'TheFooter',
	data() {
		return {
			servicios: ['Trabajos', 'Noticias', 'Eventos', 'Empresas'],
			enlaces: ['UTEQ', 'Biblioteca UTEQ', 'SGA'],
		}
	}
}
</script>

<style scoped>
	.footer-contenedor {
		background: #1B1B1B !important;
	}
	a {
		color: white !important;
	}
</style>
