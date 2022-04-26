<template>
	<div>

		<v-sheet color="primary" dark class="py-15">
			<v-container>
				<v-row justify="space-between">
					<v-col col="6" md="5">
						<span class="text-h3 my-5 titulo">Sistema de bolsa de empleo UTEQ</span>
						<p class="mt-5 text-justify texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa sapiente neque atque eius reprehenderit maxime non quis officia itaque, quasi ea, distinctio id illo sint iste asperiores autem tempore amet?</p>
						
						<v-btn 
							block 
							color="info" 
							x-large 
							@click="$emit('registrar')"
						>
								Registrarse
						</v-btn>
					</v-col>

					<v-col col="6" md="7" class="d-flex justify-center align-center">
						<v-img
							src="../assets/uteqlogo.png"
							max-width="300px"
							max-height="350px"
						></v-img>
					</v-col>
				</v-row>
			</v-container>
		</v-sheet>


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
.titulo {
	line-height: 1.2em;
}

.texto {
	line-height: 1.8em;
}

.section-main {
	margin-top: 5em;
	margin-bottom: 8em;
}

.banner {
	height: 500px;
}

.publicar {
	margin: 5em 0em;
	padding: 3em 0em;
}
</style>
