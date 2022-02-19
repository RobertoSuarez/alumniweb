<template>
	<div>

		<v-container class="section-main">
			<v-row justify="space-between">
				<v-col col="6" md="5">
					<span class="text-h2 my-5 titulo">¡Te damos la bienvenida a Alumni UTEQ!</span>
					<p class="mt-5 text-justify texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa sapiente neque atque eius reprehenderit maxime non quis officia itaque, quasi ea, distinctio id illo sint iste asperiores autem tempore amet?</p>
					<v-btn block color="primary" x-large @click="$emit('registrar')">Registrarse</v-btn>
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




		<div class="green lighten-4 publicar">
			<v-container>
				<v-row class="">
					<v-col cols="6" md="6">
						<p class="blue--text text-h3 font-weight-light">Publica tu anuncio de empleo para que lo vean millones de personas</p>
					</v-col>
					<v-col cols="6" md="6" class="d-flex justify-center align-center">
						<v-btn class="blue darken-1" dark x-large>Publicar Oferta de empleo</v-btn>
					</v-col>
				</v-row>

			</v-container>
		</div>


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
