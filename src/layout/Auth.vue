<template>
	<v-app>
		<v-app-bar
			elevation="4"
			app
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

			<AlumniAuthButtons></AlumniAuthButtons>
		</v-app-bar>

		<v-main>
			<router-view></router-view>
		</v-main>

		<v-footer></v-footer>
	</v-app>
</template>

<script>
import AlumniAuthButtons from '../components/AuthButtons.vue'
export default {
	components: { AlumniAuthButtons },
}
</script>

<style>

</style>
