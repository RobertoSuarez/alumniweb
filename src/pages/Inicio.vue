<template>
	<div>
		<v-img src="../assets/adrien-olichon-nnAGd3PIB08-unsplash.jpg" class="d-flex align-center banner">
			<v-container>
				<v-row align="center">
					<v-col col="5">
						<span class="titulo-1 texto-gray-1 my-5">Sistema de bolsa de empleo UTEQ</span>
						<p class="texto-1 mt-5 texto-gray-1">
							Encuentra y publica empleos de manera facil y gratuita.								
						</p>
						
						<v-btn 
							class="mt-10"
							block 
							color="info" 
							x-large 
							@click="$router.push({name: 'register'})"
						>
								Registrarse
						</v-btn>
					</v-col>

					<v-col col="6" offset="1" class="d-flex justify-center align-center">
						<v-img src="../assets/Allura Exploring on Laptopbanner.png" height="300px" contain></v-img>
					</v-col>
				</v-row>
			</v-container>
			
		</v-img>

		<!-- en esta parte se coloca el login o register-->
		<router-view></router-view>
		

		<v-container class="mt-5">
			<v-divider></v-divider>
		</v-container>


	
		<v-container class="mt-5">
			<v-row align="center">
				<v-col cols="6">
					<v-img src="../assets/kelly-sikkema-LNlzd-Y7orw-unsplash.jpg" height="300px" class="img-seccion"></v-img>
				</v-col>
				<v-col cols="6">
					<p class="titulo-1 texto-gray-1">
						Publica un empleo de forma sencilla y profesional
					</p>
					<p class="texto-1 texto-gray-1">
						Simplemente llenando cada uno de los campos del formulario podras publicar tu oferta de empleo y esta llegara a miles de personas.
					</p>
				</v-col>
			</v-row>
		</v-container>
	


		<v-sheet class="my-16">
			<v-container>
				<div class="text-h6 mb-3" id="noticias">Noticias</div>
				<v-row>
					<v-col cols="4" v-for="i in 6" :key="i">
						<v-card>
							<v-card-title>Noticia #{{i}}</v-card-title>
							<v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae molestias animi, mollitia natus ad quas amet provident, illum facere iste voluptate numquam eum sed sint non asperiores explicabo magni repellat.</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="info" text>Ver más</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-sheet>

		
		<v-sheet class="my-16">
			<v-container>
				<div class="text-h6 mb-3" id="empleo">Ofertas laborales</div>
				<v-row>
					<v-col cols="4" v-for="i in 6" :key="i">
						<v-card>
							<v-card-title>Empleo #{{i}}</v-card-title>
							<v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae molestias animi, mollitia natus ad quas amet provident, illum facere iste voluptate numquam eum sed sint non asperiores explicabo magni repellat.</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="info" text>Ver más</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-sheet>

		
		<v-sheet class="my-16">
			<v-container>
				<div class="text-h6 mb-3" id="empresa">Empresas</div>
				<v-row>
					<v-col cols="4" v-for="i in 6" :key="i">
						<v-card>
							<v-card-title>Empresa #{{i}}</v-card-title>
							<v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae molestias animi, mollitia natus ad quas amet provident, illum facere iste voluptate numquam eum sed sint non asperiores explicabo magni repellat.</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="info" text>Ver más</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-sheet>

	</div>
</template>

<script>
export default {
	name: 'Inicio',
}
</script>

<style scoped>

.banner {
	height: 70vh;
}

.img-seccion {
    border-radius: 8px;
}

</style>
