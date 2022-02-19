<template>
	<v-footer class="footer-contenedor d-flex flex-column" >


			<div class="d-flex flex-row my-5">
					<v-btn href="https://www.facebook.com" target="_blank" class="mx-5" color="white" fab small>
						<v-icon size="25" color="#3b5998">fab fa-facebook-square</v-icon>
					</v-btn>

					<v-btn href="https://ec.linkedin.com/" target="_blank" class="mx-5" color="white" fab small>
							<v-icon size="25" color="#0e76a8">fab fa-linkedin</v-icon>
					</v-btn>

					<v-btn href="https://www.tiktok.com/es/" target="_blank" class="mx-5" color="white" fab small>
							<v-icon size="25" color="#000">fas fa-globe</v-icon>
					</v-btn>
			</div>

			<v-divider dark style="width: 100%"></v-divider>

			<span class="text-center grey--text text--lighten-2 my-5">
				© 2022 Universidad Técnica Estatal de Quevedo derechos reservados
			</span>


		</v-footer>
</template>

<script>
export default {
	name: 'TheFooter'
}
</script>

<style scoped>
	.footer-contenedor {
		padding-top: 5em;
		background: #1B1B1B !important;
	}
</style>
