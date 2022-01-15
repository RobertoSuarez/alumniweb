<template>
  <v-app>
		<v-app-bar
      app
      elevation="4"
    >
			<v-toolbar-title>
				<div class="d-flex align-center">
					<router-link to="/">
						<v-img
							alt="UTEQ Logo"
							class="shrink mx-3"
							contain
							src="@/assets/uteqlogo.png"
							width="40"
						/>
					</router-link>
						<span class="text-h5 d-none d-md-flex">Universidad Técnica Estatal de Quevedo</span>
				</div>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn icon>
					<v-icon>mdi-magnify</v-icon>
			</v-btn>
			<AlumniAuthButtons v-if="!estaAutenticado"></AlumniAuthButtons>



    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
		<Footer></Footer>
  </v-app>
</template>

<script>
import AlumniAuthButtons from '../components/AuthButtons.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Main',
	components: { AlumniAuthButtons, Footer },
	data() {
		return {
			estaAutenticado: false
		}
	}
}
</script>

<style>

</style>
